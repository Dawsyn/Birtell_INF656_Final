import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart$ = new BehaviorSubject<Product[]>([]);
  // cart$ = this.cart.asObservable(); 

  constructor() { } 
  
  addToCart(product: Product): void {
    const cartJson = localStorage.getItem('cart');
    const cart = cartJson ? JSON.parse(cartJson) as Product[] : [];

    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  } 
      
  getCartItems(): Product[] {
    const cartJson = localStorage.getItem('cart');
    const cart = cartJson ? JSON.parse(cartJson) as Product[] : [];

    return cart;
  } 
}

  export interface Product {
    id: number;
    name: string;
    player: string;
    sport: string;
    description: string;
    price: string; 
    img: string;
  }





/* id: 1,
 name: 'Card 1', 
 player: 'Christian Braun', 
 sport: 'Basketball', 
 description: 'SGC 10 Select Orange /65', 
 price:'$40',
 img: 'IMG_0327.jpg' */


/*   private items = new BehaviorSubject<any[]>([]); // Initialize as an empty array
  items$ = this.items.asObservable(); // Expose as an observable

  // Add item to the cart
  addToCart(item: {}): void {
    const currentItems = [...this.items.getValue()]; // Use `getValue()` to retrieve the current value
    this.items.next([...currentItems, item]);
  }

  // Get the current cart items as an observable
  getCartItems(): Observable<any[]> {
    return this.items$;
  }

  // Clear the cart
  clearCart(): void {
    this.items.next([]);
  }
 */
/*   items: any[] = [];

  addToCart(item: any) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  } */
