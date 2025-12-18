"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  { value: "agents", label: "Agents" },
  { value: "buddies", label: "Buddies" },
  { value: "bundles", label: "Bundles" },
  { value: "cards", label: "Cards" },
  { value: "skins", label: "Skins" },
  { value: "titles", label: "Titles" },
];

export default function ExplorerLayout({children,}: {children: React.ReactNode;}) {
  const pathname = usePathname();
  const router = useRouter();

  // pathname like "/explorer/cards" -> "cards"
  const active = pathname.split("/")[2] ?? "agents";

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* centered bar */}
      <div className="pt-4 flex justify-center">
        <Tabs value={active} onValueChange={(v) => router.push(`/explorer/${v}`)}>
          <TabsList>
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* remaining screen space */}
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}
