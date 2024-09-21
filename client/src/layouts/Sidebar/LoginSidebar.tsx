import { Login, Logout } from "iconsax-react";
export const LoginSidebar = () => {
  const loggedIn = true;
  return (
    <div className="px-4 py-2">
      {loggedIn ? (
        <button className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-[#202020] p-2 text-xs font-normal capitalize transition-all hover:bg-red-800 hover:transition-all">
          <Logout size="20" color="#fff" />
          Logout
        </button>
      ) : (
        <button className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-[#202020]  p-2 text-xs font-normal capitalize transition-all hover:bg-red-800 hover:transition-all">
          <Login size="20" color="#fff" />
          Login
        </button>
      )}
    </div>
  );
};
