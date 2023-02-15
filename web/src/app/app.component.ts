import { Component } from '@angular/core';
import { BoxDataInterface } from './box/box-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'web';

  list = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5"
  ];

  myNumber:number = 123;
  myText:string = `deneme mesajı ${this.myNumber}`;

  /*
  myObj:PersonInterface = {
    name: "John",
    age: 30
  }*/

  myObj:Partial<PersonInterface> = {
    name: "John",
    age: 30
  }

  buttonClicked(event:Event):void{
    console.info(event)
    alert(this.title);
    this.title = '123';
  }


  boxClickHandler(data:BoxDataInterface){
    this.title = data.name;
  }


  changeBoxMessage(){
    this.myText = "New Box Message";
  }

  addListItem(){
    this.list.push("Item New")
  }

}

export interface PersonInterface{
  name: string,
  surname: string,
  age: number,
  active: boolean
}


