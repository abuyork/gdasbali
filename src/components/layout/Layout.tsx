import { Outlet, useLocation } from 'react-router-dom'
import { HeroProvider } from '@/lib/hero'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  const location = useLocation()
  return (
    <HeroProvider>
      <ScrollToTop />
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* Keyed on pathname so the fade replays on every navigation */}
        <div key={location.pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </HeroProvider>
  )
}
