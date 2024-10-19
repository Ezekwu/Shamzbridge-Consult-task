'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Wrapper from "../Ui/Wrapper";
import UiButton from "../Ui/UiButton";
import UiIcon from "../Ui/UiIcon";
import useToggle from "@/Utils/hooks/useToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobileVisible = useToggle();
  

  const routes = [
    {
      label: 'Home',
      route: ''
    },
    {
      label: 'Services',
      route: ''
    },
    {
      label: 'About',
      route: ''
    },
    {
      label: 'Mission',
      route: ''
    }
  ]

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={` ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'} fixed z-30 w-full transition duration-120 ease-in text-white`}>
      <Wrapper>
        <div className="px-3 py-4 md:px-6  flex justify-between items-center ">
          <div className={`${isScrolled ? 'text-primary-base' : 'text-white'}`}>
            <p className="text-xl">HRTouch</p>
          </div> 
          <ul className={`hidden md:flex items-center justify-center ml-[10%] gap-6 font-[200] ${isScrolled ? 'text-primary-base' : 'text-white'}`}>
            {routes.map((route)=> (
              <Link href={route.route} key={route.route}>
                <li className="text-sm">{route.label}</li>
              </Link>
            ))}
          </ul>    
          <div className="hidden md:flex gap-2" >
            <UiButton injectedClasses={`${isScrolled && 'bg-primary-base'}`}>Login</UiButton>
            <UiButton variant="secondary">Sign Up</UiButton>
          </div>   
          <button onClick={()=> isMobileVisible.on()} className={`md:hidden cursor-pointer ${isScrolled ? 'stroke-primary-base' : 'stroke-white'}`}>
            <UiIcon icon="Hamburger" size="24"/>
          </button>
        </div>
      </Wrapper>
    </nav>
    {/* mobile nav */}
    <nav
      className={`transform bg-white border border-red-600 z-50 transition-transform duration-200 md:hidden fixed flex flex-col justify-between h-full  bg-w w-full ${
        isMobileVisible.value ? 'translate-x-0' : '-translate-x-full'
      }`}
      >
        <div>
          <header className="flex items-center justify-between mb-6 py-8 px-4">
            <div className={`text-base`}>
            <p className="text-xl text-slate-900 font-semibold">HRTouch</p>
            </div> 
            <button onClick={()=> isMobileVisible.off()}  className="stroke-slate-900 fill-slate-900">
              <UiIcon icon="X" size="24"/>
            </button>
          </header>
          <ul className="px-4 flex flex-col items-center gap-10">
            {routes.map((route)=> (
              <Link href={route.route} key={route.route}>
                <li className="text-sm text-slate-600">{route.label}</li>
              </Link>
            ))}
          </ul>
        </div>
    </nav>
    </>
  )
}