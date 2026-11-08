import { SiteFooter } from "@/components/SiteFooter";

/**
 * Layout shared by every page on the main nexoraio.vercel.app site.
 * The global footer lives here (not in the root layout) so the separate
 * marketing landing page can ship with its own chrome.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
