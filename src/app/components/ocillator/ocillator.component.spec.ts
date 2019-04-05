import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcillatorComponent } from './ocillator.component';

describe('OcillatorComponent', () => {
  let component: OcillatorComponent;
  let fixture: ComponentFixture<OcillatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcillatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcillatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
