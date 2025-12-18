import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export function AppHeader() {
  return (
    <header className="border-b">
      <div className="flex items-center px-4 py-2">
        {/* Left cluster: logo + nav */}
        <div className="flex items-center gap-4">
          <Link href="/home" className="flex items-center gap-2" aria-label="Home">
            <Image src="/V-Logo-temp.png" alt="ValoBuddyLogo" width={48} height={48} priority />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/home">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/explorer">Explorer</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/shop">Shop</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Right Cluster: */}
        <div className="ml-auto">
          <ModeToggle /> {/* Toggle Light/Dark mode */}
        </div>
      </div>
    </header>
  );
}