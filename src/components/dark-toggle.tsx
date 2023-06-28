"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
                <>
                    <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Light mode</span>
                </>
            ) : (
                <>
                    <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Dark mode</span>
                </>
            )}
        </Button>
    )
}
