import React, { CSSProperties, useState } from "react";
import { ArraySchema, SchemoSettings } from "./types";
import produce from "immer"
import { SchemoElement } from "./SchemoElement";
import { Accordion, Button, Card, Container, ListGroup } from "react-bootstrap";
import { SchemoObject } from "./SchemoObject";
import { capitalCase } from "change-case";
import { toPairs } from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'


export function SchemoArray({ schema, keyName, data, dataChange }: SchemoSettings<Array<{ [key: string]: any }>, ArraySchema>): JSX.Element {
  const [hiddenItems, setHiddenItems] = useState([false]);
  const [arrayData, setArrayData] = useState(data);

  if (schema.type !== 'array') {
    return <div>EMPTY</div>;
  }

  const itemSchema = schema?.items?.anyOf[0];

  const dataItemChange = (index: number) => (itemData: any) => dataChange(produce(arrayData, draftData => {
    draftData[index] = itemData;
  }));

  const itemDataSummary = (index: number) => {
    const itemData = arrayData[index];
    return toPairs(itemData).map(([key, value]) => `${value} / `).join(' ') || 'New Item';
  }

  const onHeaderClicked = (index: number) => () => setHiddenItems(produce(hiddenItems, (draft) => {
    draft[index] = !draft[index]
  }));

  // Need to consider how to combine setArrayData and dataChange.
  const createNewItemData = () => {
    const updatedArrayData = [...arrayData, {}];
    setArrayData(updatedArrayData);
    dataChange(updatedArrayData);
  }

  const removeButtonStyle: CSSProperties = { position: 'absolute', top: 0, right: 0, width: '3em', backgroundColor: '#dad4d4', height: '100%' };

  const removeItem = (index: number) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    const updatedArrayData = produce(arrayData, draftList => {
      draftList.splice(index, 1);
    });
    setArrayData(updatedArrayData);
    dataChange(updatedArrayData);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text><h4>{capitalCase(keyName)}</h4></Card.Text>

          {(arrayData || [{}, {}]).map((itemData, index) => (
            <Card className="mt-2" style={{ position: 'relative' }}>
              <Card.Body style={{ margin: "-1.25em" }} >
                <div style={{ padding: "1.25em 1.25em 0.5em 1.25em", width: "100%", textAlign: "start" }} className="btn align-items-baseline" onClick={onHeaderClicked(index)}>
                  <Card.Title>{itemDataSummary(index)}</Card.Title>
                  {
                    hiddenItems[index] && (
                      <div style={removeButtonStyle} onClick={removeItem(index)}
                        className="bd-danger text-danger d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faTrash} />
                      </div>)
                  }

                </div>
                <div hidden={hiddenItems[index]} style={{ padding: "1.25em", backgroundColor: 'rgb(237 239 239)' }}>
                  <SchemoObject keyName={keyName} schema={itemSchema} data={itemData} dataChange={dataItemChange(index)} uiType="pure"></SchemoObject>
                </div>
              </Card.Body>
            </Card>
          ))}

          <Button className="mt-2" block variant="info" onClick={createNewItemData}><FontAwesomeIcon icon={faPlus} /></Button>
        </Card.Body>
      </Card>
    </>
  );
}
