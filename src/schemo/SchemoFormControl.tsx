import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { Schema, SchemoSettings } from "./types";

export function SchemoFormControl({ keyName, schema, data, dataChange }: SchemoSettings<string, Schema>): JSX.Element {
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    dataChange(event.currentTarget.value);
  }

  if (schema?.format === 'email') {
    return <Form.Control type="email" placeholder={"Enter " + keyName} value={data} onChange={onChange} />;
  }

  return <Form.Control type="email" placeholder={"Enter " + keyName} value={data} onChange={onChange} />;
}
