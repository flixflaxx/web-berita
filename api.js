export default async function handler(req, res) {
  const { q } = req.query;
  const apiKey = "1b23180e75c14b8aae77473684a17643"; // pakai key kamu sendiri
  const url = `https://newsapi.org/v2/everything?q=${q || "tesla"}&sortBy=publishedAt&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news data" });
  }
}
