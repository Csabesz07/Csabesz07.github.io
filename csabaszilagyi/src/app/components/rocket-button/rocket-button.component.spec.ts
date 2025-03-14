import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketButtonComponent } from './rocket-button.component';

describe('RocketButtonComponent', () => {
  let component: RocketButtonComponent;
  let fixture: ComponentFixture<RocketButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
