// "use client";

// import { useEffect, useState } from "react";
// import { DayPicker, getDefaultClassNames } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import { tableInterface } from "../tables/page";
// import { TableSlot } from "../tables/[tableId]/page";
// import { useReservationContext } from "./ReservationContext";

// function DateSelector({ table, datesAvailableToBook }:{table:tableInterface,datesAvailableToBook:TableSlot[]}) {
//   const [isClient, setIsClient] = useState(false);

//   // Ensure the hook is called unconditionally
//   const { slots, setSlots, selectedDate, setSelectedDate, setSelectedSlot } = useReservationContext();

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div></div>;

//   const defaultClassNames = getDefaultClassNames();
//   const { price, maxNumOfGuests } = table;
//   const lastObject = datesAvailableToBook.at(datesAvailableToBook.length - 1);

//   function handleSelectedDate(selectedDate:Date) {
//     const date = ("0" + new Date(selectedDate).getDate()).slice(-2);
//     const month = ("0" + (new Date(selectedDate).getMonth() + 1)).slice(-2);
//     const year = new Date(selectedDate).getFullYear();
//     const tempDate = `${year}-${month}-${date}`;
//     const availableTimes =
//       datesAvailableToBook &&
//       datesAvailableToBook.find((obj) => {
//         const key = Object.keys(obj)[0];
//         return key === tempDate;
//       })?.[tempDate];

//     setSlots(availableTimes);
//     setSelectedSlot("");
//     setSelectedDate(selectedDate);
//   }

//   return (
//     <div className="flex flex-col justify-center gap-4 !w-full bg-gray-800 items-center">
//       <DayPicker
//         styles={{
//           root: { width: "100%" },
//         }}
//         className="sm:pt-5 !w-full flex justify-center items-center"
//         mode="single"
//         onSelect={handleSelectedDate}
//         selected={selectedDate}
//         classNames={{
//           today: ` text-yellow-400`,
//           selected: `bg-amber-500 border-amber-500 text-black`,
//           chevron: `${defaultClassNames.chevron} !fill-yellow-400`,
//           root: `${defaultClassNames.root} shadow-lg p-5 `,
//         }}
//         captionLayout="dropdown"
//         numberOfMonths={1}
//         disabled={[{ before: new Date() }, { after: Object.keys(lastObject)[0] }]}
//       />
//       <div className="flex items-center justify-center px-1 md:px-8 bg-accent-500 text-primary-800 h-[72px] !w-full rounded-lg sm:rounded-none">
//         <div className="flex items-baseline sm:gap-2 md:gap-6">
//           <p className="flex gap-2 justify-center">
//             <span className="text-xl md:text-2xl">${price}</span>
//             <span className="">Max capacity: {maxNumOfGuests}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DateSelector;
"use client";

import { useEffect, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { tableInterface } from "../tables/page";
import { TableSlot } from "../tables/[tableId]/page";
import { useReservationContext } from "./ReservationContext";

function DateSelector({
  table,
  datesAvailableToBook,
}: {
  table: tableInterface;
  datesAvailableToBook: TableSlot[];
}) {
  const [isClient, setIsClient] = useState(false);

  // Ensure the hook is called unconditionally
  const { slots, setSlots, selectedDate, setSelectedDate, setSelectedSlot } =
    useReservationContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div></div>;

  const defaultClassNames = getDefaultClassNames();
  const { price, maxNumOfGuests } = table;
  const lastObject = datesAvailableToBook.at(datesAvailableToBook.length - 1);

  // Update handler to work with Date | undefined
  function handleSelectedDate(selected: Date | undefined) {
    if (!selected) return;

    const date = ("0" + new Date(selected).getDate()).slice(-2);
    const month = ("0" + (new Date(selected).getMonth() + 1)).slice(-2);
    const year = new Date(selected).getFullYear();
    const tempDate = `${year}-${month}-${date}`;

    const availableTimes =
      datesAvailableToBook &&
      datesAvailableToBook.find((obj) => {
        const key = Object.keys(obj)[0];
        return key === tempDate;
      })?.[tempDate];

    setSlots(availableTimes || []); // Fallback to an empty array if undefined
    setSelectedSlot("");
    setSelectedDate(selected);
  }

  // Parse the last available date into a Date object
  const lastAvailableDate = lastObject
    ? new Date(Object.keys(lastObject)[0])
    : undefined;

  return (
    <div className="flex flex-col justify-center gap-4 !w-full bg-gray-800 items-center">
      <DayPicker
        styles={{
          root: { width: "100%" },
        }}
        className="sm:pt-5 !w-full flex justify-center items-center"
        mode="single"
        onSelect={handleSelectedDate}
        selected={selectedDate}
        classNames={{
          today: ` text-yellow-400`,
          selected: `bg-amber-500 border-amber-500 text-black`,
          chevron: `${defaultClassNames.chevron} !fill-yellow-400`,
          root: `${defaultClassNames.root} shadow-lg p-5 `,
        }}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={[
          { before: new Date() },
          ...(lastAvailableDate ? [{ after: lastAvailableDate }] : []),
        ]}
      />
      <div className="flex items-center justify-center px-1 md:px-8 bg-accent-500 text-primary-800 h-[72px] !w-full rounded-lg sm:rounded-none">
        <div className="flex items-baseline sm:gap-2 md:gap-6">
          <p className="flex gap-2 justify-center">
            <span className="text-xl md:text-2xl">${price}</span>
            <span className="">Max capacity: {maxNumOfGuests}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
