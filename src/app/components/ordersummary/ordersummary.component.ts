import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/food-item';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css'],
  animations: [trigger('fade',
  [
    // state(),
    // transition('void=>*',
    // [
    //   style({opacity: 1}),
    //   animate(2000, style({opacity: 0}))
    // ]),

    transition('*=>void',
    [
      animate(2000, style({opacity: 0}))
    ])
  ])
]
})
export class OrdersummaryComponent implements OnInit {
  items: FoodItem[];
  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.items=this.restaurantService.items;
  }
}
