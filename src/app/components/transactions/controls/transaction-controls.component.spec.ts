import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionControlsComponent } from './transaction-controls.component';

describe('TransactionControlsComponent', () => {
  let component: TransactionControlsComponent;
  let fixture: ComponentFixture<TransactionControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
