import { NotificationBing } from "iconsax-react";
import { Badge, IconButton } from "@mui/material";
import HeaderAvatar from "./HeaderAvatar";

export const Header = () => {
  return (
    <div className="flex w-full items-center  justify-between border-b border-slate-700 p-2">
      <div className="inline-flex items-center gap-2">
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
        <IconButton size="small" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationBing size="24" color="#eee" variant="Broken" />
          </Badge>
        </IconButton>
        <HeaderAvatar />
      </div>
    </div>
  );
};
