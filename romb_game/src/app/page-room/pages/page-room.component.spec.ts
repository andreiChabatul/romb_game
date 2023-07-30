import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRoomComponent } from './page-room.component';

describe('PageRoomComponent', () => {
  let component: PageRoomComponent;
  let fixture: ComponentFixture<PageRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRoomComponent]
    });
    fixture = TestBed.createComponent(PageRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
