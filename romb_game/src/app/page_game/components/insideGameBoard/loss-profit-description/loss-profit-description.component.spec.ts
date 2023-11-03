import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossProfitDescriptionComponent } from './loss-profit-description.component';

describe('LossProfitDescriptionComponent', () => {
  let component: LossProfitDescriptionComponent;
  let fixture: ComponentFixture<LossProfitDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LossProfitDescriptionComponent]
    });
    fixture = TestBed.createComponent(LossProfitDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
