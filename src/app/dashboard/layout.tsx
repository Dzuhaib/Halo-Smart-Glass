import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps{
    children: ReactNode;
}
export default function DashboardLayout({ children }: LayoutProps) {
    return (
        <div className="flex">
            <aside className="bg-blue p-4">
                <h3>Dashboard Menu</h3>
                <nav>
                    <Link href="/dashboard">Dashboard Home</Link>
                    <Link href="/dashboard/settings">Settings</Link>
                </nav>
            </aside>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}
