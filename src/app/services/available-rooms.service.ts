import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AvailableRoomsService {
  private availRoomsUrl = '/assets/avail-rooms.json';

  constructor(private http:HttpClient) { }

  getAvailRooms() {
    return this.http.get(this.availRoomsUrl);
  }

}
