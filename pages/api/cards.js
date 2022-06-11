export default function handler(req, res) {
    res.status(200).json({
      cards: [
        {
          imageCover: "https://tasteiran.net/Files/food-cooking-varzaneh-tp-110585.jpg",
          organizer: "Local Cooking Tour in Varzaneh",
        },{
            imageCover: "https://tasteiran.net/Files/isfahan-bazaar-walking-tour-tp-625a6f.jpg",
          organizer: "Walking Tour Through the Last Craftsmen of Old Shiraz",
        },
    {
        imageCover: "  https://tasteiran.net/Files/shiraz-old-jobs-old-city-walking-tour-tp-b22bf7.jpg",
          organizer: "Walking Tour Through the Last Craftsmen of Old Shiraz",
    }
  ]
    });
  }

