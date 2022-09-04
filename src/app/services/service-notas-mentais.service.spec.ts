import { TestBed } from '@angular/core/testing';

import { ServiceNotasMentaisService } from './service-notas-mentais.service';

describe('ServiceNotasMentaisService', () => {
  let service: ServiceNotasMentaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNotasMentaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
