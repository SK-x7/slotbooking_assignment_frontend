"use server";
// import axios from "axios"
import { createBooking, newBookingData } from "./data-service";
import { revalidatePath } from "next/cache";
import { bookingDataInterface } from "../_components/ReservationForm";

interface FormDataInterface {
  get(name: string): string | null;
  get(phoneNum: string): string | null;
  get(numGuests: string): string | null;
  get(observations: string): string | null;
}

export async function createReservationAction({
  bookingData,
  formData,
}: {
  bookingData: bookingDataInterface;
  formData: FormData;
}) {
  const name = formData.get("name") as string || "";
  const phoneNum = formData.get("phoneNum") as string || "";
  const numGuests = Number(formData.get("numGuests")) || 0;
  const observations = (formData.get("observations") || "").toString().slice(0, 1000);

  const newBookingData: newBookingData = {
    ...bookingData,
    name,
    phoneNum,
    numGuests,
    observations,
  };

  console.log(newBookingData);

  const hasBookingCreated = await createBooking(newBookingData);
  revalidatePath(`/tables/${bookingData.tableId}`);

  return hasBookingCreated;
}
