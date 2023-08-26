import React from "react";
import { MenuItem } from "./MenuItem";
import { ButtonTweet } from "./ButtonTweet";
import { Profile } from "./Profile";
import Link from "next/link";
import { useTranslations } from "next-intl";


export const SideMenu = () => {
  const t = useTranslations("Menu");

  return (
    <div className="max-w-[300px] flex flex-col justify-between border-r-[1px] border-gray-200">
      <div>
        <MenuItem icon="/sideMenuIcons/Vector.png" menuItem={""} />
        <Link href={"/"}>
          <MenuItem
            icon="/sideMenuIcons/Home/Vector.png"
            menuItem={t("Home")}
          />
        </Link>
        <Link href={"/explore"}>
          <MenuItem
            icon="/sideMenuIcons/Explore/Vector.png"
            menuItem={t("Explore")}
          />
        </Link>
        <Link href={"/notifications"}>
          <MenuItem
            icon="/sideMenuIcons/Notifications/Vector.png"
            menuItem={t("Notifications")}
          />
        </Link>
        <Link href={"/messages"}>
          <MenuItem
            icon="/sideMenuIcons/Messages/Vector.png"
            menuItem={t("Messages")}
          />
        </Link>
        <Link href={"/bookmarks"}>
          <MenuItem
            icon="/sideMenuIcons/Bookmarks/Vector.png"
            menuItem={t("Bookmarks")}
          />
        </Link>
        <Link href={"/profile"}>
          <MenuItem
            icon="/sideMenuIcons/Profile/Vector.png"
            menuItem={t("Profile")}
          />
        </Link>
        <MenuItem icon="/sideMenuIcons/More/Vector.png" menuItem={t("More")} />

        <div className="hidden md:block">
          <ButtonTweet y={220} />
        </div>
        <div className="md:hidden">
          <ButtonTweet y={47} />
        </div>
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};
