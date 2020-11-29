import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { SchemoObject } from "./SchemoObject";
import { ObjectSchema, Schema, SchemoSettings } from "./types";


export function Schemo({ schema, data }: SchemoSettings<any, ObjectSchema>): JSX.Element {
  const [jsonData, setJsonData] = useState(data);

  const dataChange = (data: any) => setJsonData(data);

  return (
    <Form>
      <SchemoObject schema={schema} keyName={''} data={jsonData} dataChange={dataChange} uiType="pure"></SchemoObject>
    </Form>
  );
}






