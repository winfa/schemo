import React from "react";
import { Form } from 'react-bootstrap';
import { SchemoFormControl } from './SchemoFormControl';
import { SchemoObject } from './SchemoObject';
import { capitalCase } from 'change-case';
import { ArraySchema, ObjectSchema, Schema, SchemoSettings } from "./types";
import { SchemoArray } from "./SchemoArray";


export function SchemoElement({ keyName, schema, data, dataChange }: SchemoSettings<any, Schema | ObjectSchema>): JSX.Element {
  if (schema.type === 'object') {
    return <SchemoObject schema={schema as ObjectSchema} keyName={keyName} data={data} dataChange={dataChange}></SchemoObject>
  }
  if (schema.type === 'array') {
    return <SchemoArray schema={schema as ArraySchema} keyName={keyName} data={data} dataChange={dataChange}></SchemoArray>
  }

  const titleCaseKey = capitalCase(keyName);

  return (
    <Form.Group>
      <Form.Label>{titleCaseKey}</Form.Label>
      <SchemoFormControl keyName={keyName} schema={schema} data={data} dataChange={dataChange}></SchemoFormControl>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  );
}