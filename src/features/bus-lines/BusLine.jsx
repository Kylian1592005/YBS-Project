import { useState, useMemo } from "react";
import BusLineCard from "./BusLineCard";
import { mockBusLines } from "../../data/mockData";
import { Search, Bus, ChevronLeft, ChevronRight, X } from "lucide-react";

const ITEMS_PER_PAGE = 3;

export default function BusLine() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Search filter
  const filteredBuses = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return mockBusLines;

    return mockBusLines.filter(
      (bus) =>
        bus.lineCode.toLowerCase().includes(query) ||
        bus.startPoint.toLowerCase().includes(query) ||
        bus.endPoint.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Pagination bounds
  const totalPages = Math.max(1, Math.ceil(filteredBuses.length / ITEMS_PER_PAGE));

  const currentBuses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBuses.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredBuses]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-200 shadow-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <Bus size={16} /> Yangon transport directory
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-base-content">
              YBS Bus Lines
          </h1>
            <p className="text-xs sm:text-sm text-base-content/60 mt-2">
            ရန်ကုန်မြို့တွင်း ပြေးဆွဲနေသော YBS ယာဉ်လိုင်းများ စာရင်း
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="form-control w-full lg:w-[22rem]">
          <label htmlFor="bus-line-search" className="label py-0 mb-2">
            <span className="label-text text-xs font-bold text-base-content/60">Find a bus line</span>
            <span className="label-text-alt text-[10px] text-base-content/40">Line or destination</span>
          </label>
          <div className="flex items-center gap-2 rounded-2xl border border-base-300 bg-base-200/50 px-3 h-12 transition-colors focus-within:border-primary focus-within:bg-base-100 focus-within:ring-2 focus-within:ring-primary/15">
            <Search size={18} className="text-primary/70 shrink-0" />
            <input
              id="bus-line-search"
              type="text"
              placeholder="ရှာဖွေရန် (ဥပမာ - 21, Sule)..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="grow min-w-0 bg-transparent text-sm outline-none placeholder:text-base-content/40"
              aria-label="Search bus lines"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="btn btn-ghost btn-xs btn-circle"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-1">
        <div>
          <h2 className="font-bold text-base-content">Available lines</h2>
          <p className="text-xs text-base-content/50 mt-0.5">
            {filteredBuses.length} {filteredBuses.length === 1 ? "line" : "lines"} found
            {searchQuery && ` for “${searchQuery}”`}
          </p>
        </div>
        <span className="hidden sm:inline text-xs font-semibold text-base-content/45 whitespace-nowrap">
          {currentPage} / {totalPages}
        </span>
      </div>

      {/* Bus Cards Grid */}
      {currentBuses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBuses.map((route) => (
            <BusLineCard key={route.id} route={route} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="card bg-base-100 border border-base-200 py-16 text-center shadow-sm">
          <div className="card-body items-center">
            <div className="w-12 h-12 rounded-2xl bg-base-200 text-base-content/40 flex items-center justify-center mb-1">
              <Search size={21} />
            </div>
            <h2 className="font-bold text-base-content">No bus lines found</h2>
            <p className="text-base-content/60 font-medium text-sm">
              ရှာဖွေမှုနှင့် ကိုက်ညီသော YBS ကားလိုင်း မတွေ့ရှိပါ။
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="btn btn-primary btn-sm rounded-xl mt-2"
            >
              View all lines
            </button>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
  <nav className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-base-200 pt-5" aria-label="Bus line pages">
    {/* Page Counter Text */}
    <p className="text-xs text-base-content/50">
      Showing <span className="font-bold text-base-content/70">
        {filteredBuses.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}-
        {Math.min(currentPage * ITEMS_PER_PAGE, filteredBuses.length)}
      </span> of {filteredBuses.length}
    </p>

    {/* Controls */}
    <div className="flex items-center gap-1.5">
      {/* Previous Button */}
      <button
        className="btn btn-sm btn-ghost btn-square rounded-xl border border-base-200 bg-base-100 shadow-sm disabled:bg-base-200/40"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Numeric Pagination */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = currentPage === pageNumber;

        const isFirstOrLast = pageNumber === 1 || pageNumber === totalPages;
        const isNearCurrent = Math.abs(pageNumber - currentPage) <= 1;

        if (totalPages > 7 && !isFirstOrLast && !isNearCurrent) {
          if (pageNumber === 2 || pageNumber === totalPages - 1) {
            return (
              <span key={pageNumber} className="px-1 text-xs text-base-content/40">
                ...
              </span>
            );
          }
          return null;
        }

        return (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            aria-label={`Page ${pageNumber}`}
            aria-current={isActive ? "page" : undefined}
            className={`btn btn-sm min-w-9 rounded-xl ${
              isActive
                ? "btn-primary font-bold shadow-sm"
                : "btn-ghost border border-transparent hover:border-base-200"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        className="btn btn-sm btn-ghost btn-square rounded-xl border border-base-200 bg-base-100 shadow-sm disabled:bg-base-200/40"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  </nav>
)}
    </div>
  );
}