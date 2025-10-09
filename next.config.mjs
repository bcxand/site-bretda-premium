/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de imagem para permitir domínios externos
  images: {
    domains: [
      'images.unsplash.com',
      'k6hrqrxuu8obbfwn.public.blob.vercel-storage.com',
      'imgur.com'
    ],
  },
};

export default nextConfig;