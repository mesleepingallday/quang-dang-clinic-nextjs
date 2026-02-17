# Cosmetic Clinic Website Layout Research

## Executive Summary

Nghiên cứu này phân tích các website thẩm mỹ viện hàng đầu tại Việt Nam và quốc tế để xác định best practices cho thiết kế website Thẩm mỹ viện Quang Đăng.

**Websites phân tích:**
- Thẩm Mỹ Viện Gangwhoo (Vietnam) - https://www.thammyviengangwhoo.vn
- ID Hospital (Korea) - https://eng.idhospital.com
- Allure Plastic Surgery (USA) - https://www.allureplasticsurgery.com
- Harley Street Medical Group (Singapore) - https://www.harleystreet.sg
- BKCH Hospital (India) - https://www.bkchospital.com

---

## 1. Layout Patterns

### 1.1 Hero Section Patterns

#### Pattern A: Full-Width Banner + Value Proposition (Gangwhoo)
```
┌─────────────────────────────────────────┐
│  [Full-width promotional banner]        │
├─────────────────────────────────────────┤
│  Headline: "Kiến Tạo Nhan Sắc Chuẩn Hàn" │
│  [Đặt lịch ngay!] CTA Button            │
└─────────────────────────────────────────┘
```
- **Kích thước**: Full viewport width, 60-80vh height
- **Nội dung**: Hình ảnh before/after hoặc model đẹp
- **CTA chính**: "Đặt lịch ngay", "Tư vấn miễn phí"
- **Màu sắc**: Gradient overlay để text nổi bật

#### Pattern B: Split Layout + Contact Form (Allure)
```
┌────────────────────┬────────────────────┐
│                    │  [Contact Form]    │
│  "Beautiful,       │  Name: _______     │
│   Natural Results" │  Phone: _______    │
│                    │  [REQUEST          │
│  [CTA Button]      │   CONSULTATION]    │
└────────────────────┴────────────────────┘
```
- **Ưu điểm**: Thu thập lead ngay tại hero
- **Conversion**: Form ngắn gọn (Name + Phone + Submit)

#### Pattern C: Carousel + Service Icons (ID Hospital)
```
┌─────────────────────────────────────────┐
│  [Banner Carousel - Multiple slides]    │
├─────────────────────────────────────────┤
│  [Icon] [Icon] [Icon] [Icon] [Icon]     │
│  Face   Nose   Eye     Body   Breast    │
└─────────────────────────────────────────┘
```
- **Carousel**: 3-5 slides chuyển động tự động
- **Quick links**: Icon grid dưới banner

### 1.2 Service Grid Patterns

#### Pattern: Category Cards (Gangwhoo/Allure)
```
┌─────────────────────────────────────────┐
│  DỊCH VỤ CỦA CHÚNG TÔI                  │
├──────────┬──────────┬──────────┬────────┤
│ [Image]  │ [Image]  │ [Image]  │[Image] │
│ Khuôn    │ Vóc      │ Không    │ Nha    │
│ Mặt      │ Dáng     │ Phẫu Thuật│ Khoa  │
│ [Xem     │ [Xem     │ [Xem     │ [Xem   │
│  thêm]   │  thêm]   │  thêm]   │  thêm] │
└──────────┴──────────┴──────────┴────────┘
```

**Best practices:**
- 4 categories chính cho desktop
- 2 columns cho mobile
- Hình ảnh minh họa rõ ràng
- Hover effect với overlay

#### Pattern: Mega Menu Organization (Gangwhoo)
```
Khuôn Mặt
├── Nâng Mũi (5+ procedures)
├── Cắt Mí (3+ procedures)
├── Hàm Mặt (4+ procedures)
└── Thẩm Mỹ Nam

Vóc Dáng
├── Giảm Mỡ
├── Nâng Ngực
├── Nâng Mông
└── Vùng Kín
```

### 1.3 About Section Patterns

#### Pattern: Doctor Team Showcase
```
┌─────────────────────────────────────────┐
│  ĐỘI NGŨ BÁC SĨ                         │
├──────────┬──────────┬──────────┬────────┤
│ [Photo]  │ [Photo]  │ [Photo]  │[Photo] │
│ BS. Lê   │ BS. Phùng│ Dr. Park │ BS. ...│
│ Hiền     │ Mạnh     │ Sung     │        │
│          │ Cường    │ Yong     │        │
│ [Chuyên  │ [Chuyên  │ [Chuyên  │ [...]  │
│  gia]    │  gia]    │  gia]    │        │
└──────────┴──────────┴──────────┴────────┘
```

---

## 2. Section Hierarchy (Homepage Order)

### Standard Hierarchy cho Thẩm Mỹ Viện

| Order | Section | Purpose | Priority |
|-------|---------|---------|----------|
| 1 | **Header/Nav** | Navigation + Hotline + CTA | Critical |
| 2 | **Hero Banner** | First impression + Main CTA | Critical |
| 3 | **Value Proposition** | Giá trị khác biệt | High |
| 4 | **Services Grid** | Showcase dịch vụ | Critical |
| 5 | **Equipment/Tech** | Công nghệ hiện đại | Medium |
| 6 | **Doctor Team** | Trust signal | High |
| 7 | **Testimonials** | Social proof | High |
| 8 | **Before/After** | Visual proof | High |
| 9 | **Blog/Articles** | SEO + Education | Medium |
| 10 | **Footer CTA** | Final conversion | Medium |
| 11 | **Contact Info** | Location + Phones | Critical |

### Actual Examples:

**Gangwhoo:**
1. Hero/Promo banners
2. Value proposition ("Giá Trị Khác Biệt")
3. Featured services
4. Equipment showcase
5. Doctor team
6. Testimonials (tabbed: International/Domestic)
7. Before/after gallery
8. Latest articles
9. Footer CTA
10. Contact info

**ID Hospital:**
1. Hero banners
2. Quick service icons
3. Patient reviews
4. Before/after gallery
5. "Let Me In" TV features
6. Blog
7. Footer navigation

**Allure:**
1. Hero banner with CTA
2. Services grid (6 categories)
3. Welcome/Mission statement
4. Specialties accordion
5. Doctor bio
6. Before & After gallery
7. Testimonials slider
8. Consultation form
9. Certification logos
10. Footer

---

## 3. CTA Placement

### 3.1 Primary CTAs (High Priority)

| Location | CTA Text | Purpose |
|----------|----------|---------|
| Header | "Tư Vấn Miễn Phí" | Always visible |
| Header | Hotline number | Quick contact |
| Hero | "Đặt lịch ngay" | Main conversion |
| Hero | "Nhận tư vấn" | Lead capture |
| Services | "Xem chi tiết" | Navigate to service |
| Footer | "Đăng ký nhận ưu đãi" | Email capture |

### 3.2 Floating Elements (Sticky)

```
┌─────────────────────────────────────────┐
│                                         │
│                    ┌──────────┐         │
│                    │ Zalo     │         │
│                    │ Messenger│         │
│                    │ Phone    │         │
│                    └──────────┘         │
│                                         │
└─────────────────────────────────────────┘
         [Sticky Bottom Bar - Mobile]
┌─────────────────────────────────────────┐
│ [Hotline]    [Online Consultation]      │
└─────────────────────────────────────────┘
```

### 3.3 CTA Best Practices

**Color Contrast:**
- Primary CTA: Màu nổi bật (cam, xanh dương đậm)
- Secondary CTA: Màu phụ (trắng, xám nhạt)

**Size & Spacing:**
- Button height: 48-56px
- Padding: 16px 32px
- Border radius: 4-8px

**Text:**
- Action-oriented: "Đặt lịch", "Tư vấn", "Nhận báo giá"
- Urgency: "Ngay hôm nay", "Ưu đãi có hạn"

---

## 4. Trust Signals

### 4.1 Doctor Credentials

**Elements:**
- Professional headshots
- Full name + Title
- Specialization badges
- Years of experience
- Education background
- Certifications

**Layout:**
```
┌─────────────────────────────────────────┐
│  [Doctor Photo]                         │
│  ★★★★★ 4.9/5 (127 reviews)              │
│  BS. Lê Văn A                           │
│  Chuyên gia Phẫu thuật Thẩm mỹ          │
│  ├─ 15+ năm kinh nghiệm                │
│  ├─ Tốt nghiệp ĐH Y Hà Nội             │
│  └─ Chứng chỉ ISAPS                     │
└─────────────────────────────────────────┘
```

### 4.2 Certifications & Affiliations

**Common Badges:**
- Ministry of Health certification
- International Society of Aesthetic Plastic Surgery (ISAPS)
- American Society of Plastic Surgeons (ASPS)
- JCI Accreditation
- ISO certifications

**Placement:**
- Header: Small trust badges
- Footer: Full certification grid
- About page: Detailed credentials

### 4.3 Testimonials

**Types:**
1. **Video testimonials** - Highest impact
2. **Photo + Quote** - Standard format
3. **Before/After + Review** - Visual proof
4. **Star ratings** - Quick trust signal

**Layout Pattern (Gangwhoo):**
```
┌─────────────────────────────────────────┐
│  KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI         │
├─────────────────────────────────────────┤
│  [Tab: International] [Tab: Domestic]   │
├──────────┬──────────┬──────────┬────────┤
│ [Photo]  │ [Photo]  │ [Photo]  │[Photo] │
│ "Rất hài │ "Dịch vụ │ "Kết quả │ "Bác sĩ│
│  lòng..."│  tuyệt...│  vượt..."│  rất...│
│ ★★★★★    │ ★★★★★    │ ★★★★★    │ ★★★★★  │
│ - Chị H. │ - Anh T. │ - Chị M. │ - Chị L│
└──────────┴──────────┴──────────┴────────┘
```

### 4.4 Before/After Gallery

**Best Practices:**
- Tabbed by procedure type
- Slider comparison (before | after)
- Patient consent indicators
- Procedure details

---

## 5. Color Schemes

### 5.1 Premium Medical (Gangwhoo)
```
Primary:   #020e88 (Deep Blue)     - Trust, Professional
Secondary: #f68a1e (Orange)        - Energy, CTA
Accent:    #ffffff (White)         - Clean, Space
Text:      #230000 (Dark)          - Readability
Background:#f5f7fb (Light Gray)    - Soft contrast
```

### 5.2 Modern Medical (Allure)
```
Primary:   #4baccb (Teal/Cyan)     - Calm, Medical
Secondary: #198fb5 (Dark Blue)     - Trust
Accent:    #ffffff (White)
Text:      #333333 (Dark Gray)
Background:#fafafa (Off-white)
```

### 5.3 Luxury Aesthetic
```
Primary:   #c9a962 (Gold)          - Premium, Luxury
Secondary: #1a1a1a (Black)         - Sophistication
Accent:    #ffffff (White)
Text:      #2d2d2d (Charcoal)
Background:#f8f8f8 (Light)
```

### 5.4 Korean Beauty (ID Hospital)
```
Primary:   #00a0b0 (Teal)          - Fresh, Modern
Secondary: #ff6b6b (Coral)         - Warmth, CTA
Accent:    #ffffff (White)
Text:      #2c3e50 (Navy)
Background:#ecf0f1 (Light Gray)
```

### 5.5 Color Usage Guidelines

| Element | Primary | Secondary | Accent |
|---------|---------|-----------|--------|
| Header | Background | Text | CTA Button |
| Hero | Overlay | Headline | CTA Button |
| Services | Card bg | Title | Hover state |
| Footer | Background | Text | Links |

---

## 6. Typography

### 6.1 Font Combinations

**Combination 1: Modern Professional (Gangwhoo)**
```
Primary:   Quicksand (Sans-serif)
Weights:   400 (body), 700 (headings)
Fallback:  Arial, sans-serif
```

**Combination 2: Elegant Medical (Allure)**
```
Headings:  Playfair Display (Serif)
Body:      Raleway (Sans-serif)
UI:        Montserrat (Sans-serif)
```

**Combination 3: Clean Medical**
```
Primary:   Inter (Sans-serif)
Secondary: Roboto (Sans-serif)
Accent:    Merriweather (Serif - quotes)
```

### 6.2 Typography Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 48-64px | 700 | 1.2 |
| H2 (Section) | 36-48px | 700 | 1.3 |
| H3 (Card) | 24-28px | 600 | 1.4 |
| Body | 16-18px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Caption | 12px | 400 | 1.4 |

### 6.3 Vietnamese Typography Considerations

- **Font support**: Ensure full Vietnamese character support
- **Line height**: 1.6-1.8 for better readability with diacritics
- **Font size**: Minimum 16px for body text
- **Contrast**: High contrast for complex characters

---

## 7. Navigation Patterns

### 7.1 Desktop Navigation

**Standard Header:**
```
┌─────────────────────────────────────────────────────┐
│ [Logo]    Home | About | Services ▼ | Gallery | Contact   [Hotline] [CTA] │
└─────────────────────────────────────────────────────┘
```

**Mega Menu (Services):**
```
Services Dropdown:
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ KHUÔN MẶT    │ VÓC DÁNG     │ KHÔNG PT     │ NHA KHOA     │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ • Nâng mũi   │ • Giảm mỡ    │ • Filler     │ • Niềng răng │
│ • Cắt mí     │ • Nâng ngực  │ • Botox      │ • Bọc răng   │
│ • Hàm mặt    │ • Nâng mông  │ • Thread lift│ • Implant    │
│ • Thẩm mỹ nam│ • Vùng kín   │ • Laser      │ • Tẩy trắng  │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

### 7.2 Mobile Navigation

**Hamburger Menu:**
```
┌─────────────────┐
│ ≡  [Logo]  📞   │  <- Sticky header
├─────────────────┤
│                 │
│ Home            │
│ About ▼         │
│ Services ▼      │
│ Gallery         │
│ Contact         │
│                 │
├─────────────────┤
│ [Đặt lịch ngay] │  <- Sticky CTA
└─────────────────┘
```

### 7.3 Navigation Best Practices

- **Sticky header**: Luôn hiển thị khi scroll
- **Hotline prominent**: Số điện thoại dễ thấy
- **CTA button**: Màu nổi bật trong header
- **Breadcrumb**: Cho các trang con
- **Search**: Tìm kiếm dịch vụ (optional)

---

## 8. Key Recommendations for Quang Dang Clinic

### 8.1 Must-Have Elements

1. **Hero Section**
   - Full-width banner với hình ảnh chất lượng cao
   - Headline rõ ràng về giá trị cốt lõi
   - CTA button nổi bật
   - Contact form hoặc hotline

2. **Services Section**
   - 4 category cards chính
   - Icon + Image cho mỗi dịch vụ
   - Hover effects
   - Link đến trang chi tiết

3. **Trust Section**
   - Doctor team grid (4+ doctors)
   - Certifications badges
   - Testimonials carousel
   - Before/after gallery

4. **CTA Strategy**
   - Header: "Tư vấn miễn phí" + Hotline
   - Hero: "Đặt lịch ngay"
   - Floating: Zalo + Messenger + Phone
   - Footer: Form đăng ký

### 8.2 Recommended Color Scheme

```
Primary:   #1e3a8a (Royal Blue)     - Trust, Medical authority
Secondary: #f59e0b (Amber)          - Warmth, CTA highlights
Accent:    #10b981 (Emerald)        - Success, Health
Text:      #1f2937 (Gray 800)       - Readability
Background:#f9fafb (Gray 50)        - Clean, Modern
```

### 8.3 Recommended Typography

```
Headings: Inter (600-700 weight)
Body:     Inter (400 weight)
Accent:   Playfair Display (for quotes)
```

### 8.4 Section Priority for Implementation

**Phase 1 (Critical):**
1. Header with navigation
2. Hero section
3. Services overview
4. Doctor team
5. Contact/Footer

**Phase 2 (High):**
6. Testimonials
7. Before/after gallery
8. Equipment showcase
9. Blog section

**Phase 3 (Medium):**
10. FAQ section
11. Process/timeline
12. Pricing (if applicable)

---

## 9. References

### Vietnamese Clinics
- Gangwhoo: https://www.thammyviengangwhoo.vn
- Ngoc Dung: https://www.ngocdung.net
- Xuân Hương: https://www.thammyxuanhuong.vn

### International References
- ID Hospital (Korea): https://eng.idhospital.com
- Allure Plastic Surgery (USA): https://www.allureplasticsurgery.com
- Harley Street (Singapore): https://www.harleystreet.sg

---

---

## 10. Visual Research Findings (Browser Analysis)

### 10.1 Thẩm Mỹ Viện Gangwhoo (Vietnam)
**Screenshot:** `gangwhoo-homepage.png`

**Actual Design Elements:**
- **Header**: Sticky navigation with logo, search box, "Tư Vấn Miễn Phí" CTA button
- **CTA Button Style**:
  - Background: `rgb(255, 0, 0)` (Bright Red)
  - Text: White
  - Font: 13.6px Quicksand
  - Border-radius: 5px
  - Size: 149x34px
- **Navigation Items**: Về Chúng Tôi, Khuôn Mặt, Vóc Dáng, Không Phẫu Thuật, Nha Khoa, Tin Tức
- **Hero**: Carousel with multiple banner images
- **Trust Signals**:
  - Tabbed testimonials (Quốc Tế / Trong Nước)
  - Tabbed Before/After gallery (Nâng Mũi, Cắt Mí, Căng Da, etc.)
- **Floating Elements**: Messenger, Zalo links
- **Footer Form**: Họ tên, Số điện thoại, Bạn cần tư vấn gì? + Gửi Thông Tin button
- **Social Links**: Facebook, TikTok, YouTube

**Key Features:**
- Prominent red CTA button in header
- Multiple carousel banners
- Tabbed content for testimonials and before/after
- Sticky floating social buttons

### 10.2 ID Hospital (Korea)
**Screenshot:** `idhospital-homepage.png`

**Actual Design Elements:**
- **Language Selector**: 11 languages (KR, CN, JP, TH, MN, AE, VN, ID, RU, ES, etc.)
- **Header Navigation**: About us, Safe Plastic Surgery, Online Consultation, Before & After, Franchise Inquiry
- **Service Categories**: 8 main categories with icons
  - Facial Contouring, Nose, Orthognathic Surgery, Eye, Anti-aging, Breast, Body Contouring, Male Plastic Surgery
- **Floating Sidebar**:
  - Price Inquiry
  - Whatsapp, KakaoTalk, Line
  - Facebook, Instagram, YouTube
  - TOP (scroll to top)
- **Content Organization**:
  - Hero carousel with multiple slides
  - Service details grid (16+ items)
  - Before/After photo gallery
  - Real Selfie Review section
- **Trust Signals**:
  - Cooperation badges: Ministry of Health, Seoul Metropolitan Government, Seoul National University Bundang Hospital
  - Medical Staff section
  - National Certification display

**Key Features:**
- Extensive multilingual support
- Comprehensive service menu with 50+ procedures
- Multiple contact channels (WhatsApp, KakaoTalk, Line)
- Strong trust signals with government cooperation badges

### 10.3 Allure Plastic Surgery (USA)
**Screenshot:** `allure-homepage.png`

**Actual Design Elements:**
- **Header Layout**:
  - Logo + Navigation (Dr. Lombardo, Our Office, Procedures, Photo Gallery, Patient Resources, Directions, Contact Us)
  - Social links: Facebook, Instagram, YouTube, Twitter
  - Phone: (561) 747-1232
  - "Ask a Question" link
- **Hero Section**:
  - Split layout with background image
  - "REQUEST CONSULTATION" prominent CTA
  - Contact form: Name, Email, Phone Number, Procedure(s) of Interest, Question/Comment
- **Service Grid**: 6 categories with "Learn More" links
- **Specialties List**: Facelift, Eyelid Surgery, Rhinoplasty, Breast Augmentation, etc.
- **Before/After**: "See More Transformations" CTA
- **Footer**: Contact form, social links

**Key Features:**
- Clean, professional design
- Prominent contact form in hero section
- Clear service categorization
- Strong doctor branding (Dr. Lombardo)

### 10.4 Vietnamese Hospital/Clinic Websites Analysis

**Screenshots captured:**
- `gangwhoo-homepage.png` - Thẩm Mỹ Viện Gangwhoo (Trực tiếp cạnh tranh)
- `hongngoc-homepage.png` - Bệnh viện Hồng Ngọc
- `vinmec-homepage.png` - Bệnh viện Vinmec
- `fvhospital-homepage.png` - FV Hospital

| Element | Gangwhoo (TMV) | Hồng Ngọc (BV) | Vinmec (BV) | FV Hospital (BV) |
|---------|----------------|----------------|-------------|------------------|
| **Primary CTA Color** | Red (#ff0000) | Pink/Coral | Blue | Green |
| **Font Family** | Quicksand | Roboto/Sans | Sans-serif | Sans-serif |
| **Header Style** | Sticky + Search | Sticky + Login/Register | Sticky + Search | Sticky + Emergency |
| **Hero Layout** | Full banner carousel | Tabbed specialties | Carousel banners | JCI accreditation |
| **Service Display** | 4 category cards | Tabbed departments | Service grid | Centres of Excellence |
| **Trust Signals** | Testimonials, DMCA | Insurance partners | Doctor search | JCI Gold Seal |
| **Floating Elements** | Messenger, Zalo | None visible | Call + Appointment | None visible |
| **Key Features** | Tabbed Before/After | Booking login | Language selector | Emergency hotline |

### 10.5 Key Findings from Vietnamese Market

**Gangwhoo (Thẩm Mỹ Viện - Direct Competitor):**
- Red CTA buttons - high contrast, urgent
- Quicksand font - friendly, modern
- Tabbed testimonials (International/Domestic)
- Tabbed Before/After by procedure type
- Floating Messenger + Zalo
- DMCA protection badge

**Hồng Ngọc (Bệnh viện đa khoa):**
- Pink/coral primary color - feminine, caring
- Login/Register buttons in header
- Tabbed specialties showcase
- Insurance partnership display
- Search-focused navigation

**Vinmec (Bệnh viện quốc tế):**
- Blue color scheme - trust, medical
- Language selector (Vietnamese/English)
- Doctor search prominent
- Call center + Appointment CTAs
- Clean, corporate design

**FV Hospital (Bệnh viện quốc tế):**
- Green color - health, safety
- JCI Gold Seal prominently displayed
- Emergency hotline in header
- Bilingual (Vietnamese/English)
- Centres of Excellence showcase

### 10.6 International Comparison

| Element | Gangwhoo (VN) | ID Hospital (KR) | Allure (USA) |
|---------|---------------|------------------|--------------|
| **Primary CTA Color** | Red (#ff0000) | Blue/Teal | Blue/Teal |
| **Font Family** | Quicksand | Sans-serif | Playfair + Raleway |
| **Header Style** | Sticky with search | Sticky, minimal | Sticky, comprehensive |
| **Hero Layout** | Full banner carousel | Banner carousel | Split with form |
| **Service Display** | 4 categories | 8 categories + icons | 6 category cards |
| **Trust Signals** | Testimonials, DMCA | Gov certifications | Doctor credentials |
| **Floating Elements** | Messenger, Zalo | WhatsApp, Kakao, Line | None visible |
| **Language Support** | Vietnamese | 11 languages | English |

### 10.7 Key Takeaways for Quang Dang Clinic

1. **CTA Strategy**: Red/orange buttons perform well for Vietnamese market (Gangwhoo model)
2. **Trust Building**: Tabbed testimonials and before/after galleries are essential
3. **Navigation**: Clear service categorization with dropdown menus
4. **Contact Options**: Multiple channels (phone, messenger, zalo, form)
5. **Visual Design**: Clean layouts with ample white space
6. **Mobile Considerations**: Floating action buttons for key contacts

---

*Research completed: 2026-02-09*
*For: Thẩm Mỹ Viện Quang Đăng Website Project*
*Screenshots saved in: /home/hai/quang-dang-clinic-nextjs/research/*
