import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout() {
    return (
        <div className="app-shell">
            <Navbar />

            <div className="mx-auto flex w-full max-w-[1600px] flex-1 gap-6 px-4 py-5 sm:px-6 lg:px-8">
                <Sidebar />

                <main className="flex-1 overflow-y-auto rounded-[28px] border border-slate-200/80 bg-white/70 p-4 shadow-[0_15px_35px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
