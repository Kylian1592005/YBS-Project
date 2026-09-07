import { ArrowUpRight, MapPin, Clock, Bus, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function BusLineCard({ route }) {
  return (
    <article className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      <div className="h-1" style={{ backgroundColor: route.color || "#2563EB" }} />
      <div className="card-body p-5 space-y-5">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-sm shrink-0"
              style={{ backgroundColor: route.color || "#2563EB" }}
            >
              <span className="text-center leading-none">
                <span className="block text-[9px] font-bold uppercase tracking-wider opacity-80">YBS</span>
                <span>{route.lineCode}</span>
              </span>
            </span>
            <div className="min-w-0">
              <span className="badge badge-ghost badge-sm text-xs font-semibold">
                {route.operator}
              </span>
              <p className="text-xs text-base-content/60 mt-1">Fare from {route.fare}</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Running
          </span>
        </div>

        {/* Route Terminals */}
        <div className="rounded-xl bg-base-200/60 p-3.5 space-y-3 text-xs font-medium text-base-content/80">
          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="block text-[10px] uppercase tracking-wider text-base-content/45 font-bold">From</span>
              <span className="block truncate mt-0.5">{route.startPoint}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="block text-[10px] uppercase tracking-wider text-base-content/45 font-bold">To</span>
              <span className="block truncate mt-0.5">{route.endPoint}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base-content/50 pt-1 border-t border-base-300/70">
            <Clock size={14} className="shrink-0" />
            <span className="truncate">{route.operatingHours}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-base-content/55">
          <span className="flex items-center gap-1.5"><Bus size={14} /> Daily service</span>
          <span className="flex items-center gap-1.5"><Users size={14} /> {route.totalBuses} buses</span>
        </div>

        {/* View Details Button */}
        <div className="pt-1">
          <Link
            to={`/bus-lines/${route.id}`}
            className="btn btn-primary btn-outline btn-sm h-8 w-full rounded-xl flex items-center justify-center gap-2 group hover:bg-primary hover:text-primary-content transition-all duration-200"
          >
            <span>အသေးစိတ် ကြည့်ရန်</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}