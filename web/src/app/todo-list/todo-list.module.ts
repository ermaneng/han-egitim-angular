import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
