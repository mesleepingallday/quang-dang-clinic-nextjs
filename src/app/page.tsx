import Link from 'next/link';
import { Star, ShieldCheck, Heart, Sparkles, Award, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import ScrollToBookingButton from '@/components/ScrollToBookingButton';
import BookingForm from '@/components/BookingForm';
import { getServices, getTestimonials, getStrapiMediaUrl } from '@/lib/strapi';

export default async function Home() {
  // Fetch services and testimonials from Strapi
  const services = await getServices().catch(() => []);
  const testimonials = await getTestimonials().catch(() => []);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=2000")' }}
        >
          <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl text-white">
            <span className="inline-block py-1 px-3 border border-white/50 rounded-full text-sm uppercase tracking-widest mb-4 backdrop-blur-sm">
              Thẩm Mỹ Viện Quốc Tế Quang Đăng
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Đánh Thức <br/> Vẻ Đẹp Tiềm Ẩn
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl font-light">
              Trải nghiệm dịch vụ làm đẹp đẳng cấp 5 sao tại Nghệ An. Nơi hội tụ công nghệ hiện đại và đội ngũ chuyên gia hàng đầu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollToBookingButton />
              <Link href="/dich-vu">
                 <Button variant="white">Xem Dịch Vụ</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="py-12 bg-nude-50 border-b border-gold-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mb-3">
                <Award size={24} />
              </div>
              <h4 className="font-bold text-gray-800">Top 10 Uy Tín</h4>
              <p className="text-xs text-gray-500">Tại Nghệ An</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mb-3">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-gray-800">Chuẩn Y Khoa</h4>
              <p className="text-xs text-gray-500">An toàn tuyệt đối</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mb-3">
                <Sparkles size={24} />
              </div>
              <h4 className="font-bold text-gray-800">Công Nghệ Mới</h4>
              <p className="text-xs text-gray-500">Nhập khẩu Châu Âu</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mb-3">
                <Heart size={24} />
              </div>
              <h4 className="font-bold text-gray-800">10.000+</h4>
              <p className="text-xs text-gray-500">Khách hàng hài lòng</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE HIGHLIGHT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gold-700 mb-4">Dịch Vụ Nổi Bật</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Giải pháp toàn diện cho làn da và vóc dáng, được thiết kế cá nhân hóa cho từng khách hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.length > 0 ? (
              services.map((service) => (
                <div key={service.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                    <img
                      src={service.image?.url ? getStrapiMediaUrl(service.image.url) : 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {service.description || service.details}
                      </p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href={`/dich-vu/${service.slug}`} className="inline-flex items-center text-gold-600 font-semibold text-sm uppercase tracking-wide hover:text-gold-700">
                      Xem chi tiết <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
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
      <section className="py-20 bg-nude-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Why Us */}
            <div className="lg:w-1/2">
              <h2 className="font-serif text-4xl font-bold text-gold-700 mb-6">
                Tại Sao Chọn <br/> Quang Đăng Aesthetic?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng, mỗi người phụ nữ đều có vẻ đẹp riêng. Sứ mệnh của Quang Đăng là tôn vinh vẻ đẹp đó bằng sự tận tâm, chuyên nghiệp và công nghệ hiện đại nhất.
              </p>

              <ul className="space-y-6">
                {[
                  { title: 'Đội ngũ chuyên gia', desc: 'Bác sĩ da liễu trên 10 năm kinh nghiệm trực tiếp thăm khám.' },
                  { title: 'Cơ sở vật chất 5 sao', desc: 'Không gian sang trọng, riêng tư, thư giãn tuyệt đối.' },
                  { title: 'Công nghệ FDA', desc: 'Trang thiết bị nhập khẩu chính hãng từ Mỹ, Châu Âu, Hàn Quốc.' },
                  { title: 'Cam kết hiệu quả', desc: 'Văn bản cam kết hiệu quả điều trị rõ ràng.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Image/Visual */}
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-t-[100px] overflow-hidden border-8 border-white shadow-2xl">
                 <img
                   src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800"
                   alt="Spa Treatment"
                   className="w-full h-auto"
                 />
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                 <p className="font-serif text-xl italic text-gold-600">
                   "Vẻ đẹp của bạn là niềm hạnh phúc của chúng tôi."
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gold-700">Khách Hàng Nói Gì?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.length > 0 ? (
              testimonials.map((t) => (
                <div key={t.id} className="bg-nude-50 p-8 rounded-2xl relative">
                  <div className="flex text-gold-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.clientImage?.url ? getStrapiMediaUrl(t.clientImage.url) : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'}
                      alt={t.clientName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-bold text-gray-900">{t.clientName}</h5>
                      <p className="text-xs text-gold-600 uppercase">{t.service || 'Khách hàng'}</p>
                    </div>
                  </div>
                </div>
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
      <section id="booking" className="py-20 bg-gold-600 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                ƯU ĐÃI THÁNG NÀY
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Giảm 50% Cho Lần Đầu Trải Nghiệm
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Đăng ký ngay hôm nay để nhận suất ưu đãi đặc biệt cho các dịch vụ Chăm sóc da chuyên sâu và Triệt lông công nghệ cao.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-gold-600 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Miễn phí soi da & tư vấn 1:1</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-gold-600 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Tặng set quà tặng mỹ phẩm cao cấp</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              <BookingForm className="lg:max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
