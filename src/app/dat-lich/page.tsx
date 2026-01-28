import Image from 'next/image';
import { Check, Star, ShieldCheck, MapPin, Phone, Clock, Gift, Award, Heart } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { SERVICES, TESTIMONIALS } from '@/lib/data';

export default function BookingPage() {
  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Thẩm Mỹ Viện Quốc Tế Quang Đăng",
    "image": "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
    "description": "Thẩm mỹ viện uy tín tại Nghệ An chuyên điều trị da, trị mụn nám, trẻ hóa công nghệ cao.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Số 123 đường Nguyễn Văn Cừ",
      "addressLocality": "TP. Vinh",
      "addressRegion": "Nghệ An",
      "addressCountry": "VN"
    },
    "telephone": "0988834446",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Inject Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* 1. HERO SECTION: Minimal & Trust */}
      <div className="pt-24 pb-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 skew-x-12 transform translate-x-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-green-600 font-bold tracking-widest text-sm uppercase mb-3 inline-block">
              Booking Online
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Đặt Lịch Hẹn Làm Đẹp <br />
              <span className="text-green-600 italic">Nhận Ưu Đãi Độc Quyền</span>
            </h1>
            <p className="text-gray-600 text-lg mb-0">
              Chỉ 30 giây để hoàn tất. Ưu tiên xếp chỗ - Không chờ đợi - Tư vấn miễn phí.
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONVERSION SECTION */}
      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: BOOKING FORM (Sticky on Desktop) */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1 lg:sticky lg:top-24">
            <BookingForm
              title="Đăng Ký Tư Vấn Ngay"
              subtitle="Điền thông tin để chuyên gia liên hệ xác nhận lịch hẹn và giữ suất khuyến mãi."
              isAdvanced={true}
              className="shadow-2xl ring-1 ring-green-100"
            />

            {/* Mobile Call CTA under form */}
            <div className="mt-6 text-center lg:hidden">
              <p className="text-gray-500 text-sm mb-2">Hoặc gọi trực tiếp hotline</p>
              <a href="tel:0988834446" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold">
                <Phone size={18} className="animate-pulse" /> 0988.834.446
              </a>
            </div>
          </div>

          {/* RIGHT: CONTENT & TRUST SIGNALS */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-16">

            {/* Promotion Banner */}
            <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-6 rounded-2xl shadow-lg flex items-center justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold mb-1">Ưu Đãi Tháng Này</h3>
                <p className="opacity-90">Giảm 50% phí dịch vụ & Tặng set mỹ phẩm</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full motion-safe:animate-bounce motion-reduce:animate-none">
                <Gift size={32} />
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Tại Sao 10.000+ Khách Hàng Chọn Quang Đăng?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "Đội ngũ Bác sĩ da liễu", desc: "Trực tiếp thăm khám và lên phác đồ cá nhân hóa." },
                  { icon: ShieldCheck, title: "Cam kết hiệu quả", desc: "Bằng văn bản, hoàn tiền nếu không đạt kết quả." },
                  { icon: Heart, title: "Công nghệ không xâm lấn", desc: "An toàn tuyệt đối, không đau, không nghỉ dưỡng." },
                  { icon: Clock, title: "Tiết kiệm thời gian", desc: "Quy trình khoa học, đặt hẹn trước không phải chờ." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Không Gian & Hình Ảnh Thực Tế</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative rounded-lg h-32 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500"
                    alt="Spa Reception"
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg h-32 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500"
                    alt="Facial Treatment"
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg h-32 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500"
                    alt="Spa Room"
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg h-32 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?w=500"
                    alt="Massage"
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg h-32 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500"
                    alt="Products"
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-lg h-32 w-full bg-green-100 flex items-center justify-center text-green-600 font-bold cursor-pointer hover:bg-green-200 transition-colors">
                  + Xem Thêm
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic text-center">
                *Hình ảnh thực tế tại cơ sở 123 Nguyễn Văn Cừ
              </p>
            </div>

            {/* Pain Points & Reassurance */}
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Bạn Đang Lo Lắng?</h3>
              <div className="space-y-4">
                <details className="group bg-white rounded-lg border border-green-100 overflow-hidden">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-bold text-gray-800">
                    Làm dịch vụ có đau không?
                    <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100">
                    Tại Quang Đăng, chúng tôi ưu tiên các công nghệ cao không xâm lấn, êm ái và thư giãn. Đối với các dịch vụ tiêm, bác sĩ sẽ ủ tê kỹ lưỡng, đảm bảo bạn không cảm thấy khó chịu.
                  </div>
                </details>
                <details className="group bg-white rounded-lg border border-green-100 overflow-hidden">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-bold text-gray-800">
                    Giá trên web có phát sinh thêm không?
                    <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100">
                    Chúng tôi cam kết <strong>BÁO GIÁ TRỌN GÓI</strong> trước khi làm. Tuyệt đối không chèo kéo mua thêm mỹ phẩm hay phát sinh chi phí ẩn trong quá trình điều trị.
                  </div>
                </details>
                <details className="group bg-white rounded-lg border border-green-100 overflow-hidden">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-bold text-gray-800">
                    Đặt lịch xong có cần chờ đợi không?
                    <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100">
                    Khách hàng đặt hẹn trước (Booking Online) luôn được ưu tiên phục vụ ngay khi đến. Chúng tôi trân trọng thời gian vàng ngọc của bạn.
                  </div>
                </details>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MAP & CONTACT FOOTER SECTION */}
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Liên Hệ Với Chúng Tôi</h2>
              <p className="text-gray-600 mb-8">
                Thẩm Mỹ Viện Quang Đăng hân hạnh được đón tiếp quý khách. Hãy ghé thăm để trải nghiệm không gian sang trọng và dịch vụ đẳng cấp.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Địa chỉ</h5>
                    <p className="text-gray-600">Tầng 5 - TTTM Đức Tài — Tâm Đạt, Khối 5, Quỳnh Lưu, Nghệ An</p>
                    <a href="https://maps.google.com/?q=TTTM+Đức+Tài" target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm font-semibold hover:underline">Xem chỉ đường Google Maps →</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Giờ mở cửa</h5>
                    <p className="text-gray-600">Thứ 2 - Chủ Nhật: 08:00 - 20:00</p>
                    <p className="text-xs text-green-600 mt-1 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Đang mở cửa
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Hotline</h5>
                    <p className="text-gray-600">0988.834.446 (Có Zalo)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder with Iframe */}
            <div className="h-[400px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-inner">
              <iframe
                src="https://maps.google.com/maps?q=TTTM%20%C4%90%E1%BB%A9c%20T%C3%A0i%20Qu%E1%BB%B3nh%20L%C6%A1u&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
