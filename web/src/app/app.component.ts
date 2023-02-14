import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'web';


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
}

export interface PersonInterface{
  name: string,
  surname: string,
  age: number,
  active: boolean
}
