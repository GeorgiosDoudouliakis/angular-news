import { TestBed } from '@angular/core/testing';
import { LoginButtonsService } from './login-buttons.service';

describe('LoginButtonsService', () => {
  let service: LoginButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
