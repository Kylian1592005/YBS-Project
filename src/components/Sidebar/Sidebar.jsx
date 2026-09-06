import { Bus, Calendar, MapPin, Route as RouteIcon, Search as SearchIcon, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const navLinkStyle = ({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
            isActive
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        }`;

    return (
        <aside className="w-64 border-r border-border bg-card p-4 space-y-1 hidden md:block shrink-0 min-h-[calc(100vh-4rem)]">
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Menu</div>
            <NavLink to="/bus-lines" className={navLinkStyle}>
                <Bus className="h-4 w-4" />
                <span>Bus Lines</span>
            </NavLink>
            <NavLink to="/routes" className={navLinkStyle}>
                <RouteIcon className="h-4 w-4" />
                <span>Routes</span>
            </NavLink>
            <NavLink to="/stops" className={navLinkStyle}>
                <MapPin className="h-4 w-4" />
                <span>Stops</span>
            </NavLink>
            <NavLink to="/schedules" className={navLinkStyle}>
                <Calendar className="h-4 w-4" />
                <span>Schedules</span>
            </NavLink>

            <div className="pt-4 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                User Area
            </div>
            <NavLink to="/search" className={navLinkStyle}>
                <SearchIcon className="h-4 w-4" />
                <span>Search</span>
            </NavLink>
            <NavLink to="/profile" className={navLinkStyle}>
                <User className="h-4 w-4" />
                <span>Profile</span>
            </NavLink>
        </aside>
    );
}
