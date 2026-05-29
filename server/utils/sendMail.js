const { configMailer, nodemailer } = require("../config/configNodeMailer")

const sendMail = async (receiver,token) => {
    try {
    const transporter = await configMailer()
    console.log("Server is ready to take our messages");
    const info = await transporter.sendMail({
        from: "ChillStreamingMovieCorp@gmail.com",
        to: receiver,
        subject: "Verifikasi Email",
        text: `Silahkan verifikasi dengan token berikut: ${token}`,
        html: `<b>Silahkan verifikasi dengan token berikut: ${token}</b>`
    })

    console.log("Message Sent! ", info.messageId)
    return nodemailer.getTestMessageUrl(info)
  } catch (err) {
    console.error(err);
  }
}

module.exports = { sendMail }
 
