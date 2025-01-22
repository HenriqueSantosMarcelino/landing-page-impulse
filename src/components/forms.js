export default function Forms() {
  return (
    <form class="bg-white mt-10 lg:mt-0 mx-5 py-8 px-5 rounded-2xl shadow-2xl">
      <h2 className="text-lg text-black font-tasasemibold leading-5 text-center mb-5">
        Junte-se aos mais de 200 mil alunos <br />
        que já deram o primeiro passo.
      </h2>
      <div class="mb-2">
        <label for="name" class="block text-sm font-medium text-gray-900">
          Nome
        </label>
        <input
          type="name"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 
          focus:outline-none focus:ring-offset-0 
          transition duration-200 ease-in-out 
          focus:ring-opacity-0 focus:ring-opacity-100"
          required
        />
      </div>
      <div class="mb-6">
        <label for="email" class="block text-sm font-medium text-gray-900">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 
          focus:outline-none focus:ring-offset-0 
          transition duration-200 ease-in-out 
          focus:ring-opacity-0 focus:ring-opacity-100"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white bg-primary hover:bg-[#e8401c] focus:ring-1 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        QUERO SABER MAIS
      </button>
      <p className="font-arial text-gray-400 text-[8pt] text-center">
        Ao enviar, você autoriza o envio de materiais promocionais.
      </p>
    </form>
  );
}
