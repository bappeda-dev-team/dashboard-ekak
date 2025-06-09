import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LinkItemProps {
  href: string;
  title: string;
  imgSrc: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, title, imgSrc }) => {
  return (
    <Link
      className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer border border-gray-300"
      href={href}
    >
      <div className="max-w-[100px]">
        <Image
          src={imgSrc}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <h1 className="uppercase text-2xl font-bold">{title}</h1>
      </div>
    </Link>
  );
};

export default LinkItem;
