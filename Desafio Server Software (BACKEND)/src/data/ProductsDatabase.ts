import BaseDataBase from "./BaseDatabase";

export class ProductsDatabase extends BaseDataBase {

   protected tableName: string = "produtos";

   public async getProducts(): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName}
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async getProductByCode(
      code: Number
   ): Promise<void|any> {
      
      try {
         
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE codigo = '${code}'
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }


   public async postProduct(
      code: Number,
      description: String,
      price: Number,
      date_registration: String
   ): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (codigo, descricao, preco, data_cadastro)
            VALUES (
            '${code}', 
            '${description}', 
            '${price}',
            '${date_registration}'
            )`
         );
      } catch (error) {
         if (error instanceof Error) {
           throw new Error(error.message) 
         }
         
      }
   }

   public async putProduct(
      code: Number,
      new_code: Number | undefined,
      description: String | undefined,
      price: Number | undefined
   ): Promise<void> {
      try {

          await BaseDataBase.connection.raw(`
         UPDATE ${this.tableName} SET codigo = '${new_code}',descricao = '${description}',preco = '${price}' WHERE codigo = '${code}'
         `);  
   
         
      } catch (error) {
         console.log("erro = ",error)
         if (error instanceof Error) {
           throw new Error(error.message) 
         }
         
      }
   }

   public async delProduct(
      code: Number
   ): Promise<void|any> {
      
      try {
         
         const result = await BaseDataBase.connection.raw(`
         DELETE from ${this.tableName} WHERE codigo = '${code}'
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

}
