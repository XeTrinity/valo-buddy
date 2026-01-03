import { TitlesCard } from "@/app/explorer/titles/_components/titles-card";

export default async function TitlesExplorerTab() {
  const respone = await fetch("https://vinfo-api.com/json/playerTitles");
  const data = await respone.json();

  return (
    <div className="mx-auto max-w-425 rounded-md border p-4">
      <div className="flex flex-wrap justify-center gap-2">
        {data.map((title: any) => (
          <TitlesCard key={title.id} title={title} />
        ))}
      </div>
    </div>
  );
}
