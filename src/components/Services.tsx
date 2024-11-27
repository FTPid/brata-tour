"use client";
import { useState } from 'react';
import { FaMosque } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  details: string;
  icon: JSX.Element;
  backgroundImage: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      title: 'Umroh Reguler',
      description: 'Ibadah umroh 9 hari dengan berbagai fasilitas yang di pilih',
      details: 'Paket ini mencakup akomodasi hotel, transportasi, dan bimbingan ibadah lengkap.',
      icon: <FaMosque />,
      backgroundImage: '/images/nabawi.jpg',
    },
    {
      title: 'Umroh Plus Turki',
      description: 'Ibadah umroh 12 hari termasuk wisata muslim turki',
      details: 'Selain umroh, nikmati wisata sejarah Islam di Turki dengan panduan profesional.',
      icon: <FaMosque />,
      backgroundImage: '/images/hagia.jpg',
    },
    {
      title: 'Ibadah Haji Plus',
      description: 'Ibadah haji khusus dengan percepatan waktu keberangkatan.',
      details: 'Layanan haji plus dengan akomodasi premium dan durasi lebih singkat.',
      icon: <FaMosque />,
      backgroundImage: '/images/background.png',
    },
    {
      title: 'Ibadah Haji Furoda',
      description: 'Ibadah haji khusus tanpa masa tunggu',
      details: 'Haji tanpa antrean dengan visa Furoda resmi dari pemerintah Arab Saudi.',
      icon: <FaMosque />,
      backgroundImage: '/images/masjidil-haram.jpg',
    },
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black" data-aos="fade-up">
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              onClick={() => openModal(service)}
            >
              <div className="relative">
                <img
                  src={service.backgroundImage}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-5xl">{service.icon}</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-green-500 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-green-500 mb-4">{selectedService.title}</h3>
              <p className="text-gray-700 mb-6">{selectedService.details}</p>
              <p className="text-gray-600">{selectedService.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

