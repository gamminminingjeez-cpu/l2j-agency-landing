import { ThemeProvider } from '@/components/demos/shared/ThemeProvider';
import { DemoNavbar } from '@/components/demos/shared/DemoNavbar';
import { DemoFooter } from '@/components/demos/shared/DemoFooter';

export default function ElvenLayout({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider themeKey="elven">
      <div className="min-h-screen bg-[#0F2918]">
        <DemoNavbar themeKey="elven" />
        <main className="pt-20">{children}</main>
        <DemoFooter themeKey="elven" />
      </div>
    </ThemeProvider>
  );
}
