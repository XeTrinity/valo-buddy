import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <>
        <div>
            
        </div>



      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="agents">Agents</TabsTrigger>
          <TabsTrigger value="maps">Maps</TabsTrigger>
          <TabsTrigger value="weapons">Weapons</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
        </TabsContent>
        <TabsContent value="agents">
        </TabsContent>
        <TabsContent value="maps">
        </TabsContent>
        <TabsContent value="weapons">
        </TabsContent>
      </Tabs>
    </>
  );
}
