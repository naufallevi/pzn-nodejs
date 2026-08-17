import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock partial class findById", () => {
  const user = { id: 1, name: "Grace Ashcroft" };
  const mockFindById = jest.spyOn(repository, "findById");

  mockFindById.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(mockFindById).toHaveBeenCalled();
  expect(mockFindById).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
})