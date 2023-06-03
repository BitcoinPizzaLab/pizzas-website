import { Providers } from "./providers";
import "./libs/styles/global.css";
import { LoadingMask } from "./libs/components/loadingMask";

export const metadata = {
  title: "Pizza Labs",
  description: "Bitcoin Pizza Labs",
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
        <LoadingMask />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
