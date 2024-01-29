import { authUserSession } from '@/libs/auth-libs';
import Image from 'next/image';
import Link from 'next/link';
const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-accent flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">Welcome {user.name}</h5>
      <Image src={user.image} alt="..." width={250} height={250} className="" />
      <div className="py-8 flex flex-wrap gap-4">
        <Link href="/users/dashboard/collection" className="hover:bg-color-secondary bg-color-primary text-color-dark text-md px-2 py-1 font-bold rounded">
          My Collection
        </Link>
        <Link href="/users/dashboard/comment" className="hover:bg-color-secondary bg-color-primary text-color-dark text-md px-2 py-1 font-bold rounded">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
