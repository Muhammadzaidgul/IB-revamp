import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActionsCreateComponent } from './quick-actions-create.component';

describe('QuickActionsCreateComponent', () => {
  let component: QuickActionsCreateComponent;
  let fixture: ComponentFixture<QuickActionsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickActionsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickActionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
