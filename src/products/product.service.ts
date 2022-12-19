import { Injectable } from '@nestjs/common';
import { createproductRequest } from 'src/models/createProductRequest';
import { Product } from 'src/models/product';

let products: Product[] = [
  {
    id: 1,
    name: 'Active tumbler',
    price: 22,
    disCountPrice: null,
    Image: "https://casona.familab.net/wp-content/uploads/2021/08/product_Active-TUMBLER_while-474x474.jpg"
  },
  {
    id: 2,
    name: 'Back hug backpack',
    disCountPrice: 88,
    price: 96,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_backhug_backpack2-474x474.jpg"

  },
  {
    id: 3,
    name: 'Backpack Heather Black',
    disCountPrice: 88,
    price: 96,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product1-474x474.jpg"

  },
  {
    id: 4,
    name: 'Basic Placemat',
    disCountPrice: null,
    price: 18,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/BASIC-PLACEMAT_BLACK-474x474.jpg"


  },
  {
    id: 5,
    name: 'Bellroy Leather Note Sleeve',
    disCountPrice: null,
    price: 250,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product3-474x474.jpg"


  },
  {
    id: 6,
    name: 'Bely Backpack',
    disCountPrice: null,
    price: 130,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/bellroy-shift-backpack-474x474.jpg"


  },
  {
    id: 7,
    name: 'Basic Placemat',
    disCountPrice: null,
    price: 18,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/BASIC-PLACEMAT_BLACK-474x474.jpg"


  },
  {
    id: 8,
    name: 'Beoplay Wireless Headphones',
    disCountPrice: 129,
    price: 135,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Beoplay-H4-Wireless-Headphones-Black-474x474.jpg"

  },
  {
    id: 9,
    name: 'Canvas Backpack',
    disCountPrice: 88,
    price: 96,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Navy-Nylon-Canvas-Backpack3-474x474.jpg"

  },
  {
    id: 10,
    name: 'Casual Backpack',
    disCountPrice: null,
    price: 45,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Casual-Backpack-for-Women-Black-474x474.jpg"

  },
  {
    id: 11,
    name: 'Craft Mortarf',
    disCountPrice: null,
    price: 55,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Product_Craft-Mortarf-474x474.jpg"
  },
  {
    id: 12,
    name: 'Fashion bags',
    disCountPrice: null,
    price: 35,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Lee-Ji-baek2-474x474.jpg"
  },
  {
    id: 13,
    name: 'Geo Thermo Vacuum Flask',
    disCountPrice: null,
    price: 90,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Geo-Thermo-Pot-Normann-Thermo-Vacuum-Flask-3-474x474.jpg"
  },
  {
    id: 14,
    name: 'Glass Water Bottle',
    disCountPrice: 25,
    price: 130,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product5-1-474x474.jpg"
  },
  {
    id: 15,
    name: 'Innovative speaker',
    disCountPrice: null,
    price: 300,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_wireless-home-speaker-474x474.jpg"
  },

  {
    id: 16,
    name: 'Keny Bowl',
    disCountPrice: null,
    price: 25,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Krenit-Bowl-1-474x474.jpg"
  },

  {
    id: 17,
    name: 'Longboard Skateboard',
    disCountPrice: null,
    price: 125,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Cruiser-Longboard-Skateboard-474x474.jpg"
  },
  {
    id: 18,
    name: 'Nylon Pet Travel Carrier',
    disCountPrice: null,
    price: 159,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Green-Tote-474x474.jpg"
  },
  {
    id: 19,
    name: 'Longboard Skateboard',
    disCountPrice: null,
    price: 125,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Cruiser-Longboard-Skateboard-474x474.jpg"
  },
  {
    id: 20,
    name: 'Oneplus watch',
    disCountPrice: null,
    price: 130,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_oneplus_watch_sliver-474x474.jpg"
  },
  {
    id: 21,
    name: 'Longboard Skateboard',
    disCountPrice: null,
    price: 125,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Cruiser-Longboard-Skateboard-474x474.jpg"
  },
  {
    id: 22,
    name: 'Orbitkey nylon key organizer',
    disCountPrice: 58,
    price: 65,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_ORBITKEY-NYLON-KEY_while-474x474.jpg"
  },
  {
    id: 23,
    name: 'Peak design bags',
    disCountPrice: 88,
    price: 96,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product6-474x474.jpg"
  },
  {
    id: 24,
    name: 'Powerful Bluetooth speaker',
    disCountPrice: null,
    price: 600,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_speakPowerful-Bluetooth-474x474.jpg"
  },

  {
    id: 25,
    name: 'Ripple Dog Bowl',
    disCountPrice: 46,
    price: 50,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Ripple-Dog-Bowl-Midnight-474x474.jpg"
  },
  {
    id: 26,
    name: 'Longboard Skateboard',
    disCountPrice: null,
    price: 125,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/SPA-BED-BLACK-474x474.jpg"
  },
  {
    id: 27,
    name: 'Spa Bed',
    disCountPrice: null,
    price: 148,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Cruiser-Longboard-Skateboard-474x474.jpg"
  },
  {
    id: 28,
    name: "Travel Insulated Bottle",
    disCountPrice: null,
    price: 27,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Travel-Insulated-Bottle-Black-474x474.jpg"
  },
  {
    id: 29,
    name: "Wallets",
    disCountPrice: null,
    price: 54,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/wallet_black-474x474.jpg"
  },
  {
    id: 30,
    name: "Water Bottle Thermos",
    disCountPrice: null,
    price: 25,
    Image: "https://casona.familab.net/wp-content/uploads/2021/09/Water-Bottle-Thermos-black-474x474.jpg"
  }
]


@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return products;
  };

  getproductById(id: number): Product {
    return products.find((product) => product.id == id);
  };


  createProduct(request: createproductRequest): Product {
    const newId = products[products.length - 1].id;
    const newProducts: Product = {
      id: newId + 1,
      name: request.name,
      price: request.price,
      disCountPrice: request.disCountPrice,
      Image: request.Image

    };
    products.push(newProducts);
    return newProducts;
  };

  updateProduct(id: number, request: createproductRequest) {
    const productToChange = this.getproductById(id);

    productToChange.name = request.name
  };
  deleteProduct(id: number) {
    products = products.filter((product) => product.id !== id);

  }
  changeProductPrice(id: number, price: number) {
    const productToChange = this.getproductById(id);
    productToChange.price = price
  }
}
