// app/populer/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import AnimeList from '@/components/AnimeList';
import ScrollUp from '@/components/Utilities/ScrollUp';
import { getAnimeResponse } from '@/libs/api-libs';

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse('top/anime', `page=${page}`);
    setTopAnime(populerAnime);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the threshold as needed
    setShowFloatingButton(scrollY > 100);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
      {/* Replace the floating button with the ScrollUp component */}
      {showFloatingButton && <ScrollUp onClick={scrollTop} />}
    </>
  );
};

export default Page;
