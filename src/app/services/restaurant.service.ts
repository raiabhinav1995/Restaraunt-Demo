import { Injectable } from '@angular/core';
import {FoodItem} from '../food-item';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  calculatePrice()
{
let totalPrice=0
for(let item of this.items)
totalPrice+=item['price']*item['quantity'];
return totalPrice;
}
removeItem(item)
{
  if(item['quantity']>0)
item['quantity']--;
}

addItem(item)
{
item['quantity']++;
}

totalItemsInCart()
{
  let totalQuantity=0;
  for(let item of this.items)
totalQuantity+=item['quantity'];
return totalQuantity;
}
isCartEmpty()
{
  for(let item of this.items)
  {
    if(item['quantity']>0)
    return false;
  }
  return true;
}
  constructor() { }

items:FoodItem[]=
[
{name: 'Sandwich',imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/veg-mayo-sandwich-recipe.jpg', price: 50,quantity: 0},
{name: 'Burger',imageUrl: 'https://s3.envato.com/files/136712945/theme-preview/01_preview.__large_preview.jpg', price: 40,quantity: 0},
{name: 'Pizza',imageUrl: 'https://s3.envato.com/files/229404005/theme-preview/01_preview.jpg', price: 100,quantity: 0},
]
}
