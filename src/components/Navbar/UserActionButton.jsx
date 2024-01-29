import Link from 'next/link';
import { authUserSession } from '@/libs/auth-libs';

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? 'SIGN OUT' : 'SIGN IN';
  const actionURL = user ? '/api/auth/signout' : '/api/auth/signin';

  return (
    <div className="flex gap-2 justify-end">
      {user ? (
        <Link href="/users/dashboard" className="text-md font-bold py-1 px-2 rounded items-center hover:bg-color-accent bg-color-secondary">
          DASHBOARD
        </Link>
      ) : null}
      <Link href={actionURL} className="text-md font-bold py-1 px-2 rounded items-center hover:bg-color-accent bg-color-secondary">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
