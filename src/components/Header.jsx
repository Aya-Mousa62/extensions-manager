import { useState } from 'react'
import LogoDark from '../assets/images/logo.svg'
import LogoLight from '../assets/images/logoLight.svg'
import IconMoon from '../assets/images/icon-moon.svg'
import IconSun from '../assets/images/icon-sun.svg'
export default function Header() {

    const saveModeDark =  localStorage.getItem("dark");
    
    const saveMode = JSON.parse(saveModeDark);

    if(JSON.parse(saveModeDark)){
        document.documentElement.classList.add('dark');
    }
    
    const [isDark, setDark]  = useState(saveMode ? saveMode : false);
    
    const HandleMode = () => {
        const changeDark = document.documentElement.classList.toggle('dark');
        setDark(changeDark);
        localStorage.setItem("dark", changeDark);
    }

    return (
        <>
            <div className='p-5'>
                <div className='flex top-0 items-center justify-between p-3 dark:bg-Neutral-800 bg-white rounded-2xl shadow'>
                    <div>
                        <img src={isDark ? LogoLight : LogoDark } alt="Logo Extensions" />
                    </div>
                    <div onClick={HandleMode} className='bg-neutral-100 rounded-[10px] p-3 hover:cursor-pointer hover:bg-neutral-200 transition select-none dark:bg-Neutral-700 dark:hover:bg-Neutral-600'>
                        <img src={isDark ? IconSun : IconMoon} alt="Logo Extensions" />
                    </div>
                </div>
            </div>
        </>
    )
}
