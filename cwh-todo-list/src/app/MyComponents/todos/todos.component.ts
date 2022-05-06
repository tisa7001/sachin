import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todos';
import { Iteration } from '../iteration';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];
  iterations!:Iteration[]
  iteration!:Iteration
  localitems:any;
  isAddPopup!:boolean;
  todoIteration: any;
  constructor() { 
      this.localitems = localStorage.getItem("todos");
      this.isAddPopup =false;
     if(this.localitems == null){
      this.todos = [
      
      ]
    }
    else{
      this.todos = JSON.parse(this.localitems);
    }
    
  }

  ngOnInit(): void {

    this.iterations = [{
    title : "iteration 01",
    sprint :"sp01",
    team:[
        "A","B"  
    ]
    //active!: boolean

  }
    ]

  }
  OnclickAddbtn(){
    this.isAddPopup = !this.isAddPopup;
    
  }

  deleteTodo(todo:Todo){
    console.log("Parent :" )
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log("Parent :Add" )
    
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  onclick(iteration : Iteration){
this.iteration = iteration;

  }
  // onclick(_iteration : Iteration){
  //   const iteration={
  //     title : _iteration.title,
  //     team: _iteration.team,
  //     sprint: _iteration.sprint


  //   }
  //   this.todoIteration.emit(iteration);
  //}

}
