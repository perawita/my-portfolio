import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services ' + process.env.NEXT_PUBLIC_NAME_APP,
  description: "Halaman services dimana anda dapat memilih opsi layanan yang saya tawarkan",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}
