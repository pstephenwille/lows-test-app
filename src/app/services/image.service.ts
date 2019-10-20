import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private reviews = [];

  constructor() {
  }

  getHotelImageData() {
    console.log('svc.....image service');
    return this.reviews = [
      {name: 'hotel-1', url: '/assets/hotel-1.jpg'},
      {name: 'hotel-2', url: '/assets/hotel-2.jpg'},
      {name: 'hotel-3', url: '/assets/hotel-3.jpg'},
    ]
  }
}
