import React from "react";
import {UserButton} from "@clerk/nextjs";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className={'flex flex-col min-h-screen min-w-full bg-background max-h-screen'}>
            <nav className={'flex justify-between items-center border-b border-border h-[60px] px-4 py-2 '}>
                <Logo/>
                <div className={'flex gap-4 items-center'}>
                    <ThemeSwitcher/>
                    <UserButton afterSignOutUrl={'/sign-in'}/>
                </div>
            </nav>
            <main className={'flex-1 w-full flex-grow'}>
                {children}
            </main>

        </div>
    )
}

export default Layout
