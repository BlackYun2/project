import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitemextraComponent } from './pitemextra.component';

describe('PitemextraComponent', () => {
  let component: PitemextraComponent;
  let fixture: ComponentFixture<PitemextraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitemextraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitemextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
