import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionBuyComponent } from './auction-buy.component';

describe('AuctionBuyComponent', () => {
  let component: AuctionBuyComponent;
  let fixture: ComponentFixture<AuctionBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionBuyComponent]
    });
    fixture = TestBed.createComponent(AuctionBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
