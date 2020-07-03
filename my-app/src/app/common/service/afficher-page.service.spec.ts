import { TestBed } from '@angular/core/testing';

import { AfficherPageService } from './afficher-page.service';

describe('AfficherPageService', () => {
  let service: AfficherPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
