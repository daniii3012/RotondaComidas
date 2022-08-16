import { TestBed } from '@angular/core/testing';

import { TipoPlatoService } from './tipo-plato.service';

describe('TipoPlatoService', () => {
  let service: TipoPlatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPlatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
