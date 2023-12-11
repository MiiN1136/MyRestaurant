import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NomserviceService {

  

  constructor(private http:HttpClient) { }

  getMeals(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/');
  }

  /*getMeals(): Observable<any>{

    return of( [
          {
      id:1,
      name:"sandwich Chawarma",
      category:"sandwich",
      price:4.500,
      image:"../assets/images/Sandwich_thon.png",
      Ingredients:["Baguette","Oeuf(s)","Thon","Salade","Mayonnaise"],
      created:new Date(2023,10,14)
    },
    {
      id:2,
      name:"S'han Torki",
      category:"dish",
      price:5.600,
      image:"../assets/images/Plat-Tunisien.png",
      Ingredients:["Salade mechouia","soupe de harissa","Salade tunisienne","oeuf","pommes de terre","olives et capres"],
      created:new Date(2023,10,16)
    },
    {
      id:3,
      name:"Pizza 4 seasons",
      category:"pizza",
      price:12.000,
      image:"../assets/images/pizza-four-seasons.jpg",
      Ingredients:["sauce tomate","jambon","mozarella","escalope","champignons"],
      created:new Date(2000,10,17)
    }
    ]);
  }*/
}
