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
![image](https://user-images.githubusercontent.com/1180249/100541114-a6c20a00-327c-11eb-8774-ed0341005e70.png)

