import { redirect } from "next/navigation";

export default function ExplorerIndex() {
  redirect("/explorer/agents"); // default page to route to for explorer tab.
}