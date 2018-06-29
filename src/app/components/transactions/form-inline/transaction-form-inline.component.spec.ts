import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFormInlineComponent } from './transaction-form-inline.component';

describe('TransactionFormInlineComponent', () => {
  let component: TransactionFormInlineComponent;
  let fixture: ComponentFixture<TransactionFormInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFormInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFormInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
