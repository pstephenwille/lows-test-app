import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableRoomsComponent } from './available-rooms.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AvailableRoomsService} from "../services/available-rooms.service";
import {AppComponent} from "../app.component";
import {CarouselComponent} from "../carousel/carousel.component";
import {ReviewsComponent} from "../reviews/reviews.component";
import {AmenitiesComponent} from "../amenities/amenities.component";
import {AreaInformationComponent} from "../area-information/area-information.component";

describe('AvailableRoomsComponent', () => {
  let component: AvailableRoomsComponent;
  let fixture: ComponentFixture<AvailableRoomsComponent>;

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


  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
