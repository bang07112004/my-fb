import React from "react";
import LeftSidebarLink from "./LeftSidebarLink";
import { BsChevronDown } from "react-icons/bs";
import { useSession } from "next-auth/react";

function LeftSidebar() {
  const { data: session } = useSession();
  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <LeftSidebarLink
          image={session?.user?.image}
          text={session?.user?.name}
        />
        <LeftSidebarLink
          image="https://raw.githubusercontent.com/AbdulMoqueet/fb-clone-yt/main/public/friends.png"
          text="Friends"
        />
        <LeftSidebarLink
          image="https://raw.githubusercontent.com/AbdulMoqueet/fb-clone-yt/main/public/group.png"
          text="Groups"
        />
        <LeftSidebarLink
          image="https://raw.githubusercontent.com/AbdulMoqueet/fb-clone-yt/main/public/market.png"
          text="Marketplace"
        />
        <LeftSidebarLink
          image="https://raw.githubusercontent.com/AbdulMoqueet/fb-clone-yt/main/public/save.png"
          text="Saved"
        />
        <LeftSidebarLink
          image="https://raw.githubusercontent.com/AbdulMoqueet/fb-clone-yt/main/public/pages.png"
          text="Pages"
        />
        <LeftSidebarLink
          image="https://raw.githubusercontent.com/AbdulMoqueet/fb-clone-yt/main/public/events.png"
          text="Events"
        />
        <LeftSidebarLink
          image="https://raw.githubusercontent.com/AbdulMoqueet/fb-clone-yt/main/public/most_recent.png"
          text="Most Recent"
        />

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div>

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
          2022
        </p>
      </div>
    </div>
  );
}

export default LeftSidebar;
