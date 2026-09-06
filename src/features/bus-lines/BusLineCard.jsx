import { Link } from "react-router-dom";

export default function BusLineCard({ route }) {
  return (
    <div className="card bg-base-100 border border-base-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group overflow-hidden">
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="card-body p-6 flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1">
            Transit Line
          </span>
          <div className="px-5 py-1.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
              {route.line}
            </h2>
          </div>
        </div>

        <div className="w-full my-5 p-3.5 rounded-xl bg-base-200/40 border border-base-200 text-left space-y-2.5">
          <div className="flex items-center gap-3 text-xs">
            <span className="w-2.5 h-2.5 rounded-full ring-4 ring-emerald-500/20 bg-emerald-500 shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase font-bold text-base-content/40 block leading-tight">
                Departure
              </span>
              <span className="font-semibold text-base-content truncate block">
                {route.startTerm}
              </span>
            </div>
          </div>

          <div className="ml-1 pl-3 border-l-2 border-dashed border-base-content/15 h-2" />

          <div className="flex items-center gap-3 text-xs">
            <span className="w-2.5 h-2.5 rounded-full ring-4 ring-rose-500/20 bg-rose-500 shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase font-bold text-base-content/40 block leading-tight">
                Destination
              </span>
              <span className="font-semibold text-base-content truncate block">
                {route.endTerm}
              </span>
            </div>
          </div>
        </div>

        
        <div className="card-actions w-full justify-center pt-1">
          <Link
            to="/routes"
            state={{ selectedBus: route }}
            className="btn btn-sm btn-primary rounded-full px-6 font-medium shadow-sm hover:shadow group-hover:btn-active transition-all"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}