import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assinatura } from './assinatura';

describe('Assinatura', () => {
  let component: Assinatura;
  let fixture: ComponentFixture<Assinatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assinatura],
    }).compileComponents();

    fixture = TestBed.createComponent(Assinatura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
