import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCnicComponent } from './update-cnic.component';

describe('UpdateCnicComponent', () => {
  let component: UpdateCnicComponent;
  let fixture: ComponentFixture<UpdateCnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCnicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
