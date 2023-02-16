import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TodoListItemInterface } from './todo-list-item/todo-list-item.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list:TodoListItemInterface[] = [];

  API_URL = 'https://jsonplaceholder.typicode.com/todos';
  API_ERROR_URL = 'https://jsonplaceholder.typicode.com/error/404';

  constructor(private http: HttpClient) { }


  
  /*
  list:TodoListItemInterface[] = [
    {
      completed: false,
      id: 1,
      title: "Todo 1",
      userId: 1
    },
    {
      completed: false,
      id: 2,
      title: "Todo 2",
      userId: 1
    }
  ];
  */


  ngOnInit(){
    
    
    this.http.get<TodoListItemInterface[]>(this.API_URL)
    .subscribe(
      (data:any[])=>{
        console.info(data);
        this.list = data.slice(0,10);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
    

    /*
    fetch(this.API_URL)
      .then((response)=>response.json())
      .then((data:TodoListItemInterface[])=>{
        console.info(data);
        this.list = data.slice(0,10);
      })
      .catch((error:HttpErrorResponse)=>{
          console.info('ERROR-->', error);
      })

      */
  }




  onItemComplete(id:number){
    alert(`item completed ${id}`)
  }

}
