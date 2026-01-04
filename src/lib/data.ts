
import { NavItem, Service, Testimonial, PriceItem, ServiceDetailData, BlogCategory, BlogPost } from '@/types';

// 1. UPDATED NAVIGATION WITH ICONS & DESCRIPTIONS
export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang Chủ', path: '/' },
  { label: 'Về Chúng Tôi', path: '/gioi-thieu' },
  {
    label: 'Dịch Vụ',
    path: '/dich-vu',
    children: [
      {
        label: 'Da Liễu & Trẻ Hóa',
        path: '/dich-vu#skin-care',
        icon: 'Sparkles',
        description: 'Điều trị mụn, nám, Mesotherapy, cấy HA căng bóng.'
      },
      {
        label: 'Thẩm Mỹ Nội Khoa',
        path: '/dich-vu#medical-aesthetic',
        icon: 'Shield',
        description: 'Tiêm Botox xóa nhăn, Filler tạo hình, căng chỉ nâng cơ.'
      },
      {
        label: 'Giảm Béo & Triệt Lông',
        path: '/dich-vu#high-tech',
        icon: 'Zap',
        description: 'Triệt lông Laser Maxlight, tắm trắng phi thuyền, giảm béo.'
      },
      {
        label: 'Dịch Vụ Chuyên Biệt',
        path: '/dich-vu#special-services',
        icon: 'Scissors',
        description: 'Phun xăm nghệ thuật, thẩm mỹ mắt, trị liệu da đầu.'
      },
    ]
  },
  { label: 'Bảng Giá', path: '/bang-gia' },
  { label: 'Tin Tức', path: '/tin-tuc' },
  { label: 'Liên Hệ', path: '/lien-he' },
];

export const SERVICES: Service[] = [
  {
    id: 'cham-soc-da-co-ban',
    title: 'Chăm Sóc Da Cơ Bản',
    shortDescription: 'Làm sạch sâu, cấp ẩm và duy trì nền da khỏe mạnh với 3 liệu trình chuyên biệt.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/cham-soc-da-co-ban',
    benefits: ['Cấp ẩm detox', 'Chăm sóc da nhạy cảm', 'Da dầu chuyên biệt']
  },
  {
    id: 'cham-soc-da-chuyen-sau',
    title: 'Chăm Sóc Da Chuyên Sâu',
    shortDescription: 'Phục hồi đa tầng, trẻ hóa da công nghệ cao with 5 liệu trình Luxury.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/cham-soc-da-chuyen-sau',
    featured: true,
    benefits: ['Trẻ hóa Oxy tươi', 'Phục hồi tái sinh', 'Nâng cơ trẻ hóa']
  },
  {
    id: 'dieu-tri-da-lieu',
    title: 'Điều Trị Da Liễu',
    shortDescription: 'Phác đồ y khoa điều trị dứt điểm Mụn, Nám, Tàn nhang, Sẹo rỗ.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/dieu-tri-da-lieu',
    benefits: ['Bác sĩ trực tiếp thăm khám', 'Cam kết hiệu quả', 'Chuẩn y khoa']
  },
  {
    id: 'triet-long-laser-maxlight',
    title: 'Triệt Lông Laser Maxlight Đức',
    shortDescription: 'Công nghệ triệt lông tiên tiến từ Đức, êm ái, bảo hành trọn đời.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/triet-long-laser-maxlight',
    featured: true,
    benefits: ['Triệt lông vĩnh viễn', 'Sáng vùng da triệt', 'Không đau rát']
  },
  {
    id: 'tam-trang',
    title: 'Tắm Trắng',
    shortDescription: 'Bật tone trắng hồng tự nhiên, an toàn, không bào mòn da.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/tam-trang',
    benefits: ['Bật 2-3 tone', 'Mịn màng da toàn thân', 'Không hồi tone']
  },
  {
    id: 'giam-beo-cong-nghe-cao',
    title: 'Giảm Béo Công Nghệ Cao',
    shortDescription: 'Đánh tan mỡ thừa vùng bụng, đùi, bắp tay không phẫu thuật.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/giam-beo-cong-nghe-cao',
    benefits: ['Giảm size tức thì', 'Săn chắc vùng da', 'Không nghỉ dưỡng']
  },
  {
    id: 'filler',
    title: 'Filler',
    shortDescription: 'Tạo hình cằm V-line, môi trái tim, làm đầy thái dương lõm.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/filler',
    benefits: ['Đẹp ngay sau khi làm', 'Sản phẩm chính hãng', 'Bác sĩ thực hiện']
  },
  {
    id: 'botox',
    title: 'Botox',
    shortDescription: 'Xóa nhăn đuôi mắt, trán và thon gọn hàm không dao kéo.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/botox',
    benefits: ['Gương mặt thanh thoát', 'Hiệu quả lâu dài', 'Tự nhiên, không đơ']
  },
  {
    id: 'cang-chi-vung-mat',
    title: 'Căng Chỉ Vùng Mặt',
    shortDescription: 'Trẻ hóa da tầng sâu, nâng cơ mặt chảy xệ chỉ sau 60 phút.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/cang-chi-vung-mat',
    benefits: ['Trẻ ra 10 tuổi', 'Tăng sinh collagen', 'Duy trì 3-5 năm']
  },
  {
    id: 'tiem-giam-beo',
    title: 'Tiêm Giảm Béo',
    shortDescription: 'Hóa lỏng và đào thải mỡ thừa bằng tinh chất nhập khẩu.',
    image: 'https://images.unsplash.com/photo-1556228720-1987df2856f7?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/tiem-giam-beo',
    benefits: ['Tác động trúng đích', 'Đào thải mỡ tự nhiên', 'An toàn tuyệt đối']
  },
  {
    id: 'mesotherapy',
    title: 'Mesotherapy',
    shortDescription: 'Đưa dưỡng chất vào sâu trong da để cấp ẩm, trị nám, trắng sáng.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/mesotherapy',
    benefits: ['Da ngậm nước', 'Phục hồi da tổn thương', 'Bật tone da']
  },
  {
    id: 'cay-ha',
    title: 'Cấy HA',
    shortDescription: 'Siêu cấp nước đa tầng giúp da căng mọng, xóa mờ nếp nhăn li ti.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/cay-ha',
    benefits: ['Hiệu quả tức thì', 'Da bóng khỏe', 'Se khít lỗ chân lông']
  },
  {
    id: 'bap',
    title: 'Kỹ thuật BAP',
    shortDescription: 'Kỹ thuật tiêm 5 điểm tối ưu giúp nâng cơ và trẻ hóa toàn diện.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/bap',
    benefits: ['Ít điểm tiêm, không đau', 'Nâng cơ mặt', 'Phục hồi cấu trúc']
  },
  {
    id: 'tri-lieu-da-dau',
    title: 'Trị Liệu Da Đầu',
    shortDescription: 'Gội đầu dưỡng sinh kết hợp trị liệu chuyên sâu cho da đầu khỏe mạnh.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/tri-lieu-da-dau',
    benefits: ['Giảm rụng tóc', 'Sạch gàu, hết ngứa', 'Thư giãn giảm stress']
  },
  {
    id: 'dich-vu-phun-xam',
    title: 'Dịch Vụ Phun Xăm',
    shortDescription: 'Phun môi Collagen, điêu khắc chân mày chuẩn phong thủy.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/dich-vu-phun-xam',
    benefits: ['Màu sắc tự nhiên', 'Dáng mày thời thượng', 'Không sưng, không đau']
  },
  {
    id: 'dich-vu-vung-mat',
    title: 'Dịch Vụ Về Vùng Mắt',
    shortDescription: 'Xóa quầng thâm, tan bọng mắt và trẻ hóa vùng da mắt nhạy cảm.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    link: '/dich-vu/dich-vu-vung-mat',
    benefits: ['Đôi mắt tinh anh', 'Xóa nếp nhăn chân chim', 'Nâng cung mày']
  },
  {
    id: 'dich-vu-kham-mat',
    title: 'Dịch Vụ Khám Mắt',
    shortDescription: 'Thăm khám và tư vấn sức khỏe thị lực chuyên sâu cùng chuyên gia.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    link: '/dich-vu/dich-vu-kham-mat',
    benefits: ['Máy đo thị lực hiện đại', 'Chẩn đoán chính xác', 'Tư vấn bảo vệ mắt']
  }
];

// Helper to get detail data
export const SERVICE_DETAILS_DATA: Record<string, ServiceDetailData> = SERVICES.reduce((acc, s) => {
  acc[s.id] = {
    id: s.id,
    slug: s.id,
    title: s.title,
    category: 'THẨM MỸ QUỐC TẾ',
    heroImage: s.image,
    shortDesc: s.shortDescription,
    introTitle: 'Dịch Vụ Đẳng Cấp Tại Quang Đăng',
    introDesc: [
      `${s.title} tại Thẩm Mỹ Viện Quốc Tế Quang Đăng là giải pháp tối ưu giúp khách hàng lấy lại vẻ đẹp tự nhiên và sự tự tin.`,
      `Chúng tôi sử dụng trang thiết bị hiện đại nhất kết hợp với đội ngũ chuyên gia giàu kinh nghiệm để đảm bảo kết quả hoàn mỹ cho từng khách hàng.`
    ],
    benefits: s.benefits || [],
    process: [
      { title: 'Thăm khám & Tư vấn', desc: 'Bác sĩ chuyên khoa trực tiếp kiểm tra tình trạng và lên phác đồ.' },
      { title: 'Làm sạch chuyên sâu', desc: 'Vệ sinh vùng điều trị để đảm bảo an toàn y khoa.' },
      { title: 'Tiến hành dịch vụ', desc: 'Thực hiện kỹ thuật chuyên môn theo quy trình chuẩn.' },
      { title: 'Chăm sóc sau liệu trình', desc: 'Hướng dẫn khách hàng cách chăm sóc tại nhà để đạt hiệu quả cao nhất.' }
    ],
    pricing: [
      { name: s.title, price: 'Liên hệ', duration: '60-90 phút', description: 'Gói tiêu chuẩn' }
    ],
    faqs: [
      { q: 'Dịch vụ này có đau không?', a: 'Quy trình tại Quang Đăng luôn được thiết kế để khách hàng cảm thấy thoải mái nhất, sử dụng kỹ thuật hiện đại giảm thiểu xâm lấn.' },
      { q: 'Cần nghỉ dưỡng bao lâu?', a: 'Hầu hết các dịch vụ của chúng tôi không cần nghỉ dưỡng, bạn có thể quay lại sinh hoạt bình thường ngay lập tức.' }
    ],
    promotion: { discount: '20%', note: 'Ưu đãi cho khách hàng đặt lịch online' }
  };
  return acc;
}, {} as Record<string, ServiceDetailData>);

// Override Tắm Trắng
SERVICE_DETAILS_DATA['tam-trang'] = {
  ...SERVICE_DETAILS_DATA['tam-trang'],
  introTitle: 'Tắm Trắng Phi Thuyền – Da Trắng Bật Tone, Mịn Màng Toàn Thân',
  introDesc: [
    'Dịch vụ tắm trắng tại Quang Đăng ứng dụng công nghệ phi thuyền hồng ngoại giúp đưa dưỡng chất trắng da vào sâu trong lớp hạ bì, ức chế hắc sắc tố melanin và kích thích sản sinh collagen mới.',
    'Chỉ sau 1 liệu trình trọn gói, làn da của bạn sẽ bật từ 2-3 tone, trở nên đều màu, mịn màng và khỏe mạnh từ bên trong. Đặc biệt, chúng tôi kết hợp liệu pháp tẩy tế bào chết chuyên sâu giúp loại bỏ lớp sừng già cỗi, cho da dễ dàng hấp thụ dưỡng chất.'
  ],
  pricing: [
    { name: 'Tẩy da chết body + dưỡng', price: '5.000.000đ', duration: '10 buổi', description: 'Làm sạch sâu và cấp ẩm toàn thân.' },
    { name: 'Tắm trắng phi thuyền', price: '15.000.000đ', duration: '10 buổi', description: 'Công nghệ phi thuyền bật tone cấp tốc.' }
  ]
};

// Override Chăm Sóc Da Cơ Bản
SERVICE_DETAILS_DATA['cham-soc-da-co-ban'] = {
  ...SERVICE_DETAILS_DATA['cham-soc-da-co-ban'],
  introTitle: 'Liệu Trình Chăm Sóc Da Chuẩn Y Khoa',
  introDesc: [
    'Dịch vụ Chăm sóc da cơ bản tại Quang Đăng giúp duy trì nền da sạch khỏe, ngăn ngừa mụn và lão hóa sớm.',
    'Chúng tôi cung cấp 3 giải pháp chuyên biệt phù hợp with từng tình trạng da cụ thể của khách hàng.'
  ],
  pricing: [
    { name: 'Chăm sóc cấp ẩm, detox', price: '300.000đ', duration: '60 phút', description: 'Thải độc tố và cấp ẩm sâu cho da.' },
    { name: 'Chăm sóc da nhạy cảm', price: '300.000đ', duration: '60 phút', description: 'Làm dịu và phục hồi hàng rào bảo vệ da.' },
    { name: 'Chăm sóc da dầu chuyên biệt', price: '300.000đ', duration: '60 phút', description: 'Kiềm dầu, làm sạch sâu lỗ chân lông.' }
  ]
};

// Override Chăm Sóc Da Chuyên Sâu
SERVICE_DETAILS_DATA['cham-soc-da-chuyen-sau'] = {
  ...SERVICE_DETAILS_DATA['cham-soc-da-chuyen-sau'],
  introTitle: 'Trẻ Hóa & Phục Hồi Da Đa Tầng',
  introDesc: [
    'Liệu trình Chăm sóc da chuyên sâu tại Quang Đăng ứng dụng các công nghệ tân tiến như Oxy tươi, Laser Toning giúp giải quyết triệt để các vấn hóa và thương tổn da.',
    'Mỗi bước trong quy trình 60 phút được thiết kế tối ưu để mang lại làn da căng bóng, rạng rỡ ngay sau lần đầu thực hiện.'
  ],
  pricing: [
    { name: 'Trẻ hóa cấp ẩm Detox đa tầng CN Oxy tươi', price: '500.000đ', duration: '60 phút', description: 'Cấp oxy tinh khiết giúp da tươi trẻ, rạng rỡ.' },
    { name: 'Chăm sóc phục hồi tái sinh da mỏng yếu', price: '500.000đ', duration: '60 phút', description: 'Tái tạo cấu trúc da tổn thương, nhạy cảm.' },
    { name: 'Chăm sóc da Nâng cơ trẻ hóa toàn diện', price: '500.000đ', duration: '60 phút', description: 'Xóa nhăn, nâng cơ' },
    { name: 'Tăng sinh collagen trắng sáng da kết hợp tái tạo vi điểm', price: '500.000đ', duration: '60 phút', description: 'Bật tone da và làm mịn bề mặt da.' },
    { name: 'Chăm sóc trẻ hóa da bằng CN Laser Toning', price: '500.000đ', duration: '60 phút', description: 'Xóa mờ thâm nám, trẻ hóa tầng sâu.' }
  ]
};

// Override Triệt Lông Laser Maxlight Đức
SERVICE_DETAILS_DATA['triet-long-laser-maxlight'] = {
  ...SERVICE_DETAILS_DATA['triet-long-laser-maxlight'],
  introTitle: 'Công Nghệ Triệt Lông Laser Maxlight Từ Đức',
  introDesc: [
    'Laser Maxlight là công nghệ triệt lông tiên tiến nhất hiện nay, giúp loại bỏ gốc lông tận gốc mà không gây đau rát, đồng thời làm sáng vùng da điều trị và se khít lỗ chân lông.',
    'Tại Quang Đăng, chúng tôi cung cấp các gói liệu trình 8 buổi cam kết hiệu quả và bảo hành dài hạn cho từng vùng cơ thể.'
  ],
  pricing: [
    { name: 'Triệt mép', price: '800.000đ', duration: '8 buổi', description: 'Làm sạch vùng mép, sáng da.' },
    { name: 'Triệt nách', price: '800.000đ', duration: '8 buổi', description: 'Xóa thâm, sạch lông nách.' },
    { name: 'Triệt mặt', price: '3.000.000đ', duration: '8 buổi', description: 'Giúp da mặt mịn màng.' },
    { name: 'Triệt cả chân', price: '4.000.000đ', duration: '8 buổi', description: 'Triệt lông toàn bộ vùng chân.' },
    { name: 'Triệt bikini', price: '3.000.000đ', duration: '8 buổi', description: 'An toàn, sạch sẽ.' },
    { name: 'Triệt toàn thân', price: '18.000.000đ', duration: '8 buổi', description: 'Gói chăm sóc toàn diện.' }
  ]
};

// Override Giảm Béo Công Nghệ Cao
SERVICE_DETAILS_DATA['giam-beo-cong-nghe-cao'] = {
  ...SERVICE_DETAILS_DATA['giam-beo-cong-nghe-cao'],
  introTitle: 'Giảm Béo Công Nghệ Cao – Đốt Mỡ Đa Tầng Không Xâm Lấn',
  introDesc: [
    'Công nghệ giảm béo tại Quang Đăng sử dụng sóng siêu âm hội tụ và năng lượng Laser cường độ thấp để phá vỡ cấu trúc mô mỡ thừa mà không cần can thiệp dao kéo.',
    'Liệu trình 10 buổi được thiết kế cá nhân hóa cho từng phân vùng cơ thể như Bụng, Đùi, Bắp tay, giúp hóa lỏng mỡ lâu năm và đào thải tự nhiên qua hệ bài tiết, đồng thời làm săn chắc vùng da sau giảm size.'
  ],
  pricing: [
    { name: 'Giảm béo bắp tay', price: '8.000.000đ', duration: '10 buổi', description: 'Làm thon gọn đôi tay, săn chắc cơ.' },
    { name: 'Giảm béo bắp đùi', price: '10.000.000đ', duration: '10 buổi', description: 'Xóa mỡ thừa vùng đùi, da mịn màng.' },
    { name: 'Giảm béo bụng', price: '12.000.000đ', duration: '10 buổi', description: 'Đánh tan mỡ bụng, phẳng bụng tức thì.' }
  ]
};

// Override Thẩm Mỹ Vùng Mắt
SERVICE_DETAILS_DATA['dich-vu-vung-mat'] = {
  ...SERVICE_DETAILS_DATA['dich-vu-vung-mat'],
  introTitle: 'Thẩm Mỹ Mắt Chuyên Sâu & Điều Trị Mí Lỗi',
  introDesc: [
    'Vùng mắt là "cửa sổ tâm hồn" và cũng là nơi thể hiện dấu hiệu tuổi tác rõ nhất. Thẩm Mỹ Viện Quang Đăng cung cấp giải pháp toàn diện giúp kiến tạo đôi mắt tinh anh, rạng rỡ.',
    'Chúng tôi tự hào là đơn vị uy tín trong việc xử lý các ca mí lỗi, hỏng nặng, mang lại kết quả tự nhiên và bền vững cho khách hàng.'
  ],
  pricing: [
    { name: 'Treo cung mày - đính màng xương trán', price: '15.000.000đ', duration: 'Tiểu phẫu', description: 'Xóa nhăn, nâng cung chân mày.' },
    { name: 'Treo cung mày - cắt da chùng, da thừa', price: '20.000.000đ', duration: 'Tiểu phẫu', description: 'Loại bỏ hoàn toàn da sụp.' },
    { name: 'Cắt bỏ mỡ mí dưới', price: '8.000.000đ', duration: 'Tiểu phẫu', description: 'Xóa bọng mắt, giúp gương mặt trẻ trung.' },
    { name: 'Căng dây chằng mí dưới', price: '8.000.000đ', duration: 'Tiểu phẫu', description: 'Khắc phục tình trạng mí dưới lỏng lẻo.' },
    { name: 'Nhấn mí / Cắt 2 mí', price: 'Từ 10.000.000đ', duration: 'Tiểu phẫu', description: 'Tạo nếp mí sắc nét, cân đối.' },
    { name: 'Mở góc mắt trong/ngoài', price: '8.000.000đ', duration: 'Tiểu phẫu', description: 'Mở rộng nhãn quan, mắt to tròn.' },
    { name: 'Hạ lệ Trung Hoa / Hạ mắt xếch', price: '8.000.000đ', duration: 'Tiểu phẫu', description: 'Cân chỉnh đuôi mắt hiền hòa.' },
    { name: 'Sửa mí lật / Mí lỗi hỏng nặng', price: 'Từ 20.000.000đ', duration: 'Chuyên sâu', description: 'Ghép da, cấy mỡ phục hồi cấu trúc mí.' }
  ]
};

// Override Scalp Therapy
SERVICE_DETAILS_DATA['tri-lieu-da-dau'] = {
  ...SERVICE_DETAILS_DATA['tri-lieu-da-dau'],
  introTitle: 'Trị Liệu Da Đầu Chuyên Sâu - Giải Pháp Từ Italia',
  introDesc: [
    'Dịch vụ Trị liệu da đầu tại Quang Đăng kết hợp kỹ thuật massage bấm huyệt dưỡng sinh cùng các dòng sản phẩm đặc trị nhập khẩu trực tiếp từ Italia.',
    'Chúng tôi không chỉ làm sạch mà còn detox thải độc, phục hồi nền da đầu và nang tóc, giải quyết dứt điểm các tình trạng gàu, nấm, nhờn và rụng tóc.'
  ],
  pricing: [
    { name: 'Gội phục hồi da đầu', price: '400.000đ', duration: '60 phút', description: 'Dưỡng da đầu bằng sản phẩm chuyên biệt.' },
    { name: 'Detox thải độc da đầu', price: '800.000đ', duration: '90 phút', description: 'Giúp tóc chắc khỏe từ gốc.' },
    { name: 'Điều trị hói đầu, rụng tóc (Italia)', price: '1.000.000đ', duration: '150 phút', description: 'Liệu pháp đặc trị kích thích nang tóc.' },
    { name: 'Điều trị da đầu nhờn (Italia)', price: '1.000.000đ', duration: '150 phút', description: 'Cân bằng độ ẩm, kiềm dầu hiệu quả.' },
    { name: 'Điều trị da đầu nhạy cảm (Italia)', price: '1.000.000đ', duration: '150 phút', description: 'Làm dịu, phục hồi hàng rào bảo vệ da đầu.' },
    { name: 'Điều trị nấm da đầu (Italia)', price: '1.000.000đ', duration: '150 phút', description: 'Kháng khuẩn, loại bỏ nấm tận gốc.' }
  ]
};

// Override BAP (Bio Aesthetic Points)
SERVICE_DETAILS_DATA['bap'] = {
  ...SERVICE_DETAILS_DATA['bap'],
  introTitle: 'Kỹ Thuật BAP - Trẻ Hóa Tối Ưu Với Tinh Chất Cao Cấp',
  introDesc: [
    'Kỹ thuật tiêm BAP (Bio Aesthetic Points) là phương pháp trẻ hóa hiện đại nhất hiện nay, chỉ sử dụng 5-10 điểm tiêm để khuếch tán tinh chất toàn diện khuôn mặt.',
    'Tại Quang Đăng, chúng tôi sử dụng các dòng tinh chất hàng đầu thế giới như Profhilo và Jalupro Super Hydro để mang lại hiệu quả nâng cơ, xóa nhăn và căng bóng da tức thì.'
  ],
  pricing: [
    { name: 'Trẻ hóa vùng mặt Jalupro Super Hydro', price: '8.500.000đ', duration: '1 lần', description: 'Tái tạo cấu trúc, cấp ẩm tầng sâu.' },
    { name: 'Trẻ hóa vùng mặt Profhilo', price: '11.000.000đ', duration: '1 lần', description: 'Siêu phẩm nâng cơ, trẻ hóa đa tầng.' },
    { name: 'Trẻ hóa vùng cổ (Sản phẩm cao cấp)', price: '10.000.000đ', duration: '1 lần', description: 'Xóa nhăn, mịn màng vùng cổ.' },
    { name: 'Trẻ hóa bàn tay (Sản phẩm cao cấp)', price: '10.000.000đ', duration: '1 lần', description: 'Làm đầy, trẻ hóa da tay nhăn nheo.' }
  ]
};

// Override Injection Weight Loss
SERVICE_DETAILS_DATA['tiem-giam-beo'] = {
  ...SERVICE_DETAILS_DATA['tiem-giam-beo'],
  introTitle: 'Tiêm Hóa Lỏng Mỡ Thừa - Giải Pháp Thon Gọn Cấp Tốc',
  introDesc: [
    'Tiêm giảm béo tại Quang Đăng sử dụng các dòng tinh chất hóa lỏng mỡ nhập khẩu, tác động trúng đích vào các mô mỡ chuyên sâu ở bụng, eo, lưng và bắp tay.',
    'Quy trình diễn ra nhẹ nhàng, không phẫu thuật, mỡ thừa sau khi hóa lỏng sẽ được đào thải tự nhiên qua hệ bài tiết, mang lại vóc dáng thon gọn chỉ sau 1 liệu trình 3 buổi.'
  ],
  pricing: [
    { name: 'Tiêm vùng eo', price: '6.000.000đ', duration: '3 lần', description: 'Kiến tạo thắt eo thon gọn.' },
    { name: 'Tiêm vùng lưng', price: '6.000.000đ', duration: '3 lần', description: 'Loại bỏ mỡ thừa vùng lưng.' },
    { name: 'Tiêm mỡ bắp tay', price: '6.000.000đ', duration: '3 lần', description: 'Thon gọn đôi tay thanh mảnh.' },
    { name: 'Tiêm mỡ đùi', price: '9.000.000đ', duration: '3 lần', description: 'Giảm size đùi, da săn chắc.' },
    { name: 'Tiêm mỡ bụng', price: '12.000.000đ', duration: '3 lần', description: 'Xóa tan mỡ bụng, phẳng bụng cấp tốc.' }
  ]
};

// Override Thread Lift (Căng chỉ)
SERVICE_DETAILS_DATA['cang-chi-vung-mat'] = {
  ...SERVICE_DETAILS_DATA['cang-chi-vung-mat'],
  introTitle: 'Căng Chỉ Collagen & Nâng Cơ Công Nghệ Cao',
  introDesc: [
    'Căng chỉ collagen tại Quang Đăng là giải pháp "cải lão hoàn đồng" không phẫu thuật, sử dụng các dòng chỉ sinh học cao cấp (Mono, Cog, Hiko) để nâng đỡ các vùng da chảy xệ và kích thích tăng sinh collagen tự nhiên.',
    'Chỉ với 60 phút thực hiện, bạn sẽ thấy gương mặt trẻ lại 10 tuổi, các nếp nhăn rãnh cười biến mất, nọng cằm được xiết gọn, kiến tạo gương mặt V-line thanh tú.'
  ],
  pricing: [
    { name: 'Tạo má Baby bằng chỉ (Mono)', price: '10.000.000đ', duration: '60 phút', description: 'Làm đầy vùng má hóp tự nhiên.' },
    { name: 'Trẻ hóa tăng sinh Collagen Full Face (Mono)', price: '10.000.000đ', duration: '90 phút', description: 'Tái tạo độ đàn hồi toàn mặt.' },
    { name: 'Làm đầy rãnh cười / Xóa nhăn thái dương', price: '10.000.000đ/vùng', duration: '45 phút', description: 'Sử dụng chỉ Medi White (Hiko - misko).' },
    { name: 'Nâng cao trụ, sống mũi (Medi White)', price: '15.000.000đ', duration: '45 phút', description: 'Nâng mũi bằng chỉ Hiko - misko.' },
    { name: 'Nâng cơ mặt (Chỉ Cog)', price: '15.000.000đ', duration: '60 phút', description: 'Khắc phục da mặt chảy xệ cấp độ nặng.' },
    { name: 'Xiết nọng cằm, mặt V-line', price: '15.000.000đ', duration: '60 phút', description: 'Kết hợp chỉ Cog - Mono - Screw tối ưu.' }
  ]
};

// Override Botox
SERVICE_DETAILS_DATA['botox'] = {
  ...SERVICE_DETAILS_DATA['botox'],
  introTitle: 'Thẩm Mỹ Nội Khoa Botox – Xóa Nhăn & Thon Gọn Tức Thì',
  introDesc: [
    'Botox (Botulinum Toxin) tại Quang Đăng là giải pháp vàng trong thẩm mỹ nội khoa, giúp thư giãn các nhóm cơ gây nếp nhăn và thu gọn các vùng cơ phì đại (như cơ hàm, bắp tay).',
    'Chúng tôi cam kết sử dụng tinh chất Botulax chính hãng, được thực hiện trực tiếp bởi bác sĩ chuyên khoa với liều lượng chuẩn xác, đảm bảo mang lại vẻ đẹp tự nhiên, không gây đơ cứng gương mặt.'
  ],
  pricing: [
    { name: 'Thon gọn hàm V-line', price: '3.000.000đ', duration: 'Botulax 100', description: 'Kiến tạo gương mặt thanh tú, sắc nét.' },
    { name: 'Xóa nhăn vùng khóe mắt', price: '3.000.000đ', duration: 'Botulax 100', description: 'Xóa vết chân chim khi cười.' },
    { name: 'Xóa nhăn vùng trán và cau mày', price: '3.000.000đ', duration: 'Botulax 100', description: 'Làm mịn da vùng trán, gương mặt tươi tỉnh.' },
    { name: 'Điều trị cười hở lợi', price: '3.000.000đ', duration: 'Botulax 100', description: 'Cân chỉnh nụ cười duyên dáng.' },
    { name: 'Triệt tuyến mồ hôi nách', price: '6.000.000đ', duration: 'Botulax 200', description: 'Khô thoáng vùng nách suốt cả năm.' },
    { name: 'Triệt tuyến mồ hôi lòng bàn tay', price: '6.000.000đ', duration: 'Botulax 200', description: 'Giải pháp dứt điểm mồ hôi tay.' },
    { name: 'Triệt tuyến mồ hôi lòng bàn chân', price: '6.000.000đ', duration: 'Botulax 200', description: 'Tự tin diện mọi loại giày.' },
    { name: 'Giảm cơ bắp tay', price: '6.000.000đ', duration: 'Botulax 200', description: 'Thon gọn đôi tay mềm mại.' },
    { name: 'Giảm cơ bắp chân', price: '6.000.000đ', duration: 'Botulax 200', description: 'Kiến tạo đôi chân thon dài.' }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Chị Lan Anh',
    service: 'Điều Trị Da Liễu',
    content: 'Mình đã điều trị ở nhiều nơi không khỏi, nhưng đến Quang Đăng sau 3 buổi đã thấy nám mờ hẳn. Bác sĩ tư vấn rất có tâm.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 2,
    name: 'Nguyễn Thu Trang',
    service: 'Cấy HA Căng Bóng',
    content: 'Không gian sang trọng, nhân viên nhẹ nhàng. Mỗi lần stress mình đều qua đây để chăm sóc da và thư giãn.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: '1', name: 'Kiến Thức Da Liễu', slug: 'kien-thuc-da-lieu' },
  { id: '2', name: 'Công Nghệ Làm Đẹp', slug: 'cong-nghe-dep' },
  { id: '3', name: 'Mẹo Chăm Sóc Tại Nhà', slug: 'meo-cham-soc-tai-nha' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: '5-sai-lam-tri-mun',
    title: '5 Sai Lầm Kinh Điển Khi Trị Mụn Tại Nhà Khiến Da Mãi Không Đẹp',
    excerpt: 'Bạn đã tốn hàng triệu đồng mua mỹ phẩm nhưng mụn vẫn hoàn mụn? Có thể bạn đang mắc phải những sai lầm nghiêm trọng này.',
    coverImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1600',
    category: 'kien-thuc-da-lieu',
    author: {
      id: 'bs-nga',
      name: 'Bác sĩ Thanh Nga',
      role: 'Chuyên gia Da liễu',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'
    },
    publishedAt: '2023-10-15',
    readingTime: '5 phút đọc',
    relatedServices: ['cham-soc-da-chuyen-sau', 'dieu-tri-da-lieu'],
    tags: ['trị mụn', 'chăm sóc da', 'lưu ý'],
    content: `<p>Nội dung bài viết đang được cập nhật...</p>`
  }
];
