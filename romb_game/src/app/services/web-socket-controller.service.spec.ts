import { TestBed } from '@angular/core/testing';

import { WebSocketControllerService } from './web-socket-controller.service';

describe('WebSocketControllerService', () => {
  let service: WebSocketControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
