'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Award, Crown, X } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Logo principal tem efeito de transformação suave para o header
  const logoScale = Math.max(0.3, 1 - scrollY / 800)
  const logoOpacity = Math.max(0, 1 - scrollY / 400)

  // Função para abrir formulário de orçamento
  const handleQuoteRequest = () => {
    setShowQuoteForm(true)
  }

  // Função para enviar para WhatsApp
  const handleWhatsAppSend = () => {
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}

Aguardo retorno. Obrigado!`

    const whatsappUrl = `https://wa.me/5547992259554?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setShowQuoteForm(false)
    setFormData({ name: '', phone: '', email: '' })
  }

  // Produtos em destaque para o carrossel
  const produtosDestaque = [
    { nome: "Opal", estilo: "Moderna — Clean", imagem: "https://i.imgur.com/tbx14ho.jpg" },
    { nome: "Zurita", estilo: "Sofisticada — Moderna", imagem: "https://i.imgur.com/vSFS3BJ.jpg" },
    { nome: "Espinela", estilo: "Imponente — Autêntica", imagem: "https://i.imgur.com/LvAecZ7.jpg" },
    { nome: "Citrino", estilo: "Atemporal — Elegante", imagem: "https://i.imgur.com/qIkvoGG.jpg" },
    { nome: "Aurora", estilo: "Atemporal — Dinâmica", imagem: "https://i.imgur.com/84N4iq9.jpg" },
    { nome: "Âmbar", estilo: "Prática — Minimalista", imagem: "https://i.imgur.com/914OuJ9.jpg" }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % produtosDestaque.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + produtosDestaque.length) % produtosDestaque.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#FEF7F2]">
      <Header />

      {/* Modal do Formulário de Orçamento */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-[#2A2B26]">Solicitar Orçamento</h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="p-2 hover:bg-[#D0EEDA] rounded-lg"
              >
                <X className="w-6 h-6 text-[#2A2B26]" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Nome *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Telefone *</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Email *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <button 
                type="button"
                onClick={handleWhatsAppSend}
                disabled={!formData.name || !formData.phone || !formData.email}
                className="w-full bg-[#25D366] text-white py-4 rounded-lg hover:bg-[#128C7E] transition-colors duration-300 font-medium text-lg disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span>📱</span>
                Enviar Pedido no WhatsApp
              </button>
            </form>

            <p className="text-sm text-[#2A2B26]/60 text-center mt-4">
              Você será redirecionado para o WhatsApp com sua mensagem pronta
            </p>
          </div>
        </div>
      )}

      {/* Conteúdo Principal */}
      <main>
        <div className="min-h-screen">
          {/* Hero Section com Fundo da Nova Imagem */}
          <section 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
            style={{
              backgroundImage: `url('https://i.imgur.com/tbx14ho.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Sobreposição escura para melhor legibilidade */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Conteúdo da primeira dobra */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo Principal com Efeito de Transformação Suave - Menor */}
              <div 
                className="transition-all duration-700 ease-out mb-8"
                style={{
                  transform: `scale(${logoScale})`,
                  opacity: logoOpacity
                }}
              >
                <Link href="/">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ae25e4ce-0708-4d92-b7d7-467ba30f4e6c.svg" 
                    alt="Bretda Logo" 
                    className="h-16 md:h-20 w-auto cursor-pointer transition-all duration-300 hover:scale-110"
                  />
                </Link>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white text-center mb-6 leading-tight">
                Elevando o entretenimento<br />
                <span className="font-semibold text-[#FEF7F2]">para um patamar de Luxo</span>
              </h1>
              
              <p className="text-base md:text-lg text-[#FEF7F2]/90 text-center mb-12 max-w-2xl leading-relaxed">
                Excelência na sua diversão
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/produtos"
                  className="bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#8B8C83] hover:to-[#6B6C63] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Conhecer os produtos
                </Link>
              </div>
            </div>
          </section>

          {/* Segunda Dobra - Vídeo Institucional */}
          <section className="py-20 px-4 bg-[#FEF7F2]">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                    Excelência na sua diversão
                  </h2>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-8">
                    Na Bretda, acreditamos que diversão e sofisticação podem estar lado a lado. Nossas mesas de bilhar, pebolim, tênis e shuffleboard são projetadas com atenção cuidadosa aos detalhes, transformando qualquer ambiente em um espaço elegante de entretenimento.
                  </p>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed">
                    Cada peça é pensada para oferecer momentos de lazer com estilo e qualidade, unindo funcionalidade e design de forma natural.
                  </p>
                </div>
                <div className="relative">
                  <iframe 
                    src="https://www.youtube.com/embed/8TD0v3w_MmY" 
                    title="Bretda - Excelência na sua diversão"
                    className="w-full h-96 rounded-lg shadow-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Origem da Bretda */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <iframe 
                    src="https://www.youtube.com/embed/BQfZnkgY8bg" 
                    title="A Origem da Bretda"
                    className="w-full h-96 rounded-lg shadow-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                    Conheça a <span className="text-[#B4B5AC] font-semibold">Origem</span> da Bretda
                  </h2>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-8">
                    Uma história que começou com a paixão por criar experiências únicas de entretenimento. Descubra como nasceu a visão de unir tradição artesanal com inovação tecnológica.
                  </p>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed">
                    Cada mesa conta uma história de dedicação, precisão e amor pelo que fazemos. Conheça os valores e a filosofia que guiam cada projeto da Bretda.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Relacionamento Pós-Venda */}
          <section className="py-20 px-4 bg-[#FEF7F2]">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                    Nosso relacionamento <span className="text-[#B4B5AC] font-semibold">não acaba</span> com a venda
                  </h2>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-8">
                    Na Bretda, acreditamos que a verdadeira excelência vai muito além da entrega do produto. Nosso compromisso com você é para toda a vida.
                  </p>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-8">
                    Oferecemos suporte técnico especializado, manutenção preventiva e um relacionamento próximo que garante que sua mesa mantenha a qualidade e performance ao longo dos anos.
                  </p>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed">
                    Porque investir em uma Bretda é investir em uma parceria duradoura de confiança e excelência.
                  </p>
                </div>
                <div className="relative">
                  <iframe 
                    src="https://www.youtube.com/embed/5bpKcRt0d58" 
                    title="Relacionamento Bretda - Muito além da venda"
                    className="w-full h-96 rounded-lg shadow-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Produto em Destaque Premium - Mesa Opal */}
          <section className="relative py-32 px-4 bg-gradient-to-br from-[#2A2B26] via-[#1a1b17] to-[#0f0f0d] overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-32 h-32 border border-[#B4B5AC] rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-24 h-24 border border-[#B4B5AC] rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#B4B5AC] rounded-full blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Conteúdo Textual */}
                <div className="text-white space-y-8">
                  {/* Badge de Destaque */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#B4B5AC] to-[#D0EEDA] px-4 py-2 rounded-full">
                      <Crown className="w-5 h-5 text-[#2A2B26]" />
                      <span className="text-[#2A2B26] font-semibold text-sm">MAIS VENDIDO</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#B4B5AC] text-[#B4B5AC]" />
                      ))}
                    </div>
                  </div>

                  {/* Título Principal */}
                  <div>
                    <h2 className="text-6xl md:text-8xl font-light mb-4 leading-none">
                      Mesa <span className="text-[#B4B5AC] font-semibold">Opal</span>
                    </h2>
                    <p className="text-2xl md:text-3xl font-light text-[#FEF7F2]/80 mb-6">
                      O Padrão de Excelência da Bretda
                    </p>
                  </div>

                  {/* Descrição Premium */}
                  <div className="space-y-6">
                    <p className="text-xl text-[#FEF7F2]/90 leading-relaxed">
                      Design escultural em <span className="text-[#B4B5AC] font-semibold">aço inox escovado</span>, 
                      madeira nobre e madrepérolas. Inspirada em Calatrava, com formas geométricas marcantes 
                      que definem o futuro do entretenimento de luxo.
                    </p>

                    {/* Características Premium */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-[#B4B5AC]" />
                        <span className="text-[#FEF7F2]/80">Design Escultural</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-[#B4B5AC]" />
                        <span className="text-[#FEF7F2]/80">Aço Inox Escovado</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-[#B4B5AC]" />
                        <span className="text-[#FEF7F2]/80">Madeira Nobre</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-[#B4B5AC]" />
                        <span className="text-[#FEF7F2]/80">Madrepérolas</span>
                      </div>
                    </div>
                  </div>

                  {/* Botões de Ação Premium */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-8">
                    <button 
                      onClick={handleQuoteRequest}
                      className="group relative bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white px-10 py-4 rounded-full text-lg font-bold hover:from-[#8B8C83] hover:to-[#6B6C63] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    >
                      <span className="relative z-10">Solicitar Orçamento</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>

                {/* Área da Imagem Premium */}
                <div className="relative">
                  {/* Container da Imagem com Efeitos */}
                  <div className="relative group">
                    {/* Fundo com Gradiente e Efeitos */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B4B5AC]/20 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#D0EEDA]/10 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                    
                    {/* Container Principal da Imagem */}
                    <div className="relative bg-gradient-to-br from-[#FEF7F2] to-[#D0EEDA] p-8 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      {/* Imagem da Mesa Opal */}
                      <div className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/31a1aa6f-92f6-44cc-8bb4-cd92f197672d.jpg" 
                          alt="Mesa de Bilhar Opal - Design Escultural Premium" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Badge de Qualidade */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#B4B5AC] to-[#D0EEDA] text-[#2A2B26] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        PREMIUM
                      </div>
                    </div>

                    {/* Efeitos de Brilho */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Estatísticas de Vendas */}
                  <div className="absolute -bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#B4B5AC]">95%</div>
                        <div className="text-xs text-white/80">Satisfação</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#B4B5AC]">#1</div>
                        <div className="text-xs text-white/80">Mais Vendido</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#B4B5AC]">300+</div>
                        <div className="text-xs text-white/80">Clientes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Produtos em Destaque - Carrossel Premium */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] text-center mb-16">
                Conheça nossos Produtos
              </h2>
              
              {/* Carrossel */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {produtosDestaque.map((produto, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="flex flex-col items-center">
                          {/* Card com Imagem do Produto */}
                          <div className="relative mb-8">
                            <div className="w-80 h-80 md:w-96 md:h-96 bg-[#FEF7F2] rounded-2xl shadow-xl overflow-hidden">
                              <img 
                                src={produto.imagem} 
                                alt={`Mesa ${produto.nome}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          {/* Informações do Produto */}
                          <div className="text-center">
                            <h3 className="text-3xl font-light text-[#2A2B26] mb-2">{produto.nome}</h3>
                            <p className="text-[#B4B5AC] text-lg font-medium mb-4">{produto.estilo}</p>
                            <p className="text-[#2A2B26]/80 text-sm max-w-md mx-auto mb-6">
                              Produto premium da linha Bretda
                            </p>
                            <button 
                              onClick={handleQuoteRequest}
                              className="bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white px-6 py-3 rounded-full hover:from-[#8B8C83] hover:to-[#6B6C63] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              Solicitar Orçamento
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Controles do Carrossel */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#2A2B26] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#2A2B26] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicadores */}
                <div className="flex justify-center mt-8 space-x-2">
                  {produtosDestaque.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-[#B4B5AC]' : 'bg-[#D0EEDA]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center mt-12">
                <Link 
                  href="/produtos"
                  className="border-2 border-[#B4B5AC] text-[#B4B5AC] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#B4B5AC] hover:text-white transition-all duration-300 inline-block"
                >
                  Ver Todos os Produtos
                </Link>
              </div>
            </div>
          </section>

          {/* Seção de Experiência do Cliente com Caixa da Logo */}
          <section className="py-20 px-4 bg-[#FEF7F2]">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-6">
                    Experiência do Cliente
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#B4B5AC] mb-8">
                    Além das Expectativas
                  </h3>
                  <p className="text-xl text-[#2A2B26]/80 leading-relaxed mb-8">
                    Cada detalhe da experiência Bretda é pensado para superar expectativas. Desde o primeiro contato até a entrega final, 
                    oferecemos um atendimento personalizado que reflete nosso compromisso com a excelência.
                  </p>
                  <p className="text-lg text-[#2A2B26]/80 leading-relaxed">
                    Nossa embalagem premium e cuidado na entrega garantem que sua mesa chegue em perfeitas condições, 
                    pronta para transformar seu ambiente em um espaço de entretenimento sofisticado.
                  </p>
                </div>
                
                {/* Imagem da caixa com logo */}
                <div className="relative">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f1eb0bb9-5aa4-4291-a6a3-5d342904660d.jpg" 
                    alt="Caixa Premium Bretda com Logo" 
                    className="w-full h-96 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Ambientes Premium */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-6">
                    Ambientes que Refletem
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#B4B5AC] mb-8">
                    Sofisticação e Estilo
                  </h3>
                  <p className="text-xl text-[#2A2B26]/80 leading-relaxed">
                    Cada peça Bretda transforma o ambiente com design escultural, materiais nobres e presença imponente, 
                    sem abrir mão da funcionalidade. Criamos espaços onde o luxo encontra o entretenimento, 
                    proporcionando experiências únicas que elevam qualquer ambiente residencial ou corporativo.
                  </p>
                </div>
                
                {/* Primeira imagem ao lado direito do texto */}
                <div className="relative">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/41f460fe-aa14-4992-a6e8-719821a61fe2.jpg" 
                    alt="Ambiente Bretda - Lounge Premium" 
                    className="w-full h-96 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Características dos Ambientes */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-[#FEF7F2] rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">✦</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#2A2B26] mb-4">Materiais Nobres</h4>
                  <p className="text-[#2A2B26]/80 leading-relaxed">
                    Luxo que se sente no toque e se vê nos detalhes. Excelência, da estrutura até o acabamento.
                  </p>
                </div>

                <div className="text-center p-8 bg-[#FEF7F2] rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">◆</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#2A2B26] mb-4">Experiência Singular</h4>
                  <p className="text-[#2A2B26]/80 leading-relaxed">
                    Mais do que entretenimento, cada mesa é feita para criar memórias que duram para sempre.
                  </p>
                </div>

                <div className="text-center p-8 bg-[#FEF7F2] rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">◇</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#2A2B26] mb-4">Design Exclusivo</h4>
                  <p className="text-[#2A2B26]/80 leading-relaxed">
                    Não seguimos tendências. Criamos peças atemporais que elevam qualquer ambiente com presença e originalidade.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Depoimentos - Clientes Realizando Sonhos */}
          <section className="py-20 px-4 bg-[#FEF7F2]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                  Sonhos que se <span className="text-[#B4B5AC] font-semibold">Tornaram Realidade</span>
                </h2>
                <p className="text-xl text-[#2A2B26]/80 leading-relaxed max-w-4xl mx-auto mb-12">
                  Cada cliente da Bretda não apenas adquire um produto excepcional, mas realiza o sonho de ter uma peça única que transforma completamente seu espaço. 
                  Histórias de satisfação que vão além das expectativas, onde a qualidade superior e o atendimento personalizado criam experiências inesquecíveis. 
                  Nossos clientes não são apenas compradores, são realizadores de sonhos que encontraram na Bretda a excelência que sempre buscaram.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="max-w-4xl">
                  <iframe 
                    src="https://www.youtube.com/embed/EEtwIk9U3OM" 
                    title="Depoimento Cliente Bretda - Sonho Realizado"
                    className="w-full h-96 md:h-[500px] rounded-lg shadow-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-[#B4B5AC] font-medium italic">
                  "Mais do que um produto, uma experiência que supera todos os sonhos"
                </p>
              </div>
            </div>
          </section>

          {/* Transforme seu Ambiente */}
          <section className="py-20 px-4 bg-[#2A2B26] text-white">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Transforme o seu ambiente
              </h2>
              <p className="text-2xl text-[#B4B5AC] font-medium mb-4">
                Onde o design encontra a excelência
              </p>
              <p className="text-lg text-[#FEF7F2]/80 mb-12">
                Tradição - Inovação - Sofisticação
              </p>
              <button 
                onClick={handleQuoteRequest}
                className="bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-[#8B8C83] hover:to-[#6B6C63] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}