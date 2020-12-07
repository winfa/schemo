import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { Schema, SchemoSettings } from "./types";

export function SchemoFormControl({ keyName, schema, data, dataChange }: SchemoSettings<string, Schema>): JSX.Element {
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    dataChange(event.currentTarget.value);
  }

  if (schema?.format === 'email') {
    return (
      <Form.Control required type="email" placeholder={"Enter " + keyName} value={data} onChange={onChange} />
    )
  }

  if (schema?.format === 'date') {
    return <Form.Control type="date" placeholder={"Enter " + keyName} value={data} onChange={onChange} />;
  }

  if (!!schema?.enum) {
    return (
      <Form.Control as="select" placeholder={"Select " + keyName} value={data} onChange={onChange}>
        {schema.enum.map(enumValue => <option>{enumValue}</option>)}
      </Form.Control>
    );
  }

  return <Form.Control type="email" placeholder={"Enter " + keyName} value={data} onChange={onChange} />;
}
