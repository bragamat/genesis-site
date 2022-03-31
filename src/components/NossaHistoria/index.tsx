import SliderContainer from '../Slider/SliderContainer'

const NossaHistoria = () => (
  <>
    <div className="relative bg-gray-900" id="nossa-historia">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="ml-12 h-full xl:relative xl:col-start-2">
            <SliderContainer
              images={[
                {
                  src: '/img/carrossel-preto/cp-01.jpeg',
                  name: 'carrossel-preto',
                  className:
                    'h-full w-full object-cover opacity-25 xl:absolute xl:inset-0',
                  height: 490,
                  width: 900
                },
                {
                  src: '/img/carrossel-preto/cp-02.jpeg',
                  name: 'carrossel-preto',
                  height: 490,
                  width: 900,
                  className:
                    'h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                },
                {
                  src: '/img/carrossel-preto/cp-03.jpeg',
                  name: 'carrossel-preto',
                  height: 490,
                  width: 900,
                  className:
                    'h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                }
              ]}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Nossa História
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Gênesis Assessoria
          </p>
          <p className="mt-5 text-lg text-gray-300">
            A Gênesis Assessoria iniciou sua trajetória no ano de 2019,
            idealizada por dois ex-militares do Exército Brasileiro, que notaram
            a carência de uma empresa eficiente no ramo de documentação de
            Produtos Controlados pelo Exército (PCE), que fosse focada no bom
            atendimento e com solução eficaz. Desde então a empresa tem se
            destacado no ramo de assessoria e despachante tornando-se referência
            de confiabilidade.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {/*metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>

          ))*/}
          </div>
        </div>
      </div>
    </div>
  </>
)

export default NossaHistoria
