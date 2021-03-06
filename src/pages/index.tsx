import Image from 'next/image'
import NossaHistoria from 'components/NossaHistoria'
import NossosServicos from 'components/NossosServicos'
import NossaMissao from 'components/NossaMissao'

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover"
                  src="/img/first-image-gun-02.jpg"
                  alt="Main header image"
                  layout="fill"
                />
                <div className="
                absolute inset-0 bg-gradient-to-r
                from-blue-800 to-indigo-700 mix-blend-multiply
                " />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Assessoria completa para você se tornar um Atirador
                    Esportivo ou a obter a Posse de Arma de Fogo
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl"></p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NossosServicos />
        <NossaHistoria />
        <NossaMissao />

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Tem mais dúvidas?</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                entre em contato com a gente!
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="https://web.whatsapp.com/send?phone=5511932155396"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/img/wpp-button.png"
                  width={300}
                  height={100}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
