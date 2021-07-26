import { TestBed } from '@angular/core/testing';

import { ResolverserviceService } from './resolverservice.service';

describe('ResolverserviceService', () => {
  let service: ResolverserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolverserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
