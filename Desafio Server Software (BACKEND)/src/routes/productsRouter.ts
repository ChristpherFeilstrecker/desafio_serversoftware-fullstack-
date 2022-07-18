import express from "express";
import { ProductsController } from "../controller/ProductsController";


export const productsRouter = express.Router();

const productsController = new ProductsController();

productsRouter.get("/showAllProducts", productsController.showProducts);  // Retorna todos produtos - OK
productsRouter.get("/showProduct", productsController.showProductByCode);  // Retorna 1 produto - OK

productsRouter.post("/addProduct", productsController.addProduct);  //Adicionar produto - OK

productsRouter.put("/editProduct", productsController.editProduct); // Editar Produto - OK

productsRouter.delete("/deleteProduct", productsController.deleteProduct);  //Deletar produto - OK

