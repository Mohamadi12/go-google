import "./globals.css";
import Footer from "./components/Footer";


export const metadata = {
  title: "Google Clone",
  description: "Google app is best search platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
