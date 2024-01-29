import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-8 sm:grid-cols-6 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-accent hover:text-color-primary transition-all" key={index}>
            <Image src={anime.images.webp.image_url} alt={anime.images.jpg.image_url} width={300} height={400} className="w-full max-h-64 object-cover" />
            <h3 className="md:text-md text-sm font-bold p-2 text-center">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
