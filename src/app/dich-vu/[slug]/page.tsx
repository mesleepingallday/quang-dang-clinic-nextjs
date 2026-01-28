import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Clock, Calendar, Shield, AlertCircle, Sparkles, TrendingDown } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import Button from '@/components/Button';
import { getServiceBySlug, getServices, getStrapiMediaUrl } from '@/lib/strapi';
import FAQSection from './_faq';

// Generate static params for pre-rendering all service pages
export async function generateStaticParams() {
  try {
    const services = await getServices();
    return services.map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params for services:', error);
    return [];
  }
}

interface ServiceDetailProps {
  params: {
    slug: string;
  };
}

const ServiceDetail: React.FC<ServiceDetailProps> = async ({ params }) => {
  const { slug } = params;

  let serviceData;

  try {
    const strapiService = await getServiceBySlug(slug);

    if (!strapiService) {
      notFound();
    }

    // Transform Strapi service data to match detail page expectations
    serviceData = {
      id: strapiService.slug,
      slug: strapiService.slug,
      title: strapiService.name,
      category: 'THẨM MỸ QUỐC TẾ',
      heroImage: getStrapiMediaUrl(strapiService.image?.url || ''),
      shortDesc: strapiService.description,
      introTitle: `${strapiService.name} - Dịch Vụ Đẳng Cấp Tại Viện Thẩm Mỹ Quang Đăng`,
      introDesc: [
        `${strapiService.name} tại Viện Thẩm Mỹ Quang Đăng là giải pháp tối ưu giúp khách hàng lấy lại vẻ đẹp tự nhiên và sự tự tin.`,
        `Chúng tôi sử dụng trang thiết bị hiện đại nhất kết hợp với đội ngũ chuyên gia giàu kinh nghiệm để đảm bảo kết quả hoàn mỹ cho từng khách hàng.`
      ],
      benefits: [
        'Thiết bị y khoa tiên tiến',
        'Chuyên gia giàu kinh nghiệm',
        'Kết quả hoàn mỹ đảm bảo'
      ],
      process: [
        { title: 'Thăm khám & Tư vấn', desc: 'Bác sĩ chuyên khoa trực tiếp kiểm tra tình trạng và lên phác đồ.' },
        { title: 'Làm sạch chuyên sâu', desc: 'Vệ sinh vùng điều trị để đảm bảo an toàn y khoa.' },
        { title: 'Tiến hành dịch vụ', desc: 'Thực hiện kỹ thuật chuyên môn theo quy trình chuẩn.' },
        { title: 'Chăm sóc sau liệu trình', desc: 'Hướng dẫn khách hàng cách chăm sóc tại nhà để đạt hiệu quả cao nhất.' }
      ],
      pricing: [
        { name: strapiService.name, price: 'Liên hệ', duration: '60-90 phút', description: 'Gói tiêu chuẩn' }
      ],
      faqs: [
        { q: 'Dịch vụ này có đau không?', a: 'Quy trình tại Viện Thẩm Mỹ Quang Đăng luôn được thiết kế để khách hàng cảm thấy thoải mái nhất, sử dụng kỹ thuật hiện đại giảm thiểu xâm lấn.' },
        { q: 'Cần nghỉ dưỡng bao lâu?', a: 'Hầu hết các dịch vụ của chúng tôi không cần nghỉ dưỡng, bạn có thể quay lại sinh hoạt bình thường ngay lập tức.' }
      ],
      promotion: { discount: '20%', note: 'Ưu đãi cho khách hàng đặt lịch online' }
    };
  } catch (error) {
    console.error('Failed to fetch service from Strapi:', error);
    notFound();
  }


  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.title,
    "description": serviceData.shortDesc,
    "provider": {
      "@type": "BeautySalon",
      "name": "Viện Thẩm Mỹ Quang Đăng"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bảng giá " + serviceData.title,
      "itemListElement": serviceData.pricing.map(item => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": item.name },
        "price": item.price.replace(/\D/g, ''),
        "priceCurrency": "VND"
      }))
    }
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* 1. HERO HEADER */}
      <div className="pt-32 pb-12 bg-green-50 border-b border-green-100">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm text-gray-400 mb-3 uppercase tracking-widest flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-green-600">Trang chủ</Link> /
            <Link href="/dich-vu" className="hover:text-green-600">Dịch Vụ</Link> /
            <span className="text-green-600 font-bold">{serviceData.category}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">{serviceData.title}</h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg font-light leading-relaxed">
            {serviceData.shortDesc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:w-2/3">
            {/* Intro Image */}
            <div className="rounded-[2rem] overflow-hidden mb-12 shadow-2xl relative group border-4 border-white h-[400px]">
              <Image
                src={serviceData.heroImage}
                alt={serviceData.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              {serviceData.promotion && (
                <div className="absolute top-6 right-6 bg-green-500 text-white font-bold px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 motion-safe:animate-bounce motion-reduce:animate-none">
                  <Sparkles size={20} />
                  ƯU ĐÃI {serviceData.promotion.discount}
                </div>
              )}
            </div>

            {/* Description & Benefits */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {serviceData.introTitle}
              </h2>
              <div className="text-gray-600 mb-10 leading-relaxed space-y-4 text-lg">
                {serviceData.introDesc.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="bg-green-50 p-8 rounded-[2rem] border border-green-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-green-500">
                  <Shield size={80} />
                </div>
                <h3 className="font-bold text-green-700 mb-6 flex items-center gap-2 text-xl">
                  <Shield size={24} /> Lợi ích vượt trội:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceData.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mt-0.5">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PRICING SECTION - MOVED UP TO PREVENT SLIPPAGE */}
            <div className="mb-16 scroll-mt-32" id="pricing">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 border-l-8 border-green-500 pl-6">Bảng Giá Niêm Yết</h2>
                <div className="hidden sm:flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-4 py-2 rounded-full">
                  <TrendingDown size={18} /> Cam kết giá tốt nhất
                </div>
              </div>

              <div className="overflow-hidden border border-green-100 rounded-[2rem] shadow-xl bg-white">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-widest">Phân Vùng / Dịch Vụ</th>
                      <th className="px-8 py-5 text-center text-xs font-bold uppercase tracking-widest hidden sm:table-cell">Liệu Trình</th>
                      <th className="px-8 py-5 text-right text-xs font-bold uppercase tracking-widest">Giá Trọn Gói</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {serviceData.pricing.map((item, idx) => (
                      <tr key={idx} className="hover:bg-green-50/50 transition-colors duration-300">
                        <td className="px-8 py-6">
                          <div className="text-lg font-bold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-center text-sm font-bold text-gray-600 hidden sm:table-cell">
                          <span className="bg-green-50 px-3 py-1 rounded-full">{item.duration}</span>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-right">
                          <div className="text-xl font-bold text-green-600">{item.price}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400 italic">
                <span>* Giá niêm yết đã bao gồm mọi chi phí</span>
                <span className="w-1.5 h-1.5 bg-green-200 rounded-full"></span>
                <span>{serviceData.promotion.note}</span>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-10 border-l-8 border-green-500 pl-6">Quy Trình Chuẩn Y Khoa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceData.process.map((step, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-300 hover:shadow-lg transition-[box-shadow,border-color] group">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-serif text-xl font-bold group-hover:bg-green-500 group-hover:text-white transition-colors">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <FAQSection faqs={serviceData.faqs} />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Promotion Widget */}
              <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center group">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                <h3 className="font-serif text-2xl font-bold mb-4">Món Quà Nhan Sắc</h3>
                <div className="text-6xl font-extrabold text-green-500 mb-4 tracking-tighter group-hover:scale-110 transition-transform">
                  {serviceData.promotion.discount}
                </div>
                <p className="text-gray-400 mb-8 px-4">{serviceData.promotion.note}</p>

                <Button asChild variant="primary" fullWidth className="py-5 text-lg">
                  <Link href="/dat-lich" className="block">
                    NHẬN ƯU ĐÃI NGAY
                  </Link>
                </Button>
                <p className="text-[10px] text-gray-600 mt-4 uppercase tracking-widest">Suất ưu đãi có hạn trong ngày</p>
              </div>

              {/* Booking Form Sidebar */}
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                <BookingForm
                  title="Tư vấn phác đồ"
                  subtitle="Chuyên gia sẽ gọi lại hỗ trợ bạn trong 3 phút."
                  className="border-none shadow-none"
                />
              </div>

              {/* Support Widget */}
              <div className="bg-green-50 p-8 rounded-[2rem] border border-green-100 text-center">
                <p className="text-gray-500 text-sm mb-4">Bạn cần hỗ trợ gấp?</p>
                <a href="tel:0988834446" className="flex items-center justify-center gap-3 text-green-700 font-bold text-2xl hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600">
                    <Calendar size={20} />
                  </div>
                  0988.834.446
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
