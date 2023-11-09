import { Component } from '@angular/core';
import { Rooms } from '../Rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelrooms = "Bedroom";

  numberOfRooms = 10;

  hiderooms = true;
 
  toggle(){
    this.hiderooms = !this.hiderooms;
  }

  rooms : Rooms = {
    totalRooms:20,
    availableRooms:0,
    bookedRooms:5
  }

}
