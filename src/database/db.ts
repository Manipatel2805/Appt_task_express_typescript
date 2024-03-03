
import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";

const userDatabase = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "mani@2805",
  database: "user_db",
  entities: [User],
  logging: true,
  synchronize: false, // Set to false in production
//   define: {
    charset: 'utf8mb4',
//   },
});

export default userDatabase;
