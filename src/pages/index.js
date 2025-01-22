import Image from "next/image";
import Header from "@/components/header";
import Forms from "@/components/forms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-screen mx-auto">
        {/* Primeiro Section */}
        <section className="flex flex-wrap justify-between mt-5 w-[80vw] min-h-[50vh] mx-auto">
          <article className="flex flex-col justify-center w-full lg:w-1/3 p-4">
            <h1 className="text-[34pt] text-white font-fieldssemibold leading-10 mb-2">
              IMPULSE
            </h1>
            <h1 className="text-[28pt] text-white font-fieldssemibold leading-10">
              Transforme a sua vida com renda online.
            </h1>
            <p className="font-fieldsregular">
              Simplificamos sua jornada para a liberdade financeira.
            </p>
          </article>
          <article className="flex flex-col justify-center w-full lg:w-1/3 ">
            <Forms />
          </article>
          <article className="w-full lg:w-1/3 flex flex-col h-full">
            <div className="flex-grow">
              <Image
                src="/assets/images/modelo-mulher.png"
                width={250}
                height={250}
                alt="Mulher modelo olhando para lateral"
                className="mx-auto mt-16"
              />
            </div>
          </article>
        </section>

        {/* Segundo Section */}
        <section className="w-full bg-gray-100 h-[80vh] md:h-[58vh] lg:h-[30vh] flex items-center">
          <div className="w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <article className="bg-white  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Capacitação Acessível
              </h2>
              <p className="text-gray-600">
                Desenvolva habilidades digitais e abra portas para novas
                oportunidades.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Renda Online
              </h2>
              <p className="text-gray-600">
                Aprenda, trabalhe de qualquer lugar e conquiste sua liberdade
                financeira.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Transformação Pessoal
              </h2>
              <p className="text-gray-600">
                Adquira novos conhecimentos e transforme sua vida com a Impulse.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Independência Financeira
              </h2>
              <p className="text-gray-600">
                Ganhe dinheiro online com as habilidades que você aprende com a
                Impulse.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
