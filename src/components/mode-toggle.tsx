"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    const icon = theme === "dark" ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />;
    const label = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {icon}
            <span className="sr-only">{label}</span>
        </Button>
    );
}
