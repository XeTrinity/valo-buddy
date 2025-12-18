
import { GalleryCard } from "./_components/gallery-card";

export default function CardsExplorerTab() {

  return (
    <div className="p-4">
      <div className="mx-auto max-w-425 rounded-md border p-4">
        <div className="flex flex-wrap justify-center gap-2">
          <GalleryCard />
        </div>
      </div>
    </div>
  );
}
