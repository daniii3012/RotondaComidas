import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

let itemsInCart = [];
let cart = [];
@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject<any>();

  product: any;
  items: any

  constructor() { }

  addToCart(product: any) {
    let local_storage;
    let itemsInCart = []
    this.items = {
      product: product,
      quantity: 1,
    }

    if (localStorage.getItem('cart') == null) {
      local_storage = [];
      console.log("LOCALSTORAGE NULL", JSON.parse(localStorage.getItem('cart')!));
      itemsInCart.push(this.items);
      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      this.subject.next('changed');
      console.log('Pushed first Item: ', itemsInCart);
    } else {
      local_storage = JSON.parse(localStorage.getItem('cart')!);
      console.log("LOCAL STORAGE HAS ITEMS", JSON.parse(localStorage.getItem('cart')!));

      for (var i in local_storage) {
        console.log(local_storage[i].product.id);

        if (this.items.product.id == local_storage[i].product.id) {
          local_storage[i].quantity += 1;
          console.log("Quantity for " + i + " : " + local_storage[i].quantity);
          console.log('same product! index is ', i);
          this.items = null;
          break;
        }
      }

      if (this.items) {
        itemsInCart.push(this.items);
      }

      local_storage.forEach(function (item: any) {
        itemsInCart.push(item);
      })
      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      this.subject.next('changed');

    }
  }

  getItems() {
    console.log("Cart: ", JSON.parse(localStorage.getItem('cart')!));
    return this.items = JSON.parse(localStorage.getItem('cart')!);
  }

  deleteItem(item: any) {
    item = item;
    console.log("Deleting : ", item);
    let shopping_cart;
    let index;
    shopping_cart = JSON.parse(localStorage.getItem('cart')!);
    for (let i in shopping_cart) {
      if (item.product.name == shopping_cart[i].product.name) {
        index = i;
        console.log(index);
      }
    }
    shopping_cart.splice(index, 1);
    console.log("shopping_cart ", shopping_cart);
    localStorage.setItem('cart', JSON.stringify(shopping_cart));
    this.subject.next('changed');

  }

  addQty(item: any) {
    item = item;
    let shopping_cart;
    shopping_cart = JSON.parse(localStorage.getItem('cart')!);
    for (let i in shopping_cart) {
      if (item.product.name == shopping_cart[i].product.name) {
        shopping_cart[i].quantity += 1;
        item = null;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(shopping_cart));
    this.subject.next('changed');

  }

  numberOfItems() {
    let itemsInCart = JSON.parse(localStorage.getItem('cart')!);
    return itemsInCart.length;
  }

}
