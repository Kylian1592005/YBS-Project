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

export default function Profile() {
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

          <div className="space-y-1">
            <h2 className="text-xl font-extrabold text-base-content">Nyo Min Htin</h2>
            <p className="text-xs text-slate-500 font-medium">nyomin@example.com</p>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider pt-1">
              Member since 2026
            </p>
          </div>
        </div>

        <button className="btn btn-outline border-base-300 gap-2 normal-case rounded-xl hover:bg-base-200 text-xs">
          <Edit3 size={15} />
          Edit Profile
        </button>
      </div>

      {/* QUICK STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Saved Stops Stat */}
        <div className="bg-base-100 border border-base-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Star size={14} className="text-amber-500 fill-amber-500" /> Saved Stops
            </span>
            <p className="text-3xl font-black text-base-content mt-2">12</p>
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
          {/* Stop Item 1 */}
          <Link 
            to="/stops/hledan-centre" 
            className="py-3.5 flex items-center justify-between hover:bg-base-200/50 px-2 rounded-xl transition group"
          >
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-600" />
              <span className="font-bold text-sm text-base-content">Hledan Centre</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">YBS 21</span>
                <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">YBS 36</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Stop Item 2 */}
          <Link 
            to="/stops/sule" 
            className="py-3.5 flex items-center justify-between hover:bg-base-200/50 px-2 rounded-xl transition group"
          >
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-600" />
              <span className="font-bold text-sm text-base-content">Sule</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">YBS 21</span>
                <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">YBS 30</span>
                <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">YBS 65</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Stop Item 3 */}
          <Link 
            to="/stops/myaynigone" 
            className="py-3.5 flex items-center justify-between hover:bg-base-200/50 px-2 rounded-xl transition group"
          >
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-600" />
              <span className="font-bold text-sm text-base-content">Myaynigone</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">YBS 21</span>
                <span className="badge badge-sm bg-base-200 text-slate-700 font-bold border-none">YBS 65</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
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