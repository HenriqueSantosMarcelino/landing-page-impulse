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
            <h1 className="text-[28pt] text-white font-fieldssemibold leading-10">
              Transforme a sua vida com renda online.
            </h1>
            <p className="font-fieldsregular">
              Simplificamos sua jornada para a liberdade financeira.
            </p>
          </article>
          <article className="w-full lg:w-1/3 flex flex-col h-full">
            <Forms/>
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
        <section className="w-full bg-gray-100 h-[40vh] flex items-center">
          <article className="w-full p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Título 1
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Descrição ou conteúdo relevante para SEO.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
