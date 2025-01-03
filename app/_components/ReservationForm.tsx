// "use client";

// import { useEffect, useState } from "react";
// import { useReservationContext } from "./ReservationContext";
// import SubmitButton from "./SubmitButton";
// import { createReservationAction } from "../_lib/actions";

// export interface bookingDataInterface {
//   startDate: Date | string;
//   endDate: Date | string;
//   tableId: number;
//   price: number;
// }
// export interface tableDataInterface {
//   id: number;
//   name: string;
//   maxNumOfGuests: number;
//   price: number;
// }

// function ReservationForm({ table }: { table: tableDataInterface }) {
//   const [isClient, setIsClient] = useState(false);

//   const { selectedSlot, setSelectedSlot, selectedDate, setSelectedDate } = useReservationContext();

//   const { maxNumOfGuests, id, price } = table;

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div></div>;

//   const handleSubmit = async (formData: FormData) => {
//     if (!selectedDate) {
//       alert("Please select a date.");
//       return;
//     }

//     const startDate = new Date(
//       new Date(selectedDate).setHours(
//         Number(selectedSlot.slice(0, 2)),
//         Number(selectedSlot.slice(3, 5))
//       )
//     ).toUTCString();

//     const endDate = new Date(
//       new Date(selectedDate).setHours(
//         Number(selectedSlot.slice(6, 8)),
//         Number(selectedSlot.slice(9, 11))
//       )
//     ).toUTCString();

//     const bookingData: bookingDataInterface = {
//       startDate,
//       endDate,
//       tableId: id,
//       price,
//     };

//     console.log(bookingData, selectedSlot);

//     const createReservationActionWithData = createReservationAction.bind(null, bookingData);

//     const hasBookingCreated = await createReservationActionWithData(formData);

//     setSelectedDate(undefined);
//     setSelectedSlot("");

//     if (hasBookingCreated) {
//       alert("Success!");
//     } else {
//       alert("Failure!");
//     }
//   };

//   return (
//     <div className="!w-full bg-gray-800">
//       <form
//         action={handleSubmit}
//         className="bg-primary-900 py-10 px-5 sm:px-8 md:px-16 text-lg flex gap-5 flex-col text-white"
//       >
//         <div className="space-y-2">
//           <label htmlFor="name">Enter Your Name :</label>
//           <input
//             name="name"
//             id="name"
//             defaultValue={"Helloooooooooo"}
//             className="px-5 py-3 text-black"
//             type="text"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="phoneNum">Enter Contact Number :</label>
//           <input
//             name="phoneNum"
//             id="phoneNum"
//             defaultValue={"6868876868"}
//             className="px-5 py-3 text-black"
//             type="text"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="numGuests">How many guests?</label>
//           <select
//             name="numGuests"
//             id="numGuests"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm bg-transparent"
//             required
//           >
//             <option value="" key="" className="!bg-gray-900">
//               Select number of guests...
//             </option>
//             {Array.from({ length: maxNumOfGuests as number }, (_, i) => i + 1).map((x) => (
//               <option value={x} key={x} className="!bg-gray-900">
//                 {x} {x === 1 ? "guest" : "guests"}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="observations">Anything we should know about your stay?</label>
//           <textarea
//             defaultValue={"Hello uyu uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"}
//             name="observations"
//             id="observations"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-black"
//             placeholder="Any pets, allergies, special requirements, etc.?"
//           />
//         </div>

//         <div className="flex justify-end items-center gap-6">
//           {!selectedSlot.length && !selectedDate ? (
//             <p className="text-primary-300 text-base">Start by selecting dates</p>
//           ) : (
//             <SubmitButton pendingLabel={"Reserving Cabin..."}>Reserve now</SubmitButton>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ReservationForm;
// "use client";

// import { useEffect, useState } from "react";
// import { useReservationContext } from "./ReservationContext";
// import SubmitButton from "./SubmitButton";
// import { createReservationAction } from "../_lib/actions";

// export interface bookingDataInterface {
//   startDate: Date | string;
//   endDate: Date | string;
//   tableId: number;
//   price: number;
// }
// export interface tableDataInterface {
//   id: number;
//   name: string;
//   maxNumOfGuests: number;
//   price: number;
// }

// function ReservationForm({ table }: { table: tableDataInterface }) {
//   const [isClient, setIsClient] = useState(false);

//   const { selectedSlot, setSelectedSlot, selectedDate, setSelectedDate } =
//     useReservationContext();

//   const { maxNumOfGuests, id, price } = table;

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div></div>;

//   const handleSubmit = async (formData: FormData) => {
//     if (!selectedDate) {
//       alert("Please select a date.");
//       return;
//     }

//     const startDate = new Date(
//       new Date(selectedDate).setHours(
//         Number(selectedSlot.slice(0, 2)),
//         Number(selectedSlot.slice(3, 5))
//       )
//     ).toUTCString();

//     const endDate = new Date(
//       new Date(selectedDate).setHours(
//         Number(selectedSlot.slice(6, 8)),
//         Number(selectedSlot.slice(9, 11))
//       )
//     ).toUTCString();

//     const bookingData: bookingDataInterface = {
//       startDate,
//       endDate,
//       tableId: id,
//       price,
//     };

//     console.log(bookingData, selectedSlot);

//     // Wrap bookingData and formData into an object
//     const createReservationActionWithData = createReservationAction.bind(null, {
//       bookingData,
//       formData,
//     });

//     const hasBookingCreated = await createReservationActionWithData();

//     setSelectedDate(undefined);
//     setSelectedSlot("");

//     if (hasBookingCreated) {
//       alert("Success!");
//     } else {
//       alert("Failure!");
//     }
//   };

//   return (
//     <div className="!w-full bg-gray-800">
//       <form
//         action={handleSubmit}
//         className="bg-primary-900 py-10 px-5 sm:px-8 md:px-16 text-lg flex gap-5 flex-col text-white"
//       >
//         <div className="space-y-2">
//           <label htmlFor="name">Enter Your Name :</label>
//           <input
//             name="name"
//             id="name"
//             defaultValue={"Helloooooooooo"}
//             className="px-5 py-3 text-black"
//             type="text"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="phoneNum">Enter Contact Number :</label>
//           <input
//             name="phoneNum"
//             id="phoneNum"
//             defaultValue={"6868876868"}
//             className="px-5 py-3 text-black"
//             type="text"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="numGuests">How many guests?</label>
//           <select
//             name="numGuests"
//             id="numGuests"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm bg-transparent"
//             required
//           >
//             <option value="" key="" className="!bg-gray-900">
//               Select number of guests...
//             </option>
//             {Array.from({ length: maxNumOfGuests as number }, (_, i) => i + 1).map((x) => (
//               <option value={x} key={x} className="!bg-gray-900">
//                 {x} {x === 1 ? "guest" : "guests"}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="observations">Anything we should know about your stay?</label>
//           <textarea
//             defaultValue={
//               "Hello uyu uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
//             }
//             name="observations"
//             id="observations"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-black"
//             placeholder="Any pets, allergies, special requirements, etc.?"
//           />
//         </div>

//         <div className="flex justify-end items-center gap-6">
//           {!selectedSlot.length && !selectedDate ? (
//             <p className="text-primary-300 text-base">Start by selecting dates</p>
//           ) : (
//             <SubmitButton pendingLabel={"Reserving Cabin..."}>
//               Reserve now
//             </SubmitButton>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ReservationForm;
// "use client";

// import { useEffect, useState } from "react";
// import { useReservationContext } from "./ReservationContext";
// import SubmitButton from "./SubmitButton";
// import { createReservationAction } from "../_lib/actions";

// export interface bookingDataInterface {
//   startDate: Date | string;
//   endDate: Date | string;
//   tableId: number;
//   price: number;
// }
// export interface tableDataInterface {
//   id: number;
//   name: string;
//   maxNumOfGuests: number;
//   price: number;
// }

// function ReservationForm({ table }: { table: tableDataInterface }) {
//   const [isClient, setIsClient] = useState(false);

//   const { selectedSlot, setSelectedSlot, selectedDate, setSelectedDate } = useReservationContext();

//   const { maxNumOfGuests, id, price } = table;

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div></div>;

//   const handleSubmit = async (formData: FormData) => {
//     if (!selectedDate) {
//       alert("Please select a date.");
//       return;
//     }

//     const startDate = new Date(
//       new Date(selectedDate).setHours(
//         Number(selectedSlot.slice(0, 2)),
//         Number(selectedSlot.slice(3, 5))
//       )
//     ).toUTCString();

//     const endDate = new Date(
//       new Date(selectedDate).setHours(
//         Number(selectedSlot.slice(6, 8)),
//         Number(selectedSlot.slice(9, 11))
//       )
//     ).toUTCString();

//     const bookingData: bookingDataInterface = {
//       startDate,
//       endDate,
//       tableId: id,
//       price,
//     };

//     console.log(bookingData, selectedSlot);

//     const createReservationActionWithData = createReservationAction.bind(null, bookingData);

//     const hasBookingCreated = await createReservationActionWithData(formData);

//     setSelectedDate(undefined);
//     setSelectedSlot("");

//     if (hasBookingCreated) {
//       alert("Success!");
//     } else {
//       alert("Failure!");
//     }
//   };

//   return (
//     <div className="!w-full bg-gray-800">
//       <form
//         action={handleSubmit}
//         className="bg-primary-900 py-10 px-5 sm:px-8 md:px-16 text-lg flex gap-5 flex-col text-white"
//       >
//         <div className="space-y-2">
//           <label htmlFor="name">Enter Your Name :</label>
//           <input
//             name="name"
//             id="name"
//             defaultValue={"Helloooooooooo"}
//             className="px-5 py-3 text-black"
//             type="text"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="phoneNum">Enter Contact Number :</label>
//           <input
//             name="phoneNum"
//             id="phoneNum"
//             defaultValue={"6868876868"}
//             className="px-5 py-3 text-black"
//             type="text"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="numGuests">How many guests?</label>
//           <select
//             name="numGuests"
//             id="numGuests"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm bg-transparent"
//             required
//           >
//             <option value="" key="" className="!bg-gray-900">
//               Select number of guests...
//             </option>
//             {Array.from({ length: maxNumOfGuests as number }, (_, i) => i + 1).map((x) => (
//               <option value={x} key={x} className="!bg-gray-900">
//                 {x} {x === 1 ? "guest" : "guests"}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="observations">Anything we should know about your stay?</label>
//           <textarea
//             defaultValue={"Hello uyu uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"}
//             name="observations"
//             id="observations"
//             className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-black"
//             placeholder="Any pets, allergies, special requirements, etc.?"
//           />
//         </div>

//         <div className="flex justify-end items-center gap-6">
//           {!selectedSlot.length && !selectedDate ? (
//             <p className="text-primary-300 text-base">Start by selecting dates</p>
//           ) : (
//             <SubmitButton pendingLabel={"Reserving Cabin..."}>Reserve now</SubmitButton>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }  

// export default ReservationForm;
"use client";

import { useEffect, useState } from "react";
import { useReservationContext } from "./ReservationContext";
import SubmitButton from "./SubmitButton";
import { createReservationAction } from "../_lib/actions";

export interface bookingDataInterface {
  startDate: Date | string;
  endDate: Date | string;
  tableId: number;
  price: number;
}
export interface tableDataInterface {
  id: number;
  name: string;
  maxNumOfGuests: number;
  price: number;
}

function ReservationForm({ table }: { table: tableDataInterface }) {
  const [isClient, setIsClient] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { selectedSlot, setSelectedSlot, selectedDate, setSelectedDate } =
    useReservationContext();

  const { maxNumOfGuests, id, price } = table;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div></div>;

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { [key: string]: string } = {};
    const name = formData.get("name")?.toString().trim();
    const phoneNum = formData.get("phoneNum")?.toString().trim();
    const numGuests = formData.get("numGuests")?.toString();

    // Validate name
    if (!name || name.length < 2) {
      newErrors["name"] = "Name must be at least 2 characters long.";
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/; // Simple 10-digit validation
    if (!phoneNum || !phoneRegex.test(phoneNum)) {
      newErrors["phoneNum"] = "Enter a valid 10-digit phone number.";
    }

    // Validate number of guests
    if (!numGuests || Number(numGuests) <= 0) {
      newErrors["numGuests"] = "Please select the number of guests.";
    }

    // Validate date and time
    if (!selectedDate) {
      newErrors["selectedDate"] = "Please select a date.";
    }

    if (!selectedSlot) {
      newErrors["selectedSlot"] = "Please select a time slot.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (formData: FormData) => {
    // Validate form
    if (!validateForm(formData)) {
      alert("Please fix the errors in the form.");
      return;
    }

    const startDate = new Date(
      new Date(selectedDate!).setHours(
        Number(selectedSlot.slice(0, 2))+5,
        Number(selectedSlot.slice(3, 5))+30
      )
    ).toUTCString();

    const endDate = new Date(
      new Date(selectedDate!).setHours(
        Number(selectedSlot.slice(6, 8))+5,
        Number(selectedSlot.slice(9, 11))+30
      )
    ).toUTCString();

    const bookingData: bookingDataInterface = {
      startDate,
      endDate,
      tableId: id,
      price,
    };

    console.log(bookingData, selectedSlot);

    // Wrap bookingData and formData into an object
    const createReservationActionWithData = createReservationAction.bind(null, {
      bookingData,
      formData,
    });

    const hasBookingCreated = await createReservationActionWithData();

    setSelectedDate(undefined);
    setSelectedSlot("");

    if (hasBookingCreated) {
      alert("Success!");
    } else {
      alert("Failure!");
    }
  };

  return (
    <div className="!w-full bg-gray-800">
      <form
        action={handleSubmit}
        className="bg-primary-900 py-10 px-5 sm:px-8 md:px-16 text-lg flex gap-5 flex-col text-white"
      >
        <div className="space-y-2">
          <label htmlFor="name">Enter Your Name :</label>
          <input
            name="name"
            id="name"
            defaultValue=""
            className={`px-5 py-3 text-black ${
              errors.name ? "border border-red-500" : ""
            }`}
            type="text"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNum">Enter Contact Number :</label>
          <input
            name="phoneNum"
            id="phoneNum"
            defaultValue=""
            className={`px-5 py-3 text-black ${
              errors.phoneNum ? "border border-red-500" : ""
            }`}
            type="text"
          />
          {errors.phoneNum && (
            <p className="text-red-500 text-sm">{errors.phoneNum}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className={`px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm bg-transparent ${
              errors.numGuests ? "border border-red-500" : ""
            }`}
            required
          >
            <option value="" key="" className="!bg-gray-900">
              Select number of guests...
            </option>
            {Array.from({ length: maxNumOfGuests as number }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x} className="!bg-gray-900">
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          {errors.numGuests && (
            <p className="text-red-500 text-sm">{errors.numGuests}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">Anything we should know about your stay?</label>
          <textarea
            defaultValue=""
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-black"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {errors.selectedDate && (
            <p className="text-red-500 text-sm">{errors.selectedDate}</p>
          )}
          {errors.selectedSlot && (
            <p className="text-red-500 text-sm">{errors.selectedSlot}</p>
          )}
          {!selectedSlot.length && !selectedDate ? (
            <p className="text-primary-300 text-base">Start by selecting dates</p>
          ) : (
            <SubmitButton pendingLabel={"Reserving Cabin..."}>
              Reserve now
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;

