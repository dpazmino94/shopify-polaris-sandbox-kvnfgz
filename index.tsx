import React, { useState, useEffect } from "react";
import * as api from "./api";
import { render } from "react-dom";
import { ShopifyApp } from "./ShopifyApp";

const App = () => {
  const [keys, setKeys] = useState<any[]>([]);
  const [samples, setSamples] = useState({});

  useEffect(() => {
    const req = async () => {
      const { data } = await api.getKeys();
      setKeys(data);
    };
    req();
  }, []);

  useEffect(() => {
    const req = async () => {
      const { data } = await api.getProductsSamples(100);
      setSamples(data);
    };
    req();
  }, []);

  return <ShopifyApp keys={keys} samples={samples} />;
};

render(<App />, document.getElementById("root"));
