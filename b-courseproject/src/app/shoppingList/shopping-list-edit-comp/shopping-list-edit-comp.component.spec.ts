import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListEditCompComponent } from './shopping-list-edit-comp.component';

describe('ShoppingListEditCompComponent', () => {
  let component: ShoppingListEditCompComponent;
  let fixture: ComponentFixture<ShoppingListEditCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListEditCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListEditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
