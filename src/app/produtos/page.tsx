'use client'

import { useState } from 'react'
import { ArrowLeft, Crown, X } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProductDetail, setSelectedProductDetail] = useState<any>(null)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  // Função para abrir formulário de orçamento
  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName)
    setFormData({ ...formData })
    setShowQuoteForm(true)
  }

  // Função para ver detalhes do produto
  const handleViewProduct = (produto: any) => {
    setSelectedProductDetail(produto)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Função para voltar à lista de produtos
  const handleBackToProducts = () => {
    setSelectedProductDetail(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Função para enviar para WhatsApp
  const handleWhatsAppSend = () => {
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Produto:* ${selectedProduct}

Aguardo retorno. Obrigado!`

    const whatsappUrl = `https://wa.me/5547992259554?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setShowQuoteForm(false)
    setFormData({ name: '', phone: '', email: '' })
  }

  const produtos = [
    {
      id: 1,
      nome: "Mesa de Bilhar",
      categoria: "bilhar",
      estilo: "Premium — Luxo",
      descricao: "Design escultural em aço inox escovado, madeira nobre e madrepérolas. Inspirada em Calatrava, com formas geométricas marcantes e acabamento sofisticado.",
      descricaoCompleta: "A Mesa de Bilhar representa o ápice da sofisticação no entretenimento de luxo. Seu design escultural em aço inox escovado combina perfeitamente com elementos de madeira nobre selecionada e detalhes em madrepérolas que conferem um brilho único. Inspirada na arquitetura de Santiago Calatrava, apresenta formas geométricas marcantes que criam uma presença imponente em qualquer ambiente.",
      caracteristicas: ["Aço inox escovado premium", "Madeira nobre selecionada", "Detalhes em madrepérolas", "Design inspirado em Calatrava", "Formas geométricas marcantes", "Acabamento artesanal"],
      especificacoes: {
        dimensoes: "2,74m x 1,37m x 0,82m",
        peso: "Aproximadamente 350kg",
        material: "Aço inox escovado, madeira nobre, madrepérolas",
        acabamento: "Premium artesanal",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 2,
      nome: "Mesa de Pebolim",
      categoria: "pebolim",
      estilo: "Clássica — Elegante",
      descricao: "Base aberta com curvas amplas em madeira nobre abaulada, elementos artesanais em madeira nobre trabalhados à mão por mestres artesãos.",
      descricaoCompleta: "A Mesa de Pebolim combina tradição e modernidade em um design atemporal. Sua base aberta com curvas amplas em madeira nobre abaulada proporciona não apenas estabilidade excepcional, mas também uma estética que complementa qualquer ambiente sofisticado. Os elementos artesanais em madeira nobre são trabalhados à mão por mestres artesãos, garantindo que cada peça seja única.",
      caracteristicas: ["Base aberta com curvas amplas", "Madeira nobre abaulada", "Elementos artesanais únicos", "Trabalho manual especializado", "Design atemporal", "Estabilidade excepcional"],
      especificacoes: {
        dimensoes: "1,40m x 0,75m x 0,90m",
        peso: "Aproximadamente 80kg",
        material: "Madeira nobre selecionada",
        acabamento: "Artesanal em madeira nobre",
        garantia: "3 anos",
        instalacao: "Incluída"
      },
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/S1kJp5n.jpg"
    },
    {
      id: 3,
      nome: "Tênis de Mesa",
      categoria: "tenis",
      estilo: "Elegante — Versátil",
      descricao: "O jogo perfeito para competições entre familiares e amigos. Design elegante que se adapta a diferentes ambientes.",
      descricaoCompleta: "A Mesa de Tênis foi projetada para proporcionar experiências inesquecíveis em família e entre amigos. Sua versatilidade permite tanto jogos casuais quanto competições mais sérias, sempre mantendo o padrão de qualidade Bretda. O design elegante se adapta perfeitamente a diferentes ambientes, desde salas de jogos residenciais até espaços corporativos de entretenimento.",
      caracteristicas: ["Design versátil", "Ideal para família e amigos", "Qualidade competitiva", "Adaptável a diferentes ambientes", "Construção durável", "Estética elegante"],
      especificacoes: {
        dimensoes: "2,74m x 1,52m x 0,76m",
        peso: "Aproximadamente 70kg",
        material: "MDF de alta densidade, estrutura metálica",
        acabamento: "Pintura especial anti-reflexo",
        garantia: "2 anos",
        instalacao: "Incluída"
      },
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/GLmqzV3.jpg"
    },
    {
      id: 4,
      nome: "Shuffleboard",
      categoria: "shuffleboard",
      estilo: "Dinâmica — Imponente",
      descricao: "O jogo perfeito para competições entre familiares e amigos. Presença imponente e design dinâmico.",
      descricaoCompleta: "O Shuffleboard traz toda a tradição deste jogo clássico com o refinamento característico da Bretda. Sua presença imponente e design dinâmico fazem dele o centro de atenção em qualquer ambiente. Perfeito para reunir família e amigos em competições divertidas, combina funcionalidade excepcional com uma estética que impressiona. Cada detalhe foi pensado para proporcionar anos de entretenimento com estilo.",
      caracteristicas: ["Design imponente", "Tradição do jogo clássico", "Ideal para reuniões familiares", "Funcionalidade excepcional", "Estética impressionante", "Durabilidade superior"],
      especificacoes: {
        dimensoes: "4,27m x 0,51m x 0,81m",
        peso: "Aproximadamente 150kg",
        material: "Madeira nobre, estrutura reforçada",
        acabamento: "Verniz premium",
        garantia: "3 anos",
        instalacao: "Incluída"
      },
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/fHMBOSN.jpg"
    }
  ]

  const categorias = [
    { id: 'todos', nome: 'Conhecer os produtos' },
    { id: 'bilhar', nome: 'Mesa de Bilhar' },
    { id: 'pebolim', nome: 'Mesa de Pebolim' },
    { id: 'tenis', nome: 'Tênis de Mesa' },
    { id: 'shuffleboard', nome: 'Shuffleboard' }
  ]

  const produtosFiltrados = produtos.filter(produto => {
    const matchCategoria = selectedCategory === 'todos' || produto.categoria === selectedCategory
    const matchSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       produto.estilo.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategoria && matchSearch
  })

  // Renderizar página individual do produto
  const renderProductDetail = () => {
    if (!selectedProductDetail) return null

    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Botão Voltar */}
          <button
            onClick={handleBackToProducts}
            className="flex items-center gap-2 text-[#B4B5AC] hover:text-[#2A2B26] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar aos Produtos</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Imagem Grande do Produto */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {selectedProductDetail.imagem ? (
                  <img 
                    src={selectedProductDetail.imagem} 
                    alt={selectedProductDetail.nome}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#D0EEDA]/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 bg-[#B4B5AC]/30 rounded-full flex items-center justify-center">
                        <Crown className="w-12 h-12 text-[#B4B5AC]" />
                      </div>
                      <p className="text-[#2A2B26] text-2xl font-semibold">{selectedProductDetail.nome}</p>
                      <p className="text-[#2A2B26]/60">Imagem Premium</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Informações Detalhadas */}
            <div className="space-y-8">
              {/* Cabeçalho */}
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-4">
                  {selectedProductDetail.nome}
                </h1>
                <p className="text-2xl text-[#B4B5AC] font-medium mb-6">
                  {selectedProductDetail.estilo}
                </p>
                <p className="text-xl text-[#2A2B26]/80 leading-relaxed">
                  {selectedProductDetail.descricaoCompleta}
                </p>
              </div>

              {/* Características */}
              <div>
                <h3 className="text-2xl font-semibold text-[#2A2B26] mb-6">Características</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProductDetail.caracteristicas.map((caracteristica: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#B4B5AC] rounded-full"></div>
                      <span className="text-[#2A2B26]/80">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Especificações Técnicas */}
              {selectedProductDetail.especificacoes && (
                <div>
                  <h3 className="text-2xl font-semibold text-[#2A2B26] mb-6">Especificações Técnicas</h3>
                  <div className="bg-[#FEF7F2] rounded-2xl p-6 space-y-4">
                    {Object.entries(selectedProductDetail.especificacoes).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-[#D0EEDA] pb-2">
                        <span className="font-medium text-[#2A2B26] capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-[#2A2B26]/80">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preço e Ação */}
              <div className="bg-gradient-to-r from-[#FEF7F2] to-[#D0EEDA] rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div>
                    <p className="text-lg text-[#2A2B26]/80 mb-2">Preço</p>
                    <span className="text-3xl font-bold text-[#B4B5AC]">{selectedProductDetail.preco}</span>
                  </div>
                  <button 
                    onClick={() => handleQuoteRequest(selectedProductDetail.nome)}
                    className="bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white px-10 py-4 rounded-full hover:from-[#8B8C83] hover:to-[#6B6C63] hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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

      <main>
        {/* Se um produto específico foi selecionado, mostrar página de detalhes */}
        {selectedProductDetail ? renderProductDetail() : (
          <div className="min-h-screen bg-[#FEF7F2] pt-24">
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-4">
                  Conhecer os produtos
                </h1>
                <p className="text-xl text-[#2A2B26]/80">
                  Descubra nossa coleção exclusiva de mesas de jogos premium
                </p>
              </div>

              {/* Filtros de Categoria */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categorias.map(categoria => (
                  <button
                    key={categoria.id}
                    onClick={() => setSelectedCategory(categoria.id)}
                    className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${ 
                      selectedCategory === categoria.id
                        ? 'bg-gradient-to-r from-[#B4B5AC] to-[#8B8C83] text-white shadow-xl'
                        : 'bg-white text-[#2A2B26] hover:bg-gradient-to-r hover:from-[#B4B5AC] hover:to-[#8B8C83] hover:text-white border border-[#B4B5AC]/30 hover:shadow-lg'
                    }`}
                  >
                    {categoria.nome}
                  </button>
                ))}
              </div>

              {/* Grid de Produtos - Cards Menores */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {produtosFiltrados.map((produto) => (
                  <div key={produto.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    {/* Imagem do Produto */}
                    <div className="aspect-square overflow-hidden">
                      {produto.imagem ? (
                        <img 
                          src={produto.imagem} 
                          alt={produto.nome}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#D0EEDA]/30 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#B4B5AC]/30 rounded-full flex items-center justify-center">
                              <Crown className="w-8 h-8 text-[#B4B5AC]" />
                            </div>
                            <p className="text-[#2A2B26] text-lg font-semibold">{produto.nome}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#2A2B26] mb-2">
                          {produto.nome}
                        </h3>
                        <p className="text-[#B4B5AC] font-medium mb-3">
                          {produto.estilo}
                        </p>
                        <p className="text-[#2A2B26]/80 text-sm leading-relaxed line-clamp-3">
                          {produto.descricao}
                        </p>
                      </div>

                      {/* Preço e Botões */}
                      <div className="flex flex-col gap-3 pt-4 border-t border-[#D0EEDA]">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-[#B4B5AC]">{produto.preco}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleViewProduct(produto)}
                            className="flex-1 bg-white border-2 border-[#B4B5AC] text-[#B4B5AC] px-4 py-2 rounded-full hover:bg-[#B4B5AC] hover:text-white transition-all duration-300 font-medium text-sm"
                          >
                            Ver Mais
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}