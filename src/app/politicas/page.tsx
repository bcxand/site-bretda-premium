'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PoliticasPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#FEF7F2] pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header da Página */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-[#DEOEDA] rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#2A2B26]" />
          </button>
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-[#2A2B26]">
              Políticas e Privacidade
            </h1>
            <p className="text-lg text-[#2A2B26]/80 mt-2">
              Termos, condições e políticas da Bretda
            </p>
          </div>
        </div>

        {/* Conteúdo das Políticas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
          
          {/* Políticas de Trocas, Devoluções e Reembolso */}
          <section>
            <h2 className="text-3xl font-semibold text-[#2A2B26] mb-6 border-b-2 border-[#B4B5AC] pb-3">
              Políticas de Trocas, Devoluções e Reembolso
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Condições para Troca ou Devolução</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed mb-4">
                  A equipe Bretda está constantemente investindo em políticas para que nossos clientes sempre saiam satisfeitos.
                  Você pode solicitar a troca ou devolução de um produto em até 7 dias corridos após o recebimento do mesmo.
                </p>
                
                <p className="text-[#2A2B26]/80 leading-relaxed mb-4">
                  Precisam ser observadas as seguintes condições:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-[#2A2B26]/80 ml-4">
                  <li>O produto deve ser devolvido em sua embalagem original;</li>
                  <li>O produto deve ser devolvido sem indícios de uso ou consumo, isto é, da forma que foi recebido;</li>
                  <li>O produto deve ser devolvido com etiquetas (ou protetores) afixados, manuais e todos os acessórios que o acompanhem;</li>
                  <li>Não realizamos trocas de produtos com tamanho inadequado para o cliente: disponibilizamos as medidas em centímetros de nossos produtos para não haver erro na escolha do tamanho.</li>
                </ul>
                
                <p className="text-[#2A2B26]/80 leading-relaxed mt-4">
                  Conforme o Código de Defesa do Consumidor – Artigo 18, não existe obrigação legal do lojista de realizar trocas por motivos de arrependimento do consumidor quanto à cor, tamanho, modelo ou qualquer outra hipótese;
                </p>
                
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  Não realizamos trocas de produtos sob encomenda (modelos, cores e tamanhos personalizados pelo cliente) ou que já tenham sido usados.
                </p>
                
                <div className="bg-[#FEF7F2] p-4 rounded-lg border-l-4 border-[#B4B5AC] mt-4">
                  <p className="text-[#2A2B26] font-semibold">
                    IMPORTANTE: não aceitaremos devoluções caso as condições acima não sejam respeitadas.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Como Solicitar Troca ou Devolução</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed mb-4">
                  Envie um e-mail para <a href="mailto:contato@bretda.com.br" className="text-[#B4B5AC] hover:underline">contato@bretda.com.br</a> e informe:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-[#2A2B26]/80 ml-4">
                  <li>Nome do produto;</li>
                  <li>Número do pedido;</li>
                  <li>E-mail cadastrado na compra;</li>
                  <li>Motivo da troca ou devolução;</li>
                  <li>Vídeo que comprove o defeito.</li>
                </ul>
                
                <p className="text-[#2A2B26]/80 leading-relaxed mt-4">
                  Confirmadas todas as informações, informaremos o endereço para devolução e realizaremos o ressarcimento do valor pago pelo produto e pelo frete.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Formas de Ressarcimento</h3>
                <ul className="list-disc list-inside space-y-2 text-[#2A2B26]/80 ml-4">
                  <li><strong>Estorno no cartão de crédito:</strong> o estorno pode aparecer em até duas faturas após a conclusão da devolução pelo gateway de pagamento;</li>
                  <li><strong>TED:</strong> transferência para a conta do cliente, que pode ser realizada em até 30 dias úteis após a confirmação da devolução.</li>
                </ul>
                <p className="text-[#2A2B26]/80 leading-relaxed mt-4">
                  A transferência não poderá ser feita em conta de terceiros.
                </p>
              </div>
            </div>
          </section>

          {/* Política de Privacidade */}
          <section>
            <h2 className="text-3xl font-semibold text-[#2A2B26] mb-6 border-b-2 border-[#B4B5AC] pb-3">
              Política de Privacidade
            </h2>
            
            <div className="space-y-6">
              <p className="text-[#2A2B26]/80 leading-relaxed">
                A Bretda assume o compromisso com a privacidade e segurança de seus clientes durante todo o processo de navegação e compra em nosso site.
              </p>
              
              <p className="text-[#2A2B26]/80 leading-relaxed">
                Dados cadastrais como nome, telefone, endereço e CPF nunca serão vendidos ou disponibilizados a terceiros, exceto quando obrigatórios para entrega e cobrança.
              </p>
              
              <p className="text-[#2A2B26]/80 leading-relaxed">
                Esses dados são fundamentais para garantir que seu pedido chegue com segurança e dentro do prazo.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">LGPD – Lei Geral de Proteção de Dados</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  A Lei nº 13.709/2018 regula o tratamento de dados pessoais por parte de empresas públicas e privadas.
                  A Bretda cumpre integralmente as exigências da LGPD, garantindo que seus dados sejam tratados com segurança e transparência.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Cookies</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed mb-4">
                  Cookies são pequenos arquivos de texto enviados para seu navegador que registram informações sobre sua navegação no site.
                </p>
                
                <p className="text-[#2A2B26]/80 leading-relaxed mb-4">Usamos cookies para:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2A2B26]/80 ml-4">
                  <li>Reconhecer seu navegador e dispositivo;</li>
                  <li>Entender suas preferências;</li>
                  <li>Melhorar sua experiência de compra.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Tipos de Cookies Utilizados</h3>
                <ul className="list-disc list-inside space-y-2 text-[#2A2B26]/80 ml-4">
                  <li><strong>Cookies Primários:</strong> emitidos pelo domínio www.bretda.com.br, para identificar idioma, local e preferências básicas;</li>
                  <li><strong>Cookies de Sessão:</strong> ativos temporariamente, expiram ao fechar o navegador;</li>
                  <li><strong>Cookies Persistentes:</strong> lembram suas preferências mesmo após sair do site, ajudando a melhorar futuras visitas;</li>
                  <li><strong>Cookies de Terceiros:</strong> utilizados em conteúdos incorporados (como vídeos do YouTube). Recomendamos consultar as políticas de privacidade desses serviços.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Uso dos Dados Pessoais</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  Os dados fornecidos são utilizados exclusivamente para o envio do produto e aprimoramento da experiência de compra.
                  Mantemos todas as informações em sigilo absoluto e com segurança automatizada.
                </p>
                <p className="text-[#2A2B26]/80 leading-relaxed mt-4">
                  Evite compartilhar sua senha com terceiros para garantir total proteção da sua conta.
                </p>
              </div>
            </div>
          </section>

          {/* Termos de Serviço */}
          <section>
            <h2 className="text-3xl font-semibold text-[#2A2B26] mb-6 border-b-2 border-[#B4B5AC] pb-3">
              Termos de Serviço
            </h2>
            
            <div className="space-y-6">
              <p className="text-[#2A2B26]/80 leading-relaxed">
                Todas as informações pessoais recolhidas serão usadas para tornar sua visita ao site da Bretda o mais produtiva e agradável possível.
                A confidencialidade dos dados pessoais dos usuários é prioridade absoluta para nós.
              </p>
              
              <p className="text-[#2A2B26]/80 leading-relaxed">
                A utilização do site implica aceitação deste acordo.
                A Bretda reserva-se ao direito de alterá-lo sem aviso prévio, recomendando a consulta periódica desta página.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Anúncios e Cookies de Publicidade</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  Como outros sites, coletamos informações contidas nos anúncios (endereço IP, ISP, navegador, tempo de visita, páginas acessadas etc.).
                  O Google, como fornecedor terceirizado, utiliza cookies (como o DoubleClick DART) para exibir anúncios personalizados com base em suas visitas anteriores a sites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Ligações para Sites de Terceiros</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  O site da Bretda pode conter links para outros sites que julgamos úteis aos nossos visitantes.
                  No entanto, nossa política de privacidade não se aplica a sites de terceiros, e não nos responsabilizamos por seu conteúdo ou práticas.
                </p>
              </div>
            </div>
          </section>

          {/* Políticas de Envio e Prazo */}
          <section>
            <h2 className="text-3xl font-semibold text-[#2A2B26] mb-6 border-b-2 border-[#B4B5AC] pb-3">
              Políticas de Envio e Prazo
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Cuidados com Endereçamento</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  A Bretda enviará os produtos para o endereço informado no momento da compra.
                  Verifique se o endereço está correto para evitar atrasos ou custos adicionais.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Destinatário Ausente</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  A transportadora realiza duas tentativas de entrega.
                  Se não houver ninguém para receber, o produto retorna ao remetente, sendo necessário o pagamento de novo frete para reenvio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Endereço Incorreto ou Incompleto</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed">
                  A Bretda não se responsabiliza por erros de endereço.
                  Caso a entrega não ocorra por divergência de informação, não haverá reembolso e será necessário o pagamento de novo frete.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Prazos</h3>
                <ul className="list-disc list-inside space-y-2 text-[#2A2B26]/80 ml-4">
                  <li><strong>Processamento:</strong> após confirmação do pagamento, inicia-se fabricação, embalagem e despacho — prazo médio de 30 dias úteis;</li>
                  <li><strong>Envio:</strong> o código de rastreamento é enviado via WhatsApp em até 2 dias úteis após o despacho;</li>
                  <li><strong>Entrega:</strong> de 7 a 20 dias úteis após o envio (prazo máximo de 60 dias úteis).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2A2B26] mb-4">Formas de Envio</h3>
                <p className="text-[#2A2B26]/80 leading-relaxed mb-4">
                  A entrega é feita pela empresa ou transportadora. É necessário alguém no local para assinar o termo de recebimento.
                </p>
                
                <p className="text-[#2A2B26]/80 leading-relaxed mb-4">Condições adicionais:</p>
                <ul className="list-disc list-inside space-y-2 text-[#2A2B26]/80 ml-4">
                  <li>Não subimos escadas acima de um pavimento sem elevador;</li>
                  <li>Içamentos não estão inclusos — custos e segurança são de responsabilidade do comprador;</li>
                  <li>Entregas com içamento devem ser previamente agendadas.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Aviso Legal */}
          <section>
            <h2 className="text-3xl font-semibold text-[#2A2B26] mb-6 border-b-2 border-[#B4B5AC] pb-3">
              Aviso Legal
            </h2>
            
            <div className="space-y-6">
              <p className="text-[#2A2B26]/80 leading-relaxed">
                Bem-vindo ao site Bretda.
                O conteúdo deste site é de propriedade exclusiva da empresa e protegido por leis brasileiras e internacionais de direitos autorais.
              </p>
              
              <p className="text-[#2A2B26]/80 leading-relaxed">
                Ao usar o site, você reconhece e aceita estes termos.
                O acesso e a utilização destinam-se apenas a compras pessoais e informativas, sendo proibido uso comercial sem autorização prévia.
              </p>
              
              <p className="text-[#2A2B26]/80 leading-relaxed">
                As cores dos produtos podem variar conforme o monitor do usuário, e a empresa não se responsabiliza por pequenas diferenças.
              </p>
              
              <p className="text-[#2A2B26]/80 leading-relaxed">
                A Bretda se reserva o direito de alterar este aviso legal a qualquer momento.
                Recomendamos consultas periódicas para manter-se atualizado.
              </p>
            </div>
          </section>

        </div>

        {/* Botão de Voltar */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.back()}
            className="bg-[#B4B5AC] text-white px-8 py-3 rounded-full hover:bg-[#2A2B26] transition-all duration-300 font-medium"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  )
}