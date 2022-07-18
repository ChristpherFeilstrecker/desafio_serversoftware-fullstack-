import { Request, Response } from "express";
import ProductsBusiness from "../business/ProductsBusiness";

export class ProductsController {

   public async showProducts(req: Request, res: Response) {
      try {
         
         const result = await ProductsBusiness.showProducts(); 
      
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Controller - Algo deu errado ao coletar produtos" })
        }
      }
   }

   
   public async showProductByCode(req: Request, res: Response) {
      try {
         const { code } = req.query
         
         const result = await ProductsBusiness.showProductByCode(
            code as unknown as Number
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Controller - Algo deu errado ao coletar produto" })
        }
      }
   }

   public async addProduct(req: Request, res: Response) {
      try {
         const { code, description, price } = req.body

         const result = await ProductsBusiness.addProduct(
            code, 
            description, 
            price
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
           res.send({ message: "Controller - Algo deu errado ao cadastrar produto" })
        }
      }
   }

   public async editProduct(req: Request, res: Response) {
      try {
         const { code } = req.query
         const { new_code, description, price} = req.body

         const result = await ProductsBusiness.editProduct(
            code as unknown as Number, 
            new_code,
            description, 
            price
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
           res.send({ message: "Controller - Algo deu errado ao cadastrar produto" })
        }
      }
   }

   public async deleteProduct(req: Request, res: Response) {
      try {
         const { code } = req.query
         
         const result = await ProductsBusiness.deleteProduct(
            code as unknown as Number
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Controller - Algo deu errado ao coletar produto" })
        }
      }
   }

}

export default new ProductsController()