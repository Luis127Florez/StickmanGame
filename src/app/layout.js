
import { Providers } from "../redux/provider";

export const metadata = {
  title: "StickmanGame",
  description: "Generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
