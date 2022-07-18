import { ProductsDatabase } from "../data/ProductsDatabase";

export class ProductsBusiness {

   constructor(
      private productsDatabase: ProductsDatabase,
   ) { }

   public async showProducts(

   ) {
      try {
         const products = await this.productsDatabase.getProducts();
         if (!products || products.length === 0) {
            throw new Error("Tabela vazia ou Inexistente");
         }

         return products;
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar produtos")
         }
      }
   }

   public async showProductByCode(
      code: Number
   ) {
      try {

         if (!code) {
            throw new Error("Necessário informar código do produto");
         }

         const product = await this.productsDatabase.getProductByCode(
            code
         );

         if (!product || product.length === 0) {
            throw new Error("Código incorreto ou produto inexistente");
         }

         return product;
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar produto")
         }
      }
   }

   public async addProduct(
      code: Number,
      description: String,
      price: Number
   ) {
      try {

         if (!code || !description || !price) {
            throw new Error("Necessário informar todos os dados");
         }

         const products = await this.productsDatabase.getProducts();

         const verifyCodes = products.map((product: any) => {

            if (code === product.codigo) {
               throw new Error("Produtos não podem conter mesmo código");
            }

         })

         var actualDate = new Date();
         var actualDay = parseInt(String(actualDate.getDate()).padStart(2, '0'));
         var actualMonth = parseInt(String(actualDate.getMonth() + 1).padStart(2, '0'));
         var actualYear = actualDate.getFullYear();

         const date_registration = actualDay + "/" + actualMonth + "/" + actualYear

         const addProduct = await this.productsDatabase.postProduct(
            code,
            description,
            price,
            date_registration
         );

         return ("Produto cadastrado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar produto")
         }
      }
   }

   public async editProduct(
      code: Number,
      new_code: Number | undefined,
      description: String | undefined,
      price: Number | undefined
   ) {
      try {

         if (!code) {
            throw new Error("Necessário informar código do produto");
         }

         if (!new_code || !description || !price) {
            throw new Error("Necessário informar todos os dados para edição");
         }

         const verifyProduct = await this.productsDatabase.getProductByCode(
            code
         );

         if (!verifyProduct || verifyProduct.length === 0) {
            throw new Error("Código incorreto ou produto inexistente");
         }

         const editCode = await this.productsDatabase.putProduct(
                  code,
                  new_code,
                  description,
                  price,
               );

         return  ("Produto editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar produto")
         }
      }
   }

   public async deleteProduct(
      code: Number
   ) {
      try {

         if (!code) {
            throw new Error("Necessário informar código do produto");
         }

         const product = await this.productsDatabase.getProductByCode(
            code
         );

         if (!product || product.length === 0) {
            throw new Error("Código incorreto ou produto inexistente");
         }

         const delProduct = await this.productsDatabase.delProduct(
            code
         );

         return ("Produto deletado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar produto")
         }
      }
   }


}

export default new ProductsBusiness(
   new ProductsDatabase()
)