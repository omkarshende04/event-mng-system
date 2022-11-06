import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForEventComponent } from './apply-for-event.component';

describe('ApplyForEventComponent', () => {
  let component: ApplyForEventComponent;
  let fixture: ComponentFixture<ApplyForEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
