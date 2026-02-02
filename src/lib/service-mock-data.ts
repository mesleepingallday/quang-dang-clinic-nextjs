import { ServiceDetailComplete } from "@/types";

// ============================================================================
// MOCK DATA - 8 BEAUTY/AESTHETIC SERVICES
// Quang Dang Clinic - Service Detail Pages
// ============================================================================

export const mockServices: ServiceDetailComplete[] = [
  // ============================================================================
  // SERVICE 1: TRỊ MỤN CHUYÊN SÂU (Acne Treatment)
  // ============================================================================
  {
    id: "tri-mun-chuyen-sau",
    slug: "tri-mun-chuyen-sau",
    title: "Trị Mụn Chuyên Sâu",
    category: "Điều Trị Da Liễu",
    categorySlug: "treatment",
    heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=800&fit=crop",
    shortDescription: "Giải pháp điều trị mụn toàn diện với công nghệ hiện đại, giúp loại bỏ mụn tận gốc, ngăn ngừa tái phát và phục hồi làn da mịn màng.",
    longDescription: "Liệu trình trị mụn chuyên sâu tại Quang Dang Clinic kết hợp công nghệ tiên tiến và phác đồ điều trị cá nhân hóa, giúp loại bỏ các loại mụn cứng đầu như mụn bọc, mụn nang, mụn đầu đen. Với đội ngũ bác sĩ da liễu giàu kinh nghiệm, chúng tôi cam kết mang lại hiệu quả rõ rệt sau liệu trình đầu tiên.",
    introTitle: "Tại Sao Chọn Liệu Trình Trị Mụn Tại Quang Dang Clinic?",
    introParagraphs: [
      "Mụn không chỉ là vấn đề thẩm mỹ mà còn ảnh hưởng đến sự tự tin và chất lượng cuộc sống. Tại Quang Dang Clinic, chúng tôi hiểu rằng mỗi làn da là duy nhất, vì vậy mỗi liệu trình đều được thiết kế riêng biệt dựa trên tình trạng da cụ thể của bạn.",
      "Với hơn 10 năm kinh nghiệm trong lĩnh vực điều trị da, chúng tôi đã giúp hàng nghìn khách hàng lấy lại làn da khỏe mạnh, mịn màng. Công nghệ trị mụn tại phòng khám được cập nhật liên tục, đảm bảo hiệu quả tối ưu và an toàn tuyệt đối.",
      "Điều đặc biệt tại Quang Dang Clinic là chúng tôi không chỉ điều trị triệu chứng mà còn tập trung vào nguyên nhân gốc rễ gây mụn, giúp ngăn ngừa tái phát hiệu quả dài hạn."
    ],
    benefits: [
      {
        icon: "Sparkles",
        title: "Công Nghệ Hiện Đại",
        description: "Sử dụng thiết bị y khoa nhập khẩu chính hãng, đạt chuẩn FDA và CE"
      },
      {
        icon: "Shield",
        title: "An Toàn Tuyệt Đối",
        description: "Phác đồ điều trị được bác sĩ da liễu thiết kế riêng, không gây tổn thương da"
      },
      {
        icon: "Clock",
        title: "Hiệu Quả Nhanh Chóng",
        description: "Giảm 70% mụn sau 2-3 tuần, làn da sáng mịn rõ rệt sau liệu trình"
      },
      {
        icon: "Heart",
        title: "Ngăn Ngừa Tái Phát",
        description: "Điều trị tận gốc nguyên nhân gây mụn, duy trì kết quả lâu dài"
      },
      {
        icon: "UserCheck",
        title: "Bác Sĩ Chuyên Khoa",
        description: "Đội ngũ bác sĩ da liễu với hơn 10 năm kinh nghiệm điều trị mụn"
      },
      {
        icon: "Leaf",
        title: "Sản Phẩm Thiên Nhiên",
        description: "Sử dụng sản phẩm điều trị chiết xuất từ thảo dược, lành tính"
      }
    ],
    pricingTiers: [
      {
        id: "tri-mun-co-ban",
        name: "Gói Cơ Bản",
        price: 1200000,
        originalPrice: 1500000,
        currency: "VND",
        duration: "60 phút/lần",
        description: "Phù hợp mụn nhẹ, mụn đầu đen",
        features: [
          "4 buổi điều trị",
          "Soi da chuyên sâu",
          "Lấy nhân mụn chuyên nghiệp",
          "Đắp mặt nạ dịu da",
          "Tư vấn chăm sóc tại nhà"
        ],
        isPopular: false,
        isPremium: false
      },
      {
        id: "tri-mun-nang-cao",
        name: "Gói Nâng Cao",
        price: 2800000,
        originalPrice: 3500000,
        currency: "VND",
        duration: "90 phút/lần",
        description: "Phù hợp mụn trung bình, mụn viêm",
        features: [
          "8 buổi điều trị",
          "Soi da chuyên sâu",
          "Lấy nhân mụn + xử lý mụn viêm",
          "Chiếu ánh sáng sinh học",
          "Điện di dưỡng chất",
          "Bộ sản phẩm chăm sóc da tại nhà"
        ],
        isPopular: true,
        isPremium: false
      },
      {
        id: "tri-mun-chuyen-sau",
        name: "Gói Chuyên Sâu",
        price: 5500000,
        originalPrice: 7200000,
        currency: "VND",
        duration: "120 phút/lần",
        description: "Phù hợp mụn nặng, mụn nang, mụn bọc",
        features: [
          "12 buổi điều trị",
          "Soi da và theo dõi chuyên sâu",
          "Điều trị mụn nang chuyên khoa",
          "Laser CO2 fractional",
          "PRP trị sẹo mụn",
          "Chăm sóc da chuyên nghiệp",
          "Bộ sản phẩm cao cấp + tái khám miễn phí 3 tháng"
        ],
        isPopular: false,
        isPremium: true
      }
    ],
    pricingNote: "* Giá đã bao gồm VAT. Có thể thanh toán trả góp 0% lãi suất qua thẻ tín dụng."
,
    "processSteps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Tư Vấn & Soi Da",
        "description": "Bác sĩ sẽ thăm khám, soi da phân tích tình trạng mụn và xác định nguyên nhân gây mụn để đưa ra phác đồ điều trị phù hợp nhất.",
        "duration": "15-20 phút",
        "icon": "Search"
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Làm Sạch & Xông Hơi",
        "description": "Làm sạch da bằng sữa rửa mặt chuyên dụng, sau đó xông hơi mở lỗ chân lông giúp việc lấy nhân mụn dễ dàng hơn.",
        "duration": "15 phút",
        "icon": "Droplets"
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Lấy Nhân Mụn Chuyên Nghiệp",
        "description": "Kỹ thuật viên sử dụng dụng cụ y tế vô trùng để lấy sạch nhân mụn, giảm viêm và ngăn ngừa nhiễm trùng.",
        "duration": "20-30 phút",
        "icon": "Target"
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Chiếu Sáng Sinh Học",
        "description": "Sử dụng ánh sáng sinh học (PDT/LED) để tiêu diệt vi khuẩn P.acnes, giảm viêm và thúc đẩy quá trình tái tạo da.",
        "duration": "15-20 phút",
        "icon": "Sun"
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Dưỡng Da & Hướng Dẫn",
        "description": "Đắp mặt nạ dịu da, thoa serum dưỡng ẩm và hướng dẫn cách chăm sóc da tại nhà để duy trì kết quả điều trị.",
        "duration": "10-15 phút",
        "icon": "Heart"
      }
    ],
    beforeAfterGallery: [
      {
        id: "ba-1",
        beforeImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop",
        caption: "Mụn viêm và mụn bọc",
        treatmentDuration: "8 tuần điều trị",
        customerAge: 24,
        results: ["Giảm 90% mụn viêm", "Da sáng mịn hơn", "Lỗ chân lông se khít"]
      },
      {
        id: "ba-2",
        beforeImage: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=800&h=600&fit=crop",
        caption: "Mụn đầu đen và mụn cám",
        treatmentDuration: "4 tuần điều trị",
        customerAge: 22,
        results: ["Da sạch mụn đầu đen", "Bề mặt da mịn màng", "Giảm nhờn hiệu quả"]
      },
      {
        id: "ba-3",
        beforeImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop",
        caption: "Mụn nang, sẹo mụn",
        treatmentDuration: "12 tuần điều trị",
        customerAge: 28,
        results: ["Mụn nang giảm 85%", "Sẹo mụn mờ đi", "Da đều màu hơn"]
      }
    ],
    faqs: [
      {
        id: "faq-1",
        question: "Bao lâu thì thấy kết quả điều trị mụn?",
        answer: "Thông thường, sau 2-3 buổi điều trị đầu tiên, bạn sẽ thấy mụn giảm sưng viêm rõ rệt. Sau 4-6 tuần, mụn giảm khoảng 70-80%. Để đạt kết quả tối ưu và ngăn ngừa tái phát, cần hoàn thành cả liệu trình.",
        order: 1
      },
      {
        id: "faq-2",
        question: "Điều trị mụn có đau không?",
        answer: "Quá trình lấy nhân mụn có thể gây cảm giác hơi đau nhẹ, tương tự như châm kim. Tuy nhiên, chúng tôi sử dụng kỹ thuật nhẹ nhàng và có thể bôi tê tại chỗ nếu cần. Các bước khác như chiếu sáng, đắp mặt nạ hoàn toàn thoải mái.",
        order: 2
      },
      {
        id: "faq-3",
        question: "Sau điều trị cần kiêng gì?",
        answer: "Trong 24-48 giờ đầu: Không rửa mặt bằng nước máy, không trang điểm, không tiếp xúc trực tiếp với ánh nắng mặt trời. Trong 1 tuần: Tránh đồ cay nóng, hải sản, rượu bia. Uống nhiều nước và tuân thủ chế độ chăm sóc da tại nhà theo hướng dẫn.",
        order: 3
      },
      {
        id: "faq-4",
        question: "Mụn có tái phát sau điều trị không?",
        answer: "Liệu trình tại Quang Dang Clinic được thiết kế để điều trị tận gốc nguyên nhân gây mụn, giúp giảm tái phát đáng kể. Tuy nhiên, mụn còn phụ thuộc vào nội tiết, chế độ sinh hoạt và chăm sóc da tại nhà. Chúng tôi sẽ hướng dẫn bạn cách chăm sóc da để duy trì kết quả lâu dài.",
        order: 4
      },
      {
        id: "faq-5",
        question: "Có thể điều trị mụn trong khi đang mang thai không?",
        answer: "Một số phương pháp điều trị mụn không phù hợp cho phụ nữ mang thai. Chúng tôi có liệu trình đặc biệt dành cho mẹ bầu với các phương pháp lành tính như lấy nhân mụn thủ công, đắp mặt nạ thiên nhiên. Vui lòng thông báo tình trạng mang thai khi đặt lịch để được tư vấn phù hợp.",
        order: 5
      },
      {
        id: "faq-6",
        question: "Cần điều trị bao nhiêu buổi thì khỏi hẳn?",
        answer: "Số buổi điều trị phụ thuộc vào mức độ nghiêm trọng của mụn: Mụn nhẹ (4-6 buổi), Mụn trung bình (8-10 buổi), Mụn nặng (12-16 buổi). Bác sĩ sẽ đánh giá và tư vấn liệu trình cụ thể sau khi thăm khám.",
        order: 6
      }
    ],
    testimonials: [
      {
        id: "test-1",
        customerName: "Nguyễn Thị Hương",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        content: "Mình bị mụn nặng suốt 3 năm, đi nhiều nơi không khỏi. Đến Quang Dang Clinic được bác sĩ tư vấn rất tận tâm. Sau 10 buổi điều trị, da mình đã sạch mụn 90%, chỉ còn vài vết thâm nhẹ đang dần mờ đi. Cảm ơn bác sĩ và team rất nhiều!",
        serviceUsed: "Gói Chuyên Sâu",
        date: "2024-01-15",
        isVerified: true,
        age: 26,
        skinType: "Da dầu mụn",
        resultDuration: "10 buổi điều trị"
      },
      {
        id: "test-2",
        customerName: "Trần Minh Anh",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        content: "Mình nam giới nên ngại đi trị mụn lắm, nhưng da mụn nhiều quá phải đi. Ấn tượng đầu tiên là bác sĩ rất chuyên nghiệp, không ép mua gói đắt tiền mà tư vấn gói phù hợp tình trạng. Sau 6 buổi da đã đỡ hẳn, tự tin hơn hẳn.",
        serviceUsed: "Gói Nâng Cao",
        date: "2024-02-20",
        isVerified: true,
        age: 24,
        skinType: "Da hỗn hợp",
        resultDuration: "6 buổi điều trị"
      },
      {
        id: "test-3",
        customerName: "Lê Thị Thanh",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        content: "Con gái 16 tuổi bị mụn tuổi dậy thì. Bác sĩ ở đây rất nhẹ nhàng với con, giải thích tỉ mỹ cho cả mẹ và con hiểu. Sau 4 buổi da con đã sáng lên, mụn giảm hẳn. Giá cả cũng hợp lý, không phát sinh thêm chi phí gì.",
        serviceUsed: "Gói Cơ Bản",
        date: "2024-03-10",
        isVerified: true,
        age: 16,
        skinType: "Da nhạy cảm",
        resultDuration: "4 buổi điều trị"
      }
    ],
    relatedServices: [
      {
        id: "laser-tre-hoa-da",
        slug: "laser-tre-hoa-da",
        title: "Laser Trẻ Hóa Da",
        shortDescription: "Công nghệ laser giúp trẻ hóa làn da, giảm nếp nhăn và thâm nám",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
        priceFrom: 3500000,
        duration: "60-90 phút",
        category: "Công Nghệ Cao"
      },
      {
        id: "dieu-tri-nam",
        slug: "dieu-tri-nam-tan-nhang",
        title: "Điều Trị Nám/Tàn Nhang",
        shortDescription: "Giải pháp xóa mờ nám, tàn nhang hiệu quả với công nghệ cao",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
        priceFrom: 2500000,
        duration: "45-60 phút",
        category: "Điều Trị Da Liễu"
      },
      {
        id: "cham-soc-da-co-ban",
        slug: "cham-soc-da-co-ban",
        title: "Chăm Sóc Da Cơ Bản",
        shortDescription: "Liệu trình chăm sóc da chuyên sâu giúp da khỏe mạnh, rạng rỡ",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=400&fit=crop",
        priceFrom: 800000,
        duration: "60 phút",
        category: "Chăm Sóc Da"
      },
      {
        id: "giam-beo",
        slug: "giam-beo-cong-nghe-cao",
        title: "Giảm Béo Công Nghệ Cao",
        shortDescription: "Giảm mỡ thừa an toàn, không phẫu thuật với công nghệ hiện đại",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop",
        priceFrom: 4000000,
        duration: "60-90 phút",
        category: "Thẩm Mỹ Nội Khoa"
      }
    ],
    promotion: {
      id: "promo-1",
      discountPercent: 20,
      code: "ACNE20",
      title: "Ưu Đãi Trị Mụn Tháng Này",
      description: "Giảm ngay 20% cho tất cả các gói điều trị mụn. Áp dụng đến hết tháng.",
      validFrom: "2024-01-01",
      validUntil: "2024-12-31",
      termsConditions: [
        "Áp dụng cho khách hàng mới và cũ",
        "Không áp dụng đồng thời với các CTKM khác",
        "Vui lòng đặt lịch trước 24 giờ"
      ],
      isActive: true
    },
    seo: {
      metaTitle: "Trị Mụn Chuyên Sâu | Quang Dang Clinic - Hiệu Quả 90% Sau 8 Tuần",
      metaDescription: "Liệu trình trị mụn chuyên sâu với công nghệ hiện đại. Điều trị mụn bọc, mụn nang, mụn đầu đen hiệu quả. Bác sĩ da liễu 10+ năm kinh nghiệm. Đặt lịch tư vấn miễn phí!",
      keywords: ["trị mụn", "điều trị mụn", "mụn bọc", "mụn nang", "trị mụn chuyên sâu", "phòng khám da liễu", "trị mụn tphcm"],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Trị Mụn Chuyên Sâu - Quang Dang Clinic",
        "description": "Dịch vụ điều trị mụn chuyên sâu với công nghệ hiện đại",
        "medicalSpecialty": "Dermatology"
      }
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-03-15T00:00:00Z",
    publishedAt: "2024-01-01T00:00:00Z"
  },
  // ============================================================================
  // SERVICE 2: CĂNG CHỈ COLLAGEN (Thread Lifting)
  // ============================================================================
  {
    id: "cang-chi-collagen",
    slug: "cang-chi-collagen",
    title: "Căng Chỉ Collagen",
    category: "Thẩm Mỹ Nội Khoa",
    categorySlug: "medical-aesthetic",
    heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=800&fit=crop",
    shortDescription: "Công nghệ căng chỉ sinh học giúp nâng cơ, xóa nhăn và trẻ hóa khuôn mặt không phẫu thuật, hiệu quả ngay lập tức.",
    longDescription: "Căng chỉ collagen là phương pháp thẩm mỹ không phẫu thuật sử dụng chỉ sinh học PDO/PCL được cấy vào da, giúp nâng cơ, tái tạo collagen và làm săn chắc da. Kỹ thuật này mang lại hiệu quả trẻ hóa rõ rệt mà không cần nghỉ dưỡng dài.",
    introTitle: "Trẻ Hóa Toàn Diện Với Công Nghệ Căng Chỉ",
    introParagraphs: [
      "Theo thời gian, collagen và elastin trong da giảm dần dẫn đến da chảy xệ, nếp nhăn xuất hiện. Căng chỉ collagen là giải pháp thay thế phẫu thuật căng da mặt, mang lại hiệu quả tương đương nhưng an toàn và ít xâm lấn hơn.",
      "Tại Quang Dang Clinic, chúng tôi sử dụng chỉ PDO/PCL nhập khẩu từ Hàn Quốc và Mỹ, có độ an toàn cao, tương thích tốt với cơ thể. Chỉ sau 60 phút thực hiện, bạn sẽ thấy khuôn mặt được nâng lên rõ rệt, da săn chắc và tràn đầy sức sống.",
      "Hiệu quả của căng chỉ duy trì từ 1-2 năm tùy cơ địa, giúp bạn tự tin với vẻ ngoài trẻ trung hơn 5-10 tuổi."
    ],
    benefits: [
      {
        icon: "Sparkles",
        title: "Hiệu Quả Ngay Lập Tức",
        description: "Nâng cơ xóa nhăn ngay sau khi thực hiện, không cần chờ đợi"
      },
      {
        icon: "Shield",
        title: "Không Phẫu Thuật",
        description: "Kỹ thuật không xâm lấn, không để lại sẹo, an toàn tuyệt đối"
      },
      {
        icon: "Clock",
        title: "Thời Gian Nhanh",
        description: "Chỉ 45-60 phút thực hiện, không cần nghỉ dưỡng dài"
      },
      {
        icon: "Heart",
        title: "Kích Thích Collagen",
        description: "Tăng sinh collagen tự nhiên, da săn chắc theo thời gian"
      },
      {
        icon: "Award",
        title: "Chỉ Chính Hãng",
        description: "Sử dụng chỉ PDO/PCL nhập khẩu Hàn Quốc, Mỹ có chứng nhận FDA"
      },
      {
        icon: "UserCheck",
        title: "Bác Sĩ Giàu Kinh Nghiệm",
        description: "Bác sĩ thẩm mỹ được đào tạo chuyên sâu về kỹ thuật căng chỉ"
      }
    ],
    pricingTiers: [
      {
        id: "cang-chi-vung",
        name: "Theo Vùng",
        price: 5000000,
        originalPrice: 7000000,
        currency: "VND",
        duration: "45-60 phút",
        description: "Căng chỉ 1 vùng: má, trán, hay cằm",
        features: [
          "10-15 sợi chỉ PDO",
          "Gây tê tại chỗ",
          "Kháng sinh sau thực hiện",
          "Tái khám 1 tuần"
        ],
        isPopular: false,
        isPremium: false
      },
      {
        id: "cang-chi-toan-mat",
        name: "Toàn Mặt Cơ Bản",
        price: 12000000,
        originalPrice: 16000000,
        currency: "VND",
        duration: "60-90 phút",
        description: "Căng chỉ toàn bộ khuôn mặt",
        features: [
          "30-40 sợi chỉ PDO/PCL",
          "Gây tê + gây mê nhẹ",
          "Kháng sinh + chăm sóc sau",
          "Tái khám 1-2-4 tuần",
          "Bảo hành 6 tháng"
        ],
        isPopular: true,
        isPremium: false
      },
      {
        id: "cang-chi-cao-cap",
        name: "Gói Cao Cấp",
        price: 25000000,
        originalPrice: 35000000,
        currency: "VND",
        duration: "90-120 phút",
        description: "Căng chỉ kết hợp tiêm filler, botox",
        features: [
          "50-60 sợi chỉ PCL cao cấp",
          "Tiêm filler kết hợp",
          "Gây mê an toàn",
          "Chăm sóc sau 3 tháng",
          "Bảo hành 12 tháng",
          "Tái khám định kỳ"
        ],
        isPopular: false,
        isPremium: true
      }
    ],
    pricingNote: "* Giá có thể thay đổi tùy số lượng chỉ thực tế. Bác sĩ sẽ tư vấn cụ thể sau thăm khám.",
    processSteps: [
      {
        id: "chi-step-1",
        stepNumber: 1,
        title: "Tư Vấn & Thiết Kế",
        description: "Bác sĩ thăm khám, đánh giá tình trạng da và thiết kế đường căng chỉ phù hợp với cấu trúc gương mặt.",
        duration: "20 phút",
        icon: "Search"
      },
      {
        id: "chi-step-2",
        stepNumber: 2,
        title: "Sát Khuẩn & Gây Tê",
        description: "Vệ sinh da mặt kỹ lưỡng, bôi/gây tê để đảm bảo quá trình thực hiện thoải mái, không đau.",
        duration: "15-20 phút",
        icon: "Shield"
      },
      {
        id: "chi-step-3",
        stepNumber: 3,
        title: "Cấy Chỉ Collagen",
        description: "Bác sĩ sử dụng kim chuyên dụng để đưa chỉ vào tầng sâu của da, tạo khung nâng đỡ và kích thích collagen.",
        duration: "30-45 phút",
        icon: "Target"
      },
      {
        id: "chi-step-4",
        stepNumber: 4,
        title: "Điều Chỉnh & Hoàn Thiện",
        description: "Điều chỉnh độ căng của chỉ, đảm bảo khuôn mặt cân đối tự nhiên, không bị cứng hay biểu cảm.",
        duration: "10-15 phút",
        icon: "Sparkles"
      },
      {
        id: "chi-step-5",
        stepNumber: 5,
        title: "Chăm Sóc Sau",
        description: "Thoa thuốc kháng sinh, hướng dẫn chăm sóc tại nhà và đặt lịch tái khám để theo dõi kết quả.",
        duration: "10 phút",
        icon: "Heart"
      }
    ],
    beforeAfterGallery: [
      {
        id: "chi-ba-1",
        beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
        caption: "Nâng cơ má, xóa nhăn khóe miệng",
        treatmentDuration: "1 lần căng chỉ",
        customerAge: 45,
        results: ["Da căng mịn", "Gương mặt trẻ trung hơn", "Không còn chảy xệ"]
      },
      {
        id: "chi-ba-2",
        beforeImage: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=800&h=600&fit=crop",
        caption: "Nâng cung chân mày, xóa nhăn trán",
        treatmentDuration: "1 lần căng chỉ",
        customerAge: 38,
        results: ["Chân mày cao tự nhiên", "Trán căng mịn", "Mắt to trẻ trung"]
      }
    ],
    faqs: [
      {
        id: "chi-faq-1",
        question: "Căng chỉ collagen có đau không?",
        answer: "Quá trình thực hiện có gây tê nên bạn sẽ chỉ cảm thấy hơi tức nhẹ. Sau khi hết tê, có thể hơi đau nhẹ 1-2 ngày, có thể uống thuốc giảm đau. Đau nhiều nhất là 24-48 giờ đầu, sau đó giảm dần.",
        order: 1
      },
      {
        id: "chi-faq-2",
        question: "Hiệu quả duy trì được bao lâu?",
        answer: "Tùy loại chỉ: Chỉ PDO duy trì 6-12 tháng, chỉ PCL duy trì 1-2 năm. Ngoài ra còn phụ thuộc vào chế độ chăm sóc da, độ tuổi và cơ địa của từng người. Sau khi chỉ tan, collagen tự nhiên vẫn duy trì 6-12 tháng.",
        order: 2
      },
      {
        id: "chi-faq-3",
        question: "Có phải kiêng khem lâu không?",
        answer: "Cần kiêng 2 tuần đầu: Không nhai kẹo cao su, không ăn đồ cứng/dai, hạn chế nói nhiều, cười lớn. Không nằm sấp, massage mặt, tập thể dục mạnh. Tránh nhiễm trùng, uống thuốc kháng sinh đầy đủ.",
        order: 3
      },
      {
        id: "chi-faq-4",
        question: "Sau căng chỉ mặt có bị cứng không?",
        answer: "Nếu thực hiện đúng kỹ thuật bởi bác sĩ có tay nghề, mặt sẽ tự nhiên, không bị cứng hay biểu cảm. Tại Quang Dang Clinic, bác sĩ chú trọng đến sự cân đối và tự nhiên, tránh căng quá mức gây mất biểu cảm.",
        order: 4
      },
      {
        id: "chi-faq-5",
        question: "Tuổi nào nên căng chỉ?",
        answer: "Thường từ 30-55 tuổi là độ tuổi phù hợp nhất. Tuy nhiên, tùy tình trạng da, có người 28 tuổi đã chảy xệ nhiều cũng nên làm. Bác sĩ sẽ tư vấn cụ thể sau khi thăm khám tình trạng thực tế.",
        order: 5
      }
    ],
    testimonials: [
      {
        id: "chi-test-1",
        customerName: "Phạm Thị Lan",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        content: "Năm nay 47 tuổi, da bắt đầu chảy xệ nhiều. Làm căng chỉ xong trẻ ra 10 tuổi! Bác sĩ làm rất nhẹ nhàng, mặt tự nhiên không bị căng cứng. Ai cũng hỏi đi đâu về mà trẻ thế!",
        serviceUsed: "Gói Cao Cấp",
        date: "2024-02-10",
        isVerified: true,
        age: 47,
        skinType: "Da lão hóa",
        resultDuration: "1 lần"
      },
      {
        id: "chi-test-2",
        customerName: "Hoàng Văn Nam",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        content: "Nam giới cũng nên làm đẹp! Mình làm căng chỉ cằm và má, khuôn mặt săn chắc hơn rất nhiều, trông nam tính và trẻ trung. Không ai biết mình làm gì, chỉ thấy trông fresh hơn.",
        serviceUsed: "Theo Vùng",
        date: "2024-03-05",
        isVerified: true,
        age: 42,
        skinType: "Da chảy xệ",
        resultDuration: "1 lần"
      }
    ],
    relatedServices: [
      {
        id: "tiem-filler",
        slug: "tiem-filler-tham-my",
        title: "Tiêm Filler Thẩm Mỹ",
        shortDescription: "Tạo hình khuôn mặt hoàn hảo với tiêm filler chuyên nghiệp",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
        priceFrom: 3000000,
        duration: "30-45 phút",
        category: "Thẩm Mỹ Nội Khoa"
      },
      {
        id: "laser-tre-hoa-da",
        slug: "laser-tre-hoa-da",
        title: "Laser Trẻ Hóa Da",
        shortDescription: "Công nghệ laser giúp trẻ hóa làn da, giảm nếp nhăn",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
        priceFrom: 3500000,
        duration: "60-90 phút",
        category: "Công Nghệ Cao"
      }
    ],
    promotion: {
      id: "promo-2",
      discountPercent: 25,
      code: "THREAD25",
      title: "Căng Chỉ Trẻ Hóa - Giảm 25%",
      description: "Ưu đãi đặc biệt cho gói căng chỉ toàn mặt. Trẻ hơn 10 tuổi ngay lập tức!",
      validFrom: "2024-01-01",
      validUntil: "2024-12-31",
      termsConditions: [
        "Áp dụng cho gói toàn mặt và cao cấp",
        "Đặt lịch trước 48 giờ",
        "Không áp dụng với các CTKM khác"
      ],
      isActive: true
    },
    seo: {
      metaTitle: "Căng Chỉ Collagen | Nâng Cơ Trẻ Hóa Không Phẫu Thuật - Quang Dang Clinic",
      metaDescription: "Căng chỉ collagen chuẩn Hàn Quốc, trẻ hóa khuôn mặt 5-10 tuổi không phẫu thuật. Hiệu quả ngay lập tức, duy trì 1-2 năm. Bác sĩ thẩm mỹ 15+ năm kinh nghiệm.",
      keywords: ["căng chỉ collagen", "nâng cơ mặt", "trẻ hóa da", "căng chỉ không phẫu thuật", "xóa nhăn hiệu quả"],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Căng Chỉ Collagen - Quang Dang Clinic",
        "description": "Dịch vụ căng chỉ collagen trẻ hóa khuôn mặt",
        "medicalSpecialty": "Medical Aesthetics"
      }
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-03-15T00:00:00Z",
    publishedAt: "2024-01-01T00:00:00Z"
  },
  // ============================================================================
  // SERVICE 3: LASER TRẺ HÓA DA (Laser Rejuvenation)
  // ============================================================================
  {
    id: "laser-tre-hoa-da",
    slug: "laser-tre-hoa-da",
    title: "Laser Trẻ Hóa Da",
    category: "Công Nghệ Cao",
    categorySlug: "high-tech",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop",
    shortDescription: "Công nghệ laser tiên tiến giúp tái tạo da, xóa nám, tàn nhang và trẻ hóa làn da từ sâu bên trong.",
    longDescription: "Laser trẻ hóa da là công nghệ thẩm mỹ hiện đại sử dụng các bước sóng laser để kích thích tái tạo collagen, loại bỏ sắc tố melanin gây nám và tàn nhang, giúp da trở nên sáng mịn, đều màu và trẻ trung hơn.",
    introTitle: "Công Nghệ Laser Trẻ Hóa Thế Hệ Mới",
    introParagraphs: [
      "Laser không chỉ là công nghệ điều trị nám, mà còn là giải pháp trẻ hóa toàn diện. Bằng cách tạo ra các vi tổn thương có kiểm soát, laser kích thích cơ chế tự làm lành của da, tăng sinh collagen và elastin mới.",
      "Tại Quang Dang Clinic, chúng tôi đầu tư máy laser Picosure, Fractional CO2 và IPL thế hệ mới nhất 2024. Các thiết bị này đã được FDA và CE chứng nhận an toàn và hiệu quả.",
      "Điểm đặc biệt của công nghệ laser tại phòng khám là chúng tôi kết hợp nhiều loại laser khác nhau trong một liệu trình, tối ưu hóa hiệu quả cho từng vấn đề da cụ thể."
    ],
    benefits: [
      {
        icon: "Zap",
        title: "Hiệu Quả Vượt Trội",
        description: "Xóa 80-90% nám, tàn nhang sau liệu trình. Da sáng mịn rõ rệt"
      },
      {
        icon: "Shield",
        title: "An Toàn Chứng Nhận",
        description: "Máy laser FDA, CE. Không gây tổn thương da, không bỏng rát"
      },
      {
        icon: "Clock",
        title: "Thời Gian Ngắn",
        description: "Mỗi buổi chỉ 30-60 phút. Không cần nghỉ dưỡng, đi làm ngay"
      },
      {
        icon: "Sparkles",
        title: "Trẻ Hóa Toàn Diện",
        description: "Giảm nếp nhăn, se khít lỗ chân lông, tăng độ đàn hồi da"
      },
      {
        icon: "Target",
        title: "Điều Trị Chính Xác",
        description: "Laser tác động chính xác vào sắc tố, không ảnh hưởng vùng da lành"
      },
      {
        icon: "Leaf",
        title: "Kết Quả Lâu Dài",
        description: "Duy trì kết quả 2-3 năm với chế độ chăm sóc phù hợp"
      }
    ],
    pricingTiers: [
      {
        id: "laser-nam-don",
        name: "Trị Nám Đơn",
        price: 2500000,
        originalPrice: 3500000,
        currency: "VND",
        duration: "30-45 phút",
        description: "Điều trị nám mảng, tàn nhang nhẹ",
        features: [
          "Laser IPL/IPL Pro",
          "1-2 vùng điều trị",
          "Chăm sóc sau laser",
          "Tái khám 2 tuần"
        ],
        isPopular: false,
        isPremium: false
      },
      {
        id: "laser-tre-hoa",
        name: "Trẻ Hóa Laser",
        price: 4500000,
        originalPrice: 6000000,
        currency: "VND",
        duration: "60 phút",
        description: "Trẻ hóa toàn mặt, giảm nếp nhăn",
        features: [
          "Laser Fractional CO2",
          "Toàn mặt + cổ",
          "Chăm sóc chuyên sâu sau laser",
          "Tái khám 1-2-4 tuần",
          "Serum phục hồi"
        ],
        isPopular: true,
        isPremium: false
      },
      {
        id: "laser-tong-hop",
        name: "Gói Tổng Hợp",
        price: 8500000,
        originalPrice: 12000000,
        currency: "VND",
        duration: "90 phút",
        description: "Kết hợp nhiều loại laser cho hiệu quả tối đa",
        features: [
          "Picosure + Fractional CO2",
          "Trị nám + Trẻ hóa + Se lỗ chân lông",
          "Chăm sóc VIP sau laser",
          "Tái khám định kỳ 3 tháng",
          "Bộ sản phẩm phục hồi cao cấp"
        ],
        isPopular: false,
        isPremium: true
      }
    ],
    pricingNote: "* Số buổi laser phụ thuộc vào mức độ nám. Thông thường cần 3-6 buổi.",
    processSteps: [
      {
        id: "laser-step-1",
        stepNumber: 1,
        title: "Soi Da & Tư Vấn",
        description: "Phân tích tình trạng da bằng thiết bị soi da chuyên dụng, xác định loại nám và mức độ lão hóa để chọn loại laser phù hợp.",
        duration: "15 phút",
        icon: "Search"
      },
      {
        id: "laser-step-2",
        stepNumber: 2,
        title: "Làm Sạch & Bôi Tê",
        description: "Rửa mặt sạch sâu, bôi kem tê 20-30 phút để giảm cảm giác nóng rát trong quá trình laser.",
        duration: "30 phút",
        icon: "Shield"
      },
      {
        id: "laser-step-3",
        stepNumber: 3,
        title: "Chiếu Laser",
        description: "Bác sĩ điều chỉnh bước sóng và cường độ laser phù hợp, chiếu laser từng vùng da điều trị.",
        duration: "20-40 phút",
        icon: "Zap"
      },
      {
        id: "laser-step-4",
        stepNumber: 4,
        title: "Dưỡng Da & Bảo Vệ",
        description: "Đắp mặt nạ dịu da, thoa serum phục hồi và kem chống nắng chuyên dụng sau laser.",
        duration: "15 phút",
        icon: "Heart"
      }
    ],
    beforeAfterGallery: [
      {
        id: "laser-ba-1",
        beforeImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop",
        caption: "Trị nám mảng, tàn nhang",
        treatmentDuration: "4 buổi laser",
        customerAge: 35,
        results: ["Nám giảm 85%", "Da sáng đều màu", "Lỗ chân lông nhỏ hơn"]
      },
      {
        id: "laser-ba-2",
        beforeImage: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=800&h=600&fit=crop",
        caption: "Trẻ hóa da, xóa nếp nhăn",
        treatmentDuration: "3 buổi laser",
        customerAge: 48,
        results: ["Nếp nhăn giảm 70%", "Da săn chắc", "Tươi trẻ hơn"]
      }
    ],
    faqs: [
      {
        id: "laser-faq-1",
        question: "Laser có đau không?",
        answer: "Có bôi tê trước nên chỉ cảm thấy hơi nóng rát nhẹ, tương tự như bị giật tĩnh điện. Với laser Fractional CO2, có thể đau hơn một chút nhưng vẫn chịu được.",
        order: 1
      },
      {
        id: "laser-faq-2",
        question: "Sau laser có cần nghỉ dưỡng không?",
        answer: "Với laser nhẹ (IPL): Không cần nghỉ, đi làm ngay. Với laser Fractional: Cần 2-3 ngày nghỉ vì da đỏ và sưng nhẹ. Da bong vảy nhẹ sau 3-5 ngày, makeup được sau 1 tuần.",
        order: 2
      },
      {
        id: "laser-faq-3",
        question: "Cần bao nhiêu buổi laser để hết nám?",
        answer: "Tùy mức độ: Nám nhẹ (3-4 buổi), Nám trung bình (5-7 buổi), Nám nặng (8-10 buổi). Mỗi buổi cách nhau 2-4 tuần. Nám sâu/hỗn hợp cần kết hợp nhiều loại laser.",
        order: 3
      },
      {
        id: "laser-faq-4",
        question: "Nám có tái phát sau laser không?",
        answer: "Laser loại bỏ nám hiện tại nhưng không ngăn ngừa nám mới hình thành. Cần chăm sóc da đúng cách, dùng kem chống nắng và các sản phẩm dưỡng trắng để duy trì kết quả.",
        order: 4
      }
    ],
    testimonials: [
      {
        id: "laser-test-1",
        customerName: "Trần Thị Mai",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        content: "Nám sau sinh khiến mình mất tự tin. Sau 5 buổi laser, nám mờ đi 90%, da sáng hẳn. Bác sĩ tư vấn rất chi tiết, kỹ thuật viên nhẹ nhàng. Worth every penny!",
        serviceUsed: "Gói Tổng Hợp",
        date: "2024-02-15",
        isVerified: true,
        age: 32,
        skinType: "Da nám sau sinh",
        resultDuration: "5 buổi"
      },
      {
        id: "laser-test-2",
        customerName: "Nguyễn Văn Hùng",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        content: "Nam giới cũng cần đẹp! Mình làm laser trẻ hóa da, kết quả rất tốt. Da đều màu hơn, lỗ chân lông nhỏ lại. Bạn bè đều hỏi bí quyết.",
        serviceUsed: "Trẻ Hóa Laser",
        date: "2024-03-12",
        isVerified: true,
        age: 38,
        skinType: "Da lỗ chân lông to",
        resultDuration: "3 buổi"
      }
    ],
    relatedServices: [
      {
        id: "tri-mun",
        slug: "tri-mun-chuyen-sau",
        title: "Trị Mụn Chuyên Sâu",
        shortDescription: "Điều trị mụn bọc, mụn nang hiệu quả với công nghệ cao",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
        priceFrom: 1200000,
        duration: "60-120 phút",
        category: "Điều Trị Da Liễu"
      },
      {
        id: "dieu-tri-nam",
        slug: "dieu-tri-nam-tan-nhang",
        title: "Điều Trị Nám Chuyên Sâu",
        shortDescription: "Liệu trình đặc trị nám, tàn nhang hiệu quả cao",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
        priceFrom: 2500000,
        duration: "45-60 phút",
        category: "Điều Trị Da Liễu"
      }
    ],
    promotion: {
      id: "promo-3",
      discountPercent: 30,
      code: "LASER30",
      title: "Laser Trẻ Hóa - Giảm 30%",
      description: "Ưu đãi đặc biệt cho liệu trình laser trẻ hóa. Da sáng mịn, xóa nám hiệu quả!",
      validFrom: "2024-01-01",
      validUntil: "2024-12-31",
      termsConditions: [
        "Áp dụng cho gói trẻ hóa và tổng hợp",
        "Đặt lịch trước 48 giờ"
      ],
      isActive: true
    },
    seo: {
      metaTitle: "Laser Trẻ Hóa Da | Xóa Nám, Tàn Nhang, Trẻ Hóa - Quang Dang Clinic",
      metaDescription: "Công nghệ laser Picosure, Fractional CO2 trẻ hóa da, xóa nám tàn nhang hiệu quả 90%. Máy nhập khẩu chính hãng, bác sĩ chuyên khoa laser.",
      keywords: ["laser trẻ hóa da", "trị nám laser", "laser xóa tàn nhang", "fractional co2", "picosure laser"],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Laser Trẻ Hóa Da - Quang Dang Clinic",
        "description": "Dịch vụ laser trẻ hóa da và điều trị nám",
        "medicalSpecialty": "Laser Therapy"
      }
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-03-15T00:00:00Z",
    publishedAt: "2024-01-01T00:00:00Z"
  },
  // ============================================================================
  // SERVICE 4: CHĂM SÓC DA CƠ BẢN (Basic Facial)
  // ============================================================================
  {
    id: "cham-soc-da-co-ban",
    slug: "cham-soc-da-co-ban",
    title: "Chăm Sóc Da Cơ Bản",
    category: "Chăm Sóc Da",
    categorySlug: "skin-care",
    heroImage: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200&h=800&fit=crop",
    shortDescription: "Liệu trình chăm sóc da chuyên nghiệp giúp làm sạch sâu, cấp ẩm và nuôi dưỡng làn da khỏe mạnh, rạng rỡ.",
    longDescription: "Chăm sóc da cơ bản tại Quang Dang Clinic là liệu trình làm sạch và dưỡng da chuyên sâu, phù hợp cho mọi loại da. Với kỹ thuật massage chuyên nghiệp và sản phẩm dưỡng da cao cấp, da của bạn sẽ được thư giãn, tái tạo và tràn đầy sức sống.",
    introTitle: "Nền Tảng Cho Làn Da Khỏe Đẹp",
    introParagraphs: [
      "Da khỏe là nền tảng của vẻ đẹp. Dù bạn sử dụng những sản phẩm đắt tiền đến đâu, nếu da không được làm sạch đúng cách, lỗ chân lông bị tắc nghẽn, thì hiệu quả sẽ không như mong đợi.",
      "Liệu trình chăm sóc da cơ bản tại Quang Dang Clinic không chỉ đơn thuần là làm sạch. Đó là quá trình khoa học bao gồm: làm sạch sâu, tẩy tế bào chết, hút bã nhờn, massage thư giãn và cấp ẩm chuyên sâu.",
      "Chúng tôi sử dụng sản phẩm đến từ các thương hiệu uy tín như SkinCeuticals, Obagi, và Image Skincare, phù hợp với từng loại da và tình trạng da cụ thể của bạn."
    ],
    benefits: [
      {
        icon: "Sparkles",
        title: "Làm Sạch Sâu",
        description: "Loại bỏ bụi bẩn, bã nhờn và tế bào chết sâu trong lỗ chân lông"
      },
      {
        icon: "Droplets",
        title: "Cấp Ẩm Chuyên Sâu",
        description: "Hydrate da với các dưỡng chất thiết yếu, da mềm mại tức thì"
      },
      {
        icon: "Heart",
        title: "Thư Giãn Tuyệt Đối",
        description: "Kỹ thuật massage chuyên nghiệp giúp giảm stress, thư giãn cơ mặt"
      },
      {
        icon: "Shield",
        title: "Phù Hợp Mọi Da",
        description: "Liệu trình được điều chỉnh theo loại da: dầu, khô, hỗn hợp, nhạy cảm"
      },
      {
        icon: "Clock",
        title: "Thời Gian Linh Hoạt",
        description: "Chỉ 60-90 phút, phù hợp cho buổi trưa hoặc cuối tuần"
      },
      {
        icon: "Leaf",
        title: "Sản Phẩm Cao Cấp",
        description: "Sử dụng sản phẩm từ SkinCeuticals, Obagi, Image Skincare chính hãng"
      }
    ],
    pricingTiers: [
      {
        id: "cham-soc-co-ban",
        name: "Gói Cơ Bản",
        price: 800000,
        originalPrice: 1000000,
        currency: "VND",
        duration: "60 phút",
        description: "Làm sạch, cấp ẩm cơ bản",
        features: [
          "Làm sạch sâu 2 bước",
          "Tẩy tế bào chết nhẹ",
          "Hút bã nhờn",
          "Massage mặt",
          "Đắp mặt nạ cấp ẩm",
          "Thoa kem dưỡng"
        ],
        isPopular: false,
        isPremium: false
      },
      {
        id: "cham-soc-nang-cao",
        name: "Gói Nâng Cao",
        price: 1500000,
        originalPrice: 1900000,
        currency: "VND",
        duration: "90 phút",
        description: "Chăm sóc toàn diện với thiết bị chuyên dụng",
        features: [
          "Làm sạch chuyên sâu",
          "Tẩy tế bào chết enzyme",
          "Hút chì thải độc",
          "Điện di dưỡng chất",
          "Massage bấm huyệt",
          "Mặt nạ collagen"
        ],
        isPopular: true,
        isPremium: false
      },
      {
        id: "cham-soc-cao-cap",
        name: "Gói Cao Cấp",
        price: 2500000,
        originalPrice: 3200000,
        currency: "VND",
        duration: "120 phút",
        description: "Trải nghiệm spa sang trọng toàn diện",
        features: [
          "Làm sạch Obagi Medical",
          "Peel nhẹ tái tạo da",
          "Hydradermabrasion",
          "Điện di vitamin C",
          "Massage nóng lạnh",
          "Mặt nạ vàng 24K",
          "Chăm sóc vùng mắt"
        ],
        isPopular: false,
        isPremium: true
      }
    ],
    pricingNote: "* Có gói 10 buổi giảm thêm 20%. Tặng 1 buổi cho gói 10.",
    processSteps: [
      {
        id: "cs-step-1",
        stepNumber: 1,
        title: "Tư Vấn & Phân Tích Da",
        "description": "Chuyên viên phân tích loại da và tình trạng để chọn sản phẩm phù hợp nhất.",
        "duration": "10 phút",
        "icon": "Search"
      },
      {
        "id": "cs-step-2",
        "stepNumber": 2,
        "title": "Làm Sạch Sâu",
        "description": "Tẩy trang và rửa mặt 2 lần với sữa rửa mặt chuyên dụng, loại bỏ bụi bẩn và bã nhờn.",
        "duration": "10-15 phút",
        "icon": "Droplets"
      },
      {
        "id": "cs-step-3",
        "stepNumber": 3,
        "title": "Tẩy Tế Bào Chết",
        "description": "Loại bỏ tế bào chết bằng enzyme hoặc scrub nhẹ, giúp da sáng mịn và hấp thu dưỡng chất tốt hơn.",
        "duration": "10 phút",
        "icon": "Sparkles"
      },
      {
        "id": "cs-step-4",
        "stepNumber": 4,
        "title": "Xông Hơi & Hút Bã Nhờn",
        "description": "Xông hơi mở lỗ chân lông, sau đó hút bã nhờn và mụn đầu đen (nếu cần).",
        "duration": "15-20 phút",
        "icon": "Wind"
      },
      {
        "id": "cs-step-5",
        "stepNumber": 5,
        "title": "Massage Thư Giãn",
        "description": "Massage mặt với kem dưỡng theo kỹ thuật chuyên nghiệp, giúp thư giãn cơ và tuần hoàn máu.",
        "duration": "15-20 phút",
        "icon": "Heart"
      },
      {
        "id": "cs-step-6",
        "stepNumber": 6,
        "title": "Đắp Mặt Nạ & Dưỡng Da",
        "description": "Đắp mặt nạ phù hợp với loại da, thoa serum và kem dưỡng khóa ẩm.",
        "duration": "15-20 phút",
        "icon": "Shield"
      }
    ],
    beforeAfterGallery: [
      {
        "id": "cs-ba-1",
        "beforeImage": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop",
        "afterImage": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop",
        "caption": "Da khô, thiếu sức sống",
        "treatmentDuration": "1 buổi chăm sóc",
        "customerAge": 28,
        "results": ["Da căng mọng", "Sáng hơn 1-2 tone", "Mềm mại tức thì"]
      }
    ],
    faqs: [
      {
        "id": "cs-faq-1",
        "question": "Nên chăm sóc da bao lâu một lần?",
        "answer": "Da thường: 2-4 tuần/lần. Da dầu/mụn: 1-2 tuần/lần. Da khô: 3-4 tuần/lần. Da nhạy cảm: 4-6 tuần/lần. Làm đều đặn sẽ duy trì da khỏe đẹp lâu dài.",
        "order": 1
      },
      {
        "id": "cs-faq-2",
        "question": "Chăm sóc da có làm mụn nổi lên không?",
        "answer": "Hiện tượng này có thể xảy ra nếu da đang bị tắc nghẽn sâu. Sau khi làm sạch, mụn ẩn có thể đẩy lên. Đây là phản ứng bình thường, da sẽ sáng mịn sau vài ngày.",
        "order": 2
      },
      {
        "id": "cs-faq-3",
        "question": "Sau chăm sóc da có makeup được không?",
        "answer": "Nên để da nghỉ ngơi 4-6 giờ sau khi chăm sóc. Nếu cần makeup, hãy dùng sản phẩm không dầu và nhẹ nhàng. Tốt nhất là để qua đêm để dưỡng chất thẩm thấu hoàn toàn.",
        "order": 3
      }
    ],
    testimonials: [
      {
        "id": "cs-test-1",
        "customerName": "Lê Thị Hoa",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        "rating": 5,
        "content": "Làm xong da mềm như em bé! Massage thư giãn quá đã, suýt ngủ quên luôn. Chắc chắn sẽ đăng ký gói 10 buổi.",
        "serviceUsed": "Gói Cao Cấp",
        "date": "2024-03-01",
        "isVerified": true,
        "age": 30,
        "skinType": "Da hỗn hợp",
        "resultDuration": "1 buổi"
      }
    ],
    relatedServices: [
      {
        "id": "tri-mun",
        "slug": "tri-mun-chuyen-sau",
        "title": "Trị Mụn Chuyên Sâu",
        "shortDescription": "Điều trị mụn chuyên sâu cho da mụn lâu năm",
        "image": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
        "priceFrom": 1200000,
        "duration": "60-120 phút",
        "category": "Điều Trị Da Liễu"
      },
      {
        "id": "laser",
        "slug": "laser-tre-hoa-da",
        "title": "Laser Trẻ Hóa Da",
        "shortDescription": "Công nghệ laser giúp da trẻ hóa rõ rệt",
        "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
        "priceFrom": 3500000,
        "duration": "60-90 phút",
        "category": "Công Nghệ Cao"
      }
    ],
    promotion: {
      "id": "promo-4",
      "discountPercent": 15,
      "code": "FACIAL15",
      "title": "Chăm Sóc Da - Giảm 15%",
      "description": "Ưu đãi cho gói chăm sóc da nâng cao và cao cấp. Thư giãn và làm đẹp ngay hôm nay!",
      "validFrom": "2024-01-01",
      "validUntil": "2024-12-31",
      "termsConditions": [
        "Áp dụng gói nâng cao và cao cấp",
        "Đặt lịch trước 24 giờ"
      ],
      "isActive": true
    },
    seo: {
      "metaTitle": "Chăm Sóc Da Cơ Bản | Spa Chuyên Nghiệp - Quang Dang Clinic",
      "metaDescription": "Liệu trình chăm sóc da chuyên nghiệp với sản phẩm SkinCeuticals, Obagi. Làm sạch sâu, cấp ẩm, massage thư giãn. Phù hợp mọi loại da.",
      "keywords": ["chăm sóc da", "facial spa", "làm sạch da chuyên sâu", "cấp ẩm da", "massage mặt"],
      "structuredData": {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Chăm Sóc Da Cơ Bản - Quang Dang Clinic",
        "description": "Dịch vụ chăm sóc da chuyên nghiệp",
        "medicalSpecialty": "Skincare"
      }
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-03-15T00:00:00Z",
    publishedAt: "2024-01-01T00:00:00Z"
  }
];

// Helper function to get a service by slug
export function getServiceBySlug(slug: string): ServiceDetailComplete | undefined {
  return mockServices.find(service => service.slug === slug);
}

// Helper function to get all services
export function getAllServices(): ServiceDetailComplete[] {
  return mockServices;
}

// Helper function to get related services (excluding current)
export function getRelatedServices(
  currentSlug: string, 
  categorySlug?: string, 
  limit: number = 4
): ServiceDetailComplete[] {
  const currentService = getServiceBySlug(currentSlug);
  if (!currentService) return [];

  return mockServices
    .filter(service => 
      service.slug !== currentSlug && 
      (!categorySlug || service.categorySlug === categorySlug)
    )
    .slice(0, limit);
}