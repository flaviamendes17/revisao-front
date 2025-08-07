import "./globals.css";

export const metadata = {
  title: "Loja de Eletrônicos",
  description: "Revisão 2 do curso de Next.js",
  icons: {
    icon: "/images/celular.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Quicksand, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}