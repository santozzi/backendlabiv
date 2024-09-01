import dotenv from "dotenv";
import Server from './models/server.js';

dotenv.config();
const servidor = new Server();
servidor.listen();

