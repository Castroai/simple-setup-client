"use client";

import HomeIcon from "@/components/ui/homeicon";
import { ModeToggle } from "@/components/ui/lightSwitch";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import SignOutButton from "../../DashboardLayout/components/signout-button";

interface HeaderNavProps {
  isLoggedIn: boolean;
}

export default function HeaderNav({ isLoggedIn }: HeaderNavProps) {
  return (
    <div className="flex justify-between p-10 container mx-auto">
      <HomeIcon />
      <NavigationMenu className="">
        <NavigationMenuList className="flex">
          {isLoggedIn ? (
            <>
              <NavigationMenuItem>
                <SignOutButton />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={"/dashboard"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          ) : (
            <>
              <NavigationMenuItem>
                <Link href={"/login"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Login
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          )}
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
