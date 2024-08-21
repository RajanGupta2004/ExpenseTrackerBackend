import expenseModel from "../models/expenseModel.js"


export const userExpenses = async (req, res) => {
    try {

        const { description, amount, category } = req.body

        if (!description || !amount || !category) {
            return res.status(400).json({
                success: false,
                message: "all field are required"
            })

        }

        const newExpense = await new expenseModel({ description, amount, category }).save()

        if (!newExpense) {
            return res.status(400).json({
                success: false,
                message: "something went wrong"
            })

        }

        return res.status(200).json({
            success: true,
            message: "Your new expenses is created..",
            newExpense
        })



    } catch (error) {
        console.log(error)

    }
}



export const getAllExpenses = async (req, res) => {
    try {

        const allData = await expenseModel.find()
        if (!allData) {
            return res.status(404).json({
                success: false,
                message: "No expense present.."
            })
        }

        return res.status(200).json({
            success: true,
            allData
        })

    } catch (error) {
        console.log(error)

    }
}



export const getExpenseById = async (req, res) => {
    try {

        const id = req.params.id
        // console.log(id)

        const expense = await expenseModel.findById(id)

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "No expensed found by this id"
            })
        }

        return res.status(200).json({
            success: true,
            expense
        })

    } catch (error) {
        console.log(error)

    }
}


export const updateExpenses = async (req, res) => {
    try {
        const { description, amount, category } = req.body
        const id = req.params.id

        const expense = await expenseModel.findById(id)

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "expence not foun you can not update"
            })
        }

        expense.description = description || expense.description;
        expense.amount = amount || expense.amount;
        expense.category = category || expense.category;

        await expense.save()

        return res.status(200).json({
            success: true,
            message: "Upate successfull"
        })

    } catch (error) {
        console.log(error)

    }
}