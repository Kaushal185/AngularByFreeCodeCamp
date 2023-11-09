import { Component } from '@angular/core';

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
}
