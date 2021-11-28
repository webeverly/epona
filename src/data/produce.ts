import PouchDB from "pouchdb";

export interface ProduceData {
  id: string;
  name: string;
}

var db = new PouchDB("produce");

export async function loadData() {
  const info = await db.info();

  console.log(info);
}
