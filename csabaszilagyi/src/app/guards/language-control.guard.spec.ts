import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { languageControlGuard } from './language-control.guard';

describe('languageControlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => languageControlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
