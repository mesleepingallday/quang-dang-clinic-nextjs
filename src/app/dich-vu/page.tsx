import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap, Scissors } from 'lucide-react';
import Button from '@/components/Button';
import { getServices, getStrapiMediaUrl, Service } from '@/lib/strapi';

export const metadata = {
  title: "Dịch Vụ Thẩm Mỹ Quốc Tế - Viện Thẩm Mỹ Quang Đăng"
};

// Map of service slugs to category IDs
const SERVICE_CATEGORY_MAP: Record<string, string> = {
  'cham-soc-da-co-ban': 'skin-care',
  'cham-soc-da-chuyen-sau': 'skin-care',
  'dieu-tri-da-lieu': 'skin-care',
  'mesotherapy': 'skin-care',
  'cay-ha': 'skin-care',
  'bap': 'skin-care',
  'filler': 'medical-aesthetic',
  'botox': 'medical-aesthetic',
  'cang-chi-vung-mat': 'medical-aesthetic',
  'tiem-giam-beo': 'medical-aesthetic',
  'triet-long-laser-maxlight': 'high-tech',
  'tam-trang': 'high-tech',
  'giam-beo-cong-nghe-cao': 'high-tech',
  'tri-lieu-da-dau': 'special-services',
  'dich-vu-phun-xam': 'special-services',
  'dich-vu-vung-mat': 'special-services',
  'dich-vu-kham-mat': 'special-services',
};

const Services: React.FC = async () => {
  let services: Service[] = [];

  try {
    services = await getServices();
  } catch (error) {
    console.error('Failed to fetch services from Strapi:', error);
    // Fallback to empty array - can be replaced with static fallback data if needed
    services = [];
  }

  // Transform Strapi service data to match UI expectations
  const transformedServices = services.map(service => ({
    id: service.slug,
    title: service.name,
    shortDescription: service.description,
    image: getStrapiMediaUrl(service.image?.url || ''),
    link: `/dich-vu/${service.slug}`,
    featured: false, // Can be added to Strapi schema if needed
    benefits: [] // Can be populated from Strapi components if available
  }));

  // Categorize services for better UI display
  const categories = [
    {
      id: 'skin-care',
      title: 'Chăm Sóc & Điều Trị Da',
      description: 'Hệ sinh thái chăm sóc da chuyên sâu, phục hồi và điều trị dứt điểm mọi khiếm khuyết.',
      icon: Sparkles,
      services: transformedServices.filter(s => SERVICE_CATEGORY_MAP[s.id] === 'skin-care')
    },
    {
      id: 'medical-aesthetic',
      title: 'Thẩm Mỹ Nội Khoa',
      description: 'Kiến tạo đường nét gương mặt tỷ lệ vàng không phẫu thuật, an toàn chuẩn y khoa.',
      icon: Shield,
      services: transformedServices.filter(s => SERVICE_CATEGORY_MAP[s.id] === 'medical-aesthetic')
    },
    {
      id: 'high-tech',
      title: 'Công Nghệ Cao & Body',
      description: 'Ứng dụng Laser và sóng siêu âm hội tụ đỉnh cao trong việc cải thiện vóc dáng và làn da cơ thể.',
      icon: Zap,
      services: transformedServices.filter(s => SERVICE_CATEGORY_MAP[s.id] === 'high-tech')
    },
    {
      id: 'special-services',
      title: 'Dịch Vụ Chuyên Biệt',
      description: 'Tận hưởng sự chăm sóc tỉ mỉ từ da đầu, thẩm mỹ mắt đến phun xăm nghệ thuật.',
      icon: Scissors,
      services: transformedServices.filter(s => SERVICE_CATEGORY_MAP[s.id] === 'special-services')
    }
  ];

  return (
    <div className="min-h-screen bg-nude-50">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-green-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 inline-block">
            Viện Thẩm Mỹ Quang Đăng - Menu 2024
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nâng Tầm Nhan Sắc <br /> <span className="italic text-green-600">Với 17 Dịch Vụ Đẳng Cấp</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 font-light">
            Chúng tôi tự hào mang đến hệ sinh thái làm đẹp toàn diện, kết hợp giữa tinh hoa thẩm mỹ nội khoa và công nghệ y khoa tiên tiến nhất thế giới.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="shadow-green-500/30">
              <Link href="/dat-lich">Đặt Lịch Tư Vấn Ngay</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:0988834446" className="hidden sm:inline-block">
                Hotline: 0988.834.446
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIZED SERVICE GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {categories.map((cat, catIdx) => (
            <div key={cat.id} id={cat.id} className={`mb-24 scroll-mt-32 ${catIdx !== 0 ? 'pt-16 border-t border-gray-100' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-2xl">
                      <cat.icon size={28} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">{cat.title}</h2>
                  </div>
                  <p className="text-gray-500 text-lg leading-relaxed">{cat.description}</p>
                </div>
                <div className="hidden lg:block">
                  <span className="text-green-500 font-serif italic text-2xl">0{catIdx + 1} / 04</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.services.map((service) => (
                  <div key={service.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image || 'https://via.placeholder.com/800x600'}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                      {service.featured && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                          Dịch Vụ Hot
                        </div>
                      )}
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <ul className="space-y-2 mb-8">
                        {service.benefits?.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <Link href={service.link} className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                          Tìm hiểu thêm <ArrowRight size={16} />
                        </Link>
                        <Button
                          asChild
                          variant="outline"
                          className="px-0 py-0 border-0 shadow-none hover:bg-transparent text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-green-600"
                        >
                          <Link href="/dat-lich">Đặt lịch</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-20 bg-nude-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-green-300">
            Khởi Đầu Hành Trình Tỏa Sáng
          </h2>
          <p className="max-w-2xl mx-auto text-nude-100 mb-10 text-lg font-light">
            Hãy để Viện Thẩm Mỹ Quang Đăng đồng hành cùng bạn trên hành trình chinh phục vẻ đẹp hoàn mỹ nhất của chính mình.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="px-10 py-4 text-lg bg-green-500 hover:bg-green-600 text-white border-none shadow-2xl">
              <Link href="/dat-lich">Đăng Ký Tư Vấn Ngay</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
