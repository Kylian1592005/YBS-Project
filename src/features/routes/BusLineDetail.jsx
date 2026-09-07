import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowLeftRight,
  ChevronRight,
  Clock,
  MapPin,
  Route as RouteIcon,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import { mockBusLines } from "../../data/mockData";

export function BusLineDetail({ routesData = [], selectedRouteId = "route-1" }) {
  const { id } = useParams();
  const routeId = id || selectedRouteId;
  const sourceRoute =
    routesData.find((route) => route.id === routeId) ||
    mockBusLines.find((route) => route.id === routeId) ||
    routesData[0];
  const currentRoute = sourceRoute
    ? {
        ...sourceRoute,
        routeNumber: sourceRoute.routeNumber || sourceRoute.lineCode,
        routeName: sourceRoute.routeName || `YBS ${sourceRoute.lineCode}`,
        origin: sourceRoute.origin || sourceRoute.startPoint,
        destination: sourceRoute.destination || sourceRoute.endPoint,
        isActive: sourceRoute.isActive ?? true,
        distanceKm: sourceRoute.distanceKm || "-",
        estimatedDurationMins: sourceRoute.estimatedDurationMins || "-",
        stops: (sourceRoute.stops || []).map((stop, index) => ({
          ...stop,
          stopId: stop.stopId || stop.id,
          sequenceOrder: stop.sequenceOrder || index + 1,
          estimatedMinutesFromStart:
            stop.estimatedMinutesFromStart ?? index * 10,
        })),
      }
    : undefined;

  const [selectedStopId, setSelectedStopId] = useState(currentRoute?.stops?.[0]?.stopId);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!currentRoute) {
    return (
      <div className="max-w-md mx-auto p-6 text-center text-slate-500 font-sans">
        No route details found.
      </div>
    );
  }

  const calculateTime = (minsFromStart = 0) => {
    const baseDate = new Date();
    baseDate.setHours(8, minsFromStart, 0, 0);
    return baseDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const effectiveSelectedStopId = currentRoute.stops?.some(
    (stop) => stop.stopId === selectedStopId
  )
    ? selectedStopId
    : currentRoute.stops?.[0]?.stopId;
  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10 text-slate-900">
      <Link
        to="/bus-lines"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-700 transition-colors"
      >
        <ArrowLeft size={16} />
        All bus lines
      </Link>

      <section
        className="relative overflow-hidden rounded-3xl p-6 sm:p-8 text-white shadow-lg"
        style={{ backgroundColor: currentRoute.color || "#2563eb" }}
      >
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[24px] border-white/10" />
        <div className="absolute -bottom-24 right-24 h-48 w-48 rounded-full border-[18px] border-white/10" />
        <div className="relative space-y-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-white text-2xl font-black text-slate-900 shadow-md">
                <span className="text-[9px] uppercase tracking-widest opacity-50">YBS</span>
                {currentRoute.routeNumber}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  {currentRoute.operator || "Yangon bus service"}
                </p>
                <h1 className="mt-1 truncate text-2xl font-black tracking-tight sm:text-3xl">
                  {currentRoute.routeName}
                </h1>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsFavorited(!isFavorited)}
              className="btn btn-circle border-white/20 bg-white/10 text-white hover:bg-white/20"
              aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
            >
              <Star size={19} className={isFavorited ? "fill-amber-300 text-amber-300" : ""} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <MapPin size={17} className="shrink-0 text-white/70" />
              <span className="truncate">{currentRoute.origin}</span>
              <ArrowLeftRight size={16} className="shrink-0 text-white/60" />
              <span className="truncate">{currentRoute.destination}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className={`h-2.5 w-2.5 rounded-full ${currentRoute.isActive ? "bg-emerald-300 animate-pulse" : "bg-white/50"}`} />
              {currentRoute.isActive ? "Service running" : "Service unavailable"}
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Clock, label: "Operating hours", value: currentRoute.operatingHours },
          { icon: Wallet, label: "Standard fare", value: currentRoute.fare },
          { icon: Users, label: "Active fleet", value: `${currentRoute.totalBuses} buses` },
          { icon: RouteIcon, label: "Total journey", value: `${currentRoute.estimatedDurationMins} mins` },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600"><Icon size={17} /></div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
              <p className="mt-1 truncate text-sm font-bold text-slate-800">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-end justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Your journey</p>
              <h2 className="mt-1 text-xl font-black text-slate-900">Route timeline</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">
              {currentRoute.stops?.length || 0} stops
            </span>
          </div>

          <div className="relative mt-6 space-y-3 before:absolute before:bottom-6 before:left-[1.15rem] before:top-6 before:w-px before:bg-blue-100">
            {currentRoute.stops?.map((stop, idx) => {
              const isSelected = stop.stopId === effectiveSelectedStopId;
              const isFirst = idx === 0;
              const isLast = idx === currentRoute.stops.length - 1;
              return (
                <div key={stop.stopId} className="relative flex gap-4">
                  <div className={`relative z-10 mt-4 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-white ring-2 ${isSelected ? "bg-blue-600 ring-blue-200" : "bg-slate-300 ring-slate-100"}`} />
                  <Link
                    to={`/stops/${stop.stopId}`}
                    state={{ routeId: currentRoute.id, stop }}
                    onClick={() => setSelectedStopId(stop.stopId)}
                    className={`flex min-w-0 flex-1 items-center justify-between gap-4 rounded-2xl border p-4 transition-all ${isSelected ? "border-blue-200 bg-blue-50/70 shadow-sm" : "border-slate-100 hover:border-blue-100 hover:bg-slate-50"}`}
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`truncate text-sm font-bold ${isSelected ? "text-blue-700" : "text-slate-800"}`}>{stop.name}</span>
                        {(isFirst || isLast) && <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">{isFirst ? "Start" : "End"}</span>}
                      </div>
                      <p className="mt-1 text-xs font-medium text-slate-400">Stop {stop.sequenceOrder} · {stop.location || "Yangon"}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-right">
                      <div>
                        <p className={`text-xs font-bold ${isSelected ? "text-blue-700" : "text-slate-600"}`}>{calculateTime(stop.estimatedMinutesFromStart)}</p>
                        <p className="text-[10px] font-semibold text-slate-400">+{stop.estimatedMinutesFromStart} min</p>
                      </div>
                      <ChevronRight size={16} className={isSelected ? "text-blue-600" : "text-slate-300"} />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-xl bg-amber-50 p-2 text-amber-600"><Clock size={16} /></div>
              <h2 className="font-black text-slate-900">Service schedule</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">First bus</span><strong>{currentRoute.schedules?.firstBus || "-"}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Last bus</span><strong>{currentRoute.schedules?.lastBus || "-"}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Peak frequency</span><strong>{currentRoute.schedules?.peakInterval || "-"}</strong></div>
            </div>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">About this line</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{currentRoute.description || "Reliable daily service across Yangon."}</p>
          </section>
        </aside>
      </div>
    </div>
  );
}