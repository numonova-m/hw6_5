import database from "../config/database.js";

class usersService {
  constructor() {}
  async addUsers(data) {
    const client = await database();
    const users = await client.query(`select * from users`);
    return users.rows;
  }
  async oneUsers(data) {
    const client = await database();
    const users = await client.query(`select * from users where id=$1;`, [
      data,
    ]);
    console.log(users.rows);

    return users.rows;
  }
  async addUser(body) {
    const { name, email, age } = body;

    if (!name && !email && !age) {
      throw new Error(
        "Barcha maydonlar to‘ldirilishi shart (name, email, age)"
      );
    }
    const query =
      "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *";
    const values = [name, email, age];
    try {
      const client = await database();
      const result = await client.query(query, values);

      return { status: "success", data: result.rows[0] };
    } catch (err) {
      console.error("Xatolik yuz berdi:", err.message);
      throw err;
    }
  }
  async updateUser(id, body) {
    const { name, email, age } = body;

    if (!name && !email && !age) {
      throw new Error(
        "Barcha maydonlar to‘ldirilishi shart (name, email, age)"
      );
    }
    const client = await database();
    const checkUser = await client.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    if (checkUser.rows.length === 0) {
      throw new Error("Foydalanuvchi topilmadi");
    }
    const query =
      "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *";
    const values = [name, email, age, id];
    try {
      const result = await client.query(query, values);
      return {
        status: "success",
        message: "Foydalanuvchi ma'lumotlari muvaffaqiyatli yangilandi",
        data: result.rows[0],
      };
    } catch (err) {
      console.error("Xatolik yuz berdi:", err.message);
      throw err;
    }
  }

  async deleteUser(id) {
    const client = await database();

    try {
      const checkUser = await client.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
      );
      if (checkUser.rows.length === 0) {
        return {
          status: "error",
          message: "Foydalanuvchi topilmadi",
        };
      }
      const query = "DELETE FROM users WHERE id = $1 RETURNING *";
      const result = await client.query(query, [id]);

      return {
        status: "success",
        message: "Foydalanuvchi muvaffaqiyatli o‘chirildi",
        data: result.rows[0],
      };
    } catch (err) {
      console.error("Xatolik yuz berdi:", err.message);
      throw err;
    }
  }
}
export default usersService;
