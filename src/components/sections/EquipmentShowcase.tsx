import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import {
  buildServiceCategoryHref,
  EQUIPMENT_ITEMS,
  type EquipmentItem,
} from './equipment-showcase.data';

function EquipmentColumnCard({ item, featured = false }: { item: EquipmentItem; featured?: boolean }) {
  return (
    <article className="text-center">
      <div
        className={`relative mx-auto w-full max-w-[360px] overflow-hidden ${featured ? 'h-[430px] lg:h-[520px]' : 'h-[380px] lg:h-[470px]'}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain object-bottom"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f1f1f1] via-[#f1f1f1]/70 to-transparent" />
      </div>

      <h3 className="mt-6 font-sans text-[38px] font-semibold uppercase tracking-tight text-charcoal lg:text-[42px]">
        {item.name}
      </h3>
      <p className="mx-auto mt-4 max-w-[340px] text-[18px] leading-relaxed text-neutral-600">
        {item.description}
      </p>

      <div className="mt-8">
        <Button
          asChild
          className="bg-charcoal px-8 py-3 text-base normal-case tracking-normal hover:bg-black"
        >
          <Link href={buildServiceCategoryHref(item.categoryId)}>{item.ctaLabel}</Link>
        </Button>
      </div>
    </article>
  );
}

function EquipmentMobileCard({ item }: { item: EquipmentItem }) {
  return (
    <article className="text-center">
      <div className="relative mx-auto h-[320px] w-full max-w-[360px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="100vw"
          className="object-contain object-bottom"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f1f1f1] via-[#f1f1f1]/70 to-transparent" />
      </div>

      <h3 className="mt-5 font-sans text-[32px] font-semibold uppercase tracking-tight text-charcoal">
        {item.name}
      </h3>
      <p className="mx-auto mt-3 max-w-[340px] text-base leading-relaxed text-neutral-600">
        {item.description}
      </p>

      <div className="mt-6">
        <Button
          asChild
          className="bg-charcoal px-7 py-3 text-base normal-case tracking-normal hover:bg-black"
        >
          <Link href={buildServiceCategoryHref(item.categoryId)}>{item.ctaLabel}</Link>
        </Button>
      </div>
    </article>
  );
}

export default function EquipmentShowcase() {
  const primaryItems = EQUIPMENT_ITEMS.filter((item) => item.isPrimary);
  const secondaryItems = EQUIPMENT_ITEMS.filter((item) => !item.isPrimary);
  const primarySource = primaryItems.length > 0 ? primaryItems : EQUIPMENT_ITEMS;
  const centerItem = primarySource.find((item) => item.isHero) ?? primarySource[1] ?? primarySource[0];

  if (!centerItem) {
    return null;
  }

  const sideItems = primarySource.filter((item) => item.id !== centerItem.id);
  const orderedDesktop = [sideItems[0], centerItem, sideItems[1]].filter(Boolean) as EquipmentItem[];
  const overflowPrimary = sideItems.slice(2);
  const secondaryDisplay = [...overflowPrimary, ...secondaryItems];
  const orderedMobile = [centerItem, ...sideItems, ...secondaryItems];

  return (
    <section className="bg-[#f1f1f1] py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 xl:gap-12">
            {orderedDesktop.map((item, index) => (
              <EquipmentColumnCard key={item.id} item={item} featured={index === 1} />
            ))}
          </div>

          {secondaryDisplay.length > 0 ? (
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-10">
              {secondaryDisplay.map((item) => (
                <EquipmentColumnCard key={item.id} item={item} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-12 lg:hidden">
          {orderedMobile.map((item) => (
            <EquipmentMobileCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
