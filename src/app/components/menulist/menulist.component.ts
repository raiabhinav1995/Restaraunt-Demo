import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/food-item';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
items: FoodItem[];
  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.items=this.restaurantService.items;
  }

}
