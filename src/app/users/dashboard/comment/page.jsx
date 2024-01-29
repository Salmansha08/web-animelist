import Link from 'next/link';
import Header from '@/components/Dashboard/Header';
import prisma from '@/libs/prisma-libs';
import { authUserSession } from '@/libs/auth-libs';

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: {
      user_email: user.email,
    },
  });

  return (
    <section className="mt-4 px-4">
      <Header title={'My Comment'} />
      {comments.length > 0 ? (
        <div className="grid grid-cols-2 py-2 gap-4">
          {comments.map((comment) => (
            <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="text-color-dark py-2 px-3 bg-color-accent rounded">
              <p className="font-bold text-md">{comment.username}</p>
              <p className="text-sm italic">{comment.comment}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="text-color-dark font-bold py-2 px-4 bg-color-accent rounded items-center">Comment not found</p>
        </div>
      )}
    </section>
  );
};

export default Page;
