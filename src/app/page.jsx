import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '@/libs/api-libs';

const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=16');
  let recommendationAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
  recommendationAnime = reproduce(recommendationAnime, 8);

  return (
    <>
      {/* Anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime terpopuler */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendationAnime} />
      </section>
    </>
  );
};

export default Page;
