import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from '@angular/common/http';
import {AvailableRoomsService} from "./services/available-rooms.service";
import {CarouselComponent} from "./carousel/carousel.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {AmenitiesComponent} from "./amenities/amenities.component";
import {AreaInformationComponent} from "./area-information/area-information.component";
import {AvailableRoomsComponent} from "./available-rooms/available-rooms.component";

describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lows-test-project'`, () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lows-test-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#hotelTitle .text__title--lg').textContent).toContain('Red Roof Inn Seattle Airport - SEATAC');
  });
});
