export default function handler(req, res) {
    const product = {
        productId: 250,
        description: "taza",
        cuantity:230,
        detail:[
            {
                colour:"red",
                size:"small"
            }
        ]
    }
    res.status(200).json({ product})
  }
  