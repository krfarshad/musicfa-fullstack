import { ArrowLeft, NotificationBing } from "iconsax-react";
import Image from "next/image";
import avatar from "@/assets/images/avatar2.jpg";

export const Header = () => {
  return (
    <div className="flex w-full items-center  justify-between border-b border-slate-700 p-2">
      {/* back and search*/}
      <div className="inline-flex items-center gap-2">
        <button className="rounded-md bg-[#373737] p-2 transition-all hover:transition-all">
          <ArrowLeft size="24" color="#eee" variant="Broken" />
        </button>
        <input
          type="search"
          name="s"
          id=""
          placeholder="Search For Musics, Artists, ..."
          className="min-w-64 rounded-md bg-[#373737] px-2 py-2 text-sm outline-none placeholder:text-gray-500"
        />
      </div>
      {/* profile and notifications */}
      <div className="inline-flex items-center gap-2">
        <div>
          <button className="rounded-md bg-[#373737] p-2 transition-all hover:transition-all">
            <NotificationBing size="24" color="#eee" variant="Broken" />
          </button>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-md bg-[#373737] p-1.5 transition-all hover:transition-all">
            <Image
              src={avatar.src}
              alt="user"
              width="30"
              height={30}
              className="rounded-full object-cover object-center"
            />
            <span className="max-w-28 text-xs">Farshad Karimi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
