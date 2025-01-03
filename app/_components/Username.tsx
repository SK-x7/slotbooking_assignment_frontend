"use client";

import React from "react";
import { useUser } from "./UserContext";
 // Import the custom hook

function Username() {
  const { username } = useUser(); // Access the username from context
  // const username  ="hello"; // Access the username from context

  return <span>{username}</span>;
}

export default Username;
