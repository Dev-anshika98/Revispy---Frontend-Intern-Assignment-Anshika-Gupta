import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // or use "SMTP" settings for other providers
  auth: {
    user: "g.anshikacreative@gmail.com", // Your Gmail or SMTP email
    pass: "hqyj cfvw ayom tgch", // App password or real password (use .env for security)
  },
});

export const sendVerificationEmail = async (to, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${code}`,
    html: `<p>Your verification code is: <strong>${code}</strong></p>`,
  };

  await transporter.sendMail(mailOptions);
};
