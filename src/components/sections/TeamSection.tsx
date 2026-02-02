'use client';

import React from 'react';
import Image from 'next/image';
import { Award, GraduationCap, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import Button from '../Button';

interface TeamMember {
    id: string;
    name: string;
    title: string;
    image: string;
    specialization: string;
    experience: string;
    bio: string;
    certifications: string[];
}

const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'BS. Nguyễn Văn Quang',
        title: 'Giám đốc chuyên môn',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
        specialization: 'Da liễu thẩm mỹ',
        experience: '20 năm',
        bio: 'Bác sĩ chuyên khoa Da liễu với hơn 20 năm kinh nghiệm. Từng tu nghiệp tại Pháp, Hàn Quốc về công nghệ thẩm mỹ hiện đại.',
        certifications: ['Chứng chỉ hành nghề Da liễu', 'Chứng nhận Laser Therapy', 'Thành viên Hội Da liễu VN'],
    },
    {
        id: '2',
        name: 'BS. Lê Thị Minh Đăng',
        title: 'Trưởng khoa Thẩm mỹ',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
        specialization: 'Phẫu thuật thẩm mỹ',
        experience: '15 năm',
        bio: 'Chuyên gia về tiêm Filler, Botox và các liệu trình trẻ hóa da không phẫu thuật. Được đào tạo chuyên sâu tại Mỹ.',
        certifications: ['Chứng chỉ Filler & Botox', 'Chứng nhận Allergan', 'Thành viên ISAPS'],
    },
    {
        id: '3',
        name: 'ThS. Trần Thị Hương',
        title: 'Chuyên gia da liễu',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
        specialization: 'Điều trị da công nghệ cao',
        experience: '12 năm',
        bio: 'Thạc sĩ Da liễu, chuyên gia trong điều trị mụn, nám, tàn nhang và các vấn đề về sắc tố da.',
        certifications: ['Thạc sĩ Da liễu', 'Chứng nhận Pico Laser', 'Chuyên gia Mesotherapy'],
    },
    {
        id: '4',
        name: 'CN. Phạm Thanh Tú',
        title: 'Chuyên viên chăm sóc',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        specialization: 'Chăm sóc da chuyên sâu',
        experience: '8 năm',
        bio: 'Chuyên viên chăm sóc da được chứng nhận quốc tế, tận tâm và chu đáo trong từng liệu trình.',
        certifications: ['Chứng chỉ CIDESCO', 'Chứng nhận Dermalogica', 'Chuyên gia Spa Therapy'],
    },
];

interface TeamMemberCardProps {
    member: TeamMember;
    index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
    return (
        <ScrollReveal animation="fade-in-up" delay={index * 150}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col cursor-pointer">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                    <Image
                        src={member.image}
                        alt={`${member.name} - ${member.title} tại Viện Thẩm Mỹ Quang Đăng`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Calendar size={14} className="text-green-600" />
                        <span className="text-xs font-bold text-green-700">{member.experience}</span>
                    </div>

                    {/* Hover Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                        <h3 className="font-serif text-xl font-bold text-green-700 mb-1">{member.name}</h3>
                        <p className="text-gold-600 text-sm font-medium">{member.title}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap size={16} className="text-green-500" />
                        <span className="text-gray-600 text-sm">{member.specialization}</span>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {member.certifications.slice(0, 2).map((cert, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs px-2.5 py-1 rounded-full"
                            >
                                <Award size={12} />
                                {cert}
                            </span>
                        ))}
                        {member.certifications.length > 2 && (
                            <span className="text-xs text-gray-400 px-2 py-1">+{member.certifications.length - 2}</span>
                        )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                        <Button
                            variant="outline"
                            className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 group/btn"
                        >
                            Đặt lịch tư vấn
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

const TeamSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="fade-in-up" className="text-center mb-16">
                    <span className="inline-block py-1 px-4 bg-green-50 text-green-600 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                        Đội Ngũ Chuyên Nghiệp
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700 mb-4">
                        Gặp Gỡ <span className="text-gold-500">Chuyên Gia</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Đội ngũ bác sĩ và chuyên viên giàu kinh nghiệm, được đào tạo chuyên sâu trong và ngoài nước.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
