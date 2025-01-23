import { useState } from "react";
import { Button, Modal } from "flowbite-react";

export default function Forms() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [mensagem, setMensagem] = useState([]);

  const [openModal, setOpenModal] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("Dados do formulário:", formData);
    e.preventDefault();

    try {
      const response = await fetch("./api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMensagem(data);
      } else {
        setMensagem("Erro ao enviar os dados.");
      }
    } catch (error) {
      setMensagem("Erro de conexão.");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="bg-white mt-10 lg:mt-0 mx-5 py-8 px-5 rounded-2xl shadow-2xl"
    >
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
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 
          focus:outline-none focus:ring-offset-0 
          transition duration-200 ease-in-out 
          focus:ring-opacity-0 focus:ring-opacity-100"
          value={formData.name}
          onChange={handleChange}
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
          name="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 
          focus:outline-none focus:ring-offset-0 
          transition duration-200 ease-in-out 
          focus:ring-opacity-0 focus:ring-opacity-100"
          value={formData.email}
          onChange={handleChange}
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
      {mensagem.mensagem && (
        <>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
              Olá, {mensagem.dados.name.split(" ")[0]}!
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  É incrível ver seu interesse em fazer parte da Impulse e
                  começar a gerar renda online! Em breve, você receberá no email: ''{mensagem.dados.email}'', mais
                  informações sobre como dar os primeiros passos nessa jornada.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button color="failure" className="bg-primary" onClick={() => setOpenModal(false)}>Continuar</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </form>
  );
}
