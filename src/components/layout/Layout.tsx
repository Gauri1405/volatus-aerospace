import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ScrollToTop } from '@/lib/scroll-to-top';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}