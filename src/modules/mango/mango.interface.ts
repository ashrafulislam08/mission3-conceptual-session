export interface IMango {
  name: string;
  variety: string;
  unit: "KG" | "TON";
  price: string;
  stock: string;
  origin: string;
  season: "Summer" | "Winter";
}
