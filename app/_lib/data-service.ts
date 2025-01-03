import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface newBookingData{
    name:string,
    phoneNum:string,
    numGuests:number,
    observations:string,
    startDate:Date|string,
    endDate:Date|string,
    price:number,
    tableId:number
}

const API_URL  = "https://slotbooking-assignment-backend.vercel.app";

export async function getAllTablesFromApi(){
    const res = await axios.get(`${API_URL}/api/v1/tables`);
    console.log(res.data);
    if(res.data.status==="success"){
        return res.data.allTables.tables
    }
    return res.data;    
}

export async function getTableFromApi(tableId:string){
    try {
        
   
    const res = await axios.get(`${API_URL}/api/v1/tables/${tableId}`);
    console.log(res.data);
    if(res.data.status==="success"){
        return res.data.table[0];
    }
    return res.data;    
} catch (error) {
    console.log(error)  
}   
}

export async function getTableSlotsFromApi(tableId:string){
    if((tableId && !tableId.length)) return null;

    const res = await axios.get(`${API_URL}/api/v1/tables/getAvailability/${tableId}`);
    console.log(res.data.data.availableSlots);
    if(res.data.status==="success"){
        return res.data.data.availableSlots;
    }
    return res.data;    
}


export async function createBooking(bookingData:newBookingData) {
    console.log(bookingData,"=================");
    const res =  await axios.post(`${API_URL}/api/v1/bookings`,bookingData
    );
    console.log(res.data);
    if(res.data.status==="success"){
        revalidatePath(`/tables/${bookingData.tableId}`);
        redirect("/bookings");
        return true
    }else{
        return false
    }
}

export async function getUserBookingsFromApi(username:string) {
    if((username && !username.length)) return null;
    console.log(username);
    // localhost:8080/api/v1/bookings/satyen
    const res = await axios.get(`${API_URL}/api/v1/bookings/${username}`);
    console.log(res.data);
    // return [];
    if(res.data.status==="success"){
        console.log(res.data.bookingsData.bookings);
        return res.data.bookingsData.bookings;
    }else{
        return [];
    }
    
}