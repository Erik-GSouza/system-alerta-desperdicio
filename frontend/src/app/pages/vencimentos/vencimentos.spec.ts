import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vencimentos } from './vencimentos';

describe('Vencimentos', () => {
  let component: Vencimentos;
  let fixture: ComponentFixture<Vencimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vencimentos],
    }).compileComponents();

    fixture = TestBed.createComponent(Vencimentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
