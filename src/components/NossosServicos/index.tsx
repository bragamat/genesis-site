import Image from 'next/image'
import { servicos } from 'fixtures/features'

const NossosServicos = () => (
  <>
    <div className="relative pt-16 pb-26 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <Image
                  className="h-6 w-6 rounded-full"
                  src="/img/exercito-brasileiro-logo.png"
                  alt=""
                  width={80}
                  height={120}
                />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Concessão de Certificado de Registro no Exército Brasileiro
                  (CR)
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Através do Certificado de Registro (CR), você poderá exercer
                  as atividades de Caçador, Atirador e Colecionador, famosa
                  sigla CAC, além de poder adquirir armas de calibre restrito e
                  permitido, munições, equipamentos de recarga.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Contato
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/img/holding-gun.jpeg"
                alt="Person holding a gun"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <Image
                  className="h-6 w-6 rounded-full"
                  src="/img/policia-federal-logo.png"
                  alt=""
                  width={80}
                  height={120}
                />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Posse de Arma de Fogo através da Polícia Federal
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Através da Posse de Arma de Fogo, o cidadão pode possuir até
                  quatro armas de calibre permitido em sua residência ou
                  comércio. Se muitos possuem uma arma, o criminoso pensaria
                  duas vezes antes de atacar alguém, pois suas chances de sair
                  ileso diminuem.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Contato
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                width={700}
                height={700}
                className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/img/2-people-with-gun.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Nossos Serviços
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-purple-200">
          Aproveite dos nossos serviços
        </p>
        {servicos.map((feature) => (
          <div
            key={feature.name}
            className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-16"
          >
            <span className="flex align-center justify-center">
              <div>
                <Image src={feature.logo} width={80} height={80} />
              </div>
            </span>
            {feature.services.map((service) => (
              <div key={service.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <service.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-base text-purple-200">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
)

export default NossosServicos
