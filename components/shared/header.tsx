import { getProfile } from "@/actions/profile.actions";
import React from "react";
import Navbar from "./navbar";

export default async function Header() {
  const profile = await getProfile();

  return (
    <header className="sticky top-0 container z-50">
      <Navbar profile={profile} />
    </header>
  );
}
