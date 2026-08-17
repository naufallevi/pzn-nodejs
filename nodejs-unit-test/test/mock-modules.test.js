import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js");

test("modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "Product 1",
    };
  });

  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "Product 1",
  });
});

test("modules getAllProducts", () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  const result = ProductService.findAll();
  expect(result).toEqual(products);
});
