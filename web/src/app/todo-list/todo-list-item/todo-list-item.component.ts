import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListItemInterface } from './todo-list-item.interface';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() data!:TodoListItemInterface;
  @Output() complete = new EventEmitter<number>();
  completed:boolean = false;

  completeClick(id:number){
    console.info("Complete Button Clicked");
    this.completed = true;
    this.complete.emit(id);
  }
}
