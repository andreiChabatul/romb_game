import { TestBed } from '@angular/core/testing';

import { ButtonControllerService } from './button-controller.service';

describe('ButtonControllerService', () => {
  let service: ButtonControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
