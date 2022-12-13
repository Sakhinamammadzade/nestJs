import { Injectable } from '@nestjs/common';
import { createproductRequest } from 'src/models/createProductRequest';
import { Product } from 'src/models/product';

let products:Product[]=[
    {
        id:1,
        name:'iPhone 11 128 GB Black',
        categoryId:1,
        price:1399
    },
    {
        id:2,
        name:'iPhone 14 pro 256GB Black',
        categoryId:1,
        price:3780
    },
    {
        id:3,
        name:'iPhone 14 pro 1Tb Gold',
        categoryId:1,
        price:4799
    },
    {
        id:4,
        name:'iPhone 14 plus 512GB purple',
        categoryId:1,
        price:3540
    }
]
    

@Injectable()
export class ProductService {

  getProducts():Product[] {
    return products;
  };

  getproductById(id:number):Product{
    return products.find((product)=>product.id==id);
  };


  createProduct(request:createproductRequest):Product{
     const newId=products[products.length-1].id;
     const newProducts :Product={
          id:newId+1,
          name:request.name,
          price:3550,
          categoryId:request.categoryId
     };
     products.push(newProducts);
      return newProducts;
  };

  updateProduct(id:number,request:createproductRequest){
    const productToChange=this.getproductById(id);
    productToChange.categoryId=request.categoryId;
    productToChange.name=request.name
  };
  deleteProduct(id:number){
    products=products.filter((product)=>product.id!==id);
     
  }
  changeProductPrice(id:number,price:number){
    const productToChange=this.getproductById(id);
    productToChange.price=price
  }
}
