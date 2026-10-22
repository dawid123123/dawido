"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";
import { bookingHref, navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 motion-reduce:transition-none",
        solid ? "border-b border-line bg-white/95 text-navy shadow-sm backdrop-blur" : "text-white",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" aria-label="DRIVEON Ökukennsla, forsíða" className="rounded-md">
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        <nav aria-label="Aðalvalmynd" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "text-sm font-medium underline-offset-4 hover:underline",
                isActive(pathname, item.href) && "underline",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={bookingHref}
            className="hidden rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark focus-visible:outline-white sm:inline-flex"
          >
            Bóka ökutíma
          </Link>
          <button
            ref={openRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Loka valmynd" : "Opna valmynd"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Valmynd"
          className="fixed inset-0 top-[4.5rem] z-50 overflow-y-auto bg-navy text-white lg:hidden"
        >
          <nav aria-label="Farsímavalmynd" className="flex flex-col px-5 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className="border-b border-white/10 py-4 text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={bookingHref}
              onClick={closeMenu}
              className="mt-6 inline-flex justify-center rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
            >
              Bóka ökutíma
            </Link>
            <button
              ref={closeRef}
              type="button"
              className="mt-4 py-3 text-sm text-white/80"
              onClick={() => {
                setOpen(false);
                openRef.current?.focus();
              }}
            >
              Loka
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function HeaderFallback() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[4.5rem] border-b border-transparent bg-navy/20" />
  );
}
