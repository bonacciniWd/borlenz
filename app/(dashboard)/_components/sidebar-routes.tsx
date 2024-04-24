"use client";

import { Compass, Layout, Trophy } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
   { 
    icon: Layout,
    label: "Dashboard",
    href: "/",
   
},

{ 
    icon: Compass,
    label: "Navegar",
    href: "/search",
   
},

{ 
    icon: Trophy,
    label: "Ranking",
    href: "/ranking",
   
},

]

export const SidebarRoutes = () => {

    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
           {routes.map((route) =>(
            <SidebarItem 
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
            />
           ))}
        </div>
    )
}