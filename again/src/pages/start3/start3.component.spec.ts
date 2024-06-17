import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Start3Component } from './start3.component';

describe('Start3Component', () => {
  let component: Start3Component;
  let fixture: ComponentFixture<Start3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Start3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Start3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
