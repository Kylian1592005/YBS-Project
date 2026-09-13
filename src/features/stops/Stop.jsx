import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bus,
  ChevronRight,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { allStops, detailedStopsMap } from "../../data/mockData";

const FAVORITE_STOPS_KEY = "favoriteStops";
const DEFAULT_FAVORITE_STOPS = ["s1", "s7", "s13"];

const getFavoriteStops = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(FAVORITE_STOPS_KEY) || "[]");
    return Array.isArray(saved) && saved.length ? saved : DEFAULT_FAVORITE_STOPS;
  } catch {
    return DEFAULT_FAVORITE_STOPS;
  }
};

export default function Stop() {
  const [query, setQuery] = useState("");
  const [township, setTownship] = useState("all");
  const [status, setStatus] = useState("all");
  const [favorites, setFavorites] = useState(getFavoriteStops);

  useEffect(() => {
    localStorage.setItem(FAVORITE_STOPS_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const stops = useMemo(
    () =>
      allStops.map((stop) => ({
        ...stop,
        ...(detailedStopsMap[stop.id] || {}),
      })),
    []
  );

  const townships = useMemo(
    () =>
      [...new Set(stops.map((stop) => stop.township).filter(Boolean))].sort(),
    [stops]
  );

  const filteredStops = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return stops.filter((stop) => {
      const matchesQuery =
        !normalizedQuery ||
        [stop.name, stop.stopId, stop.township, stop.location]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedQuery)) ||
        stop.passingLines?.some((line) =>
          [line.lineCode, line.id]
            .filter(Boolean)
            .some((value) => value.toLowerCase().includes(normalizedQuery))
        );
      const matchesTownship = township === "all" || stop.township === township;
      const matchesStatus =
        status === "all" ||
        (status === "active" ? stop.isActive !== false : stop.isActive === false);

      return matchesQuery && matchesTownship && matchesStatus;
    });
  }, [query, status, stops, township]);

  const toggleFavorite = (stopId) => {
    setFavorites((current) => {
      const nextFavorites = current.includes(stopId)
        ? current.filter((id) => id !== stopId)
        : [...current, stopId];

      localStorage.setItem(FAVORITE_STOPS_KEY, JSON.stringify(nextFavorites));
      return nextFavorites;
    });
  };

  const clearFilters = () => {
    setQuery("");
    setTownship("all");
    setStatus("all");
  };

  const hasFilters = query || township !== "all" || status !== "all";

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Yangon bus service
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-base-content">
            Bus Stops
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Find stops, nearby routes, and live service details.
          </p>
        </div>
        <div className="rounded-2xl border border-base-200 bg-base-100 px-4 py-3 text-right shadow-sm">
          <p className="text-2xl font-black text-base-content">{filteredStops.length}</p>
          <p className="text-xs font-semibold text-slate-500">of {stops.length} stops</p>
        </div>
      </header>

      <section className="space-y-3 rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by stop, ID, township, or bus line..."
            className="input input-bordered w-full rounded-xl pl-11 pr-10 focus:border-blue-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear stop search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <SlidersHorizontal size={15} /> Filters
          </div>
          <select
            value={township}
            onChange={(event) => setTownship(event.target.value)}
            className="select select-bordered select-sm w-full rounded-lg sm:w-auto"
            aria-label="Filter by township"
          >
            <option value="all">All townships</option>
            {townships.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="select select-bordered select-sm w-full rounded-lg sm:w-auto"
            aria-label="Filter by stop status"
          >
            <option value="all">All statuses</option>
            <option value="active">Active only</option>
            <option value="inactive">Inactive only</option>
          </select>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="btn btn-ghost btn-sm self-start normal-case text-blue-600 sm:self-auto"
            >
              Clear filters
            </button>
          )}
        </div>
      </section>

      {filteredStops.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStops.map((stop) => {
            const isFavorite = favorites.includes(stop.id);
            const lines = stop.passingLines || stop.servingBusLines || [];

            return (
              <article
                key={stop.id}
                className="group flex flex-col justify-between rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                        <MapPin size={19} />
                      </div>
                      <div className="min-w-0">
                        <h2 className="truncate font-bold text-base-content">{stop.name}</h2>
                        <p className="mt-1 font-mono text-[11px] font-bold text-slate-400">
                          {stop.stopId || stop.id}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(stop.id)}
                      aria-label={isFavorite ? `Remove ${stop.name} from favorites` : `Add ${stop.name} to favorites`}
                      className={`rounded-lg p-2 transition ${isFavorite ? "text-amber-500" : "text-slate-300 hover:text-amber-500"}`}
                    >
                      <Star size={18} fill={isFavorite ? "currentColor" : "none"} />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <span>{stop.township || stop.location || "Yangon"}</span>
                    <span>•</span>
                    <span className={stop.isActive === false ? "text-slate-400" : "text-emerald-600"}>
                      {stop.isActive === false ? "Inactive" : "Active"}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {lines.length > 0 ? (
                      lines.map((line) => (
                        <span
                          key={line.id || line.lineCode}
                          className="badge badge-sm border-none bg-base-200 text-[10px] font-bold text-slate-700"
                        >
                          {line.lineCode || line.routeNumber}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">No routes listed</span>
                    )}
                  </div>
                </div>

                <Link
                  to={`/stops/${stop.id}`}
                  state={{ stop }}
                  className="mt-5 flex items-center justify-between border-t border-base-200 pt-4 text-xs font-bold text-blue-600"
                >
                  <span className="flex items-center gap-1.5">
                    <Bus size={14} /> View stop details
                  </span>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-base-300 bg-base-100 px-6 py-14 text-center">
          <MapPin size={28} className="mx-auto text-slate-300" />
          <h2 className="mt-3 font-bold text-base-content">No stops found</h2>
          <p className="mt-1 text-sm text-slate-500">Try a different search or clear the filters.</p>
          <button type="button" onClick={clearFilters} className="btn btn-primary btn-sm mt-4 normal-case">
            Reset search
          </button>
        </section>
      )}
    </div>
  );
}
