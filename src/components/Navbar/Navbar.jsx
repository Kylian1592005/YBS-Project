import { Bus, Sparkles } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
                        <Bus className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-600">Yangon transit</p>
                        <h1 className="text-lg font-black tracking-tight text-slate-900">YBS Portal</h1>
                    </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 sm:flex">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span className="font-medium">Team Project</span>
                </div>
            </div>
        </header>
    );
}
