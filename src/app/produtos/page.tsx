'use client'

import { useState } from 'react'
import { ArrowLeft, Crown, X } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState('bilhar')
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
    // MESAS DE BILHAR
    {
      id: 1,
      nome: "Mesa de Bilhar Âmbar",
      categoria: "bilhar",
      estilo: "Premium — Luxo",
      descricao: "Mesa de bilhar premium com múltiplas dimensões disponíveis, base em aço inox com opções de acabamento e estrutura em madeira nobre selecionada.",
      descricaoCompleta: "A Mesa de Bilhar Âmbar oferece versatilidade excepcional com dimensões que variam desde a compacta 200x110cm até a oficial 280x164cm. Sua base em aço inox está disponível em acabamentos polido, escovado, off white, preto ou cinza. A estrutura utiliza madeiras nobres como Ipê, Ipê Champagne, Garapeira ou Marupa, com opções de madeira compensada e lâminas. O tecido pode ser personalizado em diversas cores e inclui opção de tampo.",
      caracteristicas: [
        "Dimensões: 200x110 Compacta, 230x130 Padrão, 240x140 House, 260x150 Semi-oficial, 280x164 Oficial",
        "Base aço inox: Polido, Escovado, Off White, Preto, Cinza",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas disponíveis",
        "Tecido personalizado em diversas cores",
        "Opção de tampo: Sim ou Não"
      ],
      especificacoes: {
        dimensoes: "Múltiplas opções disponíveis",
        peso: "Varia conforme dimensão",
        material: "Aço inox, madeira nobre, tecido especializado",
        acabamento: "Premium personalizado",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      acessorios: "04 tacos desmontáveis, 01 jogo de bola, giz master, 01 triângulo, 01 suporte de tacos",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 2,
      nome: "Mesa de Bilhar Citron",
      categoria: "bilhar",
      estilo: "Elegante — Clássica",
      descricao: "Mesa de bilhar com design clássico, estrutura em madeira nobre e acabamento refinado. Disponível em múltiplas dimensões para diferentes espaços.",
      descricaoCompleta: "A Mesa de Bilhar Citron combina elegância clássica com funcionalidade moderna. Oferece dimensões desde 200x110x80cm compacta até 280x164cm oficial. Sua estrutura utiliza madeiras nobres selecionadas como Ipê, Ipê Champagne, Garapeira ou Marupa, complementadas por madeira compensada e lâminas de alta qualidade. O tecido pode ser personalizado conforme preferência.",
      caracteristicas: [
        "Dimensões: 200x110x80 Compacta, 230x130 Padrão, 240x140 House, 260x150 Semi-oficial, 280x164 Oficial",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas premium",
        "Tecido personalizado",
        "Opção de tampo disponível",
        "Design clássico atemporal"
      ],
      especificacoes: {
        dimensoes: "Múltiplas opções disponíveis",
        peso: "Varia conforme dimensão",
        material: "Madeira nobre, tecido especializado",
        acabamento: "Clássico refinado",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      acessorios: "04 tacos desmontáveis, 01 jogo de bola, giz master, 01 triângulo, 01 suporte de tacos",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 3,
      nome: "Mesa de Bilhar Opal",
      categoria: "bilhar",
      estilo: "Sofisticada — Premium",
      descricao: "Mesa de bilhar sofisticada com base em aço inox e estrutura em madeira nobre. Combinação perfeita de modernidade e tradição.",
      descricaoCompleta: "A Mesa de Bilhar Opal representa sofisticação em cada detalhe. Com dimensões variando de 200x110cm compacta até 280x164x82cm oficial, oferece base em aço inox com múltiplas opções de acabamento. A estrutura em madeiras nobres selecionadas e a possibilidade de personalização do tecido fazem desta mesa uma peça única.",
      caracteristicas: [
        "Dimensões: 200x110 Compacta, 230x130 Padrão, 240x140 House, 260x150 Semi-oficial, 280x164x82 Oficial",
        "Base aço inox: Polido, Escovado, Off White, Preto, Cinza",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Tecido personalizado",
        "Opção de tampo"
      ],
      especificacoes: {
        dimensoes: "Múltiplas opções disponíveis",
        peso: "Varia conforme dimensão",
        material: "Aço inox, madeira nobre",
        acabamento: "Premium personalizado",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      acessorios: "04 tacos desmontáveis, 01 jogo de bola, giz master, 01 triângulo, 01 suporte de tacos",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 4,
      nome: "Mesa de Bilhar Espinela",
      categoria: "bilhar",
      estilo: "Clássica — Tradicional",
      descricao: "Mesa de bilhar tradicional com estrutura em madeira nobre e acabamento clássico. Ideal para ambientes que valorizam a tradição.",
      descricaoCompleta: "A Mesa de Bilhar Espinela mantém a tradição do bilhar clássico com qualidade contemporânea. Disponível em dimensões de 200x110cm compacta até 280x164cm oficial, utiliza estrutura em madeiras nobres selecionadas. O design tradicional é complementado por tecido personalizado e opção de tampo.",
      caracteristicas: [
        "Dimensões: 200x110 Compacta, 230x130 Padrão, 240x140 House, 260x150 Semi-oficial, 280x164 Oficial",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Tecido personalizado",
        "Opção de tampo",
        "Design tradicional"
      ],
      especificacoes: {
        dimensoes: "Múltiplas opções disponíveis",
        peso: "Varia conforme dimensão",
        material: "Madeira nobre selecionada",
        acabamento: "Tradicional premium",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      acessorios: "04 tacos desmontáveis, 01 jogo de bola, giz master, 01 triângulo, 01 suporte de tacos",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 5,
      nome: "Mesa de Bilhar Aurora",
      categoria: "bilhar",
      estilo: "Luxuosa — Exclusiva",
      descricao: "Mesa de bilhar luxuosa com base em aço inox e estrutura em madeira nobre. Design exclusivo para ambientes sofisticados.",
      descricaoCompleta: "A Mesa de Bilhar Aurora é sinônimo de luxo e exclusividade. Com dimensões que variam de 200x110cm compacta até 280x164cm oficial, apresenta base em aço inox com acabamentos premium e estrutura em madeiras nobres cuidadosamente selecionadas. Cada detalhe reflete sofisticação e qualidade excepcional.",
      caracteristicas: [
        "Dimensões: 200x110 Compacta, 230x130 Padrão, 240x140 House, 260x150 Semi-oficial, 280x164 Oficial",
        "Base aço inox: Polido, Escovado, Off White, Preto, Cinza",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas premium",
        "Tecido personalizado",
        "Opção de tampo"
      ],
      especificacoes: {
        dimensoes: "Múltiplas opções disponíveis",
        peso: "Varia conforme dimensão",
        material: "Aço inox, madeira nobre premium",
        acabamento: "Luxuoso exclusivo",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      acessorios: "04 tacos desmontáveis, 01 jogo de bola, giz master, 01 triângulo, 01 suporte de tacos",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 6,
      nome: "Mesa de Bilhar Citrino (Acrílico)",
      categoria: "bilhar",
      estilo: "Moderna — Inovadora",
      descricao: "Mesa de bilhar moderna com elementos em acrílico, estrutura em madeira nobre. Design inovador para ambientes contemporâneos.",
      descricaoCompleta: "A Mesa de Bilhar Citrino com acrílico representa inovação no design de mesas de bilhar. Disponível em dimensões de 200x110cm compacta até 260x150cm semi-oficial, combina elementos em acrílico com estrutura em madeiras nobres. O resultado é uma peça moderna que se destaca em qualquer ambiente contemporâneo.",
      caracteristicas: [
        "Dimensões: 200x110 Compacta, 230x130 Padrão, 240x140 House, 260x150 Semi-oficial",
        "Elementos em acrílico premium",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Tecido personalizado",
        "Opção de tampo"
      ],
      especificacoes: {
        dimensoes: "Até 260x150cm semi-oficial",
        peso: "Varia conforme dimensão",
        material: "Acrílico, madeira nobre",
        acabamento: "Moderno inovador",
        garantia: "4 anos",
        instalacao: "Incluída"
      },
      acessorios: "04 tacos desmontáveis, 01 jogo de bola, giz master, 01 triângulo, 01 suporte de tacos",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 7,
      nome: "Mesa de Bilhar Zurita",
      categoria: "bilhar",
      estilo: "Refinada — Elegante",
      descricao: "Mesa de bilhar refinada com estrutura em madeira nobre e acabamento elegante. Perfeita para ambientes sofisticados.",
      descricaoCompleta: "A Mesa de Bilhar Zurita oferece refinamento e elegância em cada detalhe. Com dimensões variando de 200x110cm compacta até 280x164cm oficial, utiliza estrutura em madeiras nobres selecionadas. O design elegante e a qualidade dos materiais fazem desta mesa uma escolha perfeita para ambientes sofisticados.",
      caracteristicas: [
        "Dimensões: 200x110 Compacta, 230x130 Padrão, 240x140 House, 260x150 Semi-oficial, 280x164 Oficial",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas premium",
        "Tecido personalizado",
        "Opção de tampo",
        "Design refinado"
      ],
      especificacoes: {
        dimensoes: "Múltiplas opções disponíveis",
        peso: "Varia conforme dimensão",
        material: "Madeira nobre premium",
        acabamento: "Refinado elegante",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      acessorios: "04 tacos desmontáveis, 01 jogo de bola, giz master, 01 triângulo, 01 suporte de tacos",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },

    // TÊNIS DE MESA
    {
      id: 8,
      nome: "Tênis de Mesa Critino",
      categoria: "tenis",
      estilo: "Premium — Acrílico",
      descricao: "Mesa de tênis de mesa premium com tampo em acrílico e base em madeira nobre. Design moderno e funcionalidade excepcional.",
      descricaoCompleta: "A Mesa de Tênis Critino combina modernidade e funcionalidade com seu tampo em acrílico premium e base em madeiras nobres selecionadas. Com dimensões oficiais de 274x152x076cm, oferece experiência de jogo profissional com visual contemporâneo único.",
      caracteristicas: [
        "Dimensões oficiais: 274x152x076cm",
        "Tampo em acrílico premium",
        "Base: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Design moderno",
        "Kit de jogo completo incluído"
      ],
      especificacoes: {
        dimensoes: "274x152x076cm",
        peso: "Aproximadamente 70kg",
        material: "Acrílico, madeira nobre",
        acabamento: "Premium moderno",
        garantia: "3 anos",
        instalacao: "Incluída"
      },
      acessorios: "Kit de jogo completo",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/GLmqzV3.jpg"
    },
    {
      id: 9,
      nome: "Tênis de Mesa Cobal",
      categoria: "tenis",
      estilo: "Clássica — Tradicional",
      descricao: "Mesa de tênis de mesa clássica com estrutura em madeira nobre. Design tradicional com qualidade contemporânea.",
      descricaoCompleta: "A Mesa de Tênis Cobal mantém a tradição do tênis de mesa com qualidade moderna. Estrutura em madeiras nobres selecionadas e dimensões oficiais garantem experiência de jogo autêntica e durabilidade excepcional.",
      caracteristicas: [
        "Dimensões oficiais: 274x152x076cm",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Design tradicional",
        "Qualidade profissional",
        "Kit de jogo completo incluído"
      ],
      especificacoes: {
        dimensoes: "274x152x076cm",
        peso: "Aproximadamente 75kg",
        material: "Madeira nobre selecionada",
        acabamento: "Tradicional premium",
        garantia: "3 anos",
        instalacao: "Incluída"
      },
      acessorios: "Kit de jogo completo",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/GLmqzV3.jpg"
    },
    {
      id: 10,
      nome: "Tênis de Mesa Âmbar",
      categoria: "tenis",
      estilo: "Elegante — Refinada",
      descricao: "Mesa de tênis de mesa elegante com estrutura em madeira nobre e acabamento refinado. Perfeita para ambientes sofisticados.",
      descricaoCompleta: "A Mesa de Tênis Âmbar oferece elegância e funcionalidade em perfeita harmonia. Com estrutura em madeiras nobres cuidadosamente selecionadas e acabamento refinado, é ideal para ambientes que valorizam sofisticação sem abrir mão da qualidade de jogo.",
      caracteristicas: [
        "Dimensões oficiais: 274x152x076cm",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas premium",
        "Acabamento refinado",
        "Design elegante",
        "Kit de jogo completo incluído"
      ],
      especificacoes: {
        dimensoes: "274x152x076cm",
        peso: "Aproximadamente 80kg",
        material: "Madeira nobre premium",
        acabamento: "Refinado elegante",
        garantia: "3 anos",
        instalacao: "Incluída"
      },
      acessorios: "Kit de jogo completo",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/GLmqzV3.jpg"
    },

    // SHUFFLEBOARD
    {
      id: 11,
      nome: "Shuffleboard Âmbar",
      categoria: "shuffleboard",
      estilo: "Premium — Luxo",
      descricao: "Shuffleboard premium com base em aço inox e estrutura em madeira nobre. Combinação perfeita de elegância e funcionalidade.",
      descricaoCompleta: "O Shuffleboard Âmbar representa o máximo em qualidade e sofisticação. Com dimensões de 274x152x076cm, base em aço inox com múltiplas opções de acabamento e estrutura em madeiras nobres selecionadas, oferece experiência de jogo excepcional em um design luxuoso.",
      caracteristicas: [
        "Dimensões: 274x152x076cm",
        "Base aço inox: Polido, Escovado, Off White, Preto, Cinza",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Design premium",
        "Kit de jogo completo incluído"
      ],
      especificacoes: {
        dimensoes: "274x152x076cm",
        peso: "Aproximadamente 150kg",
        material: "Aço inox, madeira nobre",
        acabamento: "Premium luxuoso",
        garantia: "5 anos",
        instalacao: "Incluída"
      },
      acessorios: "Kit de jogo completo",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/fHMBOSN.jpg"
    },

    // MESA DE PEBOLIM
    {
      id: 12,
      nome: "Mesa de Pebolim Âmbar",
      categoria: "pebolim",
      estilo: "Premium — Luxo",
      descricao: "Mesa de pebolim premium com base em aço inox e estrutura em madeira nobre. Design sofisticado para diversão em família.",
      descricaoCompleta: "A Mesa de Pebolim Âmbar combina diversão e sofisticação em um design único. Com dimensões de 150x080x085cm, base em aço inox com múltiplas opções de acabamento e estrutura em madeiras nobres, oferece entretenimento de qualidade superior para toda a família.",
      caracteristicas: [
        "Dimensões: 150x080x085cm",
        "Base aço inox: Polido, Escovado, Off White, Preto, Cinza",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Design premium",
        "6 bolinhas incluídas"
      ],
      especificacoes: {
        dimensoes: "150x080x085cm",
        peso: "Aproximadamente 80kg",
        material: "Aço inox, madeira nobre",
        acabamento: "Premium sofisticado",
        garantia: "4 anos",
        instalacao: "Incluída"
      },
      acessorios: "6 bolinhas",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/S1kJp5n.jpg"
    },
    {
      id: 13,
      nome: "Mesa de Pebolim Opal",
      categoria: "pebolim",
      estilo: "Elegante — Sofisticada",
      descricao: "Mesa de pebolim elegante com base em aço inox e estrutura em madeira nobre. Perfeita combinação de estilo e diversão.",
      descricaoCompleta: "A Mesa de Pebolim Opal oferece elegância e diversão em perfeita harmonia. Com base em aço inox disponível em múltiplos acabamentos e estrutura em madeiras nobres selecionadas, é a escolha ideal para ambientes que valorizam sofisticação e entretenimento de qualidade.",
      caracteristicas: [
        "Dimensões: 150x080x085cm",
        "Base aço inox: Polido, Escovado, Off White, Preto, Cinza",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Design elegante",
        "6 bolinhas incluídas"
      ],
      especificacoes: {
        dimensoes: "150x080x085cm",
        peso: "Aproximadamente 85kg",
        material: "Aço inox, madeira nobre",
        acabamento: "Elegante sofisticado",
        garantia: "4 anos",
        instalacao: "Incluída"
      },
      acessorios: "6 bolinhas",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/S1kJp5n.jpg"
    },
    {
      id: 14,
      nome: "Mesa de Pebolim Berilo",
      categoria: "pebolim",
      estilo: "Clássica — Tradicional",
      descricao: "Mesa de pebolim clássica com base em aço inox e estrutura em madeira nobre. Design tradicional com qualidade contemporânea.",
      descricaoCompleta: "A Mesa de Pebolim Berilo mantém a tradição do pebolim com qualidade moderna. Base em aço inox com opções de acabamento e estrutura em madeiras nobres garantem durabilidade e estilo para anos de diversão em família.",
      caracteristicas: [
        "Dimensões: 150x080x085cm",
        "Base aço inox: Polido, Escovado, Off White, Preto, Cinza",
        "Estrutura: Ipê, Ipê Champagne, Garapeira, Marupa",
        "Madeira compensada e lâminas",
        "Design tradicional",
        "Qualidade superior"
      ],
      especificacoes: {
        dimensoes: "150x080x085cm",
        peso: "Aproximadamente 75kg",
        material: "Aço inox, madeira nobre",
        acabamento: "Tradicional premium",
        garantia: "4 anos",
        instalacao: "Incluída"
      },
      acessorios: "Não especificado",
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/S1kJp5n.jpg"
    }
  ]

  // Categorias sem "Aero Hockey"
  const categorias = [
    { id: 'bilhar', nome: 'Mesa de Bilhar' },
    { id: 'pebolim', nome: 'Mesa de Pebolim' },
    { id: 'tenis', nome: 'Tênis de Mesa' },
    { id: 'shuffleboard', nome: 'Shuffleboard' }
  ]

  const produtosFiltrados = produtos.filter(produto => {
    const matchCategoria = produto.categoria === selectedCategory
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
                <div className="space-y-3">
                  {selectedProductDetail.caracteristicas.map((caracteristica: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-[#B4B5AC] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#2A2B26]/80">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acessórios */}
              {selectedProductDetail.acessorios && (
                <div>
                  <h3 className="text-2xl font-semibold text-[#2A2B26] mb-4">Acessórios Inclusos</h3>
                  <div className="bg-[#FEF7F2] rounded-2xl p-6">
                    <p className="text-[#2A2B26]/80">{selectedProductDetail.acessorios}</p>
                  </div>
                </div>
              )}

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
                  Nossos Produtos
                </h1>
                <p className="text-xl text-[#2A2B26]/80">
                  Descubra nossa coleção completa de mesas de jogos premium
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