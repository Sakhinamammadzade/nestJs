import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './products/product.service';
import { productController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [AppController,productController],
  providers: [AppService,ProductService],
})
export class AppModule {}
