export default function handler(req, res) {
  res.status(200).json({
    information: [
      {
        website: "TasteIran",
        domain: "www.tasteiran.net",
        mailer: "tasteiran.on.crisp.email",
        logo: "https://storage.crisp.chat/users/avatar/website/9962f40f5fbf7800/tasteiranlogo400_1kspmle.jpg",
      }
    ,
      {
        email: "info@tasteiran.net",
        phone: "+989125050604",
        telegram: "aminkarimi87",
        twitter: "tasteirannet",
      },
    ,]
  });
}
