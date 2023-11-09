export interface Rooms {
    totalRooms : number;
    availableRooms : number;
    bookedRooms : number;
}
export interface RoomList{
    roomTypes:string;
    amenities:string;
    price:number;
    photos:string;
    checkInTime:Date;
    checkOutTime:Date;
}