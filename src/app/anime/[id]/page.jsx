import { getAnimeResponse } from '@/libs/api-libs';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';
import CollectionButton from '@/components/AnimeList/CollectionButton';
import { authUserSession } from '@/libs/auth-libs';
import prisma from '@/libs/prisma-libs';
import CommentInput from '@/components/AnimeList/CommentInput';
import CommentBox from '@/components/AnimeList/CommentBox';
// import Rating from '@/components/Utilities/Rating';

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({ where: { user_email: user?.email, anime_mal_id: id } });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="pb-2 text-2xl font-bold text-color-accent">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && <CollectionButton text={'Add to Collection'} anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}
      </div>
      <div className="pt-4 px-4 flex flex-row gap-2 text-color-accent overflow-x-auto">
        <div className="w-32 flex flex-col items-center text-center rounded border border-color-accent p-2">
          <h3 className="text-md font-bold">PERINGKAT</h3>
          <p className="text-center text-sm">{anime.data.rank}</p>
        </div>
        <div className="w-32 flex flex-col items-center text-center rounded border border-color-accent p-2">
          <h3 className="text-md font-bold">RATING</h3>
          <p className="text-center text-sm">{anime.data.score}</p>
        </div>
        <div className="w-32 flex flex-col items-center text-center rounded border border-color-accent p-2">
          <h3 className="text-md font-bold">ANGGOTA</h3>
          <p className="text-center text-sm">{anime.data.members}</p>
        </div>
        <div className="w-32 flex flex-col items-center text-center rounded border border-color-accent p-2">
          <h3 className="text-md font-bold">EPISODE</h3>
          <p className="text-center text-sm">{anime.data.episodes}</p>
        </div>
        <div className="w-32 flex flex-col items-center text-center rounded border border-color-accent p-2">
          <h3 className="text-md font-bold">STATUS</h3>
          <p className="text-center text-sm">{anime.data.status}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-accent">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={300} className="w-300 h-400 rounded object-cover" />
        <div className="flex flex-col gap-4">
          <p className="text-justify text-md">{anime.data.synopsis}</p>
          <div className="flex gap-2">
            <div className="flex flex-col justify-center items-center rounded border border-color-accent p-2">
              <h3 className="text-md font-bold">GENRE</h3>
              <p className="text-center text-sm">{anime.data.genres.map((genre) => genre.name).join(', ')}</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded border border-color-accent p-2">
              <h3 className="text-md font-bold">RATING</h3>
              <p className="text-center text-sm">{anime.data.rating}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="py-2 text-xl font-bold text-color-accent">KOMENTAR</h3>
        <CommentBox anime_mal_id={id} />
        {/* <Rating onRatingChange={() => {}} /> */}
        {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default page;
