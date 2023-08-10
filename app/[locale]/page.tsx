"use client";
import { Main } from "@/components/Main";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Creatsdsdve Next App",
  description: "Generdsdsated by create next app",
};
export default function Home() {
  return <Main />;
}
