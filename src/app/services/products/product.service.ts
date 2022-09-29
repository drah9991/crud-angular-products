import { Injectable } from '@angular/core';
import { ProductData } from './productData.service';
import { Product } from 'src/app/entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productData:ProductData) { }

  async getProducts(): Promise<Product[]>{
    const products:Product[]=await this.productData.getProducts();
    return products;
}

createProducts(product:Product):Promise<boolean>{
    return new Promise ((resolve,reject)=>{
        resolve (true);
    })

}

updateProducts(product:Product,id:string):Promise<boolean>{
    return new Promise ((resolve,reject)=>{
        resolve (true);
    })
}

deleteProducts(id:string):Promise<boolean>{
    return new Promise ((resolve,reject)=>{
        resolve (true);
    })
}
}
