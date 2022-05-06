import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';
import { Iteration } from '../iteration';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() iteration!:Iteration;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  todos!: Todo;
  iterations!:Iteration
  constructor() { }

  ngOnInit(): void {
  }

  Ondelete(todo:Todo){
  this.todoDelete.emit(todo);
  console.log(todo);
  
  }

}
