import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';
import { Iteration } from '../iteration';

@Component({
  selector: 'app-todos-item-add',
  templateUrl: './todos-item-add.component.html',
  styleUrls: ['./todos-item-add.component.css']
})
export class TodosItemAddComponent implements OnInit {

@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
@Input() todo!: Todo;
@Input() iteration!: Iteration;
title!:string;
iterations!:Iteration
todos!: Todo;
  desc: any;

  heading!:string;
  constructor() {
    //this.heading = "iteration 1";
   
   }

  ngOnInit(): void {
    
  }

  OnSubmit(){
    
    const todo={
      title : this.title,
      desc: this.desc

    }
    this.todoAdd.emit(todo);
  }

}
