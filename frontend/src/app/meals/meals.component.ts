import { Component } from '@angular/core';
import {Meal} from '../meals/meal';
import {data} from '../../assets/data/data';
import { OnInit } from '@angular/core';
import { NomserviceService } from '../nomservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit{
  list!: Meal[];
  
  meals!: Meal[];

  alertState: string = "none";

  name!:string; image!:string;
  category!: string; price!: number;
  created!: Date;
  Ingredients!: Array<string>;

  constructor(private service : NomserviceService){}

  ngOnInit(){
    //this.list=data;
    //this.meals=this.service.getMeals();
    this.service.getMeals().subscribe({
      next: meals=>{
        this.list=meals;
      }
    });
  }

  receiveDetails(meal:Meal){
    this.name =meal.name;
    this.image = meal.image;
    this.category = meal.category;
    this.price = meal.price;
    this.created = meal.created;
    this.Ingredients = meal.Ingredients;
    this.image = meal.image;
    this.alertState= "block";
  }

  toggleAlert(): void{
    if(this.alertState=="block"){
      this.alertState="none";
    }else{
      this.alertState="block"
    }
  }
  
}

