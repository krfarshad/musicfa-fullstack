import { Artist } from "@/features/artist";

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const username = (await params).username;
  return <Artist username={username} />;
};

export default page;
