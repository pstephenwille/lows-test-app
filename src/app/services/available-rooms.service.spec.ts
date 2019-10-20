import {async, TestBed} from '@angular/core/testing';

import {AvailableRoomsService} from './available-rooms.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppComponent} from "../app.component";
import {CarouselComponent} from "../carousel/carousel.component";
import {ReviewsComponent} from "../reviews/reviews.component";
import {AmenitiesComponent} from "../amenities/amenities.component";
import {AreaInformationComponent} from "../area-information/area-information.component";
import {AvailableRoomsComponent} from "../available-rooms/available-rooms.component";

describe('AvailableRoomsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AvailableRoomsService],
      declarations: [
        AppComponent,
        CarouselComponent,
        ReviewsComponent,
        AmenitiesComponent,
        AreaInformationComponent,
        AvailableRoomsComponent
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: AvailableRoomsService = TestBed.get(AvailableRoomsService);
    expect(service).toBeTruthy();
  });
});
