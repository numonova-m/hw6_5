import usersService from "../services/users.service.js";

class usersController {
  constructor() {
    this.userService = new usersService();
  }
  async addUserController(req, res) {
    try {
      const userData = req.body;
      const users = await this.userService.addUsers(userData);
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async oneUserController(req, res) {
    try {
      const { id } = req.params;
      const users = await this.userService.oneUsers(Number(id));
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async addUsersController(req, res) {
    try {
      const userData = req.body;
      const users = await this.userService.addUser(userData);
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async updateController(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const responce = await this.userService.updateUser(id, userData);
      res.status(200).json(responce);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error.message);
      res.status(500).json({
        status: "error",
        message: error.message && "Xatolik yuz berdi",
      });
    }
  }

  async deleteUserController(req, res) {
    try {
      const { id } = req.params;
      const users = await this.userService.deleteUser(id);
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
export default usersController;
