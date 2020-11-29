import { toPairs } from "lodash";
import React from "react";
import { Card } from "react-bootstrap";
import { SchemoElement } from "./SchemoElement";
import { ObjectSchema, SchemoSettings } from "./types";
import { capitalCase } from "change-case";

export function SchemoObject({ schema, keyName, data, dataChange, uiType }: SchemoSettings<{ [key: string]: any }, ObjectSchema>): JSX.Element {
  if (schema.type !== 'object') {
    return <div>EMPTY</div>;
  }

  const keyDataChange = (keyName: string) => (keyData: any) => {
    dataChange({
      ...data,
      [keyName]: keyData,
    });
  }

  const childElements = toPairs(schema.properties).map(([keyName, keySchema]) => {
    const currentData = data?.[keyName];
    return <SchemoElement key={keyName} keyName={keyName} schema={keySchema} data={currentData} dataChange={keyDataChange(keyName)}></SchemoElement>;
  });

  if (uiType === 'pure') {
    return <>{childElements}</>
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text><h4>{capitalCase(keyName)}</h4></Card.Text>
        {childElements}
      </Card.Body>
    </Card>
  );
}