import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alimento } from './alimento';

describe('Alimento', () => {
  let component: Alimento;
  let fixture: ComponentFixture<Alimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alimento],
    }).compileComponents();

    fixture = TestBed.createComponent(Alimento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
