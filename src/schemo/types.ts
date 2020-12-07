export interface Schema {
  required?: string[],
  examples?: object,
  default?: any;
  description?: string;
  title: string;
  type: string;
  enum?: Array<any>;
  format?: string;
}

export interface ArraySchema extends Schema {
  items: {
    anyOf: Array<Schema | ObjectSchema | ArraySchema>
  };
}

export interface ObjectSchema extends Schema {
  properties?: { [key: string]: Schema },
}

export interface SchemoSettings<T, K extends Schema> {
  keyName: string;
  schema: K;
  data: T;
  dataChange: (data: T) => void;
  uiType?: string;
}
