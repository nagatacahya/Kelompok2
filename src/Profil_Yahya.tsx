import { useState } from "react";

export default function Profil() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="text-white">

      {/* NAVBAR */}
      <nav className="fixed w-full z-20 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-wide">Kansey</div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>

          <div className={`${open ? "block" : "hidden"} lg:flex space-x-6`}>
            <a className="hover:text-blue-300 transition">Beranda</a>
            <a href="#profil" className="hover:text-blue-300 transition">Profil</a>
          </div>
        </div>
      </nav>

      {/* SECTION */}
      <section
        id="profil"
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/Image/Frieren.jpg')"
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-6 mt-24">

          <div className="grid md:grid-cols-3 gap-8">

            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6">

              {/* INFO */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                              rounded-2xl p-6 shadow-xl 
                              hover:scale-[1.03] hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold text-lg mb-3 text-blue-300">
                  Info Mahasiswa
                </h4>
                <p className="text-white/90">Kelas: T2D</p>
                <p className="text-white/90">Prodi: Teknologi Informasi</p>
                <p className="text-white/90">Domisili: Ngawi</p>
              </div>

              {/* SKILL */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                              rounded-2xl p-6 shadow-xl 
                              hover:scale-[1.03] hover:shadow-2xl transition duration-300">
                <h4 className="font-semibold text-lg mb-4 text-blue-300">
                  Soft Skill & Hard Skill
                </h4>

                <div className="mb-3">
                  <p className="font-semibold text-white/80">Soft Skill</p>
                  <ul className="list-disc list-inside text-white/80">
                    <li>Kepemimpinan</li>
                    <li>Manajemen Waktu</li>
                    <li>Public Speaking</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-white/80">Hard Skill</p>
                  <ul className="list-disc list-inside text-white/80">
                    <li>SQL</li>
                    <li>Bela Diri</li>
                    <li>Pidato</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="md:col-span-2 flex flex-col gap-6">

              {/* FOTO CARD */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                              rounded-2xl p-6 shadow-xl 
                              flex flex-col items-center text-center
                              hover:scale-[1.02] transition duration-300">

                <img
                  src="/Image/Foto yahya.jpeg"
                  alt="Foto Profil"
                  className="w-56 rounded-xl shadow-lg mb-4"
                />

                <h2 className="text-xl font-semibold tracking-wide text-blue-300">
                  Chill & Conquer
                </h2>
              </div>

              {/* DESKRIPSI */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                              rounded-2xl p-6 shadow-xl 
                              hover:scale-[1.02] transition duration-300">

                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  Deskripsi Diri
                </h4>

                <p className="text-white/90 leading-relaxed text-justify">
                  Saya adalah seorang pelajar yang memiliki minat besar dalam bidang pengolahan dan analisis data.
                  Sejak mengenal dunia teknologi, saya tertarik untuk memahami bagaimana data dapat diolah menjadi informasi yang bermanfaat.
                  Saya memiliki ketertarikan untuk menjadi seorang data scientist dan data analyst karena saya ingin membantu dalam pengambilan keputusan berbasis data.
                  Saya mulai mempelajari dasar-dasar seperti statistik, pemrograman, serta penggunaan tools seperti Python dan Excel.
                  Saya juga senang belajar hal baru, disiplin, dan memiliki rasa ingin tahu yang tinggi. 
                  Ke depannya, saya berharap dapat mengembangkan kemampuan saya dan berkontribusi dalam bidang data secara profesional.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}