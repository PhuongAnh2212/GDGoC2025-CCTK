// components/Header.js
'use client';
import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

interface HeaderProps {
  setCurrentView?: (view: string) => void
  currentView?: string
}

export default function Header({ setCurrentView, currentView }: HeaderProps) {
  const handleUngDungClick = (e: { preventDefault: () => void; }) => {
    if (setCurrentView) {
      e.preventDefault()
      setCurrentView("ungdung")
    }
  }
  const handleLogoClick = (e: { preventDefault: () => void; }) => {
    if (setCurrentView) {
      setCurrentView("home")
    }
  }
  return ( 
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={handleLogoClick}>

            <Logo />
        </Link>
        <nav className="space-x-8">
          <Link
            onClick={handleUngDungClick}
            href="/"
            className={`text-gray-700 inline-flex items-center px-4 py-2 hover:bg-blue-100 hover:rounded-full hover:text-blue-600 hover:font-bold transition-all duration-200 font-poppins "
            }`}
          >
            Ứng dụng
          </Link>
          <Link href="/nghiencuu" className="text-gray-700 inline-flex items-center px-4 py-2 hover:bg-blue-100 hover:rounded-full hover:text-blue-600 hover:font-bold transition-all duration-200 font-poppins">
            Nghiên cứu
          </Link>
          <Link href="/gochoctap" className="text-gray-700 inline-flex items-center px-4 py-2 hover:bg-blue-100 hover:rounded-full hover:text-blue-600 hover:font-bold transition-all duration-200 font-poppins">
            Góc học tập
          </Link>
          <Link href="/vechungtoi" className="text-gray-700 inline-flex items-center px-4 py-2 hover:bg-blue-100 hover:rounded-full hover:text-blue-600 hover:font-bold transition-all duration-200 font-poppins">
            Về chúng tôi
          </Link>
        </nav>
      </div>
    </header>
  );
}
