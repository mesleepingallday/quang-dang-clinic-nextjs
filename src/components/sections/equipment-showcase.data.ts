export type EquipmentCategoryId =
  | 'skin-care'
  | 'treatment'
  | 'high-tech'
  | 'medical-aesthetic';

export type EquipmentItem = {
  id: string;
  name: string;
  description: string;
  categoryId: EquipmentCategoryId;
  image: string;
  ctaLabel: string;
  isHero?: boolean;
  isPrimary?: boolean;
};

export function buildServiceCategoryHref(categoryId: EquipmentCategoryId): string {
  return `/dich-vu?category=${categoryId}#services-grid`;
}

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: 'omni',
    name: 'OMNI',
    description:
      'Nền tảng triệt lông đa năng cho nhiều vùng điều trị, tối ưu tốc độ và sự thoải mái.',
    categoryId: 'high-tech',
    image:
      'https://sciton.com/wp-content/uploads/2025/06/OMNI_5338c77a87bc2b3872615b9d8b7d5ff2b1a3ef5f.png',
    ctaLabel: 'Khám phá OMNI',
    isPrimary: true,
  },
  {
    id: 'mjoule',
    name: 'mJOULE',
    description:
      'Giải pháp linh hoạt cho trẻ hóa và điều trị sắc tố, cân bằng hiệu quả lâm sàng và trải nghiệm.',
    categoryId: 'medical-aesthetic',
    image:
      'https://sciton.com/wp-content/uploads/2025/06/mJoule.png',
    ctaLabel: 'Khám phá mJOULE',
    isPrimary: true,
    isHero: true,
  },
  {
    id: 'joule',
    name: 'JOULE',
    description:
      'Nền tảng đa module cho nhiều chỉ định da liễu thẩm mỹ với hiệu suất ổn định và chính xác.',
    categoryId: 'treatment',
    image:
      'https://sciton.com/wp-content/uploads/2025/09/Joule-tribrid.png',
    ctaLabel: 'Khám phá JOULE',
    isPrimary: true,
  },
  {
    id: 'halo-tribrid',
    name: 'HALO Tribrid',
    description:
      'Tái tạo bề mặt da theo hướng cá nhân hóa, hỗ trợ cải thiện kết cấu và độ rạng rỡ rõ rệt.',
    categoryId: 'treatment',
    image:
      'https://sciton.com/wp-content/uploads/2025/08/Halo-tribrid-Top.png',
    ctaLabel: 'Khám phá HALO',
  },
  {
    id: 'moxi',
    name: 'MOXI',
    description:
      'Liệu trình light resurfacing nhẹ nhàng, phù hợp chăm sóc định kỳ để duy trì nền da khỏe đẹp.',
    categoryId: 'skin-care',
    image:
      'https://sciton.com/wp-content/uploads/2022/01/LiftedLogic_Moxi_Stills_00001-1-1.png',
    ctaLabel: 'Khám phá MOXI',
  },
];
