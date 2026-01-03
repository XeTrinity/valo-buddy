"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

type PlayerCardProps = {
  id?: string;
  name?: string;
  largeIcon: string;
};

export function GalleryCard({ card }: { card: PlayerCardProps }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="group relative inline-block lg:w-67 overflow-hidden border rounded-md transition-transform duration-200 hover:scale-[1.01]">
      <div className="relative w-full aspect-268/640">
        {!loaded && <Skeleton className="absolute inset-0" />}
        <Image
          src={card.largeIcon}
          alt={card.name ?? "Card Name Missing"}
          fill
          className={`object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="268px"
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>
      {/* Disabled untill Riot API access.
       <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Badge variant="secondary"></Badge>
      </div>
    */}
      <div className="p-2 text-center text-foreground bg-card border-border">
        <p className="text-sm font-medium">
          {card.name ?? "Card Name Missing"}
        </p>
      </div>
    </div>
  );
}
