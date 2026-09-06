import { Outlet, NavLink } from "react-router-dom";
import { Bus, MapPin, Calendar, Search, User, Route } from "lucide-react";

export default function MainLayout() {
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground font-semibold"
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-lg text-primary">
          <Bus className="h-6 w-6" />
          <span>YBS Portal</span> {/* Project အသစ်မှာ ဒီ Text တန်းပြောင်းပါ */}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Team Project</span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card p-4 space-y-1 hidden md:block shrink-0">
          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Menu
          </div>
          {/* <NavLink to="/dashboard" className={navLinkStyle}>
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </NavLink> */}
          <NavLink to="/bus-lines" className={navLinkStyle}>
            <Bus className="h-4 w-4" />
            <span>Bus Lines</span>
          </NavLink>
          <NavLink to="/routes" className={navLinkStyle}>
            <Route className="h-4 w-4" />
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
            <Search className="h-4 w-4" />
            <span>Search</span>
          </NavLink>
          <NavLink to="/profile" className={navLinkStyle}>
            <User className="h-4 w-4" />
            <span>Profile</span>
          </NavLink>
        </aside>

        {/* Dynamic Page Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}