import Link from 'next/link';
import { HelpCircle, ShieldCheck, Gift, Clock, Zap, Sparkles, TrendingDown, Droplets, Scissors, Eye, ZapOff, TrendingUp, Layers, Activity, Flame } from 'lucide-react';
import Button from '@/components/Button';
import { getPriceCategories } from '@/lib/strapi';

export const metadata = {
  title: "Bảng Giá Dịch Vụ Thẩm Mỹ 2024 - Quang Đăng Aesthetic Clinic"
};

const Pricing = async () => {
  // Fetch price categories from Strapi
  const priceCategories = await getPriceCategories().catch(() => []);
  const skincareBasic = [
    { name: 'Chăm sóc cấp ẩm, detox', price: '300.000đ', duration: '60 phút', desc: 'Thải độc & Cấp ẩm sâu' },
    { name: 'Chăm sóc da nhạy cảm', price: '300.000đ', duration: '60 phút', desc: 'Làm dịu & Phục hồi' },
    { name: 'Chăm sóc da dầu chuyên biệt', price: '300.000đ', duration: '60 phút', desc: 'Kiềm dầu & Sạch sâu' }
  ];

  const skincareAdvanced = [
    { name: 'Trẻ hóa cấp ẩm Detox đa tầng CN Oxy tươi', price: '500.000đ', duration: '60 phút', desc: 'Sáng da, tươi trẻ' },
    { name: 'Chăm sóc phục hồi tái sinh da mỏng yếu', price: '500.000đ', duration: '60 phút', desc: 'Tái tạo cấu trúc' },
    { name: 'Chăm sóc da Nâng cơ trẻ hóa toàn diện', price: '500.000đ', duration: '60 phút', desc: 'Xóa nhăn, nâng cơ' },
    { name: 'Tăng sinh collagen trắng sáng da (Vi điểm)', price: '500.000đ', duration: '60 phút', desc: 'Mịn màng, bật tone' },
    { name: 'Chăm sóc trẻ hóa da CN Laser Toning', price: '500.000đ', duration: '60 phút', desc: 'Sạch nám, mờ thâm' }
  ];

  const hairRemoval = [
    { region: 'Triệt mép', sessions: '8 buổi', price: '800.000đ' },
    { region: 'Triệt nách', sessions: '8 buổi', price: '800.000đ' },
    { region: 'Triệt mặt', sessions: '8 buổi', price: '3.000.000đ' },
    { region: 'Triệt cả chân', sessions: '8 buổi', price: '4.000.000đ' },
    { region: 'Triệt bikini', sessions: '8 buổi', price: '3.000.000đ' },
    { region: 'Triệt toàn thân', sessions: '8 buổi', price: '18.000.000đ' }
  ];

  const scalpPricing = [
    { name: 'Gội đầu trị liệu chuyên sâu, phục hồi da đầu', duration: '60p', price: '400.000đ', note: 'Sản phẩm Italia' },
    { name: 'Detox làm sạch sâu, thải độc da đầu', duration: '90p', price: '800.000đ', note: 'Tóc chắc khỏe từ gốc' },
    { name: 'Điều trị hói đầu, rụng tóc (Đặc trị Italia)', duration: '150p', price: '1.000.000đ', note: 'Kích thích nang tóc' },
    { name: 'Điều trị da đầu nhờn (Đặc trị Italia)', duration: '150p', price: '1.000.000đ', note: 'Cân bằng độ ẩm' },
    { name: 'Điều trị da đầu nhạy cảm (Đặc trị Italia)', duration: '150p', price: '1.000.000đ', note: 'Làm dịu, phục hồi' },
    { name: 'Điều trị nấm da đầu (Đặc trị Italia)', duration: '150p', price: '1.000.000đ', note: 'Kháng khuẩn, sạch nấm' }
  ];

  const bapPricing = [
    { name: 'Trẻ hóa vùng mặt Jalupro Super Hydro', price: '8.500.000đ', note: 'Tái tạo cấu trúc da Ý' },
    { name: 'Trẻ hóa vùng mặt Profhilo', price: '11.000.000đ', note: 'Siêu phẩm trẻ hóa Thụy Sĩ' },
    { name: 'Trẻ hóa vùng cổ', price: '10.000.000đ', note: 'Xóa nhăn, nâng cơ vùng cổ' },
    { name: 'Trẻ hóa bàn tay', price: '10.000.000đ', note: 'Làm đầy, trẻ hóa da tay' }
  ];

  const injectionWeightLoss = [
    { name: 'Tiêm vùng eo', sessions: '3 lần', price: '6.000.000đ', note: 'Hóa lỏng mỡ eo, tạo thắt eo' },
    { name: 'Tiêm vùng lưng', sessions: '3 lần', price: '6.000.000đ', note: 'Giảm mỡ thừa vùng lưng' },
    { name: 'Tiêm mỡ bắp tay', sessions: '3 lần', price: '6.000.000đ', note: 'Thon gọn bắp tay' },
    { name: 'Tiêm mỡ đùi', sessions: '3 lần', price: '9.000.000đ', note: 'Giảm size đùi, săn chắc da' },
    { name: 'Tiêm mỡ bụng', sessions: '3 lần', price: '12.000.000đ', note: 'Xóa tan mỡ bụng cấp tốc' }
  ];

  // WHITENING DATA
  const whiteningPricing = [
    { name: 'Tẩy da chết body + dưỡng', sessions: '10 buổi', price: '5.000.000đ', note: 'Làm sạch tế bào chết, cấp ẩm chuyên sâu' },
    { name: 'Tắm trắng phi thuyền', sessions: '10 buổi', price: '15.000.000đ', note: 'Bật tone nhanh, da trắng hồng rạng rỡ' }
  ];

  const highTechWeightLoss = [
    { name: 'Giảm béo bắp tay', sessions: '10 buổi', price: '8.000.000đ', note: 'Hóa lỏng mỡ bắp tay, săn cơ' },
    { name: 'Giảm béo bắp đùi', sessions: '10 buổi', price: '10.000.000đ', note: 'Giảm size đùi, mịn da' },
    { name: 'Giảm béo bụng', sessions: '10 buổi', price: '12.000.000đ', note: 'Đánh tan mỡ bụng đa tầng' }
  ];

  const threadLiftPricing = [
    { name: 'Tạo má Baby bằng chỉ (Mono)', price: '10.000.000đ', note: 'Làm đầy má hóp, tươi trẻ' },
    { name: 'Trẻ hóa tăng sinh Collagen Full Face (Mono)', price: '10.000.000đ', note: 'Tái tạo nền da toàn mặt' },
    { name: 'Làm đầy rãnh cười / Xóa nhăn thái dương', price: '10.000.000đ', note: 'Sử dụng chỉ Medi White (Hiko)' },
    { name: 'Nâng cao trụ, sống mũi (Medi White)', price: '15.000.000đ', note: 'Kiến tạo dáng mũi thanh tú' },
    { name: 'Nâng cơ mặt (Chỉ Cog)', price: '15.000.000đ', note: 'Nâng cơ mặt chảy xệ cấp độ nặng' },
    { name: 'Xiết nọng cằm, mặt V-line', price: '15.000.000đ', note: 'Kết hợp chỉ Cog - Mono - Screw' }
  ];

  const botoxPricing = [
    { name: 'Thon gọn hàm V-line', product: 'Botulax 100', price: '3.000.000đ', note: 'Gương mặt thanh tú, gọn gàng' },
    { name: 'Xóa nhăn vùng khóe mắt', product: 'Botulax 100', price: '3.000.000đ', note: 'Xóa vết chân chim khi cười' },
    { name: 'Xóa nhăn vùng trán and cau mày', product: 'Botulax 100', price: '3.000.000đ', note: 'Làm mịn da vùng trán' },
    { name: 'Điều trị cười hở lợi', product: 'Botulax 100', price: '3.000.000đ', note: 'Nụ cười duyên dáng, tự nhiên' },
    { name: 'Triệt tuyến mồ hôi nách', product: 'Botulax 200', price: '6.000.000đ', note: 'Dứt điểm mồ hôi, tự tin 24h' },
    { name: 'Triệt tuyến mồ hôi lòng bàn tay', product: 'Botulax 200', price: '6.000.000đ', note: 'Bàn tay luôn khô thoáng' },
    { name: 'Triệt tuyến mồ hôi lòng bàn chân', product: 'Botulax 200', price: '6.000.000đ', note: 'Giải pháp tăng tiết mồ hôi chân' },
    { name: 'Giảm cơ bắp tay', product: 'Botulax 200', price: '6.000.000đ', note: 'Thon gọn đôi tay thanh mảnh' },
    { name: 'Giảm cơ bắp chân', product: 'Botulax 200', price: '6.000.000đ', note: 'Kiến tạo đôi chân thon dài' }
  ];

  const eyeLifting = [
    { name: 'Treo cung mày – đính màng xương trán', price: '15.000.000đ' },
    { name: 'Treo cung mày – cắt da chùng, da thừa', price: '20.000.000đ' },
    { name: 'Sửa lông mày, lỗi hỏng', price: '20.000.000đ' }
  ];

  const eyeRepair = [
    { name: 'Sửa mí trên: Sụp mí', price: '15.000.000đ' },
    { name: 'Sửa mí trên: Hạ size – gỡ dính – cấy mỡ', price: '20.000.000đ' },
    { name: 'Sửa mí dưới: Ghép da – sửa lật mí – căng dây chằng', price: '30.000.000đ' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 bg-nude-50 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-100/30 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 inline-block">
            Báo Giá Niêm Yết 2024
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bảng Giá <span className="text-gold-600 italic">Dịch Vụ</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Cam kết minh bạch, không phát sinh chi phí ẩn. Quang Đăng Aesthetic Clinic mang lại giá trị thật cho vẻ đẹp của bạn.
          </p>
        </div>
      </section>

      {/* PRICING TABLES */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {priceCategories.length > 0 ? (
            // Render dynamic pricing categories from Strapi
            priceCategories.map((category, categoryIdx) => (
              <div key={category.id} className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">
                    {categoryIdx + 1}
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-gray-900">{category.name}</h2>
                </div>
                {category.pricingItems && category.pricingItems.length > 0 ? (
                  <div className="border border-gold-200 rounded-3xl overflow-hidden shadow-lg">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gold-600 text-white">
                        <tr>
                          <th className="p-6 font-bold uppercase tracking-wider">Dịch Vụ</th>
                          <th className="p-6 font-bold text-right uppercase tracking-wider">Giá Niêm Yết</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {category.pricingItems.map((item) => (
                          <tr key={item.id} className="hover:bg-gold-50 transition-colors">
                            <td className="p-6">
                              <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                              {item.description && (
                                <div className="text-sm text-gray-500">{item.description}</div>
                              )}
                            </td>
                            <td className="p-6 text-right font-bold text-gold-600 text-xl">
                              {typeof item.price === 'number'
                                ? `${item.price.toLocaleString('vi-VN')}đ`
                                : `${item.price}đ`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-nude-50 rounded-2xl text-gray-500">
                    <p>Chưa có dịch vụ trong danh mục này.</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            // Fallback to hardcoded data if Strapi data is not available
            <>
              {/* SECTION 1: EYE AESTHETIC */}
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">1</div>
                  <h2 className="font-serif text-3xl font-bold text-gray-900">Thẩm Mỹ Mắt Chuyên Sâu</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl border border-gold-100 overflow-hidden shadow-sm">
                    <div className="bg-gold-500 text-white p-4 font-bold text-center uppercase tracking-wider text-sm">Nâng Cung Mày / Mí Trên</div>
                    <table className="w-full text-left">
                      <tbody className="divide-y divide-gray-50">
                        {eyeLifting.map((item, idx) => (
                          <tr key={idx} className="hover:bg-nude-50">
                            <td className="p-4 text-sm text-gray-800 font-medium">{item.name}</td>
                            <td className="p-4 text-right font-bold text-gold-600 text-sm">{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-white rounded-3xl border border-red-100 overflow-hidden shadow-sm">
                    <div className="bg-red-500 text-white p-4 font-bold text-center uppercase tracking-wider text-sm">Sửa Mí Lỗi Hỏng</div>
                    <table className="w-full text-left">
                      <tbody className="divide-y divide-gray-50">
                        {eyeRepair.map((item, idx) => (
                          <tr key={idx} className="hover:bg-red-50">
                            <td className="p-4 text-sm text-gray-800 font-medium">{item.name}</td>
                            <td className="p-4 text-right font-bold text-red-600 text-sm">{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

          {/* SECTION 2: BOTOX */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">2</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Botox Thẩm Mỹ Nội Khoa</h2>
            </div>
            <div className="border border-gold-200 rounded-3xl overflow-hidden shadow-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-6 font-bold uppercase tracking-wider">Vùng Điều Trị</th>
                    <th className="p-6 font-bold text-center uppercase tracking-wider">Sản Phẩm</th>
                    <th className="p-6 font-bold text-right uppercase tracking-wider">Giá Niêm Yết</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {botoxPricing.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gold-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </td>
                      <td className="p-6 text-center text-gray-600 font-medium">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                           {item.product}
                        </span>
                      </td>
                      <td className="p-6 text-right font-bold text-gold-600 text-xl">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 3: CĂNG CHỈ COLLAGEN */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">3</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Căng Chỉ Collagen & Nâng Cơ</h2>
            </div>
            <div className="border border-gold-300 rounded-3xl overflow-hidden shadow-xl ring-4 ring-gold-50">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gold-600 text-white">
                  <tr>
                    <th className="p-6 font-bold uppercase tracking-wider">Liệu Trình Căng Chỉ</th>
                    <th className="p-6 font-bold text-center uppercase tracking-wider">Loại Chỉ</th>
                    <th className="p-6 font-bold text-right uppercase tracking-wider">Giá Niêm Yết</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-100 bg-white">
                  {threadLiftPricing.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gold-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </td>
                      <td className="p-6 text-center text-gray-600 font-medium">
                        {item.name.includes('Mono') ? 'Mono' : item.name.includes('Cog') ? 'Cog' : 'Medi White'}
                      </td>
                      <td className="p-6 text-right font-bold text-gold-600 text-xl">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 4: GIẢM BÉO CÔNG NGHỆ CAO */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">4</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Giảm Béo Công Nghệ Cao (Máy)</h2>
            </div>
            <div className="border border-gold-400 rounded-3xl overflow-hidden shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gold-600 text-white">
                  <tr>
                    <th className="p-6 font-bold uppercase tracking-wider">Vùng Điều Trị</th>
                    <th className="p-6 font-bold text-center uppercase tracking-wider">Liệu Trình</th>
                    <th className="p-6 font-bold text-right uppercase tracking-wider">Giá Trọn Gói</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {highTechWeightLoss.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gold-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </td>
                      <td className="p-6 text-center text-gray-600 font-medium">
                        <span className="bg-nude-100 px-3 py-1 rounded-full text-xs font-bold text-gold-700">
                          {item.sessions}
                        </span>
                      </td>
                      <td className="p-6 text-right font-bold text-gold-600 text-xl">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 5: TẮM TRẮNG & DƯỠNG THỂ - NEW SECTION */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">5</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Tắm Trắng & Chăm Sóc Toàn Thân</h2>
            </div>
            <div className="border border-gold-200 rounded-3xl overflow-hidden shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-6 font-bold uppercase tracking-wider">Dịch Vụ Tắm Trắng</th>
                    <th className="p-6 font-bold text-center uppercase tracking-wider">Liệu Trình</th>
                    <th className="p-6 font-bold text-right uppercase tracking-wider">Giá Trọn Gói</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {whiteningPricing.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gold-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </td>
                      <td className="p-6 text-center text-gray-600 font-medium">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                          {item.sessions}
                        </span>
                      </td>
                      <td className="p-6 text-right font-bold text-gold-600 text-xl">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-gold-50 rounded-2xl flex items-start gap-3 border border-gold-200">
              <Droplets className="text-gold-600 shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-gray-700 leading-relaxed italic">
                * Công nghệ phi thuyền hồng ngoại giúp bật tone trắng hồng tự nhiên. <br/>
                * <strong>Hiệu quả:</strong> Da mịn màng, đều màu và mờ thâm sạm chỉ sau 10 buổi chuyên sâu.
              </p>
            </div>
          </div>

          {/* SECTION 6: TIÊM GIẢM BÉO */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">6</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Tiêm Giảm Béo Hóa Lỏng Mỡ</h2>
            </div>
            <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th className="p-6 font-bold uppercase tracking-wider">Vùng Điều Trị</th>
                    <th className="p-6 font-bold text-center uppercase tracking-wider">Liệu Trình</th>
                    <th className="p-6 font-bold text-right uppercase tracking-wider">Giá Trọn Gói</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {injectionWeightLoss.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </td>
                      <td className="p-6 text-center text-gray-600 font-medium">{item.sessions}</td>
                      <td className="p-6 text-right font-bold text-gold-600 text-xl">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 7: SKINCARE */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">7</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Chăm Sóc & Điều Trị Da</h2>
            </div>
            <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-nude-100">
                  <tr>
                    <th className="p-6 font-bold text-gray-800">Liệu Trình</th>
                    <th className="p-6 font-bold text-gray-800 text-right">Giá Niêm Yết</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[...skincareBasic, ...skincareAdvanced].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </td>
                      <td className="p-6 text-right font-bold text-gold-600">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
            </>
          )}
        </div>
      </section>

      {/* BENEFITS & FAQ */}
      <section className="py-20 bg-nude-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Ưu đãi thẻ liệu trình</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-gray-600"><strong>Tiết kiệm 20-30%:</strong> Khi mua thẻ liệu trình cho các dịch vụ trọn gói.</p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center">
                    <Gift size={20} />
                  </div>
                  <p className="text-gray-600"><strong>Bảo hành kết quả:</strong> Cam kết hiệu quả bằng văn bản đối với các gói thẩm mỹ và điều trị.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Liên hệ trực tiếp</h2>
              <div className="space-y-4">
                 <a href="tel:0988834446" className="block text-center py-4 bg-gold-500 text-white font-bold rounded-full hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/30">
                   Hotline: 0988.834.446
                 </a>
                 <p className="text-center text-xs text-gray-400">Tầng 5 - TTTM Đức Tài — Tâm Đạt, Khối 5, Quỳnh Lưu, Nghệ An</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
