import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ServiceDetailComplete } from "@/types";
import { getServiceBySlug, getAllServices } from "@/lib/service-mock-data";
import { ServiceHero } from "./components/ServiceHero";
import { ServiceOverview } from "./components/ServiceOverview";
import { PricingTable } from "./components/PricingTable";
import { ProcessSteps } from "./components/ProcessSteps";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { ServiceFAQ } from "./components/ServiceFAQ";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { RelatedServices } from "./components/RelatedServices";
import { ServiceSidebar } from "./components/ServiceSidebar";

// Generate static params for all services
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Dịch Vụ Không Tồn Tại | Quang Dang Clinic",
    };
  }

  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    keywords: service.seo.keywords.join(", "),
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      images: [service.heroImage],
      type: "article",
    },
  };
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero service={service} />

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-0">
            {/* Overview */}
            <ServiceOverview service={service} />
            
            {/* Pricing */}
            <PricingTable service={service} />
            
            {/* Process Steps */}
            <ProcessSteps service={service} />
            
            {/* Before/After Gallery */}
            <BeforeAfterGallery service={service} />
            
            {/* FAQ */}
            <ServiceFAQ service={service} />
            
            {/* Testimonials */}
            <TestimonialsSection service={service} />
          </div>

          {/* Right Sidebar - 1/3 width */}
          <aside className="lg:col-span-1">
            <ServiceSidebar service={service} />
          </aside>
        </div>
      </div>

      {/* Related Services */}
      <RelatedServices service={service} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: `${service.title} - Quang Dang Clinic`,
            description: service.shortDescription,
            image: service.heroImage,
            url: `https://quangdangclinic.vn/dich-vu/${service.slug}`,
            telephone: "+84-909-123-456",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Nguyễn Văn A",
              addressLocality: "Quận 1",
              addressRegion: "TP.HCM",
              addressCountry: "VN",
            },
            priceRange: "$$$",
            medicalSpecialty: service.category,
          }),
        }}
      />
    </main>
  );
}
