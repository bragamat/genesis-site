import Image from 'next/image'
import { servicos } from 'fixtures/features'
import SliderContainer from '../Slider/SliderContainer'

const NossosServicos = () => (
  <>
    <div className="relative pt-16 pb-26 overflow-hidden">
      <div
        aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
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
                  sigla CAC, além de poder adquirir armas de calibre restrito
                  e permitido, munições, equipamentos de recarga, além de poder
                  portar uma arma de fogo em pronto uso nos descolamentos para
                  treinamento e/ou competição em todo território nacional.
                </p>
                <div className="mt-6">
                  <a
                    href="#contato-e-localizacao"
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <SliderContainer
                images={[
                  { src: "/img/carrossel-azul/cp-01.jpeg", width: 700, height: 700, name: 'carroseel-azul'},
                  { src: "/img/carrossel-azul/cp-02.jpeg", width: 700, height: 700, name: 'carroseel-azul'},
                  { src: "/img/carrossel-azul/cp-03.jpeg", width: 700, height: 700, name: 'carroseel-azul'},
                  { src: "/img/carrossel-azul/cp-04.jpeg", width: 700, height: 700, name: 'carroseel-azul'},
                  { src: "/img/carrossel-azul/cp-05.jpeg", width: 700, height: 700, name: 'carroseel-azul'},
                  { src: "/img/carrossel-azul/cp-06.jpeg", width: 700, height: 700, name: 'carroseel-azul'},
                  { src: "/img/carrossel-azul/cp-07.jpeg", width: 700, height: 700, name: 'carroseel-azul'},
                ]}
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
                  comércio, voltadas para sua defesa pessoal.
                </p>
                <div className="mt-6">
                  <a
                    href="#contato-e-localizacao"
                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <SliderContainer
                images={[
                  { src: "/img/carrossel-branco/cb-01.jpeg", width: 700, height: 700, name: 'carroseel-branco'},
                  { src: "/img/carrossel-branco/cb-02.jpeg", width: 700, height: 700, name: 'carroseel-branco'},
                  { src: "/img/carrossel-branco/cb-03.jpeg", width: 700, height: 700, name: 'carroseel-branco'},
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Nossos Serviços
        </h2>
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
                <div className="mt-6">
                  <h4 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {service.name}
                  </h4>
                  <p className="mt-2 text-lg text-gray-500">
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
