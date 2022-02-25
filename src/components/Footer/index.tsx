import Image from 'next/image'
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa'

const Main = () => (
  <footer className="bg-gray-50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-20">
      <div className="md:col-span-1 pt-10 md:pt-0">
        <a href="#">
          <Image
            className="h-8 w-auto sm:h-10 bg-gray-50"
            src="/img/01-logo-genesis-transp.png"
            alt=""
            width={250}
            height={250}
          />
        </a>
      </div>
      <div className="md:col-span-1 pt-10 md:pt-4">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
          ATENDIMENTO
        </h3>
        <p className="mt-4 text-base text-gray-900">(41) 3015-3222</p>
        <a
          href="mailto:atendimento@falconarmas.com.br"
          className="text-base text-gray-900 hover:text-gray-500"
        >
          atendimento@falconarmas.com.br
        </a>
        <p className="text-base text-gray-900">
          Segunda à Sexta: <br />
          09H às 18H
        </p>
        <p className="mt-4 text-base text-gray-900">
          Sábado: <br />
          09H às 13H
        </p>
      </div>
      <div className="md:col-span-2 pt-10 md:pt-4">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
          SIGA-NOS
        </h3>
        <ul className="flex mt-4 ">
          <li className="flex items-center justify-center text-4xl w-12 h-12 rounded-full hover:text-gray-500 mx-2">
            <a href="#">
              <FaInstagramSquare />
            </a>
          </li>
          <li className="flex items-center justify-center text-4xl w-12 h-12 rounded-full hover:text-gray-500 mx-2">
            <a href="#">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-4 mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2022 Genesis Assessoria, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Main
