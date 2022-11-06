import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDataPageComponent } from './card-data-page.component';

describe('CardDataPageComponent', () => {
  let component: CardDataPageComponent;
  let fixture: ComponentFixture<CardDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
