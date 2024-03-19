import { Navigation24Filled } from '@fluentui/react-icons';
import Link from 'next/link';

export const Breadcrumb = () => {
  return (
    <div className="flex h-[3em] items-center pl-6 text-lg leading-3">
      <Navigation24Filled />
      <Link href="/">
        <p className="ml-2 text-xl text-gray-800">
          Demo / <span className="font-semibold">Image report generation</span>
        </p>
      </Link>
    </div>
  );
};
