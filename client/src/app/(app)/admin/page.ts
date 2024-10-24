import { getServerSession } from "next-auth";

const page = () => {
  const session = getServerSession();
  console.log(session);
  return;
};

export default page;
