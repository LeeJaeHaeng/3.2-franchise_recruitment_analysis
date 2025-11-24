"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Send, Phone, Mail, MapPin, CheckCircle2, User, Building, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    region: "",
    budget: "",
    experience: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        region: "",
        budget: "",
        experience: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-blue-100/50 shadow-lg">
        <div className="container px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Button variant="ghost" size="sm" className="rounded-full">
              <ArrowLeft className="w-5 h-5 mr-2" />
              홈으로
            </Button>
          </Link>
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            선문<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">PC방</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Title Section */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none shadow-lg">
              1:1 맞춤 상담
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                성공 창업의 시작
              </span>
              <br />
              전문가와 상담하세요
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              24시간 내 전담 컨설턴트가 연락드립니다.
              <br />
              상권 분석부터 오픈까지 완벽하게 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            {[
              { icon: Phone, title: "전화 상담", desc: "1544-0000", subtitle: "평일 09:00 - 18:00", color: "from-blue-500 to-cyan-500" },
              { icon: Mail, title: "이메일 문의", desc: "contact@sunmunpc.com", subtitle: "24시간 접수 가능", color: "from-purple-500 to-pink-500" },
              { icon: MapPin, title: "본사 방문", desc: "서울시 강남구 테헤란로 123", subtitle: "예약 후 방문", color: "from-orange-500 to-red-500" },
            ].map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg`}>
                  <contact.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{contact.title}</h3>
                <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                  {contact.desc}
                </p>
                <p className="text-sm text-slate-500">{contact.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10"></div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <User size={18} className="text-blue-600" />
                      성함 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="이름을 입력해주세요"
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-900 font-medium bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Phone size={18} className="text-purple-600" />
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-slate-900 font-medium bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Mail size={18} className="text-pink-600" />
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all outline-none text-slate-900 font-medium bg-white"
                    />
                  </div>

                  {/* Region */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <MapPin size={18} className="text-green-600" />
                      희망 지역 *
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none text-slate-900 font-medium bg-white"
                    >
                      <option value="">지역 선택</option>
                      <option value="서울">서울</option>
                      <option value="경기">경기</option>
                      <option value="인천">인천</option>
                      <option value="부산">부산</option>
                      <option value="대구">대구</option>
                      <option value="대전">대전</option>
                      <option value="광주">광주</option>
                      <option value="울산">울산</option>
                      <option value="강원">강원</option>
                      <option value="충북">충북</option>
                      <option value="충남">충남</option>
                      <option value="전북">전북</option>
                      <option value="전남">전남</option>
                      <option value="경북">경북</option>
                      <option value="경남">경남</option>
                      <option value="제주">제주</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CreditCard size={18} className="text-orange-600" />
                      예상 투자 금액
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-slate-900 font-medium bg-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="5000만원 이하">5,000만원 이하</option>
                      <option value="5000-1억">5,000만원 - 1억</option>
                      <option value="1억-2억">1억 - 2억</option>
                      <option value="2억-3억">2억 - 3억</option>
                      <option value="3억 이상">3억 이상</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Building size={18} className="text-cyan-600" />
                      창업 경험
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none text-slate-900 font-medium bg-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="초보">처음 창업합니다</option>
                      <option value="유사업종">유사 업종 경험 있음</option>
                      <option value="PC방">PC방 운영 경험 있음</option>
                      <option value="다업종">다른 업종 창업 경험</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    문의 내용
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="궁금하신 내용이나 특별히 상담받고 싶은 사항을 자유롭게 작성해주세요."
                    className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-900 font-medium resize-none bg-white"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-16 py-8 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105 font-black"
                  >
                    <Send className="mr-3 w-6 h-6" />
                    상담 신청하기
                  </Button>
                  <p className="text-sm text-slate-500 text-center">
                    * 표시된 항목은 필수 입력 사항입니다
                  </p>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <CheckCircle2 size={56} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
                  상담 신청 완료!
                </h3>
                <p className="text-xl text-slate-600 mb-2">
                  24시간 내에 전담 컨설턴트가 연락드립니다.
                </p>
                <p className="text-lg text-slate-500">
                  감사합니다. 선문PC방과 함께 성공하세요!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-lg border border-blue-100">
              <p className="text-slate-600 text-sm">
                <span className="font-bold text-blue-600">✨ 상담 특전:</span> 상담 신청 시 상권 분석 리포트 무료 제공 (30만원 상당)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
