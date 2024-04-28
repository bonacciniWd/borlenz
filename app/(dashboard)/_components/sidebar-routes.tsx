"use client";

import { BarChart, Compass, Layout, List, Trophy } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

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

const teacherRoutes = [
    { 
     icon: List,
     label: "Cursos",
     href: "/teacher/courses",
    
 },
 
 { 
     icon: BarChart,
     label: "Análises",
     href: "/teacher/analytics",
    
 },
 
 ]
 

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes ;

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