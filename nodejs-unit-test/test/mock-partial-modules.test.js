import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  return {
    __esModule: true,
    ...originalModule,
    // getProductById: jest.fn(),
    getAllProducts: jest.fn(),
  };
});

test.failing("modules getProductById", () => {
  const product = ProductService.findById(1);
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
