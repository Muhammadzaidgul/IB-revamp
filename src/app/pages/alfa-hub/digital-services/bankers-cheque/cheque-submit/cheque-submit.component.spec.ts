import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeSubmitComponent } from './cheque-submit.component';

describe('ChequeSubmitComponent', () => {
  let component: ChequeSubmitComponent;
  let fixture: ComponentFixture<ChequeSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeSubmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChequeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
