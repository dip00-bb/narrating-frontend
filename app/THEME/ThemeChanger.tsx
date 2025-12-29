import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        const currentTheme:string = localStorage.getItem("theme") || "light";
        setTheme(currentTheme)
    }, [setTheme])

    const handleThemeChange = () => {
        if (theme === 'dark') {
            setTheme("light")
            localStorage.setItem('theme', "light")
        } else {
            setTheme("dark")
            localStorage.setItem('theme', "dark")
        }
    }


    const content = (
        theme === "dark" ? <Sun /> : <Moon />
    )
    return (
        <div>
            <Button onClick={handleThemeChange} className='cursor-pointer rounded-full'>  {content} </Button>
        </div>
    )
}


export default ThemeChanger