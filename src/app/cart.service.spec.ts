import { CartService } from "./cart.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

// Excellent overview on testing services: https://angular.io/guide/testing

describe('ValueService', () => {
  let service;

  // prepare test
  beforeEach(() => {

    // init service and mock dependencies
    // using testing utility mocks
    TestBed.configureTestingModule({
      providers: [ CartService ],
      imports: [
        HttpClientTestingModule
      ]
    });

  });

  it('getItems should return empty array', () => {
    service = TestBed.inject(CartService);
    expect(service.getItems()).toEqual([]);
  });
});
