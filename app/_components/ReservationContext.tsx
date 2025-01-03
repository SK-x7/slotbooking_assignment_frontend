"use client";

import { createContext, useContext, useState } from "react";

interface ReservationContextData {
  slots: string[] | undefined;
  setSlots: (slots: string[] | undefined) => void;
  selectedSlot: string;
  setSelectedSlot: (selectedSlot: string) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (selectedDate: Date | undefined) => void;
}

const ReservationContext = createContext<ReservationContextData | undefined>(undefined);

function ReservationProvider({ children }: { children: React.ReactNode }) {
  // Explicitly define types for state variables
  const [slots, setSlots] = useState<string[] | undefined>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <ReservationContext.Provider
      value={{ slots, setSlots, selectedDate, setSelectedDate, selectedSlot, setSelectedSlot }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservationContext() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("Context was used outside of ReservationProvider");
  }
  return context;
}

export { ReservationProvider, useReservationContext };
