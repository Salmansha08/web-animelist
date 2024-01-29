import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Dashboard/Header';
import prisma from '@/libs/prisma-libs';
import { authUserSession } from '@/libs/auth-libs';

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={'My Collection'} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => (
          <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
            <Image className="w-full" src={collect.anime_image} alt={collect.anime_image} width={350} height={350} />
            <div className="absolute bottom-0 flex items-center justify-center w-full bg-color-primary h-16 text-center">
              <h5 className="hover:text-color-accent text-color-dark text-md text-center font-bold">{collect.anime_title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
