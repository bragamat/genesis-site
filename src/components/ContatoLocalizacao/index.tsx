import { LocationMarkerIcon, MailIcon } from '@heroicons/react/outline'
import { FaWhatsapp } from 'react-icons/fa'

export default function Example() {
  return (
    <div className="bg-white" id="contato">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Contato
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">Entre em contato</p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaWhatsapp
                    className="h-6 w-6 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a
                    href="https://web.whatsapp.com/send?phone=5511932155396"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (11) 93215-5396
                  </a>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-white-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a href="mailto:contato@genesisassessoria.com">
                    contato@genesisassessoria.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Localização
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Você pode nos encontrar nos endereços:
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <LocationMarkerIcon
                    className="h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>
                    Central - Rua Senador Fonseca nº 1093, sala 21 - Centro -
                    Jundiaí-SP, CEP: 13201-017
                  </p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <LocationMarkerIcon
                    className="h-6 w-6 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>
                    Posto de atendimento - Falcon Armas Tatuapé - Rua Cantagalo
                    nº 787 - Tatuapé - São Paulo-SP, CEP: 03319-000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
