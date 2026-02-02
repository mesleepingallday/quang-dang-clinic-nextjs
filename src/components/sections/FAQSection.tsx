'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import Button from '../Button';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: '1',
        question: 'Liệu trình điều trị có đau không?',
        answer: 'Hầu hết các liệu trình tại Viện Thẩm Mỹ Quang Đăng đều được thiết kế để giảm thiểu cảm giác khó chịu. Chúng tôi sử dụng công nghệ hiện đại kết hợp với kỹ thuật gây tê chuyên nghiệp. Đối với các liệu trình nhạy cảm, bác sĩ sẽ tư vấn chi tiết và có biện pháp hỗ trợ phù hợp để bạn cảm thấy thoải mái nhất.',
    },
    {
        id: '2',
        question: 'Cần bao nhiêu buổi để có hiệu quả rõ rệt?',
        answer: 'Số buổi điều trị phụ thuộc vào tình trạng da và liệu trình cụ thể. Thông thường, bạn sẽ thấy cải thiện sau 3-5 buổi điều trị. Đối với các vấn đề phức tạp như sẹo rỗ, nám sâu, có thể cần 8-10 buổi. Bác sĩ sẽ thăm khám và đưa ra phác đồ điều trị cụ thể sau khi soi da chuyên sâu.',
    },
    {
        id: '3',
        question: 'Viện thẩm mỹ có cam kết hiệu quả không?',
        answer: 'Có, chúng tôi cam kết hiệu quả bằng văn bản cho hầu hết các liệu trình. Sau khi thăm khám, bác sĩ sẽ tư vấn kỳ vọng thực tế và mức độ cải thiện cụ thể. Nếu không đạt được kết quả như cam kết, chúng tôi sẽ điều chỉnh liệu trình hoặc hoàn tiền theo chính sách.',
    },
    {
        id: '4',
        question: 'Chi phí điều trị như thế nào? Có minh bạch không?',
        answer: 'Chi phí được báo giá minh bạch ngay sau khi thăm khám và xác định liệu trình. Chúng tôi có bảng giá công khai cho từng dịch vụ và thường xuyên có các chương trình ưu đãi. Không có chi phí ẩn - bạn sẽ biết chính xác tổng chi phí trước khi bắt đầu điều trị.',
    },
    {
        id: '5',
        question: 'Có chăm sóc sau điều trị không?',
        answer: 'Có, chúng tôi cung cấp dịch vụ chăm sóc sau điều trị toàn diện. Sau mỗi buổi, bạn sẽ được tư vấn chi tiết về cách chăm sóc da tại nhà. Chúng tôi cũng có đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ 24/7 qua hotline, Zalo và Messenger để giải đáp mọi thắc mắc.',
    },
];

interface FAQAccordionItemProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({ item, isOpen, onToggle, index }) => {
    return (
        <ScrollReveal animation="fade-in-up" delay={index * 100}>
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-green-200 transition-colors duration-300">
                <button
                    onClick={onToggle}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-xl"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-center gap-4 pr-4">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                            <HelpCircle size={20} />
                        </div>
                        <span className="font-semibold text-gray-800 text-lg">{item.question}</span>
                    </div>
                    <div
                        className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-green-600 rotate-180' : ''
                            }`}
                    >
                        <ChevronDown size={18} className={`transition-colors ${isOpen ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-6 pb-6 pt-0">
                        <div className="pl-14 border-l-2 border-green-200">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

const FAQSection: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>('1');

    const handleToggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 md:py-28 bg-nude-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <ScrollReveal animation="fade-in-up">
                            <span className="inline-block py-1.5 px-4 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                                Hỏi Đáp
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700 mb-6">
                                Câu Hỏi <span className="text-gold-500">Thường Gặp</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Chúng tôi tổng hợp những câu hỏi phổ biến nhất từ khách hàng. Nếu bạn cần thêm thông tin, đừng ngần ngại liên hệ.
                            </p>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <MessageCircle size={24} className="text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Vẫn còn thắc mắc?</p>
                                        <p className="text-sm text-gray-500">Chúng tôi sẵn sàng hỗ trợ</p>
                                    </div>
                                </div>
                                <Button className="w-full">
                                    Liên hệ tư vấn
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <FAQAccordionItem
                                    key={item.id}
                                    item={item}
                                    isOpen={openId === item.id}
                                    onToggle={() => handleToggle(item.id)}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
