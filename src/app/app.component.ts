import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'lows-test-project';
  breadcrumbs:string = 'Red Roof Inn Seattle Airport - SEATAC, Seattle';
  hotelTitle:string = 'Red Roof Inn Seattle Airport - SEATAC';

  constructor() {}

}
