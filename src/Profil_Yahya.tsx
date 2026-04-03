import { useState } from "react";

export default function Profil() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="text-gray-900">

      {/* NAVBAR */}
      <nav className="border-b-2 border-blue-600 py-4 bg-white fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="text-xl font-bold text-blue-600">Kansey</div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>

          <div className={`${open ? "block" : "hidden"} lg:flex space-x-6`}>
            <a className="text-blue-600 font-semibold">Beranda</a>
            <a href="#profil" className="text-blue-600">Profil</a>
          </div>
        </div>
      </nav>

      {/* PROFIL FULL SCREEN */}
      <section
        id="profil"
        className="bg-[#5271ff] min-h-screen flex items-start justify-center py-8"
      >
        <div className="container mx-auto px-4 mt-24">
          <div className="flex flex-col md:flex-row md:space-x-12">

            {/* KIRI: Semua Card */}
            <div className="flex flex-col space-y-6 md:w-1/3">
              {/* CARD INFO MAHASISWA */}
              <div className="bg-white rounded-lg p-6 shadow-md 
                              transform hover:scale-105 transition duration-300 hover:shadow-xl cursor-pointer">
                <h4 className="text-blue-600 font-bold text-lg mb-2">Info Mahasiswa</h4>
                <p><span className="font-semibold">Kelas:</span> T2D</p>
                <p><span className="font-semibold">Prodi:</span> Teknologi Informasi</p>
                <p><span className="font-semibold">Domisili:</span> Ngawi</p>
              </div>

              {/* CARD SOFT & HARD SKILL */}
              <div className="bg-white rounded-lg p-6 shadow-md 
                              transform hover:scale-105 transition duration-300 hover:shadow-xl cursor-pointer">
                <h4 className="text-blue-600 font-bold text-lg mb-4">Soft Skill & Hard Skill</h4>
                <div className="mb-3">
                  <h5 className="font-semibold text-gray-700">Soft Skill:</h5>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Kepemimpinan</li>
                    <li>Manajemen Waktu</li>
                    <li>Public Speaking</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700">Hard Skill:</h5>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>SQL</li>
                    <li>Bela Diri</li>
                    <li>Pidato</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KANAN: Foto + Deskripsi dalam 2 kolom */}
            <div className="flex flex-col md:flex-row md:w-2/3 mt-8 md:mt-0 space-y-6 md:space-y-0 md:space-x-6 items-start">

              {/* FOTO */}
              <div className="flex-shrink-0">
                <img
                  src="/Image/Foto yahya.jpeg"
                  alt="Foto Profil"
                  className="w-72 h-auto rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* DESKRIPSI DIRI */}
              <div className="text-white text-lg leading-relaxed max-h-[288px] overflow-y-auto">
                <p>
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