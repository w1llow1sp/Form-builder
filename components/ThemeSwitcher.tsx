'use client'
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SunIcon, MoonIcon, DesktopIcon} from '@radix-ui/react-icons'


function ThemeSwitcher() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null // avoid rehydration error

    return (
        <Tabs value={theme} onValueChange={setTheme}>
            <TabsList className={'border'}>
                <TabsTrigger value={'light'}>
                    <SunIcon className={'h-[1.2rem] w-[1.2rem]'}/>
                </TabsTrigger>
                <TabsTrigger value={'dark'}>
                    <MoonIcon className={'h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0'}/>
                </TabsTrigger>
                <TabsTrigger value={'system'}>
                    <DesktopIcon className={'h-[1.2rem] w-[1.2rem]'}/>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default ThemeSwitcher;
