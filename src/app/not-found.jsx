'use client';
import { useRouter } from 'next/navigation';
import { FileSearch } from '@phosphor-icons/react';
const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearch size={32} className="text-color-primary" />
        <h3 className="text-3xl font-bold text-color-primary">404 | Not Found</h3>
        <button onClick={() => router.back()} className="text-color-dark rounded py-1 px-3 hover:bg-color-primary bg-color-secondary">
          Back
        </button>
      </div>
    </div>
  );
};

export default Page;
