import NavbarPage from "components/NavbarPage";
import "./globals.css";
import { Inter } from "next/font/google";
import FooterPage from "components/FooterPage";
import WagmiProviders from "providers/WagmiProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legend of Card",
  description: "Legend of Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProviders>
          <NavbarPage />
          {children}
          <FooterPage />
        </WagmiProviders>
      </body>
    </html>
  );
}
