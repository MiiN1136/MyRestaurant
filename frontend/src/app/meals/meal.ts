export interface Meal{
    id: number,
    name:string,
    category:string,
    price:number,
    image:string,
    Ingredients:Array<string>,
    created: Date
    }