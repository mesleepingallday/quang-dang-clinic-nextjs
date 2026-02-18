'use client';

import React, { useState, useEffect, useCallback } from 'react';
import type { NavItem } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight, Sparkles, Shield, Zap, Scissors, Search, Home, type LucideIcon } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/data';
import Button from './Button';
import { SearchButton, SearchModal } from './search';

// Icon Map for dynamic icons
const IconMap: Record<string, LucideIcon> = {
  Sparkles: Sparkles,
  Shield: Shield,
  Zap: Zap,
  Scissors: Scissors
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  const isHomePage = pathname === '/';
  const isCompactHeader = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setIsMobileMenuOpen(false);
      setMobileExpandedItem(null);
    }, 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    if (mobileExpandedItem === label) {
      setMobileExpandedItem(null);
    } else {
      setMobileExpandedItem(label);
    }
  };

  return (
    <>
      <header
        className={`${isHomePage ? 'fixed' : 'sticky'} top-0 w-full z-40 transition-all duration-500 will-change-transform ${
          isCompactHeader
            ? isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg'
              : 'bg-white shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* SCROLLED STATE - Single Row Layout */}
        {isCompactHeader ? (
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between py-3">
              {/* LEFT: Logo */}
              <Link href="/" className="flex-shrink-0">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src="/quang-dang-logo.png"
                    alt="Viện Thẩm Mỹ Quang Đăng"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* CENTER: Desktop Navigation (lg+) */}
              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
                {NAV_ITEMS.map((item: NavItem) => (
                  <div key={item.path} className="relative group">
                    <Link
                      href={item.path}
                      className="text-sm font-bold uppercase tracking-wide text-gray-700 hover:text-green-600 flex items-center gap-1.5 transition-colors"
                    >
                      {item.label === 'Trang Chủ' ? (
                        <Home size={18} />
                      ) : (
                        item.label
                      )}
                      {item.children && (
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </Link>

                    {/* Mega Menu */}
                    {item.children && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-[opacity,transform] duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                        <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden p-6 grid grid-cols-2 gap-4">
                          {item.children.map((subItem: NavItem) => {
                            const Icon = IconMap[subItem.icon || 'Sparkles'];
                            return (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors group/sub"
                              >
                                <div className="shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover/sub:bg-green-500 group-hover/sub:text-white transition-colors">
                                  <Icon size={24} />
                                </div>
                                <div>
                                  <div className="font-bold text-gray-900 group-hover/sub:text-green-700 transition-colors">
                                    {subItem.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                                    {subItem.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                          <div className="col-span-2 mt-4 pt-4 border-t border-gray-100 text-center">
                            <Link href="/dich-vu" className="text-xs font-bold text-green-600 uppercase tracking-widest hover:underline">
                              Xem tất cả dịch vụ →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* RIGHT: Actions */}
              <div className="flex items-center gap-3">
                {/* Desktop: Full Search + Hotline + Đặt Lịch */}
                <div className="hidden lg:flex items-center gap-3">
                  <SearchButton onClick={openSearch} isScrolled={true} />
                  
                  <a
                    href="tel:0988834446"
                    className="flex items-center gap-2 font-semibold text-green-700 hover:text-green-600 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="hidden xl:inline">0988.834.446</span>
                  </a>
                  
                  <Button asChild variant="primary">
                    <Link href="/dat-lich">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} /> Đặt Lịch
                      </span>
                    </Link>
                  </Button>
                </div>

                {/* Tablet/Mobile: Search Icon + Hotline + Hamburger */}
                <div className="flex lg:hidden items-center gap-2">
                  <button
                    type="button"
                    onClick={openSearch}
                    className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                    aria-label="Tìm kiếm"
                  >
                    <Search size={22} />
                  </button>

                  <a
                    href="tel:0988834446"
                    className="hidden sm:flex items-center gap-1 font-semibold text-green-700 hover:text-green-600 transition-colors text-sm"
                  >
                    <Phone size={18} />
                    <span className="hidden md:inline">0988.834.446</span>
                  </a>

                  <button
                    type="button"
                    className="p-2 text-green-700 hover:bg-green-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                  >
                    <Menu size={28} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* NOT SCROLLED - Original 2 Row Layout */
          <>
            {/* Dòng 1 - Logo Center */}
            <div
              className={`border-b transition-all duration-500 ${
                isHomePage
                  ? 'border-white/20 py-4'
                  : 'border-green-100 py-4'
              }`}
            >
              <div className="container mx-auto px-4 md:px-8">
                <Link href="/" className="flex items-center justify-center gap-3">
                  <div
                    className={`relative shrink-0 rounded-full transition-all duration-500 h-12 w-12 md:h-14 md:w-14 ${
                      isHomePage
                        ? 'bg-white/80 ring-1 ring-green-500/25 shadow-md shadow-green-500/10'
                        : ''
                    }`}
                  >
                    <Image
                      src="/quang-dang-logo.png"
                      alt="Viện Thẩm Mỹ Quang Đăng Logo"
                      fill
                      className={`object-contain transition-all duration-300 ${
                        isHomePage ? 'p-1 drop-shadow-sm' : ''
                      }`}
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-base md:text-xl font-serif font-bold tracking-wide transition-colors duration-300 ${
                        isHomePage ? 'text-white' : 'text-green-800'
                      }`}
                    >
                      QUANG ĐĂNG
                    </span>
                    <span
                      className={`text-[9px] md:text-[11px] tracking-[0.12em] uppercase font-medium -mt-0.5 transition-colors duration-300 ${
                        isHomePage ? 'text-white/70' : 'text-gray-500'
                      }`}
                    >
                      Viện Thẩm Mỹ
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Dòng 2 - Navigation + CTA */}
            <div
              className={`transition-all duration-500 ${
                isHomePage
                  ? 'bg-transparent py-3'
                  : 'bg-green-50 py-3'
              }`}
            >
              <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {NAV_ITEMS.map((item: NavItem) => (
                      <div key={item.path} className="relative group py-2">
                        <Link
                          href={item.path}
                          className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:text-green-600 flex items-center gap-1.5 ${
                            isHomePage
                              ? 'text-white hover:text-green-300'
                              : 'text-gray-700'
                          }`}
                        >
                          {item.label === 'Trang Chủ' ? (
                            <Home size={18} />
                          ) : (
                            item.label
                          )}
                          {item.children && (
                            <ChevronDown
                              size={14}
                              className="group-hover:rotate-180 transition-transform duration-300"
                            />
                          )}
                        </Link>

                        {/* Mega Menu / Dropdown */}
                        {item.children && (
                          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-[opacity,transform] duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                            <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden p-6 grid grid-cols-2 gap-4">
                              {item.children.map((subItem: NavItem) => {
                                const Icon = IconMap[subItem.icon || 'Sparkles'];
                                return (
                                  <Link
                                    key={subItem.path}
                                    href={subItem.path}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors group/sub"
                                  >
                                    <div className="shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover/sub:bg-green-500 group-hover/sub:text-white transition-colors">
                                      <Icon size={24} />
                                    </div>
                                    <div>
                                      <div className="font-bold text-gray-900 group-hover/sub:text-green-700 transition-colors">
                                        {subItem.label}
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                                        {subItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                              <div className="col-span-2 mt-4 pt-4 border-t border-gray-100 text-center">
                                <Link href="/dich-vu" className="text-xs font-bold text-green-600 uppercase tracking-widest hover:underline">
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
                    <SearchButton onClick={openSearch} isScrolled={false} />

                    <a
                      href="tel:0988834446"
                      aria-label="Gọi hotline 0988.834.446"
                      className={`flex items-center gap-2 font-semibold transition-colors duration-300 hover:text-green-600 ${
                        isHomePage
                          ? 'text-white hover:text-green-300'
                          : 'text-green-700'
                      }`}
                    >
                      <Phone size={18} />
                      <span className="hidden xl:inline">0988.834.446</span>
                    </a>
                    <Button asChild variant="primary">
                      <Link href="/dat-lich">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} /> Đặt Lịch
                        </span>
                      </Link>
                    </Button>
                  </div>

                  {/* Mobile/Tablet Actions */}
                  <div className="flex lg:hidden items-center gap-2 w-full justify-end">
                    <button
                      type="button"
                      onClick={openSearch}
                      className={`p-2 rounded-full transition-colors ${
                        isHomePage
                          ? 'text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                      }`}
                      aria-label="Tìm kiếm"
                    >
                      <Search size={22} />
                    </button>

                    <button
                      type="button"
                      className={`p-2 rounded-md ${
                        isHomePage ? 'text-white' : 'text-green-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(true)}
                      aria-label="Open menu"
                    >
                      <Menu size={28} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/50 animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col overflow-y-auto animate-slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl font-bold text-green-700 tracking-widest">
                MENU
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-red-500 rounded-md"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item: NavItem) => (
                <div key={item.path} className="border-b border-gray-100 last:border-none">
                  <div className="flex justify-between items-center py-4">
                    <Link
                      href={item.path}
                      className="text-lg font-bold text-gray-800 hover:text-green-600 transition-colors flex-grow flex items-center gap-2"
                    >
                      {item.label === 'Trang Chủ' ? (
                        <>
                          <Home size={20} />
                          Trang Chủ
                        </>
                      ) : (
                        item.label
                      )}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="p-2 text-green-600 rounded-md"
                        aria-label={`Toggle ${item.label} menu`}
                        aria-expanded={mobileExpandedItem === item.label}
                      >
                        <ChevronRight
                          size={20}
                          className={`transform transition-transform duration-200 ${
                            mobileExpandedItem === item.label ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && (
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                        mobileExpandedItem === item.label
                          ? 'max-h-96 opacity-100 mb-3'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-gray-50 rounded-2xl pl-4 pr-2 py-3 space-y-1">
                        {item.children.map((sub: NavItem) => {
                          const Icon = IconMap[sub.icon || 'Sparkles'];
                          return (
                            <Link
                              key={sub.path}
                              href={sub.path}
                              className="flex items-center gap-3 text-sm text-gray-600 py-3 hover:text-green-700 border-b border-gray-100 last:border-none"
                            >
                              <Icon size={16} className="text-green-600" />
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
              <Button asChild fullWidth className="flex items-center justify-center gap-2 py-4">
                <Link href="/dat-lich" className="block">
                  <Calendar size={18} /> Đặt Lịch Ngay
                </Link>
              </Button>
              <a
                href="tel:0988834446"
                className="block text-center py-4 text-green-700 font-bold border-2 border-green-600 rounded-full hover:bg-green-50 transition-colors"
              >
                Hotline: 0988.834.446
              </a>
            </div>

            <div className="mt-auto pt-8 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                Tầng 5 - TTTM Đức Tài — Tâm Đạt
                <br />
                Quỳnh Lưu, Nghệ An
              </p>
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Header;
