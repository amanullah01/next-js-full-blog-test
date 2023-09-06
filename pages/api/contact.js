const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid inputs" });
      return;
    }

    const newMessage = { name, email, message };
    res
      .status(201)
      .json({ message: "Successfully stored message", newMessage: newMessage });
  }
};

export default handler;
