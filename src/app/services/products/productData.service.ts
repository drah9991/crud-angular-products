import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/app/entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductData {

  constructor(firestore: AngularFirestore) { 

  }

getProducts(): Promise<Product[]>{
    return new Promise ((resolve,reject)=>{
        const products : Product[]=[];
        resolve (products);
    })
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