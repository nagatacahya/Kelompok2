import React from 'react';
import profilePicture from '../gudang/ppnagata.jpeg';

const NagataProfile = () => {
  const skills = ['Foto Grafis', 'Video Editing'];

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background Decor (Blurry Blobs) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[60%] -right-[10%] w-[30%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Profile & Quick Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Card */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-8 text-center shadow-2xl">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-30 rounded-full animate-pulse"></div>
                <img 
                  src={profilePicture} 
                  alt="Naufal Rakha Putra"
                  className="relative h-40 w-40 object-cover rounded-[2rem] border-2 border-slate-600 shadow-inner"
                />
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight mb-2">Nagata cahya saputra</h1>
              <p className="text-indigo-400 font-bold uppercase text-xs tracking-[0.3em] mb-6">Fotografi & Videografi</p>
            </div>

            {/* Academic & Stats Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-900/20">
              <h3 className="text-xs font-black uppercase tracking-widest opacity-70 mb-6">Data Mahasiswa</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-md">🎓</div>
                  <div>
                    <p className="text-[10px] opacity-70 uppercase font-bold">Jurusan</p>
                    <p className="font-bold text-sm">D3 Teknologi Informasi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-md">🏫</div>
                  <div>
                    <p className="text-[10px] opacity-70 uppercase font-bold">Kelas</p>
                    <p className="font-bold text-sm italic">TI-2025 (Universitas Brawijaya)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-md">📍</div>
                  <div>
                    <p className="text-[10px] opacity-70 uppercase font-bold">Domisili</p>
                    <p className="font-bold text-sm">jawa timur, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio & Skills */}
          <div className="lg:col-span-8 space-y-6">
            {/* About Me Section */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              
              <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-4">
                Tentang Diri
                <div className="h-px flex-grow bg-slate-700"></div>
              </h2>

              <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed text-justify">
                <p className="text-xl text-indigo-300 font-medium italic">
                  "Halo! Saya Nagata, seorang yang suka melakukan fotografi dan video editing. Saya percaya bahwa setiap momen memiliki cerita yang layak untuk diabadikan, dan melalui lensa kamera serta sentuhan kreatif dalam pengeditan, saya berusaha untuk menangkap esensi dari setiap kisah tersebut." 
                </p>
                <p>
                  Fotografi dan videografi adalah seni menangkap cahaya untuk bercerita. Meski serupa, keduanya memiliki jiwa yang berbeda. Fotografi mengandalkan satu momen krusial untuk membekukan emosi, komposisi, dan detail dalam satu bingkai abadi. Ia adalah tentang keheningan yang berbicara.
                </p>
                <p>Sebaliknya, videografi adalah narasi yang bergerak. Ia menggabungkan visual, gerakan, dan suara untuk membangun dimensi waktu. Jika fotografi adalah sebuah puisi singkat, maka videografi adalah sebuah novel visual. Keduanya membutuhkan ketajaman mata untuk melihat keindahan di balik lensa, mengubah realitas menjadi karya seni yang memikat. Di era digital ini, perpaduan keduanya menjadi kekuatan utama dalam komunikasi visual dan kreativitas tanpa batas.
                  
                </p>
              </div>
            </div>

            {/* Bottom Grid: Skills & Game Studio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills Box */}
              <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8">
                <h3 className="text-white font-black text-lg mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[11px] font-black rounded-lg uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Footer */}
        <footer className="mt-12 text-center text-slate-500 py-6">
          <p className="text-xs font-bold tracking-[0.5em] uppercase mb-2">Designed by Nagata</p>
          <div className="h-px w-20 bg-slate-800 mx-auto mb-4"></div>
          <p className="text-[10px]">&copy; 2026 Nagata Cahya Saputra • Powered by React 19</p>
        </footer>
      </div>
    </div>
  );
};

export default NagataProfile;