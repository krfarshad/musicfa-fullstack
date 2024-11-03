import MUIAppLayout from "@/layouts/MUIAppLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MUIAppLayout>{children}</MUIAppLayout>;
}
