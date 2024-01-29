import Link from 'next/link';
import InputSearch from '@/components/Navbar/InputSearch';
import UserActionButton from '@/components/Navbar/UserActionButton';
const Navbar = () => {
  return (
    <header className="bg-color-primary">
      <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2">
        <Link href="/" className="text-3xl font-bold">
          SANIMELIST
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
