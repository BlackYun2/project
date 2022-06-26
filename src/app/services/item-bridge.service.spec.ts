import { TestBed } from '@angular/core/testing';

import { ItemBridgeService } from './item-bridge.service';

describe('ItemBridgeService', () => {
  let service: ItemBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
