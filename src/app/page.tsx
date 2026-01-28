import Link from 'next/link';
import Image from 'next/image';
import { Star, ShieldCheck, Heart, Sparkles, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import ScrollToBookingButton from '@/components/ScrollToBookingButton';
import BookingForm from '@/components/BookingForm';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { getServices, getTestimonials, getStrapiMediaUrl } from '@/lib/strapi';

export default async function Home() {
  // Fetch services and testimonials from Strapi
  const [services, testimonials] = await Promise.all([
    getServices().catch(() => []),
    getTestimonials().catch(() => []),
  ]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-in-out hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=2000")' }}
          ></div>
          <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
          {/* Gradient Mesh Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/40 via-transparent to-transparent"></div>
        </div>

        {/* Floating Particles (Conceptual CSS-only) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float delay-100"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400/20 rounded-full animate-float delay-500"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/10 rounded-full animate-float delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl text-white">
            <ScrollReveal animation="fade-in-up" duration={0.8} delay={0}>
              <span className="inline-block py-1 px-3 border border-white/30 bg-white/10 rounded-full text-sm uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-lg animate-pulse-glow">
                Thẩm Mỹ Viện Quốc Tế Quang Đăng
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" duration={0.8} delay={200}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-sm">
                Đánh Thức <br /> <span className="text-green-200 italic">Vẻ Đẹp Tiềm Ẩn</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" duration={0.8} delay={400}>
              <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-xl font-light leading-relaxed text-balance">
                Trải nghiệm dịch vụ làm đẹp đẳng cấp 5 sao tại Nghệ An. Nơi hội tụ công nghệ hiện đại và đội ngũ chuyên gia hàng đầu.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" duration={0.8} delay={600}>
              <div className="flex flex-col sm:flex-row gap-6">
                <ScrollToBookingButton />
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 transition-all duration-300">
                  <Link href="/dich-vu">Khám Phá Dịch Vụ</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ArrowRight className="rotate-90 w-6 h-6" />
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      {/* 2. TRUST SECTION */}
      <section className="py-16 bg-nude-50 border-b border-green-100/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <ScrollReveal animation="scale-up" delay={0} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-sm border border-green-200">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">Top 10 Uy Tín</h4>
              <p className="text-sm text-gray-500">Tại Nghệ An</p>
            </ScrollReveal>

            <ScrollReveal animation="scale-up" delay={100} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-sm border border-green-200">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">Chuẩn Y Khoa</h4>
              <p className="text-sm text-gray-500">An toàn tuyệt đối</p>
            </ScrollReveal>

            <ScrollReveal animation="scale-up" delay={200} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-sm border border-green-200">
                <Sparkles size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">Công Nghệ Mới</h4>
              <p className="text-sm text-gray-500">Nhập khẩu Châu Âu</p>
            </ScrollReveal>

            <ScrollReveal animation="scale-up" delay={300} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-sm border border-green-200">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-1 flex items-center gap-1">
                <AnimatedCounter end={10000} suffix="+" />
              </h4>
              <p className="text-sm text-gray-500">Khách hàng hài lòng</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. SERVICE HIGHLIGHT */}
      {/* 3. SERVICE HIGHLIGHT */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-nude-50/50 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal animation="fade-in-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700 mb-4">Dịch Vụ Nổi Bật</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Giải pháp toàn diện cho làn da và vóc dáng, được thiết kế cá nhân hóa cho từng khách hàng.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.length > 0 ? (
              services.map((service, index) => (
                <ScrollReveal key={service.id} animation="fade-in-up" delay={index * 100} className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4] shadow-md group-hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={service.image?.url ? getStrapiMediaUrl(service.image.url) : 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'}
                      alt={service.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-0.5 bg-green-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                      <h3 className="font-serif text-2xl font-bold mb-2 leading-tight">{service.name}</h3>
                      <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3 mb-4 transform translate-y-4 group-hover:translate-y-0">
                        {service.description || service.details}
                      </p>
                      <Link
                        href={`/dich-vu/${service.slug}`}
                        className="inline-flex items-center text-green-300 font-semibold text-xs uppercase tracking-widest hover:text-white transition-colors opacity-0 group-hover:opacity-100 delay-200"
                      >
                        Xem chi tiết <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>Dịch vụ không có sẵn. Vui lòng thử lại sau.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. WHY US & PROCESS */}
      <section className="py-24 bg-nude-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Why Us */}
            <div className="lg:w-1/2">
              <ScrollReveal animation="slide-right">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700 mb-6 leading-tight">
                  Tại Sao Chọn <br /> Quang Đăng Aesthetic?
                </h2>
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  Chúng tôi hiểu rằng, mỗi người phụ nữ đều có vẻ đẹp riêng. Sứ mệnh của Quang Đăng là tôn vinh vẻ đẹp đó bằng sự tận tâm, chuyên nghiệp và công nghệ hiện đại nhất.
                </p>
              </ScrollReveal>

              <ul className="space-y-8">
                {[
                  { title: 'Đội ngũ chuyên gia', desc: 'Bác sĩ da liễu trên 10 năm kinh nghiệm trực tiếp thăm khám.' },
                  { title: 'Cơ sở vật chất 5 sao', desc: 'Không gian sang trọng, riêng tư, thư giãn tuyệt đối.' },
                  { title: 'Công nghệ FDA', desc: 'Trang thiết bị nhập khẩu chính hãng từ Mỹ, Châu Âu, Hàn Quốc.' },
                  { title: 'Cam kết hiệu quả', desc: 'Văn bản cam kết hiệu quả điều trị rõ ràng.' }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} animation="fade-in-up" delay={idx * 100} className="flex gap-5 group">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold font-serif text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            {/* Process Image/Visual */}
            <div className="lg:w-1/2 relative">
              <ScrollReveal animation="slide-left" delay={200}>
                <div className="relative rounded-t-[150px] rounded-b-[20px] overflow-hidden border-8 border-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800"
                    alt="Spa Treatment"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay"></div>
                </div>
              </ScrollReveal>

              {/* Floating Badge */}
              <ScrollReveal animation="fade-in-up" delay={400} className="absolute -bottom-8 -left-8 bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl max-w-xs hidden md:block border-l-4 border-green-500 animate-float">
                <p className="font-serif text-xl italic text-green-600 leading-relaxed">
                  &quot;Vẻ đẹp của bạn là niềm hạnh phúc của chúng tôi.&quot;
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 text-green-100 opacity-30 select-none pointer-events-none">
          <span className="font-serif text-[200px] leading-none">&ldquo;</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal animation="fade-in-up">
              <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-2 block">Feedback</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700">Khách Hàng Nói Gì?</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.length > 0 ? (
              testimonials.map((t, i) => (
                <ScrollReveal key={t.id} animation="fade-in-up" delay={i * 150} className="bg-green-50 p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-green-100">
                  <div className="flex text-green-500 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <ScrollReveal key={i} animation="scale-up" delay={500 + (i * 100)} duration={0.4}>
                        <Star size={18} fill="currentColor" strokeWidth={0} />
                      </ScrollReveal>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-8 leading-relaxed min-h-[80px] line-clamp-4 relative z-10">
                    &quot;{t.content}&quot;
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={t.clientImage?.url ? getStrapiMediaUrl(t.clientImage.url) : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'}
                        alt={t.clientName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg font-serif">{t.clientName}</h5>
                      <p className="text-xs text-green-600 uppercase tracking-wide font-semibold">{t.service || 'Khách hàng'}</p>
                    </div>
                  </div>

                  {/* Decorative Quote Mark */}
                  <div className="absolute top-6 right-8 text-green-200 opacity-20 transform scale-[3]">
                    <span className="font-serif text-6xl leading-none">&rdquo;</span>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>Chưa có đánh giá nào.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. PROMOTION & BOOKING */}
      {/* 6. PROMOTION & BOOKING */}
      <section id="booking" className="py-24 bg-green-600 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse-glow delay-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-white">
              <ScrollReveal animation="fade-in-up">
                <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-widest mb-6 inline-block backdrop-blur-sm shadow-sm">
                  ✨ ƯU ĐÃI THÁNG NÀY
                </span>
                <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Giảm 50% <br /> Cho Lần Đầu Trải Nghiệm
                </h2>
                <p className="text-white/90 text-xl mb-10 font-light leading-relaxed">
                  Đăng ký ngay hôm nay để nhận suất ưu đãi đặc biệt cho các dịch vụ Chăm sóc da chuyên sâu và Triệt lông công nghệ cao.
                </p>
              </ScrollReveal>

              <ul className="space-y-4 mb-10">
                <ScrollReveal animation="slide-right" delay={200} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-green-600 flex items-center justify-center font-bold">
                    <CheckCircle size={18} strokeWidth={3} />
                  </div>
                  <span className="text-lg">Miễn phí soi da & tư vấn 1:1</span>
                </ScrollReveal>
                <ScrollReveal animation="slide-right" delay={300} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-green-600 flex items-center justify-center font-bold">
                    <CheckCircle size={18} strokeWidth={3} />
                  </div>
                  <span className="text-lg">Tặng set quà tặng mỹ phẩm cao cấp</span>
                </ScrollReveal>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              <ScrollReveal animation="scale-up" delay={400}>
                <BookingForm className="lg:max-w-md mx-auto shadow-2xl border-white/20" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
