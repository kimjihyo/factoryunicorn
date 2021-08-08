import axios from "axios";

const getProducts = async () => {
  try {
    const { data } = await axios.get("/test");
    return data;
  } catch (err) {
    return null;
  }
};

export default getProducts;
