import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meals/meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent {

  @Input() Content! : Meal;

  @Output() details= new EventEmitter<Meal>();

  constructor(){}

  ngOnInit(){}

  viewMeal():void{
    this.details.emit(this.Content);
  }

}
