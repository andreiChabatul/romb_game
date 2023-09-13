import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryBuyComponent } from './primary-buy.component';

describe('PrimaryBuyComponent', () => {
  let component: PrimaryBuyComponent;
  let fixture: ComponentFixture<PrimaryBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryBuyComponent]
    });
    fixture = TestBed.createComponent(PrimaryBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
