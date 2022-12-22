import conn from "../../../../config/db";
import { deleteTransaction } from "../../../../controllers/transactions";

export default async function handler(req, res, next) {
  await conn();
  if (req.method === "DELETE") {
    return deleteTransaction(req, res, next);
  }
}
