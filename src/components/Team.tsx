'use client';

import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'H Dickie Lustianto',
      job: 'CEO & Founder',
      image: '/images/dicki.png',
      email: 'dicki@example.com',
    },
    {
      name: 'Hj Hilda',
      job: 'General Manager',
      image: '/images/hj hilda.png',
      email: 'hilda@example.com',
    },
    {
      name: 'Salam Hermawan',
      job: 'Commercial Marketing',
      image: '/images/salam.png',
      email: 'hermawan@example.com',
    },
    {
      name: 'Feriansyah',
      job: 'Fullstack Developer',
      image: '/images/dev.png',
      email: 'feri@example.com',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black" data-aos="fade-up">
          Team Kami
        </h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${teamMembers.length === 2 ? 'justify-center' : ''
            }`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-black">{member.name}</h3>
              <p className="text-gray-700 mb-2">{member.job}</p>
              <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline">
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
