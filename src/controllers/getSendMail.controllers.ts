import { Request, Response } from "express";
import { Resend } from "resend";

const resend = new Resend("re_2rbcFuTn_6ey6pHhKfPcnra85eUyfz8U2");

export async function sendMail(req: Request, res: Response) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "antoine.vinsonneau34@gmail.com",
      subject: "Message Antoine",
      html: "<p>Ton premier emailBro <strong>HEYY</strong>!</p>",
    });
    return res.status(200).json("Un mail à été envoyé");
  } catch (error) {
    return res.status(400).json("Error here");
  }
}
