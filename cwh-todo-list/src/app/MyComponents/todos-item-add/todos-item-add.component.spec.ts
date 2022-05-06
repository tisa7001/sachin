import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosItemAddComponent } from './todos-item-add.component';

describe('TodosItemAddComponent', () => {
  let component: TodosItemAddComponent;
  let fixture: ComponentFixture<TodosItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
