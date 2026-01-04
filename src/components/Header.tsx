'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight, Sparkles, Shield, Zap, Scissors } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/data';
import Button from './Button';

// Icon Map for dynamic icons
const IconMap: Record<string, any> = {
  Sparkles: Sparkles,
  Shield: Shield,
  Zap: Zap,
  Scissors: Scissors
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const shouldShowWhiteBg = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpandedItem(null);
  }, [pathname]);

  const toggleMobileSubmenu = (label: string) => {
    if (mobileExpandedItem === label) {
      setMobileExpandedItem(null);
    } else {
      setMobileExpandedItem(label);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldShowWhiteBg ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center z-50">
             <span className={`font-serif text-2xl md:text-3xl font-bold tracking-widest ${shouldShowWhiteBg ? 'text-gold-600' : 'text-gold-600 md:text-white'}`}>
                QUANG ĐĂNG
             </span>
             <span className={`text-[10px] tracking-[0.2em] uppercase ${shouldShowWhiteBg ? 'text-gray-500' : 'text-gray-500 md:text-white/80'}`}>
                International Clinic
             </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="relative group py-4">
                {/* Main Link */}
                <Link
                  href={item.path}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-gold-400 flex items-center gap-1.5 ${
                    shouldShowWhiteBg
                      ? 'text-gray-700'
                      : 'text-white'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </Link>

                {/* Mega Menu / Dropdown */}
                {item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gold-100 overflow-hidden p-6 grid grid-cols-2 gap-4">
                      {item.children.map((subItem) => {
                        const Icon = IconMap[subItem.icon || 'Sparkles'];
                        return (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gold-50 transition-all group/sub"
                          >
                            <div className="shrink-0 w-12 h-12 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center group-hover/sub:bg-gold-500 group-hover/sub:text-white transition-colors">
                              <Icon size={24} />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 group-hover/sub:text-gold-700 transition-colors">
                                {subItem.label}
                              </div>
                              <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      {/* Dropdown Footer */}
                      <div className="col-span-2 mt-4 pt-4 border-t border-gray-100 text-center">
                        <Link href="/dich-vu" className="text-xs font-bold text-gold-600 uppercase tracking-widest hover:underline">
                          Xem tất cả dịch vụ →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
             <a href="tel:0988834446" className={`flex items-center gap-2 font-semibold ${shouldShowWhiteBg ? 'text-gold-600' : 'text-white'}`}>
                <Phone size={18} />
                <span>0988.834.446</span>
             </a>
             <Link href="/dat-lich">
               <Button variant={shouldShowWhiteBg ? 'primary' : 'white'} className={!shouldShowWhiteBg ? 'text-gold-600' : ''}>
                 <span className="flex items-center gap-2">
                   <Calendar size={16} /> Đặt Lịch
                 </span>
               </Button>
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold-600 z-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl font-bold text-gold-600 tracking-widest">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-red-500">
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.path} className="border-b border-gray-100 last:border-none">
                  <div className="flex justify-between items-center py-4">
                    <Link
                      href={item.path}
                      className="text-lg font-bold text-gray-800 hover:text-gold-600 transition-all flex-grow"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="p-2 text-gold-500 focus:outline-none"
                      >
                        <ChevronRight size={20} className={`transform transition-transform ${mobileExpandedItem === item.label ? 'rotate-90' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu Accordion */}
                  {item.children && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileExpandedItem === item.label ? 'max-h-96 opacity-100 mb-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-gray-50 rounded-2xl pl-4 pr-2 py-3 space-y-1">
                        {item.children.map(sub => {
                           const Icon = IconMap[sub.icon || 'Sparkles'];
                           return (
                             <Link
                               key={sub.path}
                               href={sub.path}
                               className="flex items-center gap-3 text-sm text-gray-600 py-3 hover:text-gold-600 border-b border-gray-100 last:border-none"
                             >
                               <Icon size={16} className="text-gold-500" />
                               {sub.label}
                             </Link>
                           );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <Link href="/dat-lich" className="block">
                <Button fullWidth className="flex items-center justify-center gap-2 py-4">
                  <Calendar size={18} /> Đặt Lịch Ngay
                </Button>
              </Link>
              <a href="tel:0988834446" className="block text-center py-4 text-gold-600 font-bold border-2 border-gold-500 rounded-full">
                Hotline: 0988.834.446
              </a>
            </div>

            <div className="mt-auto pt-8 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                Tầng 5 - TTTM Đức Tài — Tâm Đạt<br/>Quỳnh Lưu, Nghệ An
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
