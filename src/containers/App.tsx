/* eslint-disable no-console */
import React, { useEffect } from "react";
import getProducts from "../api";
import { Header, Intro } from "../components";

type Product = {
  name: string;
  figure: {
    width: number;
    length: number;
  };
};

const App: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data: Product[] | null = await getProducts();
      if (data) {
        const filtered = data.filter((item) => {
          const { width, length } = item.figure;
          return width >= 50 && length >= 70;
        });
        console.log(filtered);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Intro />
    </>
  );
};

export default App;
