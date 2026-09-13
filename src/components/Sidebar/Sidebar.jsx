import { Bus, MapPin, Search as SearchIcon, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const navLinkStyle = ({ isActive }) =>
        `flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
            isActive
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`;

    return (
        <aside className="hidden w-72 shrink-0 rounded-[28px] border border-slate-200 bg-white/80 p-4 shadow-[0_15px_35px_rgba(15,23,42,0.03)] backdrop-blur-sm md:block">
            <div className="mb-4 px-3 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Navigation</p>
            </div>

            <nav className="space-y-1.5">
                <NavLink to="/bus-lines" className={navLinkStyle}>
                    <Bus className="h-4 w-4" />
                    <span>Bus Lines</span>
                </NavLink>
                <NavLink to="/stops" className={navLinkStyle}>
                    <MapPin className="h-4 w-4" />
                    <span>Stops</span>
                </NavLink>

                <div className="px-3 pb-2 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">User Area</p>
                </div>

                <NavLink to="/search" className={navLinkStyle}>
                    <SearchIcon className="h-4 w-4" />
                    <span>Search</span>
                </NavLink>
                <NavLink to="/profile" className={navLinkStyle}>
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                </NavLink>
            </nav>
        </aside>
    );
}
