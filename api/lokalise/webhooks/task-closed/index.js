export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.json({ message: "Method Not Allowed" });
  }
  return res.json({
    message: `Hello World!`,
  });
}
