export default function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email } = req.body;

    console.log("Dados recebidos:", { nome, email });

    return res.status(200).json({
      mensagem: "Dados recebidos com sucesso!",
      dados: { nome, email },
    });
  }
}
