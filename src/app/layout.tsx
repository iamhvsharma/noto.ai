import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Noto AI",
  description: "An AI note taking application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster
            className={`
                fixed z-[9999]
                w-[90%] max-w-sm px-4

                left-1/2 -translate-x-1/2 bottom-[env(safe-area-inset-bottom,4.5rem)]

                sm:left-auto sm:right-5 sm:translate-x-0 sm:bottom-5 sm:w-auto sm:mb-4
  `}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
