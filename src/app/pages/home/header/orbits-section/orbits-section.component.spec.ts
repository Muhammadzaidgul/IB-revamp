import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitsSectionComponent } from './orbits-section.component';

describe('OrbitsSectionComponent', () => {
  let component: OrbitsSectionComponent;
  let fixture: ComponentFixture<OrbitsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrbitsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
