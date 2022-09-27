import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeappComponent } from './pokeapp.component';

describe('PokeappComponent', () => {
  let component: PokeappComponent;
  let fixture: ComponentFixture<PokeappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
