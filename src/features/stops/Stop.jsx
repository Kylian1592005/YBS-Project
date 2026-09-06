import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export default function StopDetails() {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* ────────────────── TOP NAVIGATION / BACK ────────────────── */}
      <div>
        <button
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
            Hledan Centre
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="font-mono bg-base-200 px-2 py-0.5 rounded text-slate-700 font-bold">
              Stop ID: YBS-042
            </span>
            <span>•</span>
            <span>Kamayut Township</span>
            <span>•</span>
            <span className="badge badge-success badge-sm text-white font-medium gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>{" "}
              Active
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
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
          {/* Card 1 */}
          <div className="bg-base-100 border border-base-200 rounded-xl p-4 shadow-sm hover:border-blue-300 transition flex flex-col justify-between space-y-3">
            <div>
              <span className="px-2.5 py-1 bg-slate-900 text-white font-bold text-xs rounded-md">
                YBS 21
              </span>
              <p className="font-semibold text-sm mt-3 text-base-content">
                Hmawbi → Sule
              </p>
            </div>
            <Link
              to="/routes/ybs-21"
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 self-start"
            >
              View Route <ChevronRight size={14} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-base-100 border border-base-200 rounded-xl p-4 shadow-sm hover:border-blue-300 transition flex flex-col justify-between space-y-3">
            <div>
              <span className="px-2.5 py-1 bg-blue-600 text-white font-bold text-xs rounded-md">
                YBS 36
              </span>
              <p className="font-semibold text-sm mt-3 text-base-content">
                Hmawbi → Sule
              </p>
            </div>
            <Link
              to="/routes/ybs-36"
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 self-start"
            >
              View Route <ChevronRight size={14} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-base-100 border border-base-200 rounded-xl p-4 shadow-sm hover:border-blue-300 transition flex flex-col justify-between space-y-3">
            <div>
              <span className="px-2.5 py-1 bg-slate-900 text-white font-bold text-xs rounded-md">
                YBS 65
              </span>
              <p className="font-semibold text-sm mt-3 text-base-content">
                Insein → Dagon
              </p>
            </div>
            <Link
              to="/routes/ybs-65"
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 self-start"
            >
              View Route <ChevronRight size={14} />
            </Link>
          </div>
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
            {/* Bus Row 1 */}
            <div className="p-4 flex items-center justify-between hover:bg-base-200/50 transition">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-slate-900 text-white font-bold text-sm rounded-lg">
                  YBS 21
                </span>
                <div>
                  <p className="font-semibold text-sm text-base-content">
                    Hmawbi → Sule
                  </p>
                  <p className="text-xs text-slate-500">Bus #YGN-21/1092</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-3">
                <div>
                  <p className="text-base font-black text-emerald-600">
                    Arriving
                  </p>
                  <p className="text-xs font-bold text-slate-500">5 min</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
            </div>

            {/* Bus Row 2 */}
            <div className="p-4 flex items-center justify-between hover:bg-base-200/50 transition">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-blue-600 text-white font-bold text-sm rounded-lg">
                  YBS 36
                </span>
                <div>
                  <p className="font-semibold text-sm text-base-content">
                    Hmawbi → Sule
                  </p>
                  <p className="text-xs text-slate-500">Bus #YGN-36/4081</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-base-content">12 min</p>
                <p className="text-xs text-slate-400">On Time</p>
              </div>
            </div>

            {/* Bus Row 3 */}
            <div className="p-4 flex items-center justify-between hover:bg-base-200/50 transition">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-slate-900 text-white font-bold text-sm rounded-lg">
                  YBS 65
                </span>
                <div>
                  <p className="font-semibold text-sm text-base-content">
                    Insein → Dagon
                  </p>
                  <p className="text-xs text-slate-500">Bus #YGN-65/9920</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-base-content">18 min</p>
                <p className="text-xs text-slate-400">On Time</p>
              </div>
            </div>
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
          {/* Mock Map View */}
          <div className="h-56 w-full bg-slate-100 rounded-xl border border-base-200 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-slate-200/50 [background-size:16px_16px] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]"></div>

            {/* Pin Marker */}
            <div className="relative z-10 flex flex-col items-center animate-bounce">
              <div className="p-2 bg-blue-600 text-white rounded-full shadow-lg">
                <MapPin size={22} />
              </div>
              <span className="bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md mt-1">
                Hledan Centre
              </span>
            </div>

            <span className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-400 bg-white/80 px-2 py-0.5 rounded">
              INTERACTIVE MAP PREVIEW
            </span>
          </div>

          {/* Coordinates & External Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
            <span className="text-xs font-mono text-slate-500">
              16.8234° N, 96.1302° E
            </span>
            <a
              href="https://maps.google.com/?q=16.8234,96.1302"
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
            {/* Nearby Item 1 */}
            <div className="py-3 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <span className="font-semibold text-base-content">
                  Hledan Zay
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-medium text-slate-400">
                  350 m
                </span>
                <div className="flex gap-1">
                  <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">
                    YBS 21
                  </span>
                  <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">
                    YBS 36
                  </span>
                </div>
              </div>
            </div>

            {/* Nearby Item 2 */}
            <div className="py-3 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <span className="font-semibold text-base-content">
                  Myaynigone
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-medium text-slate-400">
                  700 m
                </span>
                <div className="flex gap-1">
                  <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">
                    YBS 21
                  </span>
                  <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">
                    YBS 65
                  </span>
                </div>
              </div>
            </div>

            {/* Nearby Item 3 */}
            <div className="py-3 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <span className="font-semibold text-base-content">
                  Sanchaung
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-medium text-slate-400">
                  1.2 km
                </span>
                <div className="flex gap-1">
                  <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">
                    YBS 36
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}