import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideBoardPlayerComponent } from './inside-board-player.component';

describe('InsideBoardPlayerComponent', () => {
  let component: InsideBoardPlayerComponent;
  let fixture: ComponentFixture<InsideBoardPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsideBoardPlayerComponent]
    });
    fixture = TestBed.createComponent(InsideBoardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
