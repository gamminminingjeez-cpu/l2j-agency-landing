import { ThemeProvider } from '@/components/demos/shared/ThemeProvider';
import { DemoNavbar } from '@/components/demos/shared/DemoNavbar';
import { DemoFooter } from '@/components/demos/shared/DemoFooter';

export default function DarkOmenLayout({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider themeKey="dark-omen">
      <div className="min-h-screen bg-[#0A0A0A]">
        <DemoNavbar themeKey="dark-omen" />
        <main className="pt-20">{children}</main>
        <DemoFooter themeKey="dark-omen" />
      </div>
    </ThemeProvider>
  );
}


