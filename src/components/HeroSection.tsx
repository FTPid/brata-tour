"use client";

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      <Image
        src="/images/background.png"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Selamat Datang di Brata Tour</h1>
        <TypeAnimation
          sequence={[

            'PT. Bintang Rahmat Semesta',
            1000,
            'Umrah Haji Khusus & Wisata Muslim',
            1000,
            'Hypermart Taman Yasmin Bogor',
            1000,
            'Office/WA: 08111110320',
            1000,
            'Izin umroh No: 14072300859440003',
            1000,

          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />

      </div>
    </section>
  );
}
