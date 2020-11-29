import React from "react";
import { Container } from "react-bootstrap";
import { Schemo } from "../schemo/Schemo";
import schemaData from './resource/schema.json';
import jsonData from './resource/data.json';



export function Demo() {
    return <Container><Schemo keyName="" schema={schemaData} data={jsonData} dataChange={(data) => console.log(data)}></Schemo></Container>;
}
