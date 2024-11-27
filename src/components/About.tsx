export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-8 text-black"
          data-aos="fade-up"
        >
          Tentang Kami
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2" data-aos="fade-right">
            <img src="/images/logo-brata.jpg" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0" data-aos="fade-left">
            <p className="text-gray-700 mb-4">
              "BRATA TOUR Biro Perjalanan Umrah Haji dan Wisata Muslim, melayani paket perjalanan Umrah Reguler, Umrah Plus Dubai, Turki, Mesir, Aqsa dll, Haji tanpa antri, juga wisata muslim. Insya Allah Brata Tour akan menjadikan perjalanan ibadah anda menjadi perjalanan yang berkah dan berkesan. Aamiin."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
