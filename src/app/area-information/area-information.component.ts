import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-information',
  templateUrl: './area-information.component.html',
  styleUrls: ['./area-information.component.scss']
})
export class AreaInformationComponent implements OnInit {

  private imagePath;

  constructor() {
  }

  ngOnInit() {
    this.getMapImage();
  }

  getMapImage() {
    this.imagePath = 'url(https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&size=600x120&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C47.45145,-122.29576&key=AIzaSyCO2tmL9IYsOdDpCEZY-gZy3Rkyvr3Heow&signature=DhiWoQyL_FitS5njuE9sERQoySc=)';
  }
}
