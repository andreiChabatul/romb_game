import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCreateGameComponent } from './select-create-game.component';

describe('SelectCreateGameComponent', () => {
  let component: SelectCreateGameComponent;
  let fixture: ComponentFixture<SelectCreateGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCreateGameComponent]
    });
    fixture = TestBed.createComponent(SelectCreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
