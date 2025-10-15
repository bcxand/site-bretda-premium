import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2A2B26] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ae25e4ce-0708-4d92-b7d7-467ba30f4e6c.svg" 
                alt="Bretda Logo" 
                className="h-8 w-auto mb-4 cursor-pointer"
              />
            </Link>
            <p className="text-[#FEF7F2]/80 text-sm">
              Elevando o entretenimento para um patamar de luxo
            </p>
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
  )
}