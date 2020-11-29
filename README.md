### Generate React From Based on Schema
For example:
```
{
  "basicInfo": {
    "name": "Zhang San",
    "gender": "male",
    "email": "zhang.san@gmail.com"
  },
  "education": [
    {
      "startTime": "2015-07-01",
      "endTime": "2010-09-01",
      "school": "ChongQing University"
    }
  ]
}
```
You can generate the schema file based on the json example.
```
<Schemo schema={schemaData} data={initJsonData}></Schemo>
```
