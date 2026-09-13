import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  MapPin, 
  Bus, 
  Heart, 
  ChevronRight, 
  Bell, 
  Moon, 
  ShieldCheck, 
  LogOut, 
  Edit3, 
  Star 
} from 'lucide-react';
import { allStops, detailedStopsMap } from '../../data/mockData';

const FAVORITE_STOPS_KEY = 'favoriteStops';
const DEFAULT_FAVORITE_STOPS = ['s1', 's7', 's13'];

const getFavoriteStops = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(FAVORITE_STOPS_KEY) || '[]');
    return Array.isArray(saved) && saved.length ? saved : DEFAULT_FAVORITE_STOPS;
  } catch {
    return DEFAULT_FAVORITE_STOPS;
  }
};

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Nyo Min Htin',
    email: 'nyomin@example.com',
  });
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [favoriteStopIds] = useState(getFavoriteStops);

  useEffect(() => {
    localStorage.setItem(FAVORITE_STOPS_KEY, JSON.stringify(favoriteStopIds));
  }, [favoriteStopIds]);

  const savedStops = useMemo(() => {
    const normalizedIds = [...new Set(favoriteStopIds)];

    return normalizedIds.map((id) => {
      const stopDetails = detailedStopsMap[id] || allStops.find((stop) => stop.id === id);
      const lines = stopDetails?.servingBusLines?.map((line) => line.routeNumber) ||
        stopDetails?.passingLines?.map((line) => `YBS ${line.lineCode}`) || [];

      return {
        id,
        displayName: stopDetails?.name || 'Unknown Stop',
        lines,
      };
    });
  }, [favoriteStopIds]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setProfile(formData);
    } else {
      setFormData(profile);
    }
    setIsEditing((prev) => !prev);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      
      {/* HEADER SECTION */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-base-content">Profile</h1>
        <p className="text-xs text-slate-500 mt-1">
          Manage your account and saved bus information
        </p>
      </div>

      {/* USER INFORMATION CARD */}
      <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          {/* Avatar Container */}
          <div className="w-20 h-20 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center text-slate-400 shadow-inner">
            <User size={40} />
          </div>

          <div className="space-y-1 min-w-0 w-full sm:w-auto">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full sm:w-56 rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-base font-extrabold text-base-content outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full sm:w-64 rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-xs text-slate-500 font-medium outline-none focus:border-blue-500"
                />
              </>
            ) : (
              <>
                <h2 className="text-xl font-extrabold text-base-content">{profile.name}</h2>
                <p className="text-xs text-slate-500 font-medium">{profile.email}</p>
              </>
            )}
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider pt-1">
              Member since 2026
            </p>
          </div>
        </div>

        {isEditing ? (
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:border-slate-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleEditToggle}
              className="px-4 py-2.5 rounded-xl border border-emerald-500 bg-emerald-600 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-500 hover:border-emerald-400"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleEditToggle}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100 hover:border-blue-300"
          >
            <Edit3 size={15} className="stroke-[2.1]" />
            Edit Profile
          </button>
        )}
      </div>

      {/* QUICK STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Saved Stops Stat */}
        <div className="bg-base-100 border border-base-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Star size={14} className="text-amber-500 fill-amber-500" /> Saved Stops
            </span>
            <p className="text-3xl font-black text-base-content mt-2">{savedStops.length}</p>
            <p className="text-xs text-slate-500 mt-0.5">stops saved</p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl border border-amber-100">
            <MapPin size={24} />
          </div>
        </div>

        {/* Favorite Lines Stat */}
        <div className="bg-base-100 border border-base-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Bus size={14} className="text-blue-600" /> Favorite Lines
            </span>
            <p className="text-3xl font-black text-base-content mt-2">5</p>
            <p className="text-xs text-slate-500 mt-0.5">lines saved</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100">
            <Bus size={24} />
          </div>
        </div>
      </div>

      {/* FAVORITE STOPS LIST */}
      <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base text-base-content">
            <Heart size={18} className="text-rose-500 fill-rose-500" />
            <h2>Favorite Stops</h2>
          </div>
        </div>

        <div className="divide-y divide-base-200">
          {savedStops.map((stop) => {
            const stopDetails = detailedStopsMap[stop.id];

            return (
              <Link
                key={stop.id}
                to={`/stops/${stop.id}`}
                state={{ stop: stopDetails }}
                className="py-3.5 flex items-center justify-between hover:bg-base-200/50 px-2 rounded-xl transition group"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="font-bold text-sm text-base-content">{stop.displayName}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {stop.lines.map((line) => (
                      <span key={line} className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">
                        {line}
                      </span>
                    ))}
                  </div>
                  <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="pt-2 text-right">
          <Link 
            to="/stops" 
            className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            View all <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* ACCOUNT SETTINGS SECTION */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider px-1">
          Account Settings
        </h3>

        <div className="bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm divide-y divide-base-200">
          {/* Settings Row 1 */}
          <button className="w-full p-4 flex items-center justify-between hover:bg-base-200/50 transition text-left group">
            <div className="flex items-center gap-3.5">
              <div className="p-2 bg-base-200 rounded-xl text-slate-600">
                <User size={18} />
              </div>
              <span className="font-semibold text-sm text-base-content">Personal Information</span>
            </div>
            <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Settings Row 2 */}
          <button className="w-full p-4 flex items-center justify-between hover:bg-base-200/50 transition text-left group">
            <div className="flex items-center gap-3.5">
              <div className="p-2 bg-base-200 rounded-xl text-slate-600">
                <Bell size={18} />
              </div>
              <span className="font-semibold text-sm text-base-content">Notifications</span>
            </div>
            <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Settings Row 3 */}
          <button className="w-full p-4 flex items-center justify-between hover:bg-base-200/50 transition text-left group">
            <div className="flex items-center gap-3.5">
              <div className="p-2 bg-base-200 rounded-xl text-slate-600">
                <Moon size={18} />
              </div>
              <span className="font-semibold text-sm text-base-content">Appearance</span>
            </div>
            <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Settings Row 4 */}
          <button className="w-full p-4 flex items-center justify-between hover:bg-base-200/50 transition text-left group">
            <div className="flex items-center gap-3.5">
              <div className="p-2 bg-base-200 rounded-xl text-slate-600">
                <ShieldCheck size={18} />
              </div>
              <span className="font-semibold text-sm text-base-content">Privacy & Security</span>
            </div>
            <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* LOG OUT BUTTON */}
      <div>
        <button className="w-full bg-base-100 hover:bg-rose-50 border border-base-200 hover:border-rose-200 text-rose-600 p-4 rounded-2xl shadow-sm transition flex items-center justify-center gap-2 font-bold text-sm">
          <LogOut size={18} />
          Log Out
        </button>
      </div>

    </div>
  );
}