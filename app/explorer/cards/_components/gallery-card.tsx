import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function GalleryCard() {
  return (
    <div className="group relative inline-block lg:w-67 overflow-hidden border rounded-md transition-transform duration-200 hover:scale-[1.01]">
      <div className="relative w-full aspect-268/640">
        <Image
          src="/placeholdercard2.png"
          alt="test"
          fill
          className="object-cover"
        />
      </div>
    {/* Disabled till Riot API access.
       <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Badge variant="secondary"></Badge>
      </div>
    */}
      <div className="p-2 text-center text-foreground bg-card border-border">
        <p className="text-sm font-medium">Test title here.</p>
      </div>
    </div>
  );
}