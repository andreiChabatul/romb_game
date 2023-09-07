import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCompanyComponent } from './buy-company.component';

describe('BuyCompanyComponent', () => {
  let component: BuyCompanyComponent;
  let fixture: ComponentFixture<BuyCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyCompanyComponent]
    });
    fixture = TestBed.createComponent(BuyCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
