export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    console.log({ name, email });

    return res.status(200).json({
      mensagem: "Dados recebidos com sucesso!",
      dados: { name, email },
    });
  }
}
