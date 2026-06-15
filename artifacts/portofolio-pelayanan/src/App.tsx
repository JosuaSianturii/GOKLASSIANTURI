import { useState } from "react";
import pastorPhoto from "@assets/Gemini_Generated_Image_chlkl2chlkl2chlk_1781494753740.png";
import profilePhoto from "@assets/image_1781497788089.png";
import klevePhoto from "@assets/image_1781499129961.png";
import aksiSosialPhoto from "@assets/image_1781499363925.png";
import church1Photo from "@assets/image_1781495662126.png";
import church2Photo from "@assets/image_1781497366654.png";
import church3Photo from "@assets/image_1781497416836.png";
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
    { name: "Tentang Saya", href: "#profile" },
    { name: "Tempat Melayani", href: "#about" },
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

        {/* Profile / Pengenalan Diri Section */}
        <section id="profile" className="py-24 px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Foto + Identitas */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="relative group">
                  <div className="absolute inset-0 border border-[#D4AF37]/20 translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                  <div className="w-full h-[380px] bg-neutral-900 overflow-hidden relative z-10">
                    <img
                      src={profilePhoto}
                      alt="Pdt. Goklas Sianturi"
                      className="w-full h-full object-cover object-top grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-1 pl-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Pendeta Gereja GKPI</div>
                  <div className="text-white font-syne font-bold text-lg uppercase tracking-wide">Pdt. Goklas Sianturi</div>
                  <div className="text-[#D4AF37] text-xs font-mono">S.Th. · Ditahbiskan 2013</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Narasi Pengenalan */}
            <div className="lg:col-span-8 space-y-10">
              <ScrollReveal>
                <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-3">— Pengenalan Diri</div>
                <h2 className="text-3xl font-syne font-bold uppercase mb-8">Tentang Saya</h2>

                <div className="space-y-4 mb-10">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-white border-b border-neutral-900 pb-2">
                    Kesaksian Panggilan
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Pertemuan pribadi dengan kasih karunia Tuhan di masa muda mengubah arah hidup saya sepenuhnya. Di tengah pergumulan karir sekuler, suara Tuhan menggema kuat melalui pelayanan mimbar jemaat mula-mula, menggerakkan hati saya untuk menyerahkan seluruh hidup ke dalam ladang pelayanan teologis formal demi memenangkan jiwa bagi Kristus.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-white border-b border-neutral-900 pb-2">
                    Kehidupan Keluarga <span className="italic text-neutral-500 font-serif-sacred text-sm tracking-normal normal-case">(1 Timotius 3:4-5)</span>
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Melayani bersama istri tercinta, <span className="text-white font-medium">Roselina Panjaitan</span>, dan dikaruniai seorang putra, <span className="text-white font-medium">Josua Sianturi</span>. Kami percaya bahwa keluarga adalah ladang penggembalaan pertama dan utama sebelum kami melangkah untuk memimpin jemaat di rumah Tuhan.
                  </p>
                </div>
              </ScrollReveal>

              {/* Kotak Pendidikan & Penahbisan */}
              <ScrollReveal>
                <div className="bg-neutral-950 border border-neutral-900 p-6 space-y-6">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] border-b border-neutral-900 pb-3">
                    Edukasi & Otoritas Teologi
                  </h3>
                  <div className="text-xs">
                    <div>
                      <div className="text-neutral-500 font-mono mb-1">1999 — 2001</div>
                      <div className="text-white text-sm font-medium">Sarjana Teologi (S.Th.)</div>
                      <div className="text-neutral-400">STAKPN Tarutung</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-neutral-900">
                    <div className="text-[#D4AF37] font-mono uppercase tracking-wider text-[10px] mb-1">Status Penahbisan</div>
                    <div className="text-white text-sm font-medium">Ditahbiskan sebagai Pendeta Penuh</div>
                    <div className="text-neutral-400 text-xs mt-1">Sinode GKPI — 2013</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* Ministry Locations Section */}
        <section id="about" className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-950/20">
          <ScrollReveal>
            <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
              — Jejak Pelayanan
            </div>
            <h2 className="text-3xl font-syne font-bold uppercase mb-4">Tempat Melayani</h2>
            <p className="text-neutral-500 text-sm max-w-xl mb-16 font-light">
              Setiap jemaat adalah ladang yang dipercayakan Tuhan — masing-masing membentuk karakter, memperdalam iman, dan memuliakan nama-Nya.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location 1 */}
            <ScrollReveal>
              <div className="border border-neutral-900 bg-neutral-950/40 group hover:border-[#D4AF37]/30 transition-colors duration-500 h-full flex flex-col">
                <div className="overflow-hidden h-56 relative">
                  <img
                    src={church1Photo}
                    alt="GKPI Resort Adiankoting"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
                    2013 — 2018
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <div className="inline-block text-[10px] uppercase bg-neutral-900 text-[#D4AF37] px-2 py-1 font-mono tracking-wider w-fit">
                    Penempatan Pertama
                  </div>
                  <h3 className="text-lg font-serif-sacred font-bold text-white leading-snug">
                    GKPI Resort Adiankoting
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                    Tempat pelayanan perdana setelah ditahbiskan menjadi pendeta. Di sinilah iman diuji dan diperdalam — ladang pertama yang mengajarkan arti sesungguhnya dari panggilan untuk melayani dan memberikan pelajaran berharga yang terus membekas hingga kini.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Location 2 */}
            <ScrollReveal>
              <div className="border border-neutral-900 bg-neutral-950/40 group hover:border-[#D4AF37]/30 transition-colors duration-500 h-full flex flex-col">
                <div className="overflow-hidden h-56 relative">
                  <img
                    src={church2Photo}
                    alt="GKPI Jemaat Khusus Parbubu"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
                    2018 — 2026
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <div className="inline-block text-[10px] uppercase bg-neutral-900 text-[#D4AF37] px-2 py-1 font-mono tracking-wider w-fit">
                    Pengabdian Terlama
                  </div>
                  <h3 className="text-lg font-serif-sacred font-bold text-white leading-snug">
                    GKPI Jemaat Khusus Parbubu
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                    Salah satu tempat pengabdian terlama dan paling berkesan dalam perjalanan pelayanan ini. Delapan tahun bersama jemaat Parbubu menanamkan ikatan yang dalam — penuh suka cita, pergumulan bersama, dan pertumbuhan iman yang nyata.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Location 3 */}
            <ScrollReveal>
              <div className="border border-[#D4AF37]/20 bg-neutral-950/40 group hover:border-[#D4AF37]/50 transition-colors duration-500 h-full flex flex-col relative">
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[9px] uppercase font-mono tracking-widest bg-[#D4AF37] text-black px-2 py-0.5">
                    Pelayanan Aktif
                  </span>
                </div>
                <div className="overflow-hidden h-56 relative">
                  <img
                    src={church3Photo}
                    alt="GKPI Resort Pagar Sinondi"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
                    2026 — Sekarang
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <div className="inline-block text-[10px] uppercase bg-neutral-900 text-[#D4AF37] px-2 py-1 font-mono tracking-wider w-fit">
                    Ladang Baru
                  </div>
                  <h3 className="text-lg font-serif-sacred font-bold text-white leading-snug">
                    GKPI Resort Pagar Sinondi
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                    Kiranya ladang pelayanan baru ini menjadi tanah yang subur bagi pemberitaan Injil — tempat di mana setiap jiwa berjumpa dengan kasih Kristus yang mengubahkan. Semoga setiap langkah dipimpin hikmat dari atas, dan buah-buah iman bertumbuh lebat demi kemuliaan nama-Nya.
                  </p>
                  <div className="border-l-2 border-[#D4AF37]/40 pl-3 mt-2">
                    <p className="text-[11px] italic text-neutral-500 font-serif-sacred">
                      "Aku adalah pokok anggur dan kamulah ranting-rantingnya."
                    </p>
                    <span className="text-[10px] text-[#D4AF37]/70 font-mono">— Yohanes 15:5</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sermons Section */}
        <section id="sermons" className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-950/10">
          <ScrollReveal>
            <div className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">
              — Eksposisi Firman
            </div>
            <h2 className="text-3xl font-syne font-bold uppercase mb-10">Khotbah & Materi Pengajaran</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="w-full border border-neutral-800 bg-black p-2 rounded-sm shadow-xl max-w-4xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-neutral-900 rounded-sm">
                <iframe
                  src="https://www.youtube.com/embed/rL3jfn2P2J8"
                  title="Khotbah Pdt. Goklas Sianturi"
                  className="absolute top-0 left-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex justify-between items-center mt-3 px-2 pb-1">
                <div className="flex items-center text-neutral-400 font-mono text-xs">
                  <span className="text-[#D4AF37] mr-2">▶</span> Khotbah Pdt. Goklas Sianturi
                </div>
                <a
                  href="https://youtu.be/rL3jfn2P2J8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D4AF37] text-xs font-mono hover:underline"
                >
                  Tonton di YouTube ↗
                </a>
              </div>
            </div>
          </ScrollReveal>
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
                    src={klevePhoto}
                    alt="Kerja Sama GKPI Silindung-Kleve"
                    className="w-full h-48 object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="inline-block text-[10px] uppercase bg-neutral-900 text-[#D4AF37] px-3 py-1.5 font-mono tracking-wider">
                  Kolaborasi Internasional
                </div>
                <h3 className="text-xl font-serif-sacred font-bold text-white">Turut Serta dalam Kerja Sama GKPI Silindung-Kleve</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Berpartisipasi aktif dalam program kolaborasi antara Pemuda GKPI Silindung dengan jemaat pemuda gereja mitra di Kleve, Jerman — mempererat persekutuan lintas budaya dan memperluas wawasan iman dalam semangat kesatuan tubuh Kristus yang universal.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="delay-100">
              <div className="border border-neutral-900 bg-neutral-950/40 p-6 space-y-6 hover:border-neutral-700 transition-colors group">
                <div className="overflow-hidden">
                  <img
                    src={aksiSosialPhoto}
                    alt="Aksi Sosial Sembako GKPI Parbubu"
                    className="w-full h-48 object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="inline-block text-[10px] uppercase bg-neutral-900 text-[#D4AF37] px-3 py-1.5 font-mono tracking-wider">
                  Aksi Sosial
                </div>
                <h3 className="text-xl font-serif-sacred font-bold text-white">Pelayanan Sembako bagi Jemaat GKPI Parbubu</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Di tengah pandemi Covid-19, jemaat GKPI Parbubu menghadapi kesulitan memperoleh bahan pokok. Sebagai bentuk kepedulian pastoral, diselenggarakan aksi sosial pembagian sembako bagi seluruh jemaat — wujud nyata kasih yang melayani jiwa sekaligus kebutuhan hidup.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4 border-t border-neutral-900 pt-12 max-w-lg">
              <div className="p-6 bg-neutral-950 text-center flex flex-col justify-center border border-transparent hover:border-neutral-800 transition-colors">
                <div className="text-3xl font-syne font-bold text-[#D4AF37] mb-2">13+</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Tahun Pelayanan</div>
              </div>
              <div className="p-6 bg-neutral-950 text-center flex flex-col justify-center border border-transparent hover:border-neutral-800 transition-colors">
                <div className="text-3xl font-syne font-bold text-white mb-2">3</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Resort Jemaat Dilayani</div>
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