import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaTarea } from './fila-tarea';

describe('FilaTarea', () => {
  let component: FilaTarea;
  let fixture: ComponentFixture<FilaTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilaTarea],
    }).compileComponents();

    fixture = TestBed.createComponent(FilaTarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
