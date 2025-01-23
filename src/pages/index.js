import { motion } from "framer-motion";

import Image from "next/image";
import Header from "@/components/header";
import Forms from "@/components/forms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-screen mx-auto">
        {/* Section Main Articles */}
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
          {/* Modelo e Losangos */}
          <article className="w-full lg:w-1/3 flex flex-col h-full">
            <div className="relative overflow-hidden lg:overflow-visible">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: "20%", rotate: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 45 }}
                transition={{ duration: 2 }}
                style={{ zIndex: -1 }}
                className="absolute top-[240px] left-[210px] w-[200px] h-[200px] bg-primary z-[-1] rounded-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: "30%", rotate: 40, }}
                animate={{ opacity: 0.3, scale: 1, y: 0, rotate: 45 }}
                transition={{ duration: 3.5 }}
                style={{ zIndex: 10 }}
                className="absolute top-[180px] left-[50px] w-[150px] h-[150px] bg-[#e8401c] z-[1] rounded-2xl"
              />
            </div>

            <div className="flex-grow">
            <motion.div
                initial={{ x: "10%", }}
                animate={{  x: 0, }}
                transition={{ duration: 1.5}}              
              >
              <Image
                src="/assets/images/modelo-mulher.png"
                width={250}
                height={250}
                alt="Mulher modelo olhando para lateral"
                className="mx-auto mt-16 z-[0]"
              />
              </motion.div>
            </div>
          </article>
          {/*FIM Modelo e Losangos */}
        </section>
        {/* FIM Section Main Articles */}

        {/* Section "Rodapé"*/}
        <section className="w-full bg-gray-100 h-[80vh] md:h-[58vh] lg:h-[30vh] flex items-center">
          <div className="w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <article className="bg-white  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="font-tasasemibold text-primary text-xl font-semibold text-gray-800 mb-2">
                Capacitação Acessível &nbsp;

                <i className="fa-solid fa-md fa-hand-holding-dollar"></i>
              </h2>
              <p className="font-tasaregular text-gray-600">
                Desenvolva habilidades digitais e abra portas para novas
                oportunidades.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="font-tasasemibold text-primary text-xl font-semibold text-gray-800 mb-2">
                Estude Online &nbsp;

                <i className="fa-solid fa-wifi"></i>
              </h2>
              <p className="font-tasaregular text-gray-600">
                Aprenda, trabalhe de qualquer lugar e conquiste sua liberdade
                financeira.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="font-tasasemibold text-primary text-xl font-semibold text-gray-800 mb-2">
                Transformação Pessoal &nbsp;

                <i className="fa-solid fa-user-graduate"></i>
              </h2>
              <p className="font-tasaregular text-gray-600">
                Adquira novos conhecimentos e transforme sua vida com a Impulse.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="font-tasasemibold text-primary text-xl font-semibold text-gray-800 mb-2">
              Renda Extra &nbsp;

                <i className="fa-solid fa-money-bill-trend-up"></i>
              </h2>
              <p className="font-tasaregular text-gray-600">
                Ganhe dinheiro online com as habilidades que você aprende com a
                Impulse.
              </p>
            </article>
          </div>
        </section>
        {/*FIM Section "Rodapé"*/}
      </main>
    </div>
  );
}
