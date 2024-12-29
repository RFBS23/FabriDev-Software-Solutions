const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configuración del servicio SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'fabridevsoftwaresolutions@gmail.com',
            pass: 'TU_CONTRASEÑA_DE_APP', // Usa una contraseña de aplicación de Google
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: 'fabridevsoftwaresolutions@gmail.com',
            subject: `Nuevo mensaje de ${name}`,
            text: message,
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        });

        res.status(200).send('Correo enviado con éxito');
    } catch (error) {
        console.error('Error enviando correo:', error);
        res.status(500).send('No se pudo enviar el correo');
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en https://fabridev.vercel.app/es${PORT}`);
});
