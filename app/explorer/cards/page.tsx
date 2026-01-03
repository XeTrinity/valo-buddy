import { GalleryCard } from "./_components/gallery-card";

export default async function CardsExplorerTab() {
  const response = await fetch("https://vinfo-api.com/json/playerCards");
  const data = await response.json();

  return (
    <div className="mx-auto max-w-425 rounded-md border p-4">
      <div className="flex flex-wrap justify-center gap-2">
        {data.map((card: any) => (
          <GalleryCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
