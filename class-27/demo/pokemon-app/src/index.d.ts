export type JSONValue = | string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> { }

export type Pokemon = {
  name: string;
  level: number;
  abilities: JSONArray;
}