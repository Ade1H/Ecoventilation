const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Loopia SMTP-inställningar
const transporter = nodemailer.createTransport({
  host: "mailcluster.loopia.se",
  port: 587,
  secure: false, // true för port 465
  auth: {
    user: "josef@ecoventilation.se",  // din Loopia-mail
    pass: "Josef2267!"           // lösenord för mailen
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Mail till dig själv
  const mailOptions = {
    from: `"${name}" <${email}>`,   // avsändare
    to: "josef@ecoventilation.se",     // mottagare
    subject: `Ny kontaktförfrågan: ${service}`,
    text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone}\nTjänst: ${service}\nMeddelande: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Något gick fel vid sändning av mail." });
    } else {
      console.log("Mail skickat: " + info.response);
      return res.json({ success: true, message: "Meddelandet skickades!" });
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
