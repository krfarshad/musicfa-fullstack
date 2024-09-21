import Link from "next/link";
import { menuItems } from "./menuItems";
import { Logo } from "../Logo";
import { LoginSidebar } from "./LoginSidebar";

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col bg-[#110f11] py-4">
      <div className="mb-6 flex h-20 justify-center px-4">
        <Logo />
      </div>
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((menu) => (
          <div key={`parent_menu_${menu.title}`} className="mb-4 ">
            <p className="mb-1 ml-4 text-sm font-light text-pink-400">
              {menu.title}
            </p>
            <nav>
              <ul>
                {menu.items.map((item) => (
                  <li key={`menu_item_${item.link}_${item.title}`}>
                    <Link
                      className="flex w-full items-center gap-2 px-2.5 py-2.5 pl-8 text-[13px] font-light transition-all hover:border-r-4 hover:border-red-600 hover:bg-[#212121] hover:transition-all"
                      href={item.link}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
      <LoginSidebar />
    </div>
  );
};
