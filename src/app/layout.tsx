import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/Theme';
import { GlobalProvider } from '../context/GlobalContext';
import { CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Price Of Life",
  description: "Take a step back and understand the perspective of time in relation to your money",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ThemeProvider>
    </GlobalProvider>
  );
}
