import { useState, useMemo } from "react";
import { BUS_DATA } from "./BusLine_Data";
import BusLineCard from "./BusLineCard";

const ITEMS_PER_PAGE = 6;

export default function BusLine() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BUS_DATA.length / ITEMS_PER_PAGE);

  const currentBuses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return BUS_DATA.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-10">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-base-content">
          Yangon Bus Service
        </h1>
        <p className="text-sm text-base-content/60 mt-1">
          Find active bus lines and route terminals across Yangon
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBuses.map((route) => (
          <BusLineCard key={route.id} route={route} />
        ))}
      </div>

      {/* Modern Floating Pagination Dock */}
      <div className="flex flex-col items-center justify-center gap-3 pt-6">
        <nav
          aria-label="Pagination Navigation"
          className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-base-100 border border-base-200/80 shadow-sm"
        >
          {/* Previous Button */}
          <button
            className="btn btn-sm btn-ghost rounded-xl text-xs gap-1 disabled:bg-transparent disabled:opacity-30"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <span>←</span>
            <span className="hidden sm:inline"> Prev</span>
          </button>

          {/* Number Buttons */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all duration-150 ${
                    isActive
                      ? "bg-primary text-primary-content shadow-md shadow-primary/25 scale-105"
                      : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            className="btn btn-sm btn-ghost rounded-xl text-xs gap-1 disabled:bg-transparent disabled:opacity-30"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            <span className="hidden sm:inline">Next </span>
            <span>→</span>
          </button>
        </nav>

        
      </div>
    </main>
  );
}