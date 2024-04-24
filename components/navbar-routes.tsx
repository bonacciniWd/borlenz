"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
    const  pathname = usePathname();
   

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");


    return (
        <div className="flex gap-x-2 ml-auto mr-4">
            {isTeacherPage || isPlayerPage ? (
              <Link href="/">
                    <Button size="sm" variant="ghost">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sair
                    </Button>
              </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm" variant="ghost">
                        Modo Professor
                    </Button>
                </Link>
            )}
            <UserButton  
                afterSignOutUrl="/sign-in"
            />
        </div>
    )
}