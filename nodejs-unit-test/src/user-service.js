import { UserRepository } from "./user-repository";

export class UserService {
  constructor(UserRepository) {
    if (UserRepository) {
      this.userRepository = UserRepository;
    } else {
      this.userRepository = new UserRepository();
    }
  }

  save(user) {
    this.userRepository.save(user);
  }
  findById(id) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
