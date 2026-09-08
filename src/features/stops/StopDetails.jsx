import { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Bus,
  Clock,
  ExternalLink,
  ChevronRight,
  Navigation,
  Compass,
} from "lucide-react";
import { detailedStopsMap } from "../../data/mockData";

export default function StopDetails({ stopData = detailedStopsMap.s1 }) {
  const navigate = useNavigate();
  const { id: stopId } = useParams();
  const location = useLocation();

  const routeStop = location.state?.stop;
  const requestedStopId = routeStop?.id || stopId;
  const detailedStop = requestedStopId
    ? Object.values(detailedStopsMap).find(
        (stop) =>
          stop.id === requestedStopId ||
          stop.stopId?.toLowerCase() === requestedStopId.toLowerCase()
      )
    : undefined;
  const currentStop = { ...(detailedStop || stopData), ...(routeStop || {}) };
  const [isFavorite, setIsFavorite] = useState(false);

  const googleMapsUrl = `https://maps.google.com/?q=${currentStop.coordinates?.lat},${currentStop.coordinates?.lng}`;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* ────────────────── TOP NAVIGATION / BACK ────────────────── */}
      <div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-ghost btn-sm gap-2 text-slate-600 hover:text-slate-900 font-medium normal-case"
        >
          <ArrowLeft size={16} /> Back to Stops
        </button>
      </div>

      {/* ────────────────── 1. STOP HEADER DETAILS ────────────────── */}
      <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            <MapPin size={14} /> Stop Details
          </div>
          <h1 className="text-3xl font-black tracking-tight text-base-content">
            {currentStop.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="font-mono bg-base-200 px-2 py-0.5 rounded text-slate-700 font-bold">
              Stop ID: {currentStop.stopId || stopId}
            </span>
            <span>•</span>
            <span>{currentStop.township}</span>
            <span>•</span>
            <span
              className={`badge badge-sm text-white font-medium gap-1 ${
                currentStop.isActive ? "badge-success" : "badge-ghost"
              }`}
            >
              {currentStop.isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
              {currentStop.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={() => setIsFavorite(!isFavorite)}
            className={`btn btn-outline gap-2 normal-case rounded-xl transition ${
              isFavorite
                ? "btn-error text-white"
                : "border-base-300 hover:bg-base-200"
            }`}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
            {isFavorite ? "Favorited" : "Favorite"}
          </button>
        </div>
      </div>

      {/* ────────────────── 2. BUS LINES SERVING THIS STOP ────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-base-content">
          <Bus className="text-blue-600" size={20} />
          <h2>Bus Lines Serving This Stop</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentStop.servingBusLines?.map((line) => (
            <div
              key={line.id}
              className="bg-base-100 border border-base-200 rounded-xl p-4 shadow-sm hover:border-blue-300 transition flex flex-col justify-between space-y-3"
            >
              <div>
                <span
                  className={`px-2.5 py-1 text-white font-bold text-xs rounded-md ${
                    line.badgeColor || "bg-slate-900"
                  }`}
                >
                  {line.routeNumber}
                </span>
                <p className="font-semibold text-sm mt-3 text-base-content">
                  {line.routeName}
                </p>
              </div>
              <Link
                to={`/bus-lines/${line.id}`}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 self-start"
              >
                View Route <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── 3. UPCOMING BUSES ────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-base-content">
          <Clock className="text-blue-600" size={20} />
          <h2>Upcoming Buses</h2>
        </div>

        <div className="bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="divide-y divide-base-200">
            {currentStop.upcomingBuses?.map((bus) => (
              <div
                key={bus.id}
                className="p-4 flex items-center justify-between hover:bg-base-200/50 transition"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 text-white font-bold text-sm rounded-lg ${
                      bus.badgeColor || "bg-slate-900"
                    }`}
                  >
                    {bus.line}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-base-content">
                      {bus.route}
                    </p>
                    <p className="text-xs text-slate-500">
                      Bus #{bus.busNumber}
                    </p>
                  </div>
                </div>

                <div className="text-right flex items-center gap-3">
                  <div>
                    <p
                      className={`text-base font-black ${
                        bus.isLive
                          ? "text-emerald-600"
                          : "font-bold text-base-content"
                      }`}
                    >
                      {bus.isLive ? bus.status : `${bus.etaMins} min`}
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                      {bus.isLive ? `${bus.etaMins} min` : bus.status}
                    </p>
                  </div>
                  {bus.isLive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 4. LOCATION & MAP ────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-base-content">
          <Compass className="text-blue-600" size={20} />
          <h2>Location</h2>
        </div>

        <div className="bg-base-100 border border-base-200 rounded-2xl p-4 shadow-sm space-y-4">
          <div className="h-56 w-full bg-slate-100 rounded-xl border border-base-200 relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-slate-200/50 [background-size:16px_16px] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]" />

            <div className="relative z-10 flex flex-col items-center animate-bounce">
              <div className="p-2 bg-blue-600 text-white rounded-full shadow-lg">
                <MapPin size={22} />
              </div>
              <span className="bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md mt-1">
                {currentStop.name}
              </span>
            </div>

            <span className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-400 bg-white/80 px-2 py-0.5 rounded">
              INTERACTIVE MAP PREVIEW
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
            <span className="text-xs font-mono text-slate-500">
              {currentStop.coordinates?.lat}° N, {currentStop.coordinates?.lng}
              ° E
            </span>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline border-base-300 gap-2 normal-case self-start sm:self-auto"
            >
              <ExternalLink size={14} /> Open in Maps
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────── 5. NEARBY STOPS ────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-base-content">
          <Navigation className="text-blue-600" size={20} />
          <h2>Nearby Stops</h2>
        </div>

        <div className="bg-base-100 border border-base-200 rounded-2xl p-4 shadow-sm">
          <div className="divide-y divide-base-200">
            {currentStop.nearbyStops?.map((nearby) => (
              <div
                key={nearby.id}
                className="py-3 flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="font-semibold text-base-content">
                    {nearby.name}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-medium text-slate-400">
                    {nearby.distance}
                  </span>
                  <div className="flex gap-1">
                    {nearby.lines?.map((line) => (
                      <span
                        key={line}
                        className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}