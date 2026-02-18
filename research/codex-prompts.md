# GPT Codex Prompts for Quang Dang Clinic UI Components

> Professional prompts for generating luxury cosmetic clinic website components
> Based on: UI/UX Analysis & Design Recommendations v1.0

---

## 1. Hero Section with Luxury Aesthetic

### Context
Hero section là ấn tượng đầu tiên, cần tạo cảm giác luxury medical spa, trust và kêu gọi hành động ngay lập tức. Viện Thẩm Mỹ Quang Đăng là phòng khám da liễu và thẩm mỹ cao cấp tại Nghệ An với 15+ năm kinh nghiệm.

### Design Specifications
- **Colors:**
  - Background overlay: `from-black/70 via-black/40 to-transparent`
  - Primary text: White `#FFFFFF`
  - Gold accent: `#D4AF37` (gold-400) cho highlight text
  - Green accent: `#0D7351` (green-500) cho badge
- **Typography:**
  - Headline: Cormorant serif, `text-5xl md:text-7xl`, font-bold, tracking-tight
  - Subhead: Manrope sans, `text-xl md:text-2xl`, font-light, white/90
  - Badge: uppercase tracking-[0.2em], text-sm
- **Spacing:**
  - Full viewport: `h-screen min-h-[800px]`
  - Content max-width: `max-w-3xl`
  - Section padding: generous whitespace
- **Visual hierarchy:**
  1. Badge label (top)
  2. Main headline (largest, emotional)
  3. Trust badges row
  4. CTA buttons group
  5. Floating stats (bottom)

### Interaction Requirements
- **Video Background:** 15-20s loop, fallback to high-quality image
- **Text Reveal:** Stagger animation 200ms delay between elements
- **Trust Badges:** Fade in with slight bounce
- **CTA Hover:** Scale 1.02, shadow increase
- **Floating Stats:** Subtle float animation

### Responsive Behavior
- **Mobile:** Text 5xl, stacked CTAs, simplified trust badges
- **Tablet:** Text 6xl, side-by-side CTAs
- **Desktop:** Text 7xl, full layout

### Accessibility
- Pause video when prefers-reduced-motion
- Alt text for background
- Keyboard accessible CTAs
- Contrast ratio > 4.5:1

### Prompt for Codex
```
Create a luxury hero section component for Viện Thẩm Mỹ Quang Đăng using Next.js, React, TypeScript, and Tailwind CSS.

COMPONENT STRUCTURE:
- Full-screen hero with video background + gradient overlay
- Badge: "Viện Thẩm Mỹ Quang Đăng" with glassmorphism effect
- Headline: "Vẻ Đẹp CỦA BẠN" + "Là Ưu Tiên CỦA CHÚNG TÔI" (gold accent)
- Subhead: "Viện thẩm mỹ chuẩn y khoa hàng đầu Nghệ An"
- Trust badges row: "15+ Năm Kinh Nghiệm" | "10,000+ Khách Hàng" | "Chứng Nhận FDA"
- CTA Group: Primary "Đặt Lịch Tư Vấn Miễn Phí" + Secondary "Xem Bảng Giá" + Hotline
- Floating stats bar at bottom

DESIGN REQUIREMENTS:
1. Background:
   - Video: 15-20s loop, spa ambiance, muted, playsInline
   - Fallback image for mobile/low-bandwidth
   - Gradient overlay: from-black/70 via-black/40 to-transparent
   - Subtle animated particles (CSS only)

2. Typography:
   - CSS variables: --font-cormorant (headings), --font-manrope (body)
   - Headline: font-serif text-5xl md:text-7xl font-bold text-white
   - Gold accent text: text-gold-400 (#D4AF37)
   - Subhead: text-xl md:text-2xl font-light text-white/90

3. Trust Badges:
   - Horizontal flex row with dividers
   - Icons from Lucide (Award, Users, ShieldCheck)
   - Glassmorphism: bg-white/10 backdrop-blur-md
   - Border: border-white/20

4. CTAs:
   - Primary: bg-green-600 text-white rounded-full px-8 py-4
   - Secondary: border-2 border-white text-white rounded-full
   - Hotline: text-gold-400 with Phone icon, clickable tel link
   - Hover: scale-105, shadow-lg transition

5. Floating Stats:
   - Position: absolute bottom-8 left-0 right-0
   - 4 stats: Years, Customers, Satisfaction, Certifications
   - Animated counter on scroll into view

TECHNICAL REQUIREMENTS:
- Video lazy loading with Intersection Observer
- prefers-reduced-motion support
- Next.js Image for fallback
- Responsive breakpoints: sm:640px, md:768px, lg:1024px
- TypeScript interfaces for all props
```

---

## 2. Services Grid/Showcase

### Context
Section hiển thị các dịch vụ thẩm mỹ với luxury card design, social proof integration, và urgency elements để tăng conversion.

### Design Specifications
- **Colors:**
  - Background: `#FDFCF8` (nude-50)
  - Card: White with `border border-gray-100`
  - Price original: Gray-400 line-through
  - Price sale: `#D4AF37` (gold-400) font-bold
  - Badge trending: `#0D7351` (green-600)
- **Typography:**
  - Section title: Cormorant 4xl-5xl, font-bold, text-green-700
  - Service name: Manrope xl, font-bold
  - Price: Manrope 2xl, font-bold
- **Spacing:**
  - Section padding: `py-24`
  - Card gap: `gap-8`
  - Card padding: `p-0` (image to edge) + content `p-6`
- **Visual hierarchy:**
  - Featured card (60% width) + Grid cards
  - Image > Category tag > Title > Description > Social proof > Pricing

### Interaction Requirements
- **Card Hover:** translateY(-8px), shadow increase, image zoom
- **Image Overlay:** Gradient reveal on hover
- **Filter Tabs:** Smooth fade transition
- **Countdown Timer:** Real-time update for urgency
- **Avatar Stack:** Overlapping avatars with count

### Responsive Behavior
- **Mobile:** Masonry layout, horizontal scroll filter
- **Tablet:** 2-column grid
- **Desktop:** Featured card + 4-card grid

### Accessibility
- ARIA labels for filter buttons
- Alt text for service images
- Focus management
- Sufficient touch targets (44px)

### Prompt for Codex
```
Create a luxury services showcase section for a cosmetic clinic website.

COMPONENT STRUCTURE:
- Section header with title "Dịch Vụ Nổi Bật" and "Xem Tất Cả" link
- Filter tabs: "Tất Cả", "Da Mặt", "Body", "Công Nghệ Cao"
- Sort dropdown: "Phổ biến", "Giá thấp đến cao", "Mới nhất"
- Featured service card (larger, 60% width)
- Grid of 4 service cards

SERVICE DATA (6 services):
1. Trị Mụn Chuyên Sâu - Da Mặt
   - Price: 299K (gốc 599K)
   - Social: "1,234+ khách hàng" + avatar stack
   - Rating: 4.9/5
   - Badge: "Đặt lịch nhiều nhất"

2. Trẻ Hóa Da HIFU - Công Nghệ Cao
   - Price: 2.9M (gốc 5.9M)
   - Social: "856+ khách hàng"
   - Rating: 4.8/5
   - Urgency: "Chỉ còn 3 suất cuối tuần"

3. Triệt Lông Diode Laser - Công Nghệ Cao
   - Price: 199K/buổi
   - Rating: 4.9/5
   - Flash sale countdown timer

4. Giảm Béo Max Burn - Body
   - Price: 1.5M (gốc 3M)
   - Social proof included

5. Tắm Trắng Phi Thuyền - Body
   - Price: 899K

6. Tiêm Filler Juvederm - Da Mặt
   - Price: 5.9M

DESIGN REQUIREMENTS:
1. Luxury Card Design:
   - Background: white
   - Border: 1px solid rgba(0,0,0,0.05)
   - Border radius: rounded-2xl (16px)
   - Shadow: 0 25px 50px -12px rgba(0,0,0,0.1)
   - Hover: -translate-y-2, shadow increase, duration-500

2. Image Container:
   - Aspect ratio: 16/10
   - Overflow: hidden
   - Hover: scale-105 on image
   - Gradient overlay: from-transparent to-black/40
   - Category tag: absolute top-4 left-4

3. Social Proof:
   - Avatar stack: 4 overlapping circular avatars (32px)
   - Overflow: "+123" indicator
   - Text: "1,234+ khách hàng đã chọn"
   - Star rating: 4.9/5 with gold stars

4. Pricing Display:
   - Original: text-gray-400 line-through text-sm
   - Sale: text-gold-500 font-bold text-2xl
   - Savings badge: "Tiết kiệm 50%" bg-green-100 text-green-700

5. Urgency Elements:
   - Countdown timer: "Ưu đãi kết thúc sau: 02:14:33"
   - Limited slots: "Chỉ còn 3 suất"
   - Trending badge: "Hot" with fire icon

6. Filter & Sort:
   - Tab pills: rounded-full, active:bg-green-600
   - Smooth fade transition between filters
   - AnimatePresence for card animations

TECHNICAL REQUIREMENTS:
- React state for active filter and sort
- Framer Motion for smooth transitions
- CountdownTimer component with requestAnimationFrame
- AvatarStack component with overflow handling
- StarRating component
- Responsive: 1 col mobile, 2 col tablet, mixed desktop
- Next.js Image with lazy loading
```

---

## 3. About/Trust Section (Stats + Certificates)

### Context
Section build trust thông qua số liệu ấn tượng và chứng nhận y khoa. Mục tiêu là reassurance cho khách hàng tiềm năng.

### Design Specifications
- **Colors:**
  - Background: White hoặc `#F7F5F0` (nude-100)
  - Stats numbers: `#0D7351` (green-600) hoặc `#2C2C2C` (charcoal)
  - Certificate cards: White with gold border accent
  - Icons: `#0D7351` on `#E8F5EF` (green-50) background
- **Typography:**
  - Section title: Cormorant 4xl-5xl
  - Stats numbers: 5xl-6xl, font-bold, font-serif
  - Labels: uppercase tracking-wide text-gray-500
- **Spacing:**
  - Section padding: `py-24`
  - Stats gap: `gap-12`
  - Certificate gap: `gap-6`

### Interaction Requirements
- **Animated Counter:** Count up from 0 when in viewport
- **Icon Hover:** Background invert animation
- **Certificate Hover:** Subtle lift + shadow
- **Logo Carousel:** Infinite scroll animation

### Responsive Behavior
- **Mobile:** 2x2 stats grid, horizontal scroll certificates
- **Desktop:** 4-column stats, grid certificates

### Accessibility
- aria-label for stats
- Respect reduced-motion
- Certificate verification links

### Prompt for Codex
```
Create a trust signals section with animated stats and certificates for a cosmetic clinic.

COMPONENT STRUCTURE:
- Section header: "Tại Sao Chọn Quang Đăng?"
- Stats counter row (4 items)
- Certificate showcase (horizontal scrollable cards)
- Client logo carousel (infinite scroll)
- Press mentions row

STATS DATA:
1. Icon: Calendar | Value: 15 | Suffix: + | Label: "Năm Kinh Nghiệm"
2. Icon: Users | Value: 50000 | Suffix: + | Label: "Khách Hàng"
3. Icon: Heart | Value: 98 | Suffix: % | Label: "Hài Lòng"
4. Icon: ShieldCheck | Value: 100 | Suffix: % | Label: "Chứng Nhận Y Khoa"

CERTIFICATES:
1. FDA Approved (USA)
2. CE Marking (EU)
3. ISO 9001:2015
4. Ministry of Health License (Vietnam)
5. Dermatology Association Member

CLIENT LOGOS: Bệnh viện Bạch Mai, Vinmec, etc. (placeholder)

PRESS MENTIONS: VnExpress, Tuổi Trẻ, etc. with quote snippets

DESIGN REQUIREMENTS:
1. Stats Section:
   - 4-column grid (2x2 on mobile)
   - Large numbers: text-5xl md:text-6xl font-serif font-bold text-green-600
   - Icons: 64x64px rounded-full bg-green-50 text-green-600
   - Hover: icon bg invert to green-600, icon to white
   - Animated count-up on scroll into view (2s duration)

2. Certificate Cards:
   - White background, rounded-xl
   - Border: 1px solid gray-100, hover:border-gold-400
   - Padding: 24px
   - Badge image/icon (80x80px)
   - Title: font-bold text-lg
   - Verification link with external icon
   - Hover: -translate-y-1, shadow-md

3. Logo Carousel:
   - Infinite horizontal scroll animation
   - Grayscale default, color on hover
   - Pause on hover
   - Duplicate logos for seamless loop

4. Press Mentions:
   - 3-column grid
   - Publication logo
   - Quote snippet in italics
   - Link to full article

TECHNICAL REQUIREMENTS:
- AnimatedCounter component with Intersection Observer
- CSS animation for infinite carousel
- next/image for certificate badges
- Responsive grid layouts
- Reduced motion support for counters
```

---

## 4. Testimonials/Social Proof Section

### Context
Section hiển thị đánh giá từ khách hàng thực tế với video testimonials và before/after integration để tăng credibility.

### Design Specifications
- **Colors:**
  - Background: `#F0FDF4` (green-50/very light)
  - Card: White with subtle border
  - Stars: `#0D7351` (green-500)
  - Quote marks: `#0D7351` opacity 20%
  - Verified badge: `#0D7351`
- **Typography:**
  - Section title: Cormorant 4xl-5xl
  - Quote: Manrope base, italic, text-gray-600
  - Name: Manrope lg, font-bold, font-serif
- **Spacing:**
  - Section padding: `py-24`
  - Card padding: `p-8`
  - Card gap: `gap-8`

### Interaction Requirements
- **Carousel:** Swipeable on mobile, arrows on desktop
- **Video Play:** Modal lightbox
- **Card Hover:** Lift effect, border color change
- **Star Animation:** Sequential scale-up

### Responsive Behavior
- **Mobile:** Single column carousel
- **Tablet:** 2-column
- **Desktop:** 3-column or carousel

### Accessibility
- ARIA labels for carousel
- Pause auto-play on hover
- Keyboard navigation
- Video captions

### Prompt for Codex
```
Create an enhanced testimonials section with video support for a cosmetic clinic.

COMPONENT STRUCTURE:
- Section header: "Khách Hàng Nói Gì?" + "4.9/5 từ 1,200+ đánh giá"
- Filter tabs: "Tất Cả", "Video", "Hình Ảnh", "5 Sao"
- Testimonial cards grid/carousel
- Video testimonial modal

TESTIMONIAL DATA (6 items):
1. Video testimonial
   - Customer: Chị Hương, 28 tuổi
   - Service: Trị mụn chuyên sâu
   - Duration: 45s
   - Result: "Da mình cải thiện 90% sau 2 tháng"
   - Before/After thumbnails

2. Text + Image
   - "Dịch vụ tuyệt vời, nhân viên nhiệt tình..."
   - Chị Lan, Trẻ hóa da HIFU
   - 5 stars, Verified purchase badge
   - Treatment: "3 tháng"

3. With Before/After
   - Quote + comparison images
   - Chị Minh, Triệt lông
   - Result photos

4-6. More testimonials...

DESIGN REQUIREMENTS:
1. Testimonial Cards:
   - Background: white
   - Border: 1px solid transparent, hover:border-green-200
   - Border radius: rounded-3xl (24px)
   - Padding: 32px
   - Shadow: shadow-sm, hover:shadow-xl
   - Hover: -translate-y-2 transition

2. Video Cards:
   - Thumbnail with play button overlay
   - Play icon: 64x64px white circle with green icon
   - Duration badge: bottom-right
   - Hover: thumbnail zoom, play button scale

3. Star Rating:
   - 5 stars, filled green-500
   - Size: 20px
   - Sequential animation on scroll

4. Customer Info:
   - Avatar: 56x56px rounded-full border-2 border-white shadow
   - Name: font-serif font-bold text-lg
   - Service tag: uppercase text-xs text-green-600 tracking-wide
   - Verified badge: checkmark icon with "Đã xác thực"

5. Quote Styling:
   - Italic text-gray-600
   - Min-height for alignment
   - Line-clamp-4
   - Large decorative quote mark (opacity 20%)

6. Before/After:
   - Side-by-side thumbnails
   - "Trước" / "Sau" labels
   - Click to expand lightbox

7. Carousel (if used):
   - Navigation dots
   - Previous/Next arrows
   - Auto-play 5s (pause on hover)
   - Touch/swipe support

TECHNICAL REQUIREMENTS:
- React state for active filter
- Video modal with portal
- Embla Carousel hoặc Swiper
- Framer Motion for animations
- Lazy load images and videos
- Responsive: 1 col mobile, 2 col tablet, 3 col desktop
```

---

## 5. Booking CTA Section

### Context
Section conversion quan trọng nhất với promotion, urgency elements và booking form để maximize leads.

### Design Specifications
- **Colors:**
  - Background: `#0D7351` (green-600)
  - Accent shapes: white/10, green-400/20
  - Form background: White
  - Urgency badge: Red hoặc gold
- **Typography:**
  - Headline: Cormorant 5xl-6xl, white, font-bold
  - Promotion badge: uppercase tracking-widest
  - Form labels: Manrope sm, gray-700
- **Spacing:**
  - Section padding: `py-24`
  - Two-column: 50/50 split
  - Form max-width: `max-w-md`

### Interaction Requirements
- **Countdown Timer:** Real-time urgency
- **Form Validation:** Real-time error messages
- **Submit Button:** Loading state, success animation
- **Background:** Subtle pulse animation

### Responsive Behavior
- **Mobile:** Single column, form below
- **Desktop:** Side-by-side

### Accessibility
- Form labels associated
- Error announcements
- Focus management
- Sufficient contrast

### Prompt for Codex
```
Create a high-conversion booking CTA section with promotion for a cosmetic clinic.

COMPONENT STRUCTURE:
- Two-column layout: Content left, Form right
- Left: Badge, Headline, Description, Benefits, Trust indicators
- Right: Booking form card

CONTENT:
- Badge: "ƯU ĐÃI CÓ HẠN" with countdown timer
- Headline: "Giảm 50% Cho Lần Đầu Trải Nghiệm"
- Subhead: "Chỉ còn 3 ngày để nhận ưu đãi đặc biệt"
- Benefits:
  1. "Miễn phí soi da & tư vấn 1:1 với bác sĩ"
  2. "Tặng set quà tặng mỹ phẩm cao cấp trị giá 500K"
  3. "Cam kết hiệu quả hoàn tiền 100%"
- Trust: "Đã có 234 khách đặt lịch tuần này" + avatar stack
- Urgency: "Chỉ còn 5 suất cuối cùng"

BOOKING FORM FIELDS:
1. Họ và tên * (text input)
2. Số điện thoại * (tel input)
3. Dịch vụ quan tâm * (select)
   - Trị mụn chuyên sâu
   - Trẻ hóa da công nghệ cao
   - Triệt lông vĩnh viễn
   - Giảm béo không phẫu thuật
   - Tắm trắng phi thuyền
   - Tiêm Filler/Botox
4. Ngày đặt lịch * (date picker)
5. Ghi chú (textarea, optional)
6. Submit: "Đặt Lịch Ngay - Nhận Ưu Đãi"

DESIGN REQUIREMENTS:
1. Background:
   - Primary: bg-green-600 (#0D7351)
   - Decorative: blurred circles white/10 and green-400/20
   - Subtle pattern overlay
   - Animated pulse on accent shapes

2. Left Content:
   - Badge: bg-white/20 backdrop-blur rounded-full
   - Countdown: large numbers, gold accent
   - Headline: font-serif text-5xl md:text-6xl text-white
   - Benefits: white text with checkmark circles (40x40px white bg, green check)

3. Form Card:
   - White background, rounded-2xl
   - Shadow-2xl, border border-white/20
   - Padding: 40px
   - Header: "Đặt Lịch Tư Vấn" + "Miễn phí 100%"

4. Form Inputs:
   - Label: text-sm font-medium text-gray-700
   - Input: border-gray-200 rounded-lg px-4 py-3
   - Focus: ring-2 ring-green-500 border-green-500
   - Error: border-red-500, red text below
   - Required: red asterisk

5. Submit Button:
   - Full width, bg-green-600 text-white
   - Rounded-full, py-4
   - Loading: spinner animation
   - Success: checkmark morph + "Đã gửi thành công!"
   - Shadow-lg, hover:shadow-xl, hover:bg-green-700

6. Trust Elements:
   - Avatar stack: "234 khách đặt lịch tuần này"
   - Security badges: "Bảo mật thông tin", "Cam kết y khoa"

TECHNICAL REQUIREMENTS:
- React state for form data and validation
- Real-time validation on blur
- Submit loading state
- Success/error toast notifications
- Date picker: native hoặc react-datepicker
- Responsive: stack on mobile, side-by-side desktop
- Form data logging (preparation for API)
```

---

## 6. Navigation Component

### Context
Header navigation với mega menu, sticky behavior và mobile drawer. Cần balance giữa luxury aesthetic và usability.

### Design Specifications
- **Colors:**
  - Background: White/80 with backdrop-blur
  - Border bottom: `#E5E7EB`
  - Logo: `#0D7351`
  - Links: `#2C2C2C`, hover: `#0D7351`
  - CTA: `#0D7351` filled
- **Typography:**
  - Logo: Cormorant 2xl, font-bold
  - Nav links: Manrope, font-medium
- **Spacing:**
  - Height: 80px
  - Container: max-w-7xl
  - Nav gap: gap-8

### Interaction Requirements
- **Scroll Behavior:** Hide on scroll down, show on scroll up
- **Mega Menu:** Hover với hình ảnh preview
- **Mobile Menu:** Slide-in drawer từ right
- **Search:** Expandable search bar

### Responsive Behavior
- **Mobile:** Hamburger menu, full-screen drawer
- **Desktop:** Horizontal nav with mega menu

### Accessibility
- ARIA labels cho menu button
- Keyboard navigation
- Focus trap in mobile menu
- Skip link

### Prompt for Codex
```
Create a responsive navigation header with mega menu for a cosmetic clinic website.

COMPONENT STRUCTURE:
- Fixed header with scroll behavior
- Logo left, nav center, CTA right
- Mega menu dropdown for Services
- Mobile hamburger with slide-in drawer
- Search expandable

NAVIGATION ITEMS:
1. Trang Chủ (/)
2. Giới Thiệu (/gioi-thieu)
   - Câu chuyện thương hiệu
   - Đội ngũ bác sĩ
   - Cơ sở vật chất
3. Dịch Vụ (/dich-vu) - MEGA MENU
   Column 1: Da Mặt
   - Trị mụn chuyên sâu
   - Trẻ hóa da HIFU
   - Tiêm Filler/Botox
   Column 2: Body
   - Triệt lông vĩnh viễn
   - Giảm béo Max Burn
   - Tắm trắng phi thuyền
   Column 3: Featured Banner
   - Promotion image
   - "Ưu đãi 50% tháng này"
4. Kết Quả (/ket-qua) - Before/After gallery
5. Bảng Giá (/bang-gia)
6. Tin Tức (/tin-tuc)
7. Liên Hệ (/lien-he)

CTA: "Đặt Lịch Ngay" -> scrolls to #booking

DESIGN REQUIREMENTS:
1. Header:
   - Fixed top, z-50
   - Height: 80px
   - Background: white/80 backdrop-blur-md
   - Border bottom: gray-200
   - Shadow on scroll: shadow-lg

2. Scroll Behavior:
   - Scroll down: translateY(-100%), hide
   - Scroll up: translateY(0), show immediately
   - Smooth transition 300ms

3. Logo:
   - Text: "Quang Dang" font-serif text-2xl font-bold text-green-600
   - Optional: small leaf icon

4. Nav Links:
   - Font: font-medium text-gray-800
   - Hover: text-green-600
   - Active: text-green-600 font-semibold
   - Transition: 200ms

5. Mega Menu:
   - Trigger: hover on "Dịch Vụ"
   - Container: white bg, shadow-2xl, rounded-xl
   - Padding: 32px
   - 3 columns: 2 for links, 1 for promo banner
   - Service links with small thumbnails (60x40px)
   - Promo banner: 200x120px with overlay text

6. Mobile Menu:
   - Hamburger icon: Menu/X transition
   - Drawer: slide from right, width 320px
   - Backdrop: black/50
   - Close button: top right
   - Stacked nav links with padding py-4
   - Submenu accordion
   - Quick contact: Hotline + Zalo buttons
   - Bottom: "Đặt Lịch Ngay" full-width button

7. Search:
   - Expandable input
   - Icon trigger
   - Full-width on mobile

8. Floating CTA (Mobile):
   - Fixed bottom bar
   - "Gọi Ngay" + "Đặt Lịch" buttons
   - Height: 64px + safe-area-inset

TECHNICAL REQUIREMENTS:
- React state: mobileMenuOpen, megaMenuOpen, scrolled
- useEffect: scroll listener, body scroll lock
- useRef: menu container for click-outside
- Next.js Link component
- Lucide icons
- ARIA: aria-expanded, aria-controls, aria-label
- Keyboard: Escape to close, Tab navigation
- Reduced motion support
```

---

## 7. Footer Component

### Context
Footer comprehensive với newsletter, site map, contact info và trust signals.

### Design Specifications
- **Colors:**
  - Background: `#074530` (green-700)
  - Text: white/90
  - Links: white/70, hover: white
  - Border: white/10
- **Typography:**
  - Headings: Cormorant, font-bold
  - Body: Manrope
- **Spacing:**
  - Padding: `py-16`
  - 4-column grid on desktop

### Interaction Requirements
- **Newsletter:** Submit with validation
- **Social Icons:** Scale up on hover
- **Back to Top:** Smooth scroll

### Responsive Behavior
- **Mobile:** Stacked columns
- **Desktop:** 4-column grid

### Accessibility
- Semantic HTML
- Focus states
- Sufficient contrast

### Prompt for Codex
```
Create a comprehensive footer component for a cosmetic clinic website.

COMPONENT STRUCTURE:
- Newsletter section (full width)
- 4-column grid: Brand, Services, Support, Contact
- Payment methods
- Social links
- Copyright bar
- Back to top button

CONTENT:

Column 1 - Brand:
- Logo: "Quang Dang Clinic"
- Description: "Viện Thẩm Mỹ Quang Đăng - Nơi đánh thức vẻ đẹp tiềm ẩn. Hơn 15 năm kinh nghiệm trong lĩnh vực thẩm mỹ và da liễu chuẩn y khoa."
- Social: Facebook, Instagram, TikTok, Zalo, YouTube

Column 2 - Dịch Vụ:
- Trị Mụn Chuyên Sâu
- Trẻ Hóa Da Công Nghệ Cao
- Triệt Lông Vĩnh Viễn
- Giảm Béo Không Phẫu Thuật
- Tắm Trắng Phi Thuyền
- Tiêm Filler/Botox

Column 3 - Hỗ Trợ:
- Câu Hỏi Thường Gặp (FAQ)
- Chính Sách Bảo Mật
- Chính Sách Bảo Hành
- Điều Khoản Sử Dụng
- Hướng Dẫn Đặt Lịch
- Blog Làm Đẹp

Column 4 - Liên Hệ:
- Address: 123 Nguyễn Văn Cừ, TP. Vinh, Nghệ An
- Phone: 0238 123 4567
- Hotline: 0909 123 456 (8:00 - 20:00)
- Email: info@quangdangclinic.com
- Hours: Thứ 2 - Chủ Nhật: 8:00 - 20:00

NEWSLETTER:
- Title: "Nhận Ưu Đãi Độc Quyền"
- Description: "Đăng ký để nhận ưu đãi giảm thêm 10% cho lần đầu"
- Input: Email
- Button: "Đăng Ký"
- Promise: "Không spam, chỉ gửi ưu đãi thực"

PAYMENT METHODS:
- Visa, Mastercard, Momo, VNPay, ZaloPay
- Text: "Thanh toán an toàn 100%"

COPYRIGHT:
- "© 2025 Viện Thẩm Mỹ Quang Đăng. All rights reserved."
- Links: Privacy | Terms | Cookies

DESIGN REQUIREMENTS:
1. Background:
   - Green-700 (#074530)
   - Optional subtle pattern overlay

2. Newsletter Section:
   - Border bottom: white/10
   - Padding bottom: 40px
   - Margin bottom: 40px
   - Title: font-serif text-2xl text-white
   - Input group: flex, max-w-md
   - Input: bg-white/10 border-white/20 text-white
   - Button: bg-gold-500 text-white

3. Grid Layout:
   - 1 col mobile, 2 col tablet, 4 col desktop
   - Gap: 32px
   - Column headings: font-serif text-xl font-bold text-white mb-4

4. Links:
   - Color: white/70
   - Hover: white
   - Transition: 200ms
   - Line height: relaxed

5. Contact Info:
   - Icons: 20px, white/70
   - Text: white/90
   - Spacing: gap-3 between items

6. Social Icons:
   - Size: 24px
   - Color: white/70
   - Hover: white, scale-110
   - Gap: 16px

7. Payment:
   - Icon size: 40px
   - Grayscale with opacity
   - Gap: 12px

8. Copyright:
   - Border top: white/10
   - Padding top: 24px
   - Margin top: 40px
   - Text: white/50 text-sm
   - Flex between: copyright left, links right

9. Back to Top:
   - Fixed bottom-right
   - Circular button, green-600 bg
   - Appears after scroll 400px
   - Smooth scroll to top

TECHNICAL REQUIREMENTS:
- Next.js Link for internal navigation
- External links: target="_blank", rel="noopener"
- Newsletter form with validation
- Lucide icons for all elements
- Responsive grid
- Smooth scroll behavior
```

---

## Usage Instructions

### How to Use These Prompts

1. **Copy Prompt:** Copy toàn bộ nội dung trong block "Prompt for Codex"
2. **Paste vào GPT Codex:** Mở GPT Codex và paste prompt
3. **Review Output:** Kiểm tra code generated
4. **Refine nếu cần:** Thêm yêu cầu cụ thể nếu output chưa đúng ý

### Dependencies Required

```bash
# Core
npm install next react react-dom typescript

# Styling
npm install tailwindcss @tailwindcss/forms

# Icons
npm install lucide-react

# Animation
npm install framer-motion

# Carousel (optional)
npm install embla-carousel-react

# Date picker (optional)
npm install react-datepicker
```

### Tailwind Config Extensions

```typescript
// tailwind.config.ts
colors: {
  green: {
    50: "#E8F5EF",
    100: "#C5E8D5",
    200: "#9DD9BB",
    300: "#5CB88F",
    400: "#2F9A6C",
    500: "#0D7351",
    600: "#0A5C41",
    700: "#074530",
  },
  nude: {
    50: "#FDFCF8",
    100: "#F7F5F0",
    200: "#EBE6DC",
    300: "#DFD8C8",
    800: "#5C5548",
  },
  gold: {
    300: "#E8D5A3",
    400: "#D4AF37",
    500: "#C5A028",
    600: "#B08D1F",
  },
  cream: "#FAF7F2",
  charcoal: "#2C2C2C",
},
fontFamily: {
  serif: ["var(--font-cormorant)", "serif"],
  sans: ["var(--font-manrope)", "sans-serif"],
},
```

---

*Generated by prompt-engineer agent for Quang Dang Clinic UI Team*
*Based on: UI/UX Analysis & Design Recommendations v1.0*
