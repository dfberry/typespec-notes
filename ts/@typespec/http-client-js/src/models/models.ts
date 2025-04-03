export type String = string;
export interface WidgetList {
  "items": Array<Widget>;
}

export interface Widget {
  "id": string;
  "weight": number;
  "color": "red" | "blue";
}
export type Int32 = number;
export type Int64 = bigint;
export type Integer = number;
export type Numeric = number;
export interface AnalyzeResult {
  "id": string;
  "analysis": string;
}