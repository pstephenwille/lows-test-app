import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AreaInformationComponent } from './area-information/area-information.component';
import { AvailableRoomsComponent } from './available-rooms/available-rooms.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ReviewsComponent,
    AmenitiesComponent,
    AreaInformationComponent,
    AvailableRoomsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
