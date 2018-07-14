import { TestBed, inject } from '@angular/core/testing';
import { ImageApiService } from './image-api.service';

describe('ImageApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageApiService]
    });
  });

  it('should be created', inject([ImageApiService], (service: ImageApiService) => {
    expect(service).toBeTruthy();
  }));
});
