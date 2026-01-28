import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Users, Heart, Star, CheckCircle, MapPin, Clock } from 'lucide-react';
import Button from '@/components/Button';

export const metadata = {
  title: "Về Chúng Tôi - Thẩm Mỹ Viện Quốc Tế Quang Đăng"
};

export default function About() {
  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Thẩm Mỹ Viện Quốc Tế Quang Đăng",
    "image": "https://images.unsplash.com/photo-1519823551278-64ac927ac4ac",
    "description": "Thẩm mỹ viện chuẩn quốc tế hàng đầu tại Quỳnh Lưu, Nghệ An. Chuyên điều trị da, trẻ hóa và spa cao cấp.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tầng 5 - TTTM Đức Tài — Tâm Đạt, Khối 5",
      "addressLocality": "Quỳnh Lưu",
      "addressRegion": "Nghệ An",
      "addressCountry": "VN"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "telephone": "0988834446",
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-nude-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-green-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 inline-block animate-fade-in">
            Câu Chuyện Thương Hiệu
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nâng Tầm Nhan Sắc Việt <br /> <span className="text-green-600 italic">Chuẩn Quốc Tế</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Tọa lạc tại vị trí đắc địa nhất Quỳnh Lưu, Thẩm Mỹ Viện Quốc Tế Quang Đăng là điểm đến tin cậy cho hàng ngàn phụ nữ Nghệ An trên hành trình tìm lại vẻ đẹp hoàn mỹ.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & MISSION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?auto=format&fit=crop&q=80&w=800"
                  alt="Không gian Quang Đăng Spa"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-full -z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-nude-200 rounded-full -z-0"></div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Khởi Nguồn Từ Tâm – Vươn Tầm Quốc Tế
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Thẩm Mỹ Viện Quốc Tế Quang Đăng được thành lập với sứ mệnh mang các công nghệ làm đẹp tiên tiến nhất thế giới về với Nghệ An. Chúng tôi hiểu rằng, phụ nữ hiện đại xứng đáng được tận hưởng những dịch vụ đẳng cấp 5 sao ngay tại quê hương mình mà không cần đi xa.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                Tại Quang Đăng, chữ <strong>&quot;TÍN&quot;</strong> và chữ <strong>&quot;TÂM&quot;</strong> luôn được đặt lên hàng đầu. Mỗi khách hàng đến với chúng tôi không chỉ là khách hàng, mà là một người thân cần được chăm sóc và trân trọng.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">An Toàn Tuyệt Đối</h4>
                    <p className="text-sm text-gray-500">Quy trình chuẩn y khoa, vô khuẩn 100%.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Đội Ngũ Chuyên Gia</h4>
                    <p className="text-sm text-gray-500">Bác sĩ, kỹ thuật viên tay nghề cao.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Tận Tâm Phục Vụ</h4>
                    <p className="text-sm text-gray-500">Chăm sóc khách hàng như người thân.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Công Nghệ Đỉnh Cao</h4>
                    <p className="text-sm text-gray-500">Cập nhật liên tục từ Mỹ, Hàn Quốc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACILITIES / TECH */}
      <section className="py-20 bg-nude-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-green-300">
            Cơ Sở Vật Chất & Công Nghệ
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12">
            Không gian sang trọng, riêng tư cùng hệ thống máy móc nhập khẩu chính hãng 100%, mang lại trải nghiệm hoàn hảo nhất.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl h-80">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
                alt="Phòng công nghệ cao"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-bold text-xl mb-1">Phòng Công Nghệ Cao</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">Trang bị máy Laser, Hifu thế hệ mới nhất.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-80 md:-mt-8">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600"
                alt="Phòng Spa Thư Giãn"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-bold text-xl mb-1">Phòng Spa Thư Giãn</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">Không gian yên tĩnh, hương thơm tinh dầu dịu nhẹ.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-80">
              <Image
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600"
                alt="Sảnh Đón Tiếp"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-bold text-xl mb-1">Sảnh Đón Tiếp 5 Sao</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">Sang trọng, đẳng cấp, phục vụ chu đáo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đội Ngũ Chuyên Gia
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Bác sĩ Thanh Nga", role: "Chuyên khoa Da liễu", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400" },
              { name: "Master Minh Hạnh", role: "Chuyên gia Phun xăm", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "KTV Thu Hà", role: "Trưởng bộ phận Spa", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
              { name: "KTV Mai Lan", role: "Chuyên viên Laser", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400" }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-green-100 mb-6 shadow-lg relative">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="192px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-green-600 text-sm uppercase tracking-wide font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION & CTA */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Ghé Thăm Quang Đăng</h2>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Địa chỉ</h5>
                    <p className="text-gray-600">Tầng 5 - TTTM Đức Tài — Tâm Đạt, Khối 5, Quỳnh Lưu, Nghệ An</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Giờ làm việc</h5>
                    <p className="text-gray-600">08:00 - 20:00 (Tất cả các ngày trong tuần)</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/dat-lich">Đặt Lịch Tư Vấn Ngay</Link>
              </Button>
            </div>
            <div className="md:w-1/2 min-h-[300px] bg-gray-200 relative">
              {/* Map Placeholder */}
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
      </section>
    </div>
  );
}
