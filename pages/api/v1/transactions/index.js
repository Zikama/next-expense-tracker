import conn from "../../../../config/db";
import {
  addTransaction,
  getTransactions,
} from "../../../../controllers/transactions";
const dotenv = require("dotenv");
const connectDB = require("../../../../config/db");

dotenv.config({ path: "../../../../config/config.env" });

export default async function handler(req, res, next) {

    await conn();
  if (req.method === "GET") {
    let respo = await getTransactions(req, res, next);

    if (respo.success) {
        return res.status(200).json(respo)
    } else {
        return res.status(500).json(respo)
    }
  }
  if (req.method === "POST") {
    return addTransaction(req, res, next);
  }
}
