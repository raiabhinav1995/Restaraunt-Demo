import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/food-item';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  items: FoodItem[];
  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.items=this.restaurantService.items;
  }
}
