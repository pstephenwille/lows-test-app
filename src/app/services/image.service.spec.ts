import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageService = TestBed.get(ImageService);
    expect(service).toBeTruthy();
  });
});
