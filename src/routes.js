import { Router } from "express"
import multer from "multer"
import multerConfig from "./config/multer"

import SessionController from "./app/models/controllers/SessionController"
import ProductController from "./app/models/controllers/ProductController"

import UserController from './app/models/controllers/UserController'

import authMiddleware from './app/middlewares/auth'

const upload = multer(multerConfig)

const routes = new Router()

routes.post("/users", UserController.store)

routes.post("/sessions", SessionController.store)

routes.use(authMiddleware) // será chamado por todas as rotas ABAIXO 

routes.post("/products", upload.single('file'), ProductController.store)
routes.get("/products", ProductController.index)


export default routes;
