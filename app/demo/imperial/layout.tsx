import { ThemeProvider } from '@/components/demos/shared/ThemeProvider';
import { DemoNavbar } from '@/components/demos/shared/DemoNavbar';
import { DemoFooter } from '@/components/demos/shared/DemoFooter';

export default function ImperialLayout({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider themeKey="imperial">
      <div className="min-h-screen bg-[#1A1714]">
        <DemoNavbar themeKey="imperial" />
        <main className="pt-20">{children}</main>
        <DemoFooter themeKey="imperial" />
      </div>
    </ThemeProvider>
  );
}



