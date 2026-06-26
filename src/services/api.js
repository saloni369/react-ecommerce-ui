const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};