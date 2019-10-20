import {Component, OnInit} from '@angular/core';
import {AvailableRoomsService} from "../services/available-rooms.service";

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.scss'],
  providers: [AvailableRoomsService]
})
export class AvailableRoomsComponent implements OnInit {

  private rooms;
  private error;

  constructor(private roomsService: AvailableRoomsService) {
  }

  ngOnInit() {
    this.roomsService.getAvailRooms()
      .subscribe(
        room => this.rooms = room,
        error => this.error = <any>error
      );
  }

}
