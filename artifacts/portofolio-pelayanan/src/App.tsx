import { useState } from "react";
import pastorPhoto from "@assets/Gemini_Generated_Image_chlkl2chlkl2chlk_1781494753740.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { 
  FaCross, 
  FaYoutube, 
  FaWhatsapp, 
  FaEnvelope, 
  FaBars, 
  FaDownload, 
  FaBible, 
  FaHandHoldingHeart 
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

function ScrollReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = (data: any) => {
    toast({
      title: "Pesan Anda terkirim!",
      description: "Kami akan segera membalas email Anda.",
    });
    reset();
  };

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Filosofi & Teologi", href: "#philosophy" },
    { name: "Khotbah & Ajar", href: "#sermons" },
    { name: "Rekam Jejak", href: "#portfolio" },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-[#e5e5e5] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]" 
        style={{
          backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-[80px] md:w-[100px] bg-[#030303] border-r border-neutral-900 flex flex-col justify-between items-center py-8 z-40">
        <a href="#home" className="text-[#D4AF37] font-syne font-bold text-3xl hover:scale-110 transition-transform">Ω</a>
        
        <div className="flex flex-col space-y-8 text-neutral-500">
          <a href="#philosophy" className="hover:text-[#D4AF37] transition-colors"><FaCross size={20} /></a>
          <a href="#sermons" className="hover:text-[#D4AF37] transition-colors"><FaYoutube size={20} /></a>
          <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors"><FaWhatsapp size={20} /></a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors"><FaEnvelope size={20} /></a>
        </div>
        
        <div className="flex-1 flex items-end pb-12">
          <p className="text-neutral-600 text-[10px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Soli Deo Gloria © 2026
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pl-[80px] md:pl-[100px]">
        
        {/* Navbar */}
        <nav className="sticky top-0 h-24 bg-[#070707]/90 backdrop-blur-md border-b border-neutral-900/40 z-30 flex items-center justify-end md:justify-between px-6 md:px-12">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <a href="#contact" className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors">
              Hubungi
            </a>
          </div>

          <button 
            className="md:hidden text-neutral-400 hover:text-[#D4AF37] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars size={24} />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#070707] z-50 flex flex-col items-center justify-center p-6 text-center">
            <button 
              className="absolute top-8 right-8 text-neutral-400 hover:text-[#D4AF37] text-3xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-widest text-neutral-400 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
              >
                Hubungi
              </a>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-96px)] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Image (Order 2 on mobile, 1 on LG) */}
            <div className="order-2 lg:order-1 lg:col-span-5 relative group">
              <div className="absolute inset-0 border border-[#D4AF37]/20 translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="w-full h-[450px] md:h-[520px] bg-neutral-900 z-10 relative overflow-hidden">
                <img 
                  src={pastorPhoto} 
                  alt="Pdt. Goklas Sianturi" 
                  className="w-full h-full object-cover object-top grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-6">
              <ScrollReveal>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                  Salam Sejahtera, Selamat Datang
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-syne font-extrabold uppercase leading-none tracking-tight mb-8">
                  PDT. GOKLAS<br/>
                  <span className="text-outline">SIANTURI</span>
                </h1>
                
                <p className="text-neutral-400 font-light text-sm md:text-base max-w-xl leading-relaxed mb-8">
                  Dipanggil untuk memberitakan kebenaran Kristus yang transformatif, membangun iman jemaat yang berakar pada eksposisi Alkitab yang murni, serta menggembalakan dengan hati yang melayani demi kemuliaan Allah.
                </p>

                <div className="border-l-2 border-[#D4AF37] pl-4 my-8">
                  <p className="italic text-sm text-neutral-300 font-serif-sacred">
                    "sama seperti Anak Manusia datang bukan untuk dilayani, melainkan untuk melayani dan untuk memberikan nyawa-Nya menjadi tebusan bagi banyak orang."
                  </p>
                  <span className="text-[#D4AF37] block mt-2 font-sans font-medium text-xs not-italic">
                    — Matius 20:28
                  </span>
                </div>

                <a 
                  href="#about" 
                  className="inline-block px-6 py-3 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
                >
                  Mengenal Lebih Dekat &rarr;
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-24 px-6 md:px-16 lg:px-24">
          <ScrollReveal>
            <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
              — Pondasi Doktrin
            </div>
            <h2 className="text-3xl font-syne font-bold uppercase mb-12">Filosofi & Pandangan Teologis</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="p-6 border border-neutral-900 bg-neutral-950/40 space-y-4 h-full hover:border-neutral-700 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
                  <FaBible size={20} />
                </div>
                <h3 className="text-lg font-serif-sacred font-bold text-white">Sikap dan Pandangan Doktrinal</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Memegang teguh Inerransi dan Infallibilitas Alkitab sebagai otoritas tertinggi kehidupan. Doktrin keselamatan berpusat penuh pada anugerah soliter melalui iman kepada Yesus Kristus (Sola Gratia, Sola Fide, Solus Christus).
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="delay-100">
              <div className="p-6 border border-neutral-900 bg-neutral-950/40 space-y-4 h-full hover:border-neutral-700 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
                  <FaHandHoldingHeart size={20} />
                </div>
                <h3 className="text-lg font-serif-sacred font-bold text-white">Pendekatan Gaya Penggembalaan</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Mengutamakan pendekatan konseling pastoral yang empati namun alkitabiah. Menyelesaikan konflik jemaat mengacu pada prinsip restorasi kasih Matius 18, membangun pemuridan multiplikasi, serta kepemimpinan pelayan (servant leadership).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sermons Section */}
        <section id="sermons" className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-950/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
                  — Eksposisi Firman
                </div>
                <h2 className="text-3xl font-syne font-bold uppercase mb-6">Khotbah & Materi Pengajaran</h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  Akses rekaman khotbah ekspositori terbaru dan unduh berkas modul pembelajaran teologi praktis untuk kelas katekisasi maupun pemuridan mandiri.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-neutral-900 bg-black group hover:border-neutral-700 transition-colors">
                    <span className="text-xs text-neutral-300">Modul Pemuridan Dasar Kristen.pdf</span>
                    <a href="#" className="flex items-center space-x-2 text-[#D4AF37] text-xs font-medium group-hover:underline">
                      <span>Unduh</span>
                      <FaDownload size={10} />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-neutral-900 bg-black group hover:border-neutral-700 transition-colors">
                    <span className="text-xs text-neutral-300">Diktat Katekisasi Doktrin Gereja.pdf</span>
                    <a href="#" className="flex items-center space-x-2 text-[#D4AF37] text-xs font-medium group-hover:underline">
                      <span>Unduh</span>
                      <FaDownload size={10} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="w-full border border-neutral-800 bg-black p-2 rounded-sm shadow-xl">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden bg-neutral-900 rounded-sm">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="YouTube video player"
                      className="absolute top-0 left-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex justify-between items-center mt-3 px-2 pb-1">
                    <div className="flex items-center text-neutral-400 font-mono text-xs">
                      <span className="text-[#D4AF37] mr-2">▶</span> Seri Khotbah Efesus: Hidup dalam Kristus
                    </div>
                    <div className="text-neutral-500 font-mono text-xs">
                      Durasi: 45 Menit
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-6 md:px-16 lg:px-24">
          <ScrollReveal>
            <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
              — Portofolio Kepemimpinan
            </div>
            <h2 className="text-3xl font-syne font-bold uppercase mb-12">Rekam Jejak Program</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal>
              <div className="border border-neutral-900 bg-neutral-950/40 p-6 space-y-6 hover:border-neutral-700 transition-colors group">
                <div className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
                    alt="Komunitas Pemuda" 
                    className="w-full h-48 object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="inline-block text-[10px] uppercase bg-neutral-900 text-[#D4AF37] px-3 py-1.5 font-mono tracking-wider">
                  Inovasi Pelayanan
                </div>
                <h3 className="text-xl font-serif-sacred font-bold text-white">Revitalisasi Komunitas Pemuda</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Merintis kembali persekutuan pemuda kota yang sempat vakum dengan menyusun kurikulum studi apologetika kontekstual, melatih 15 pemimpin sel baru dalam kurun waktu satu tahun.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="delay-100">
              <div className="border border-neutral-900 bg-neutral-950/40 p-6 space-y-6 hover:border-neutral-700 transition-colors group">
                <div className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1469571486040-4bd94194c1b2?auto=format&fit=crop&q=80&w=800" 
                    alt="Aksi Sosial" 
                    className="w-full h-48 object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="inline-block text-[10px] uppercase bg-neutral-900 text-[#D4AF37] px-3 py-1.5 font-mono tracking-wider">
                  Dampak Eksternal
                </div>
                <h3 className="text-xl font-serif-sacred font-bold text-white">Aksi Sosial & Transformasi Desa Terpadu</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Menggerakkan sinergi jemaat lokal untuk penyediaan fasilitas sanitasi air bersih dan klinik pengobatan gratis berkala bagi masyarakat prasejahtera di wilayah lingkar luar pelayanan.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-neutral-900 pt-12">
              <div className="p-6 bg-neutral-950 text-center flex flex-col justify-center border border-transparent hover:border-neutral-800 transition-colors">
                <div className="text-3xl font-syne font-bold text-[#D4AF37] mb-2">12+</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Tahun Pelayanan</div>
              </div>
              <div className="p-6 bg-neutral-950 text-center flex flex-col justify-center border border-transparent hover:border-neutral-800 transition-colors">
                <div className="text-3xl font-syne font-bold text-white mb-2">40+</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Pemimpin Sel Dilatih</div>
              </div>
              <div className="p-6 bg-neutral-950 text-center flex flex-col justify-center border border-transparent hover:border-neutral-800 transition-colors">
                <div className="text-3xl font-syne font-bold text-white mb-2">3</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Gereja Pos Rintisan</div>
              </div>
              <div className="p-6 bg-neutral-950 text-center flex flex-col justify-center border border-transparent hover:border-neutral-800 transition-colors">
                <div className="text-3xl font-syne font-bold text-[#D4AF37] mb-2">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Sesi Konseling Tuntas</div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
                  — Validasi Rekan
                </div>
                <h2 className="text-3xl font-syne font-bold uppercase mb-8">Rekomendasi</h2>
                
                <div className="p-6 border border-neutral-900 bg-neutral-950 relative">
                  <div className="text-[#D4AF37] text-4xl font-serif-sacred absolute top-4 left-4 opacity-20">"</div>
                  <p className="italic text-neutral-400 font-serif-sacred text-sm leading-relaxed relative z-10 pt-4">
                    Beliau memiliki integritas doktrinal yang kokoh dipadukan dengan kepekaan pastoral yang mendalam saat mendampingi jemaat melewati krisis.
                  </p>
                  <span className="not-italic text-[10px] font-sans font-medium uppercase tracking-wider text-white block mt-6 border-t border-neutral-800 pt-4">
                    — Pdt. Dr. Abraham Silas (Ketua Sinode Kebenaran)
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="bg-neutral-950 border border-neutral-900 p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-8 border-b border-neutral-800 pb-4">
                    Hubungi via Formulir / Hubungan Cepat
                  </h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                          Nama Instansi / Gereja
                        </label>
                        <input 
                          {...register("name", { required: true })}
                          type="text" 
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                          Email Korespondensi
                        </label>
                        <input 
                          {...register("email", { required: true })}
                          type="email" 
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                        Isi Keperluan Pelayanan / Undangan
                      </label>
                      <textarea 
                        {...register("message", { required: true })}
                        rows={4}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 border-t border-neutral-900">
                      <button 
                        type="submit"
                        className="px-8 py-3 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors flex-1 sm:flex-none text-center"
                      >
                        Kirim Email ✈
                      </button>
                      
                      <a 
                        href="https://wa.me/628123456789" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-widest border border-neutral-800 transition-colors flex items-center justify-center space-x-2 flex-1 sm:flex-none"
                      >
                        <FaWhatsapp className="text-green-500 text-base" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 text-center text-[10px] text-neutral-600 border-t border-neutral-900 font-mono">
          Pelayanan Penggembalaan Kristosentris • Diperbarui Tahun 2026
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;