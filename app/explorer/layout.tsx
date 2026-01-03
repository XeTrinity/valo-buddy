import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardsExplorerTab from "@/app/explorer/cards/page";
import TitlesExplorerTab from "@/app/explorer/titles/page";

export default function ExplorerLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Tabs defaultValue="agents" className="p-4">
        <TabsList className="mx-auto mb-4">
          <TabsTrigger value="agents">Agents</TabsTrigger>
          <TabsTrigger value="buddies">Buddies</TabsTrigger>
          <TabsTrigger value="bundles">Bundles</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="skins">Skins</TabsTrigger>
          <TabsTrigger value="titles">Titles</TabsTrigger>
        </TabsList>
        <TabsContent value="agents"></TabsContent>
        <TabsContent value="buddies"></TabsContent>
        <TabsContent value="cards">
          <CardsExplorerTab />
        </TabsContent>
        <TabsContent value="skins"></TabsContent>
        <TabsContent value="titles">
          <TitlesExplorerTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
