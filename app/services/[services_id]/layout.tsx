import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact us: web developer ' + process.env.NEXT_PUBLIC_NAME_APP,
  description: "Ciptakan aplikasi berbasi web impian anda disini",
};

export default function ServicesIDLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  )
}
