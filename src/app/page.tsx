'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronLeft, ChevronRight, Search, Filter, Star, Award, Crown } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    observations: ''
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para redirecionar para o topo quando trocar de aba
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Logo no header só aparece quando faz scroll (sai do topo)
  const showHeaderLogo = scrollY > 100
  
  // Logo principal tem efeito de transformação suave para o header
  const logoScale = Math.max(0.3, 1 - scrollY / 800)
  const logoOpacity = Math.max(0, 1 - scrollY / 400)

  // Função para abrir formulário de orçamento
  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName)
    setFormData({ ...formData, product: productName })
    setShowQuoteForm(true)
  }

  // Função para enviar para WhatsApp
  const handleWhatsAppSend = () => {
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*Produto:* ${formData.product}
${formData.observations ? `*Observações:* ${formData.observations}` : ''}

Aguardo retorno. Obrigado!`

    const whatsappUrl = `https://wa.me/5547992259554?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setShowQuoteForm(false)
    setFormData({ name: '', product: '', observations: '' })
  }

  const produtos = [
    {
      id: 1,
      nome: "Mesa de Bilhar Opal",
      categoria: "bilhar",
      estilo: "Moderna — Clean",
      descricao: "Design escultural em aço inox escovado, madeira nobre e madrepérolas. Inspirada em Calatrava, com formas geométricas marcantes e acabamento sofisticado.",
      descricaoCompleta: "A Mesa de Bilhar Opal representa o ápice da sofisticação no entretenimento de luxo. Seu design escultural em aço inox escovado combina perfeitamente com elementos de madeira nobre selecionada e detalhes em madrepérolas que conferem um brilho único. Inspirada na arquitetura de Santiago Calatrava, apresenta formas geométricas marcantes que criam uma presença imponente em qualquer ambiente. Cada detalhe foi pensado para oferecer não apenas funcionalidade excepcional, mas também uma experiência visual incomparável.",
      caracteristicas: ["Aço inox escovado premium", "Madeira nobre selecionada", "Detalhes em madrepérolas", "Design inspirado em Calatrava", "Formas geométricas marcantes", "Acabamento artesanal"],
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/tbx14ho.jpg"
    },
    {
      id: 2,
      nome: "Mesa de Bilhar Zurita",
      categoria: "bilhar",
      estilo: "Sofisticada — Moderna",
      descricao: "Inspirada nos ângulos aerodinâmicos dos veículos europeus de ponta. Projetada com linhas elegantes em forma de V que remetem à precisão da engenharia automotiva de luxo.",
      descricaoCompleta: "A Mesa Zurita traz a elegância dos supercarros europeus para o mundo do bilhar. Suas linhas aerodinâmicas em forma de V criam uma silhueta única que combina velocidade visual com estabilidade funcional. O design sofisticado incorpora elementos que remetem à precisão da engenharia automotiva de luxo, resultando em uma peça que é tanto uma mesa de jogos quanto uma obra de arte contemporânea.",
      caracteristicas: ["Design aerodinâmico", "Linhas em forma de V", "Inspiração automotiva europeia", "Estrutura de alta precisão", "Acabamento premium", "Estética contemporânea"],
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/vSFS3BJ.jpg"
    },
    {
      id: 3,
      nome: "Mesa de Bilhar Aurora",
      categoria: "bilhar",
      estilo: "Atemporal — Dinâmica",
      descricao: "Base de metal em formato de asas de borboletas com tampo de madeira nobre e elementos decorativos de madrepérolas que simbolizam transformação e elegância.",
      descricaoCompleta: "A Mesa Aurora captura a delicadeza e a força da natureza em seu design único. Sua base metálica esculpida em formato de asas de borboleta simboliza transformação e elegância, enquanto o tampo em madeira nobre proporciona a superfície de jogo perfeita. Os elementos decorativos em madrepérolas adicionam um toque de sofisticação que reflete a luz de forma mágica, criando uma atmosfera única em qualquer ambiente.",
      caracteristicas: ["Base em formato de asas de borboleta", "Tampo em madeira nobre", "Elementos em madrepérolas", "Design inspirado na natureza", "Estrutura metálica esculpida", "Jogo de luz único"],
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/84N4iq9.jpg"
    },
    {
      id: 4,
      nome: "Mesa de Bilhar Citrino",
      categoria: "bilhar",
      estilo: "Atemporal — Elegante",
      descricao: "Feita à mão com base curva abaulada em acrílico, juntas de níquel cromado e tabelas de jogo em couro natural. Uma obra-prima do artesanato contemporâneo.",
      descricaoCompleta: "A Mesa Citrino é uma obra-prima do artesanato contemporâneo. Sua base curva abaulada em acrílico de alta qualidade cria um efeito visual impressionante, como se a mesa flutuasse no ambiente. As juntas em níquel cromado garantem durabilidade e adicioam um brilho sofisticado, enquanto as tabelas em couro natural proporcionam o toque final de luxo e conforto durante o jogo.",
      caracteristicas: ["Base curva em acrílico premium", "Juntas de níquel cromado", "Tabelas em couro natural", "Produção artesanal", "Efeito visual flutuante", "Materiais de alta qualidade"],
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/qIkvoGG.jpg"
    },
    {
      id: 5,
      nome: "Mesa de Bilhar Espinela",
      categoria: "bilhar",
      estilo: "Imponente — Autêntica",
      descricao: "Base assimétrica cria silhueta flutuante livre, envolvida de madeira nobre e elementos decorativos de madrepérolas que desafiam as convenções do design.",
      descricaoCompleta: "A Mesa Espinela desafia as convenções com sua base assimétrica que cria uma silhueta flutuante única. Esta ousadia no design é equilibrada pela nobreza da madeira selecionada que envolve toda a estrutura, criando um contraste harmonioso entre inovação e tradição. Os elementos decorativos em madrepérolas são estrategicamente posicionados para realçar as linhas arquitetônicas da peça.",
      caracteristicas: ["Base assimétrica inovadora", "Silhueta flutuante", "Madeira nobre envolvente", "Elementos em madrepérolas", "Design arquitetônico", "Equilíbrio visual único"],
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/LvAecZ7.jpg"
    },
    {
      id: 6,
      nome: "Mesa de Bilhar Âmbar",
      categoria: "bilhar",
      estilo: "Prática — Minimalista",
      descricao: "Detalhes em laser nas curvas do aço inox com elementos decorativos de madrepérolas nas tabelas de madeira nobre. A perfeição do minimalismo funcional.",
      descricaoCompleta: "A Mesa Âmbar representa a perfeição do minimalismo funcional. Os detalhes gravados a laser nas curvas do aço inox demonstram a precisão tecnológica aplicada ao design, enquanto os elementos de madrepérolas nas tabelas de madeira nobre adicionam sofisticação sem comprometer a simplicidade. É a escolha ideal para ambientes que valorizam a elegância discreta.",
      caracteristicas: ["Detalhes a laser no aço inox", "Design minimalista", "Tabelas em madeira nobre", "Elementos em madrepérolas", "Precisão tecnológica", "Elegância discreta"],
      preco: "Sob consulta",
      imagem: "https://i.imgur.com/914OuJ9.jpg"
    },
    {
      id: 7,
      nome: "Mesa de Pebolim Berilo",
      categoria: "pebolim",
      estilo: "Clássica — Clean",
      descricao: "Base aberta com curvas amplas em madeira nobre abaulada, elementos artesanais em madeira nobre.",
      descricaoCompleta: "A Mesa de Pebolim Berilo combina tradição e modernidade em um design atemporal. Sua base aberta com curvas amplas em madeira nobre abaulada proporciona não apenas estabilidade excepcional, mas também uma estética que complementa qualquer ambiente sofisticado. Os elementos artesanais em madeira nobre são trabalhados à mão por mestres artesãos, garantindo que cada peça seja única.",
      caracteristicas: ["Base aberta com curvas amplas", "Madeira nobre abaulada", "Elementos artesanais únicos", "Trabalho manual especializado", "Design atemporal", "Estabilidade excepcional"],
      preco: "Sob consulta"
    },
    {
      id: 8,
      nome: "Mesa de Pebolim Âmbar",
      categoria: "pebolim",
      estilo: "Atemporal — Sofisticada",
      descricao: "Detalhes em laser nas curvas do aço inox com elegância inegável e estilo incontestável.",
      descricaoCompleta: "A Mesa de Pebolim Âmbar eleva o jogo tradicional a um novo patamar de sofisticação. Os detalhes gravados a laser nas curvas do aço inox criam padrões geométricos que capturam e refletem a luz de forma única. Cada elemento foi projetado para proporcionar não apenas funcionalidade superior, mas também uma presença visual que transforma qualquer ambiente em um espaço de entretenimento de luxo.",
      caracteristicas: ["Detalhes a laser exclusivos", "Curvas em aço inox", "Padrões geométricos únicos", "Jogo de luz sofisticado", "Funcionalidade superior", "Presença visual marcante"],
      preco: "Sob consulta"
    },
    {
      id: 9,
      nome: "Mesa de Pebolim Opal",
      categoria: "pebolim",
      estilo: "Escultural — Elegante",
      descricao: "Base em aço inox escovado, madeira nobre e elementos artesanais, exemplo superior de formas geométricas contrastantes.",
      descricaoCompleta: "A Mesa de Pebolim Opal é uma obra de arte funcional que demonstra como o design pode elevar um jogo tradicional. Sua base em aço inox escovado proporciona durabilidade e um acabamento premium, enquanto os elementos em madeira nobre adicionam calor e sofisticação. Os detalhes artesanais criam formas geométricas contrastantes que resultam em uma peça verdadeiramente escultural.",
      caracteristicas: ["Base em aço inox escovado", "Elementos em madeira nobre", "Detalhes artesanais únicos", "Formas geométricas contrastantes", "Design escultural", "Funcionalidade premium"],
      preco: "Sob consulta"
    },
    {
      id: 10,
      nome: "Tênis de Mesa Cobal",
      categoria: "tenis",
      estilo: "Elegante — Versátil",
      descricao: "O jogo perfeito para competições entre familiares e amigos.",
      descricaoCompleta: "A Mesa de Tênis Cobal foi projetada para proporcionar experiências inesquecíveis em família e entre amigos. Sua versatilidade permite tanto jogos casuais quanto competições mais sérias, sempre mantendo o padrão de qualidade Bretda. O design elegante se adapta perfeitamente a diferentes ambientes, desde salas de jogos residenciais até espaços corporativos de entretenimento.",
      caracteristicas: ["Design versátil", "Ideal para família e amigos", "Qualidade competitiva", "Adaptável a diferentes ambientes", "Construção durável", "Estética elegante"],
      preco: "Sob consulta"
    },
    {
      id: 11,
      nome: "Tênis de Mesa Citrino",
      categoria: "tenis",
      estilo: "Clássica — Refinada",
      descricao: "Tamanho olímpico, feita de acrílico de 15 mm, estética cristalina, forte e durável.",
      descricaoCompleta: "A Mesa de Tênis Citrino atende aos mais altos padrões internacionais com suas dimensões olímpicas oficiais. Construída com acrílico de 15 mm de espessura, oferece uma superfície de jogo excepcional com estética cristalina única. A transparência do material cria um efeito visual impressionante, enquanto a resistência garante durabilidade para uso intensivo. É a escolha perfeita para quem busca performance profissional com design sofisticado.",
      caracteristicas: ["Dimensões olímpicas oficiais", "Acrílico de 15 mm", "Estética cristalina", "Superfície de jogo premium", "Resistência excepcional", "Design transparente único"],
      preco: "Sob consulta"
    },
    {
      id: 12,
      nome: "Shuffleboard Âmbar",
      categoria: "shuffleboard",
      estilo: "Dinâmica — Imponente",
      descricao: "O jogo perfeito para competições entre familiares e amigos.",
      descricaoCompleta: "O Shuffleboard Âmbar traz toda a tradição deste jogo clássico com o refinamento característico da Bretda. Sua presença imponente e design dinâmico fazem dele o centro de atenção em qualquer ambiente. Perfeito para reunir família e amigos em competições divertidas, combina funcionalidade excepcional com uma estética que impressiona. Cada detalhe foi pensado para proporcionar anos de entretenimento com estilo.",
      caracteristicas: ["Design imponente", "Tradição do jogo clássico", "Ideal para reuniões familiares", "Funcionalidade excepcional", "Estética impressionante", "Durabilidade superior"],
      preco: "Sob consulta"
    }
  ]

  const categorias = [
    { id: 'todos', nome: 'Todos os Produtos' },
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

  const renderHome = () => (
    <div className="min-h-screen">
      {/* Hero Section com Fundo da Imagem Por_Sol.jpg */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        style={{
          backgroundImage: `url('https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/499aa2c6-fe83-44b0-bc29-9aed5267a257.jpg')`,
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
            <button onClick={() => handleTabChange('home')}>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ae25e4ce-0708-4d92-b7d7-467ba30f4e6c.svg" 
                alt="Bretda Logo" 
                className="h-16 md:h-20 w-auto cursor-pointer"
              />
            </button>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white text-center mb-6 leading-tight">
            Elevando o entretenimento<br />
            <span className="font-semibold text-[#FEF7F2]">para um patamar de Luxo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#FEF7F2]/90 text-center mb-12 max-w-2xl leading-relaxed">
            Excelência na sua diversão
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => handleTabChange('produtos')}
              className="bg-[#B4B5AC] text-[#2A2B26] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#DEOEDA] transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
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
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#B4B5AC] to-[#DEOEDA] px-4 py-2 rounded-full">
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
                  onClick={() => handleQuoteRequest('Mesa de Bilhar Opal')}
                  className="group relative bg-gradient-to-r from-[#B4B5AC] to-[#DEOEDA] text-[#2A2B26] px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
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
                <div className="absolute inset-0 bg-gradient-to-tl from-[#DEOEDA]/10 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                
                {/* Container Principal da Imagem */}
                <div className="relative bg-gradient-to-br from-[#FEF7F2] to-[#DEOEDA] p-8 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  {/* Imagem da Mesa Opal */}
                  <div className="aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/31a1aa6f-92f6-44cc-8bb4-cd92f197672d.jpg" 
                      alt="Mesa de Bilhar Opal - Design Escultural Premium" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Badge de Qualidade */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#B4B5AC] to-[#DEOEDA] text-[#2A2B26] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
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
                          {produtos.find(p => p.nome.includes(produto.nome))?.descricao || "Produto premium da linha Bretda"}
                        </p>
                        <button 
                          onClick={() => handleQuoteRequest(`Mesa ${produto.nome}`)}
                          className="bg-[#B4B5AC] text-white px-6 py-3 rounded-full hover:bg-[#2A2B26] transition-all duration-300 font-medium"
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
                    index === currentSlide ? 'bg-[#B4B5AC]' : 'bg-[#DEOEDA]'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => handleTabChange('produtos')}
              className="border-2 border-[#B4B5AC] text-[#B4B5AC] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#B4B5AC] hover:text-white transition-all duration-300"
            >
              Ver Todos os Produtos
            </button>
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
            onClick={() => handleQuoteRequest('Consulta Geral')}
            className="bg-[#B4B5AC] text-[#2A2B26] px-12 py-4 rounded-full text-lg font-medium hover:bg-[#FEF7F2] transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento
          </button>
        </div>
      </section>
    </div>
  )

  const renderProdutos = () => (
    <div className="min-h-screen bg-[#FEF7F2] pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-4">
            Conheça nossos Produtos
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
                  ? 'bg-gradient-to-r from-[#B4B5AC] to-[#DEOEDA] text-white shadow-xl'
                  : 'bg-white text-[#2A2B26] hover:bg-gradient-to-r hover:from-[#B4B5AC] hover:to-[#DEOEDA] hover:text-white border border-[#B4B5AC]/30 hover:shadow-lg'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Produtos por Categoria - Seções Premium */}
        <div className="space-y-20">
          {categorias.filter(cat => selectedCategory === 'todos' || selectedCategory === cat.id).map(categoria => {
            if (categoria.id === 'todos') return null
            
            const produtosCategoria = produtos.filter(p => p.categoria === categoria.id)
            if (produtosCategoria.length === 0) return null

            return (
              <section key={categoria.id} className="space-y-16">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-4">
                    {categoria.nome}
                  </h2>
                  <div className="w-24 h-1 bg-[#B4B5AC] mx-auto"></div>
                </div>

                {/* Produtos da Categoria */}
                <div className="space-y-20">
                  {produtosCategoria.map((produto, index) => (
                    <div key={produto.id} className={`grid lg:grid-cols-2 gap-16 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}>
                      {/* Imagem do Produto */}
                      <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B4B5AC]/20 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
                          <div className="relative bg-white p-8 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                              {produto.imagem ? (
                                <img 
                                  src={produto.imagem} 
                                  alt={produto.nome}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-[#DEOEDA]/30 flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-[#B4B5AC]/30 rounded-full flex items-center justify-center">
                                      <Crown className="w-8 h-8 text-[#B4B5AC]" />
                                    </div>
                                    <p className="text-[#2A2B26] text-xl font-semibold">{produto.nome}</p>
                                    <p className="text-[#2A2B26]/60 text-sm">Imagem Premium</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Conteúdo do Produto */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-light text-[#2A2B26] mb-2">
                            {produto.nome}
                          </h3>
                          <p className="text-xl text-[#B4B5AC] font-medium mb-6">
                            {produto.estilo}
                          </p>
                        </div>

                        <p className="text-lg text-[#2A2B26]/80 leading-relaxed">
                          {produto.descricao}
                        </p>

                        {/* Características */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-[#2A2B26]">Características:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {produto.caracteristicas.map((caracteristica, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#B4B5AC] rounded-full"></div>
                                <span className="text-[#2A2B26]/80 text-sm">{caracteristica}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Preço e Ação */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-6 border-t border-[#DEOEDA]">
                          <div>
                            <span className="text-2xl font-semibold text-[#B4B5AC]">{produto.preco}</span>
                          </div>
                          <div className="flex gap-3">
                            <button 
                              onClick={() => handleQuoteRequest(produto.nome)}
                              className="bg-gradient-to-r from-[#B4B5AC] to-[#DEOEDA] text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 font-medium transform hover:scale-105"
                            >
                              Solicitar Orçamento
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )

  const renderSobre = () => (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-6">
            Sobre a Bretda
          </h1>
          <p className="text-xl text-[#2A2B26]/80 max-w-3xl mx-auto">
            Uma história de excelência, tradição e inovação no mundo do entretenimento de luxo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-light text-[#2A2B26] mb-6">Nossa História</h2>
            <p className="text-lg text-[#2A2B26]/80 leading-relaxed mb-6">
              A Bretda nasceu da paixão por criar experiências únicas de entretenimento. Combinamos tradição artesanal 
              com inovação tecnológica para desenvolver mesas de jogos que são verdadeiras obras de arte.
            </p>
            <p className="text-lg text-[#2A2B26]/80 leading-relaxed">
              Cada peça é cuidadosamente projetada e executada por mestres artesãos, utilizando apenas os materiais 
              mais nobres e técnicas refinadas que garantem durabilidade e beleza incomparáveis.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6d62fc4a-e671-49de-9110-2ad765b6ae17.jpg" 
              alt="Ambiente sofisticado Bretda com mesa de bilhar" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-[#B4B5AC] mb-4">Mais de 10</div>
            <h3 className="text-xl font-semibold text-[#2A2B26] mb-2">Anos de Experiência</h3>
            <p className="text-[#2A2B26]/80">Tradição e expertise em cada projeto</p>
          </div>
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-[#B4B5AC] mb-4">500+</div>
            <h3 className="text-xl font-semibold text-[#2A2B26] mb-2">Projetos Realizados</h3>
            <p className="text-[#2A2B26]/80">Ambientes transformados em todo o país</p>
          </div>
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-[#B4B5AC] mb-4">100%</div>
            <h3 className="text-xl font-semibold text-[#2A2B26] mb-2">Satisfação</h3>
            <p className="text-[#2A2B26]/80">Compromisso com a excelência</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContato = () => (
    <div className="min-h-screen bg-[#FEF7F2] pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-[#2A2B26] mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-[#2A2B26]/80">
            Estamos prontos para transformar seu projeto em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-[#2A2B26] mb-8 text-center">Informações de Contato</h2>
            
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#2A2B26] mb-2">Atendimento</h3>
                <p className="text-[#2A2B26]/80">Segunda a Sexta</p>
                <p className="text-[#2A2B26]/80">8h às 18h</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#2A2B26] mb-2">Telefone</h3>
                <p className="text-[#2A2B26]/80">(47) 99225-9554</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#2A2B26] mb-2">Email</h3>
                <p className="text-[#2A2B26]/80">contato@bretda.com.br</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#2A2B26] mb-2">Redes Sociais</h3>
                <div className="flex justify-center gap-4">
                  <a href="https://www.instagram.com/bretda.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#B4B5AC] hover:text-[#2A2B26] transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/bretda.com.br" target="_blank" rel="noopener noreferrer" className="text-[#B4B5AC] hover:text-[#2A2B26] transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FEF7F2]">
      {/* Header com Sombra Transparente */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showHeaderLogo ? 'bg-black/20 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Menu Hambúrguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              showHeaderLogo ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo do Header - Só aparece quando faz scroll */}
          <div className={`transition-all duration-700 transform ${
            showHeaderLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <button onClick={() => handleTabChange('home')}>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ae25e4ce-0708-4d92-b7d7-467ba30f4e6c.svg" 
                alt="Bretda Logo" 
                className="h-8 w-auto cursor-pointer"
              />
            </button>
          </div>

          {/* Espaço para manter centralização */}
          <div className="w-10"></div>
        </div>

        {/* Menu Lateral */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-white via-[#FEF7F2] to-[#DEOEDA] shadow-2xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <button onClick={() => { handleTabChange('home'); setIsMenuOpen(false); }}>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/95c250a1-7412-4169-bfc4-4ef076efaac7.svg" 
                  alt="Bretda Vector" 
                  className="h-8 w-auto cursor-pointer"
                />
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-[#DEOEDA] rounded-lg"
              >
                <X className="w-6 h-6 text-[#2A2B26]" />
              </button>
            </div>
            
            <nav className="space-y-4">
              <button
                onClick={() => {
                  handleTabChange('home')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'home' ? 'bg-[#B4B5AC] text-white' : 'text-[#2A2B26] hover:bg-[#DEOEDA]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  handleTabChange('produtos')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'produtos' ? 'bg-[#B4B5AC] text-white' : 'text-[#2A2B26] hover:bg-[#DEOEDA]'
                }`}
              >
                Produtos
              </button>
              <button
                onClick={() => {
                  handleTabChange('sobre')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'sobre' ? 'bg-[#B4B5AC] text-white' : 'text-[#2A2B26] hover:bg-[#DEOEDA]'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => {
                  handleTabChange('contato')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'contato' ? 'bg-[#B4B5AC] text-white' : 'text-[#2A2B26] hover:bg-[#DEOEDA]'
                }`}
              >
                Contato
              </button>
            </nav>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      {/* Modal do Formulário de Orçamento */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-[#2A2B26]">Solicitar Orçamento</h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="p-2 hover:bg-[#DEOEDA] rounded-lg"
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
                  className="w-full px-4 py-3 border border-[#DEOEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Produto *</label>
                <input 
                  type="text" 
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  className="w-full px-4 py-3 border border-[#DEOEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]" 
                  placeholder="Qual produto você deseja?"
                  required
                />
              </div>

              <div>
                <label className="block text-[#2A2B26] mb-2 font-medium">Observações (opcional)</label>
                <textarea 
                  rows={4} 
                  value={formData.observations}
                  onChange={(e) => setFormData({...formData, observations: e.target.value})}
                  className="w-full px-4 py-3 border border-[#DEOEDA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4B5AC]"
                  placeholder="Descreva detalhes específicos, medidas, cores, ou qualquer observação que possa ajudar no orçamento..."
                />
              </div>

              <button 
                type="button"
                onClick={handleWhatsAppSend}
                disabled={!formData.name || !formData.product}
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
        {activeTab === 'home' && renderHome()}
        {activeTab === 'produtos' && renderProdutos()}
        {activeTab === 'sobre' && renderSobre()}
        {activeTab === 'contato' && renderContato()}
      </main>

      {/* Footer */}
      <footer className="bg-[#2A2B26] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <button onClick={() => handleTabChange('home')}>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ae25e4ce-0708-4d92-b7d7-467ba30f4e6c.svg" 
                  alt="Bretda Logo" 
                  className="h-8 w-auto mb-4 cursor-pointer"
                />
              </button>
              <p className="text-[#FEF7F2]/80 text-sm">
                Elevando o entretenimento para um patamar de luxo
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Atendimento</h3>
              <p className="text-[#FEF7F2]/80 text-sm mb-2">Segunda a Sexta</p>
              <p className="text-[#FEF7F2]/80 text-sm mb-2">8h às 18h</p>
              <p className="text-[#FEF7F2]/80 text-sm">(47) 99225-9554</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <div className="space-y-2">
                <a href="https://www.instagram.com/bretda.com.br/" target="_blank" rel="noopener noreferrer" className="block text-[#FEF7F2]/80 text-sm hover:text-white">Instagram</a>
                <a href="https://www.facebook.com/bretda.com.br" target="_blank" rel="noopener noreferrer" className="block text-[#FEF7F2]/80 text-sm hover:text-white">Facebook</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Email</h3>
              <p className="text-[#FEF7F2]/80 text-sm">contato@bretda.com.br</p>
            </div>
          </div>
          
          <div className="border-t border-[#B4B5AC]/30 mt-8 pt-8 text-center">
            <div className="mb-4">
              <a 
                href="/politicas" 
                className="text-[#FEF7F2]/80 text-sm hover:text-white transition-colors underline"
              >
                Políticas e Privacidade
              </a>
            </div>
            <p className="text-[#FEF7F2]/60 text-sm">© 2025 BRETDA</p>
            <p className="text-[#FEF7F2]/60 text-sm">CNPJ: 54.670.686/0001-57</p>
          </div>
        </div>
      </footer>
    </div>
  )
}