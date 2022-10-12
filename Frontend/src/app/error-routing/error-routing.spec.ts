import { TestBed } from '@angular/core/testing';
import { ErrorRoutingModule } from './error-routing.module';
import { GlobalErrorHandlerService } from './error/global-error-handler.service';

describe('error-routing', () => {
    let handler: GlobalErrorHandlerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
           imports: [ ErrorRoutingModule ],
        });
    });
    it('should create', () => {
        const module = TestBed.inject(ErrorRoutingModule);
        expect(module).toBeTruthy();
      });
});