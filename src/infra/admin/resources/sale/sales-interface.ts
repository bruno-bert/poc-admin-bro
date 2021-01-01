import { ItemsInterface } from "../item/items-interface";

export type Document = {
  mimeType: string;
  size: number;
  path: String,
  folder: String,
  filename: String
}

export interface SaleInterface {
  id: string;
  name: string;
  numberOfItems: number;
  salesDate:  Date;
  userId?: string;
  document?: Document;
  items? : ItemsInterface[]
}
