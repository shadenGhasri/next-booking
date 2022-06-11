export default function handler(req, res) {
  res.status(200).json({
    information: [
      {
        website: "TasteIran",
        domain: "www.tasteiran.net",
        mailer: "tasteiran.on.crisp.email",
        logo: "https://storage.crisp.chat/users/avatar/website/9962f40f5fbf7800/tasteiranlogo400_1kspmle.jpg",
      },
    ],
    operators: [
      {
        user_id: "ef7566cc-19f5-426e-a561-6b7cd3002699",
        avatar: null,
        nickname: "Amin",
        timestamp: 1654681885832,
      },
    ],
    channels: [
      {
        email: "info@tasteiran.net",
        phone: "+989125050604",
        telegram: "aminkarimi87",
        twitter: "tasteirannet",
      },
    ],
  });
}
