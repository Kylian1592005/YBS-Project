import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            <div className="flex justify-content-between align-items-center">
                <Sidebar />

                {/* Dynamic Page Area */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
