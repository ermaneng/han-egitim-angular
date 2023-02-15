import { Component,EventEmitter,Input, Output } from '@angular/core';
import {BoxDataInterface} from "./box-data.interface";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  @Input() displayText!:string;
  @Input() counter!:number;
  @Output() boxClicked = new EventEmitter<BoxDataInterface>();

  data:BoxDataInterface = {name: "John", surname: "Doe"}

  //@Input('displayText') text!:string;
  //displayText:string | undefined;
  
  buttonClick() {
    debugger;
    this.boxClicked.emit(this.data);
  }


}
