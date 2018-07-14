import { TestBed, inject } from '@angular/core/testing';

import { ImageToCssService } from './image-to-css.service';

describe('TocssServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageToCssService]
    });
  });

  it('should be created', inject([ImageToCssService], (service: ImageToCssService) => {
    expect(service).toBeTruthy();
  }));
});
