
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-6xl mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
