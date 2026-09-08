import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  X,
} from "lucide-react";
import { useState } from "react";
import { allStops } from "../../data/mockData";

export default function Search() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'stops' | 'lines'

  const searchResults = {
    stops: allStops.map((stop) => ({
      ...stop,
      lines: stop.passingLines?.map((line) => line.lineCode) || [],
      distance: "Yangon",
    })),
    lines: [
      {
        code: "YBS 21",
        route: "Hmawbi → Sule",
        operatingHours: "05:00 AM - 09:00 PM",
        frequency: "Every 5 mins",
      },
      {
        code: "YBS 36",
        route: "Hmawbi → Sule (Express)",
        operatingHours: "05:30 AM - 08:30 PM",
        frequency: "Every 8 mins",
      },
    ],
  };

  const normalizedQuery = query.trim().toLowerCase();
  const matchingStops = searchResults.stops.filter((stop) =>
    [stop.name, stop.stopId, stop.township, stop.location, ...stop.lines]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(normalizedQuery))
  );

  const clearSearch = () => setQuery("");

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* ────────────────── HEADER & INPUT SECTION ────────────────── */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-base-content">
            Search
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Find YBS bus stops, routes, lines, or landmarks across Yangon
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative">
          <SearchIcon
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by stop name, line code, or township (e.g. Hledan, YBS 21, Sule)..."
            className="input input-bordered w-full pl-12 pr-10 py-6 text-sm rounded-2xl border-base-300 focus:border-blue-500 focus:outline-none shadow-sm"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pt-1">
          {[
            { id: "all", label: "All Results" },
            { id: "stops", label: "Stops & Stations" },
            { id: "lines", label: "Bus Lines" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-base-100 text-slate-600 border border-base-200 hover:bg-base-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ────────────────── SEARCH CONTENT / RESULTS ────────────────── */}
      {query.trim() === "" ? (
        /* DEFAULT STATE: Recent & Popular Searches */
        <div className="space-y-6 pt-2">
          {/* Quick Search Tags */}
          <div className="bg-base-100 border border-base-200 rounded-2xl p-5 shadow-sm space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp size={14} className="text-blue-600" /> Popular
              Searches
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Hledan Centre",
                "YBS 21",
                "Sule Pagoda",
                "Myaynigone",
                "YBS 65",
                "Insein Market",
                "YBS 36",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="px-3 py-1.5 bg-base-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 border border-transparent rounded-xl text-xs font-semibold transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Route Planner Promo / Action */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={14} /> Smart Navigation
              </p>
              <p className="font-bold text-slate-800 text-sm">
                Need step-by-step directions between two locations?
              </p>
              <p className="text-xs text-slate-500">
                Use our dynamic Route Finder to calculate transfers and bus times.
              </p>
            </div>
            <Link
              to="/routes"
              className="btn btn-sm btn-primary normal-case rounded-xl gap-2 whitespace-nowrap"
            >
              Find Route <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      ) : (
        /* SEARCH RESULTS ACTIVE VIEW */
        <div className="space-y-6">
          {/* BUS STOPS SECTION */}
          {(activeTab === "all" || activeTab === "stops") && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                Stops ({matchingStops.length})
              </h2>

              <div className="bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm divide-y divide-base-200">
                {matchingStops.map((stop) => (
                  <Link
                    key={stop.id}
                    to={`/stops/${stop.id}`}
                    state={{ stop }}
                    className="p-4 flex items-center justify-between hover:bg-base-200/50 transition group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 mt-0.5">
                        <MapPin size={18} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-sm text-base-content">
                            {stop.name}
                          </p>
                          <span className="text-[10px] font-mono font-bold bg-base-200 text-slate-600 px-1.5 py-0.5 rounded">
                            {stop.stopId}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {stop.township} • {stop.distance}
                        </p>
                        <div className="flex gap-1 pt-1">
                          {stop.lines.map((line) => (
                            <span
                              key={line}
                              className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none text-[10px]"
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-slate-400 group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* BUS LINES SECTION */}
          {(activeTab === "all" || activeTab === "lines") && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                Bus Lines ({searchResults.lines.length})
              </h2>

              <div className="bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm divide-y divide-base-200">
                {searchResults.lines.map((line) => (
                  <Link
                    key={line.code}
                    to={`/routes/${line.code.toLowerCase().replace(" ", "-")}`}
                    className="p-4 flex items-center justify-between hover:bg-base-200/50 transition group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 bg-slate-900 text-white rounded-xl mt-0.5 font-black text-xs">
                        {line.code}
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-sm text-base-content">
                          {line.route}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {line.operatingHours}
                          </span>
                          <span>•</span>
                          <span className="text-emerald-600 font-semibold">
                            {line.frequency}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-slate-400 group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}