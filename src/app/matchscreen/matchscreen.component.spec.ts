import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchscreenComponent } from './matchscreen.component';

describe('MatchscreenComponent', () => {
  let component: MatchscreenComponent;
  let fixture: ComponentFixture<MatchscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchscreenComponent]
    });
    fixture = TestBed.createComponent(MatchscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
