import { AppLayout } from "@/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppLayout>{children}</AppLayout>
    </>
  );
}
