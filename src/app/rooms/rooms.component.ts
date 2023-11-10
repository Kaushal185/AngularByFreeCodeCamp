import { Component } from '@angular/core';
import { RoomList, Rooms } from '../Rooms';
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
    availableRooms:10,
    bookedRooms:5
  }
  roomList : RoomList[] = [
    {
      roomNumber:1,
      roomTypes:"Deluxe rooms",
      amenities:'AC,Free wi-fi,TV,Bathroom,Ktichen',
      price:500,
      photos:'',
      checkInTime:new Date('11-Nov-2023'),
      checkOutTime:new Date('21-Nov-2023')
    },
    {
      roomNumber:2,
      "roomTypes": "Suite",
      "amenities": "AC,Free wi-fi,TV,Bathroom,Kitchen",
      "price": 700,
      "photos": "",
      "checkInTime": new Date('15-Nov-2023'),
      "checkOutTime": new Date('25-Nov-2023')
    },
    {
      roomNumber:3,
      "roomTypes": "Standard rooms",
      "amenities": "AC,Free wi-fi,TV,Bathroom",
      "price": 400,
      "photos": "",
      "checkInTime": new Date('18-Nov-2023'),
      "checkOutTime": new Date('28-Nov-2023')
    },
    {
      roomNumber:4,
      "roomTypes": "Executive Suite",
      "amenities": "AC,Free wi-fi,TV,Bathroom,Kitchen",
      "price": 800,
      "photos": "",
      "checkInTime": new Date('20-Nov-2023'),
      "checkOutTime": new Date('30-Nov-2023')
    },
    {
      roomNumber:5,
      "roomTypes": "Family Suite",
      "amenities": "AC,Free wi-fi,TV,Bathroom,Kitchen",
      "price": 900,
      "photos": "",
      "checkInTime": new Date('22-Nov-2023'),
      "checkOutTime": new Date('02-Dec-2023')
    },
    {
      roomNumber:6,
      "roomTypes": "Penthouse",
      "amenities": "AC,Free wi-fi,TV,Bathroom,Kitchen",
      "price": 1200,
      "photos": "",
      "checkInTime": new Date('25-Nov-2023'),
      "checkOutTime": new Date('05-Dec-2023')
    }
  ]

}
