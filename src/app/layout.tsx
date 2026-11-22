
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "New Refugio | Villasana de Mena",
    description:
        "Propuesta de plataforma web para New Refugio, en Villasana de Mena, Burgos.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}
