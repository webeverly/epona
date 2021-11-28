import { useCallback, useEffect, useState } from "react";
import { loadProduce, ProduceData } from "../../data/produce";
import { Home } from "./Home";

export const HomeContainer = ({ produce }: any) => {
  return produce ? <Home produce={produce} /> : <div>loading</div>;
};

export const getStaticProps = async () => {
  return {
    props: {
      produce: await loadProduce("en"),
    },
  };
};
