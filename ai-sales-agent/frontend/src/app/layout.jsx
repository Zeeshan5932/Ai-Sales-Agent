import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'AI Sales Agent',
  description: 'AI-powered sales lead analysis and pitch generation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-[calc(100vh-64px)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
