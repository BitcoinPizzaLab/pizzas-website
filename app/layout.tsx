// import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import "./libs/styles/global.css";

export const metadata = {
  title: "Pizzas Lab",
  description: "Bitcoin Pizzas Lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className="h-[100vh] w-[100vw] overflow-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
