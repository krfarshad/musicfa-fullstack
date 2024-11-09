import { Music } from "@/features/music";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <Music id={id} />;
};

export default page;
