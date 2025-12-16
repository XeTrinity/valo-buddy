import { Separator } from "@/components/ui/separator";

export function AppFooter() {
    return (
        <footer >
        <Separator className="mb-6"/>
            <div className="flex flex-row justify-around pb-4 text-muted-foreground text-sm">
                <div>
                    <p> © {new Date().getFullYear()} Valo Buddy</p>
                </div>
                <div>
                    <p> Built with Next.js & shadcn/ui </p>
                </div>
            </div>
        </footer>
    )
}