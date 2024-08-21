import express from "express"
import { userExpenses, getAllExpenses, getExpenseById, updateExpenses } from "../controllers/expenseController.js"

const router = express.Router()


router.post("/expenses", userExpenses)
router.get("/all-expenses", getAllExpenses)
router.get("/:id", getExpenseById)
router.put("/:id", updateExpenses)


export default router
