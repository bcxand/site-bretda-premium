'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#FEF7F2]">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#2A2B26] to-[#1a1b17] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Sobre a <span className="text-[#B4B5AC] font-semibold">Bretda</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#FEF7F2]/90 max-w-4xl mx-auto leading-relaxed">
              Uma história de paixão, inovação e excelência no entretenimento de luxo
            </p>
          </div>
        </section>

        {/* Nossa História */}
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
                  Nossa <span className="text-[#B4B5AC] font-semibold">História</span>
                </h2>
                <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-8">
                  A Bretda nasceu da paixão por criar experiências únicas de entretenimento. Nossa jornada começou com a visão de unir tradição artesanal com inovação tecnológica, criando peças que transcendem a funcionalidade para se tornarem verdadeiras obras de arte.
                </p>
                <p className="text-lg text-[#2A2B26]/80 leading-relaxed">
                  Cada mesa conta uma história de dedicação, precisão e amor pelo que fazemos. Conhecemos os valores e a filosofia que guiam cada projeto da Bretda, sempre buscando a perfeição em cada detalhe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-20 px-4 bg-[#FEF7F2]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                Nossos <span className="text-[#B4B5AC] font-semibold">Valores</span>
              </h2>
              <p className="text-xl text-[#2A2B26]/80 max-w-4xl mx-auto">
                Os princípios que norteiam cada decisão e cada criação da Bretda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">✦</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#2A2B26] mb-4">Excelência</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  Buscamos a perfeição em cada detalhe, desde a concepção até a entrega final. Nossa excelência é reconhecida em cada peça que criamos.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">◆</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#2A2B26] mb-4">Inovação</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  Combinamos tradição artesanal com tecnologia de ponta, criando designs únicos que definem o futuro do entretenimento de luxo.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">◇</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#2A2B26] mb-4">Relacionamento</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  Nosso compromisso vai além da venda. Construímos relacionamentos duradouros baseados em confiança e suporte contínuo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processo de Criação */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                Processo de <span className="text-[#B4B5AC] font-semibold">Criação</span>
              </h2>
              <p className="text-xl text-[#2A2B26]/80 max-w-4xl mx-auto">
                Cada peça Bretda passa por um processo meticuloso que combina arte, tecnologia e paixão
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Conceito</h3>
                <p className="text-[#2A2B26]/80">
                  Cada projeto nasce de uma ideia única, inspirada em arte, arquitetura e design contemporâneo.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Design</h3>
                <p className="text-[#2A2B26]/80">
                  Nossos designers transformam conceitos em projetos detalhados, considerando estética e funcionalidade.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Produção</h3>
                <p className="text-[#2A2B26]/80">
                  Artesãos especializados trabalham com materiais nobres, aplicando técnicas tradicionais e modernas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Entrega</h3>
                <p className="text-[#2A2B26]/80">
                  Cada peça é cuidadosamente embalada e entregue com instalação profissional incluída.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso com a Qualidade */}
        <section className="py-20 px-4 bg-[#FEF7F2]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                  Compromisso com a <span className="text-[#B4B5AC] font-semibold">Qualidade</span>
                </h2>
                <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-8">
                  Na Bretda, qualidade não é apenas um objetivo, é uma obsessão. Cada material é cuidadosamente selecionado, cada processo é rigorosamente controlado, e cada detalhe é meticulosamente verificado.
                </p>
                <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-8">
                  Utilizamos apenas materiais nobres como aço inox escovado, madeiras selecionadas e madrepérolas naturais. Nossos artesãos são mestres em suas especialidades, garantindo que cada peça atenda aos mais altos padrões de qualidade.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B4B5AC] mb-2">5+</div>
                    <div className="text-sm text-[#2A2B26]/80">Anos de Garantia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B4B5AC] mb-2">100%</div>
                    <div className="text-sm text-[#2A2B26]/80">Materiais Nobres</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f1eb0bb9-5aa4-4291-a6a3-5d342904660d.jpg" 
                  alt="Qualidade Bretda - Embalagem Premium" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Relacionamento Pós-Venda */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                  Relacionamento que <span className="text-[#B4B5AC] font-semibold">Perdura</span>
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
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#2A2B26] to-[#1a1b17] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl text-[#FEF7F2]/90 mb-12 leading-relaxed">
              Descubra como uma peça Bretda pode transformar seu ambiente e criar memórias inesquecíveis
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/produtos"
                className="bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-[#8B8C83] hover:to-[#6B6C63] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Conheça Nossos Produtos
              </a>
              <a 
                href="/contato"
                className="border-2 border-[#B4B5AC] text-[#B4B5AC] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#B4B5AC] hover:text-white transition-all duration-300"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}