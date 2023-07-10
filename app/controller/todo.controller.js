const todoModel = require("../models/todo.model")

exports.getTodos = (req, res) => {
    todoModel
        .find()
        .then(dataTodo => {
            return res.status(200).json({
                message: 'Data Todo',
                data: dataTodo
            })
        }).catch((error) => {
            req.status(500).json(error)
        })
}

exports.postTodo = (req, res) => {
    const data = {
        title: req.body.title,
        createdOn: Date.now()
    }

    const saveDB = new todoModel(data)
    saveDB.save().then((dataDB) => {
        return res.status(200).json({
            message: "Data berhasil di tambahkan",
            data: dataDB
        })
    })
}

exports.updateTodo = (req, res) => {
    const data = {
        title: req.body.title,
        completed: req.body.completed,
    }
    todoModel.findByIdAndUpdate(req.params.id, data,
        function(error, data) {
            if (error) {
                return res.status(500).json(error)
            } else {
                res.status(200).json({
                    message: "Data todo berhasil diubah",
                    data: data
                })
            }
        })
}


exports.deleteTodo = (req, res) => {
    todoModel.findByIdAndDelete(req.params.id, function(error) {
        if (error) {
            return res.status(500).json(error)
        } else {
            res.status(200).json({
                message: "Data berhasil dihapus!"
            })
        }
    })
}