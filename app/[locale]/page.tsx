import { Main } from "@/components/Main";
import { Metadata } from "next";
import React from "react";
import {useTranslations} from 'next-intl';


export const metadata: Metadata = {
  title: "Creatsdsdve Next App",
  description: "Generdsdsated by create next app",
};
export default function Home() {
  const t = useTranslations('Index');
  console.log(t('title'))
  return <Main />;
}
