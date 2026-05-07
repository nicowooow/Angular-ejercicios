import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCoche } from './gestion-coche';

describe('GestionCoche', () => {
  let component: GestionCoche;
  let fixture: ComponentFixture<GestionCoche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCoche],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCoche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
