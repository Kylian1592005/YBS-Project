import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowLeftRight, Clock, MapPin, Bus, ChevronRight } from "lucide-react";

export function BusLineDetail({ routesData = [], selectedRouteId = "route-1" }) {
    const currentRoute = routesData.find((r) => r.id === selectedRouteId) || routesData[0];

    const [selectedStopId, setSelectedStopId] = useState(currentRoute?.stops[0]?.stopId);
    const [isFavorited, setIsFavorited] = useState(false);

    if (!currentRoute) return null;

    const calculateTime = (minsFromStart) => {
        const baseDate = new Date();
        baseDate.setHours(8, minsFromStart, 0, 0);
        return baseDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    const activeStop = currentRoute.stops.find((s) => s.stopId === selectedStopId) || currentRoute.stops[0];

    return (
        <div className="max-w-md mx-auto bg-slate-100 min-h-screen text-slate-900 pb-12 shadow-2xl rounded-3xl font-sans overflow-hidden border border-slate-200">
            {/* 1. TOP HERO HEADER */}
            <div className="bg-gradient-to-b from-blue-700 to-blue-600 text-white p-6 pb-20 rounded-b-[2.5rem] shadow-xl relative">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3.5">
                        {/* Route Number Badge */}
                        <div className="bg-white text-blue-700 font-black text-2xl h-12 w-14 rounded-2xl flex items-center justify-center shadow-lg border border-blue-100">
                            {currentRoute.routeNumber}
                        </div>

                        <div>
                            <h1 className="font-extrabold text-xl tracking-tight leading-tight">
                                {currentRoute.routeName}
                            </h1>
                            <p className="text-xs text-blue-100/90 font-medium mt-0.5 flex items-center gap-1.5">
                                <span>{currentRoute.origin}</span>
                                <span className="text-blue-300">→</span>
                                <span>{currentRoute.destination}</span>
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsFavorited(!isFavorited)}
                        className="p-2.5 bg-white/10 hover:bg-white/20 active:scale-95 rounded-2xl backdrop-blur-md transition-all border border-white/10"
                    >
                        <Star className={`w-5 h-5 ${isFavorited ? "fill-amber-300 text-amber-300" : "text-white"}`} />
                    </button>
                </div>

                {/* Status Pill */}
                <div className="flex items-center justify-between bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-2xl text-xs border border-white/15">
                    <div className="flex items-center gap-2">
                        <span
                            className={`h-2.5 w-2.5 rounded-full ${currentRoute.isActive ? "bg-emerald-400 animate-pulse" : "bg-slate-400"}`}
                        />
                        <span className="font-semibold tracking-wide">
                            {currentRoute.isActive ? "Active Service • Every 10m" : "Service Off"}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-100 font-medium">
                        <span>{currentRoute.distanceKm} km</span>
                        <span className="text-white/30">•</span>
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                            <ArrowLeftRight className="w-3.5 h-3.5" />
                            <span>Switch</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. FLOATING STOP DETAIL CARD */}
            <div className="px-5 -mt-14 relative z-10">
                <div className="bg-white p-5 rounded-3xl shadow-xl border border-slate-100 space-y-4">
                    {/* Stop Selector Header */}
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                    Selected Stop
                                </span>
                                <h3 className="text-sm font-extrabold text-slate-800">{activeStop.name}</h3>
                            </div>
                        </div>

                        <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200/60">
                            Moderate Seats
                        </span>
                    </div>

                    {/* Timing Data */}
                    <div className="flex justify-between items-end pt-1">
                        <div>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-3xl font-black text-slate-900 tracking-tight">
                                    {activeStop.estimatedMinutesFromStart === 0
                                        ? "At Terminus"
                                        : activeStop.estimatedMinutesFromStart}
                                </span>
                                {activeStop.estimatedMinutesFromStart !== 0 && (
                                    <span className="text-xs font-bold text-slate-500">mins away</span>
                                )}
                            </div>
                            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 font-medium">
                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                Scheduled ETA:{" "}
                                <span className="font-bold text-slate-700">
                                    {calculateTime(activeStop.estimatedMinutesFromStart)}
                                </span>
                            </p>
                        </div>

                        <div className="text-right">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                Bus Fleet
                            </span>
                            <p className="text-xs font-extrabold text-slate-700 flex items-center gap-1 justify-end mt-1">
                                <Bus className="w-3.5 h-3.5 text-blue-600" /> #{currentRoute.routeNumber}-BUS
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. ROUTE TIMELINE WITH REACT ROUTER LINKS */}
            <div className="px-6 pt-7">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Route Timeline ({currentRoute.stops.length} Stops)
                    </h2>
                    <span className="text-xs font-bold text-slate-600 bg-slate-200/70 px-3 py-1 rounded-full">
                        {currentRoute.estimatedDurationMins} mins total
                    </span>
                </div>

                {/* Timeline Path */}
                <div className="relative border-l-2 border-blue-500/80 ml-4 space-y-4 py-1">
                    {currentRoute.stops.map((stop, idx) => {
                        const isSelected = stop.stopId === selectedStopId;
                        const isFirst = idx === 0;
                        const isLast = idx === currentRoute.stops.length - 1;

                        return (
                            <div key={stop.stopId} className="relative pl-7 group transition-all">
                                {/* Bullet Indicator */}
                                <div
                                    className={`absolute -left-[9px] top-4 rounded-full transition-all duration-200 ${
                                        isSelected
                                            ? "h-4 w-4 -left-[9px] bg-blue-600 ring-4 ring-blue-100 shadow-md"
                                            : "h-3 w-3 -left-[7px] bg-white border-2 border-blue-500 group-hover:scale-125"
                                    }`}
                                />

                                {/* React Router Link wrapped around stop item */}
                                <Link
                                    to={`/stops`}
                                    onClick={() => setSelectedStopId(stop.stopId)}
                                    className={`flex justify-between items-center rounded-2xl p-4 transition-all block ${
                                        isSelected
                                            ? "bg-white border-2 border-blue-500/30 shadow-md"
                                            : "bg-white/60 hover:bg-white border border-slate-200/60 shadow-sm"
                                    }`}
                                >
                                    <div className="space-y-0.5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`text-sm font-bold ${isSelected ? "text-blue-700" : "text-slate-800"}`}
                                            >
                                                {stop.name}
                                            </span>
                                            {isFirst && (
                                                <span className="text-[10px] bg-blue-100 text-blue-700 font-extrabold px-2 py-0.5 rounded-md">
                                                    Start
                                                </span>
                                            )}
                                            {isLast && (
                                                <span className="text-[10px] bg-slate-200 text-slate-700 font-extrabold px-2 py-0.5 rounded-md">
                                                    End
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs text-slate-400 font-medium">
                                            Stop Order: #{stop.sequenceOrder}
                                        </p>
                                    </div>

                                    <div className="text-right flex items-center gap-2.5">
                                        <div>
                                            <span
                                                className={`text-xs font-bold ${isSelected ? "text-blue-700" : "text-slate-600"}`}
                                            >
                                                {calculateTime(stop.estimatedMinutesFromStart)}
                                            </span>
                                            <p className="text-[10px] text-slate-400 font-semibold">
                                                +{stop.estimatedMinutesFromStart}m
                                            </p>
                                        </div>
                                        <ChevronRight
                                            className={`w-4 h-4 transition-transform ${isSelected ? "text-blue-600 translate-x-0.5" : "text-slate-300"}`}
                                        />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
