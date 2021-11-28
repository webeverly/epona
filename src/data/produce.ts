import PouchDB from "pouchdb";
import documents from "./documents.json";

export type Scale = "very-low" | "low" | "medium" | "high" | "very-high";
export type ProduceType = "fruit" | "vegetable";

export interface ProduceDocument {
  _id: string;
  name_en: string;
  name_fr: string;
  type: ProduceType;
  is_climacteric: boolean;
  is_ethylene_sensitive: boolean;
  ethylene_emmission?: Scale;
  ethylene_sensitivity?: Scale;
}

export interface ProduceData {
  id: string;
  name: string;
  type: ProduceType;
  isClimacteric: boolean;
  isEthyleneSensitive: boolean;
  ethyleneEmmission?: Scale;
  ethyleneSensitivity?: Scale;
}

var db = new PouchDB("produce");

export async function loadProduce(lang: "en" | "fr"): Promise<ProduceData[]> {
  const produce: ProduceData[] = (documents as ProduceDocument[])
    .map((x) => ({ doc: x }))
    .map((x) => {
      checkProduce(x.doc);
      return {
        id: x.doc._id.replace("produce:", ""),
        name: (lang === "en" ? x.doc.name_en : x.doc.name_fr) ?? "",
        type: x.doc.type,
        isClimacteric: x.doc.is_climacteric,
        isEthyleneSensitive: x.doc.is_ethylene_sensitive,
        ethyleneEmmission: x.doc.ethylene_emmission,
        ethyleneSensitivity: x.doc.ethylene_sensitivity,
      };
    });
  return produce;
}

function checkProduce(x?: ProduceDocument): asserts x {
  if (!x) {
    throw new Error("dcoument error");
  }
}
