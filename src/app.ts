import express from "express"
import todoRouter from "./routes/todos"

const app = express()

app.use(express.json())

app.use("/todos", todoRouter)

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.status(500).json({ messages: err.message })
})

app.listen(5000, () => {
	console.log("app is listening on port 5000")
})
