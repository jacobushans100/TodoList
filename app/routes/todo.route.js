const express = require("express")
const router = express.Router()
const { postTodo, getTodos, updateTodo, deleteTodo } = require("../controller/todo.controller")

//get data
router.get("/", getTodos)

//post data
router.post("/", postTodo)

//update data
router.put("/:id", updateTodo)

//delete data
router.delete("/:id", deleteTodo)

module.exports = router;