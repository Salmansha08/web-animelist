'use client';

import { ArrowCircleLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = async (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <button className="text-color-accent hover:text-color-primary mb-4" onClick={handleBack}>
        <ArrowCircleLeft size={36} />
      </button>
      <h3 className="text-2xl text-color-accent font-bold mb-4">{title}</h3>
    </div>
  );
};

export default Header;
