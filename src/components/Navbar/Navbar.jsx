import { Bus } from "lucide-react";

export default function Navbar() {
    return (
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2 font-bold text-lg text-primary">
                <Bus className="h-6 w-6" />
                <span>YBS Portal</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Team Project</span>
            </div>
        </header>
    );
}
