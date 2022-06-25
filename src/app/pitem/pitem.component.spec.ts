import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitemComponent } from './pitem.component';

describe('PitemComponent', () => {
  let component: PitemComponent;
  let fixture: ComponentFixture<PitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
