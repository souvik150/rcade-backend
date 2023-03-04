import nodemailer, { SendMailOptions } from "nodemailer";
import config from "config";
import log from "./logger";

const user = config.get<string>("user");
const pass = config.get<string>("pass");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

async function sendEmail(payload: SendMailOptions) {
  transporter.sendMail(payload, (err, info) => {
    if (err) {
      log.error(err, "Error sending email");
      return;
    }

    log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
}

export default sendEmail;
