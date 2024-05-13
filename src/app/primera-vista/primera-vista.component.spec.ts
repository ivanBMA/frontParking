import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraVistaComponent } from './primera-vista.component';

describe('PrimeraVistaComponent', () => {
  let component: PrimeraVistaComponent;
  let fixture: ComponentFixture<PrimeraVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeraVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeraVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
