export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Assalamu’alaikum wr.wb.. Jazakallahu khairan kami ucapkan kepada semua team yang telah membimbing kami dalam  melaksanakan ibadah Umroh dari awal hingga akhir, juga seluruh jamaah Umroh atas kebersamaannya. Mohon dimaafkan apabila kami sekeluarga ada salah dan khilaf, terutama kami telah membuat jamaah menunggu saat akan melakukan kegiatan amanah',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Smith',
      feedback: 'Assalamu’alaikum wr.wb.. Jazakallahu khairan kami ucapkan kepada semua team yang telah membimbing kami dalam  melaksanakan ibadah Umroh dari awal hingga akhir, juga seluruh jamaah Umroh atas kebersamaannya. Mohon dimaafkan apabila kami sekeluarga ada salah dan khilaf, terutama kami telah membuat jamaah menunggu saat akan melakukan kegiatan amanah',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Brown',
      feedback: 'Assalamu’alaikum wr.wb.. Jazakallahu khairan kami ucapkan kepada semua team yang telah membimbing kami dalam  melaksanakan ibadah Umroh dari awal hingga akhir, juga seluruh jamaah Umroh atas kebersamaannya. Mohon dimaafkan apabila kami sekeluarga ada salah dan khilaf, terutama kami telah membuat jamaah menunggu saat akan melakukan kegiatan amanah',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
    },

  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black" data-aos="fade-up">
          Testimoni
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-sm mx-4 my-6 bg-gray-100 p-6 rounded-lg shadow"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-black">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
