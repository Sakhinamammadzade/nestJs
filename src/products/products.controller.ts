import {Body,Controller,Get,Post,Param,Put,Delete,Patch}from '@nestjs/common';
import { request } from 'http';
import { createproductRequest } from 'src/models/createProductRequest';
import { Product } from 'src/models/product';
import { ProductService } from './product.service';

@Controller('product')
export class productController{
    constructor(private readonly productService:ProductService){}

     @Get(':id')
     findOne(@Param('id') id: number) {
     return this.productService.getproductById(id);
    }


    @Get()
    getProducts():Product[]{
        return this.productService.getProducts();
    }
   

    @Post()
    createProduct(@Body() request:createproductRequest):Product{
        console.debug(request);
        
        return  this.productService.createProduct(request);
    }
    @Put(':id')
    uptadeProduct(
        @Param('id') id:number,
        @Body() request:createproductRequest,
    ){
        this.productService.updateProduct(id,request);
    }
    @Delete(':id')
    deleteProduct( @Param('id') id:number,){
        this.productService.deleteProduct(id);
    }
    @Patch(':id/:price')
    changeProductPrice( @Param('id') id:number,@Param('price') price:number){
        this.productService.changeProductPrice(id,price);
    }
}