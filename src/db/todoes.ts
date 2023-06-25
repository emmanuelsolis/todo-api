import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

export const TodoModel = mongoose.model('Todo', TodoSchema)

export const getTodos = () => TodoModel.find()
export const getTodoById = (id: String) => TodoModel.findById(id)
export const getTodosByUserId = (userId: String) => TodoModel.find({ user: userId })
export const createTodo = (values: Record<string, any>) => new TodoModel(values)
    .save().then((todo) => todo.toObject())
export const deleteTodoById = (id: string) => TodoModel.findOneAndDelete({ _id: id })
export const updateTodoById = (id: string, values: Record<string, any>) => TodoModel.findByIdAndUpdate(id, values, { new: true })