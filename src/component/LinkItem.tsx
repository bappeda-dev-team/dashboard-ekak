import Image from 'next/image';
import React from 'react';

interface LinkItemProps {
  href: string;
  title: string;
  imgSrc: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, title, imgSrc }) => {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(href, {
        method: 'HEAD', // lightweight check
        credentials: 'include', // if cookies/session-based
      });

      if (res.status === 200) {
        window.location.href = href; // navigate
      } else if (res.status === 401) {
        alert('Anda belum login. Silakan klik tombol LOGIN untuk masuk terlebih dahulu.');
      } else if (res.status === 403) {
        alert('Akun Anda tidak memiliki izin untuk mengakses menu ini. Silakan hubungi administrator jika Anda memerlukan akses.');
      } else {
        alert('Terjadi kesalahan pada sistem. Silakan coba beberapa saat lagi.');
      }
    } catch (error) {
      console.error('Error checking access:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex gap-10 items-center p-8 rounded-2xl shadow-xl hover:bg-yellow-400 hover:text-white cursor-pointer border border-gray-300"
      onClick={handleClick}
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
    </a>
  );
};

export default LinkItem;
