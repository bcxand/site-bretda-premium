'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, X } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    architect: '',
    expectation: '',
    cep: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Criar o corpo do email
    const emailBody = `
Novo contato do site Bretda:

Nome: ${formData.name}
Telefone (WhatsApp): ${formData.phone}
Email: ${formData.email}
Possui arquiteto: ${formData.architect}
Expectativa da mesa: ${formData.expectation}
CEP: ${formData.cep}

---
Enviado através do formulário de contato do site.
    `.trim()

    // Criar o link mailto
    const mailtoLink = `mailto:contato@bretda.com.br?subject=Novo contato - ${formData.name}&body=${encodeURIComponent(emailBody)}`
    
    // Abrir o cliente de email
    window.location.href = mailtoLink
    
    // Limpar o formulário
    setFormData({
      name: '',
      phone: '',
      email: '',
      architect: '',
      expectation: '',
      cep: ''
    })
  }

  return (
    <div className="min-h-screen bg-[#FEF7F2]">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#2A2B26] to-[#1a1b17] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Entre em <span className="text-[#B4B5AC] font-semibold">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#FEF7F2]/90 max-w-4xl mx-auto leading-relaxed">
              Estamos prontos para transformar seus sonhos em realidade
            </p>
          </div>
        </section>

        {/* Formulário Principal */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#2A2B26] mb-4">
                ambientes sofisticados para reunir a família
              </h2>
              <p className="text-xl text-[#2A2B26]/80">
                Preencha os campos abaixo para iniciar seu atendimento
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#FEF7F2] rounded-2xl p-8 shadow-lg space-y-6">
              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Seu nome</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  required
                />
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Seu telefone (Whatsapp)</label>
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
                <label className="block text-[#2A2B26] mb-2 font-medium">Seu e-mail</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  required
                />
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Você é ou possui ajuda de um arquiteto para seu projeto?</label>
                <select 
                  value={formData.architect}
                  onChange={(e) => setFormData({...formData, architect: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]"
                  required
                >
                  <option value="">—Escolha uma opção—</option>
                  <option value="Sou arquiteto">Sou arquiteto</option>
                  <option value="Tenho arquiteto">Tenho arquiteto</option>
                  <option value="Não tenho arquiteto">Não tenho arquiteto</option>
                </select>
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">O que você espera da sua nova mesa?</label>
                <select 
                  value={formData.expectation}
                  onChange={(e) => setFormData({...formData, expectation: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]"
                  required
                >
                  <option value="">—Escolha uma opção—</option>
                  <option value="Entretenimento familiar">Entretenimento familiar</option>
                  <option value="Peça decorativa">Peça decorativa</option>
                  <option value="Uso profissional">Uso profissional</option>
                  <option value="Investimento">Investimento</option>
                  <option value="Presente especial">Presente especial</option>
                </select>
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Digite o CEP do imóvel</label>
                <input 
                  type="text" 
                  value={formData.cep}
                  onChange={(e) => setFormData({...formData, cep: e.target.value})}
                  className="w-full px-4 py-3 border border-[#D0EEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  placeholder="00000-000"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white py-4 rounded-lg hover:from-[#8B8C83] hover:to-[#6B6C63] transition-all duration-300 font-medium text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="py-20 px-4 bg-[#FEF7F2]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Email</h3>
                <p className="text-[#2A2B26]/80">contato@bretda.com.br</p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Horário</h3>
                <p className="text-[#2A2B26]/80 mb-2">Segunda a Sexta</p>
                <p className="text-[#2A2B26]/80">8h às 18h</p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Localização</h3>
                <p className="text-[#2A2B26]/80 mb-2">Santa Catarina</p>
                <p className="text-sm text-[#2A2B26]/60">Atendimento nacional</p>
              </div>
            </div>
          </div>
        </section>

        {/* Processo de Atendimento */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                Como <span className="text-[#B4B5AC] font-semibold">Funciona</span>
              </h2>
              <p className="text-xl text-[#2A2B26]/80 max-w-4xl mx-auto">
                Nosso processo de atendimento é simples, personalizado e focado em suas necessidades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Primeiro Contato</h3>
                <p className="text-[#2A2B26]/80">
                  Entre em contato conosco via WhatsApp, telefone ou email. Conte-nos sobre seu projeto e suas necessidades.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Consultoria</h3>
                <p className="text-[#2A2B26]/80">
                  Nossa equipe especializada oferece consultoria personalizada para encontrar a solução perfeita para seu ambiente.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Orçamento</h3>
                <p className="text-[#2A2B26]/80">
                  Elaboramos um orçamento detalhado e transparente, incluindo todas as especificações e prazos de entrega.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B4B5AC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Produção & Entrega</h3>
                <p className="text-[#2A2B26]/80">
                  Sua mesa é produzida com cuidado artesanal e entregue com instalação profissional incluída.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Redes Sociais */}
        <section className="py-20 px-4 bg-[#FEF7F2]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
              Siga-nos nas <span className="text-[#B4B5AC] font-semibold">Redes Sociais</span>
            </h2>
            <p className="text-xl text-[#2A2B26]/80 mb-12">
              Acompanhe nossos projetos, novidades e bastidores da criação das peças Bretda
            </p>

            <div className="flex justify-center gap-8">
              <a 
                href="https://www.instagram.com/bretda.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] p-6 rounded-2xl hover:from-[#8B8C83] hover:to-[#6B6C63] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-white text-center">
                  <div className="text-3xl mb-3">📷</div>
                  <div className="font-semibold">Instagram</div>
                  <div className="text-sm opacity-90">@bretda.com.br</div>
                </div>
              </a>

              <a 
                href="https://www.facebook.com/bretda.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] p-6 rounded-2xl hover:from-[#8B8C83] hover:to-[#6B6C63] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-white text-center">
                  <div className="text-3xl mb-3">📘</div>
                  <div className="font-semibold">Facebook</div>
                  <div className="text-sm opacity-90">bretda.com.br</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Rápido */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-8">
                Perguntas <span className="text-[#B4B5AC] font-semibold">Frequentes</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-[#FEF7F2] rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Qual o prazo de entrega?</h3>
                <p className="text-[#2A2B26]/80">
                  O prazo varia de acordo com o produto e personalização desejada. Geralmente entre 30 a 60 dias úteis. Informamos o prazo exato no orçamento.
                </p>
              </div>

              <div className="bg-[#FEF7F2] rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">A instalação está incluída?</h3>
                <p className="text-[#2A2B26]/80">
                  Sim! Todas as nossas mesas incluem instalação profissional realizada por nossa equipe especializada, sem custo adicional.
                </p>
              </div>

              <div className="bg-[#FEF7F2] rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Vocês atendem todo o Brasil?</h3>
                <p className="text-[#2A2B26]/80">
                  Sim, atendemos todo o território nacional. Os custos de frete e instalação são calculados de acordo com a localização.
                </p>
              </div>

              <div className="bg-[#FEF7F2] rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Qual a garantia dos produtos?</h3>
                <p className="text-[#2A2B26]/80">
                  Oferecemos garantia de 5 anos para mesas de bilhar e 3 anos para outros produtos, além de suporte técnico contínuo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#2A2B26] to-[#1a1b17] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-[#FEF7F2]/90 mb-12 leading-relaxed">
              Entre em contato agora e descubra como podemos transformar seu ambiente com uma peça única da Bretda
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/5547992259554?text=Olá! Gostaria de conhecer mais sobre os produtos Bretda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>📱</span>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}