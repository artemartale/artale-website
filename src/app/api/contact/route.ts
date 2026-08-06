import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      turnstileToken,
      ...formData
    } = body;

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Captcha verification failed",
        },
        {
          status: 400,
        }
      );
    }

    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret:
            process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      }
    );

    const result = await verify.json();

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Captcha verification failed",
        },
        {
          status: 400,
        }
      );
    }

    const parsed =
      contactSchema.safeParse(formData);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
        },
        {
          status: 400,
        }
      );
    }

    const {
      name,
      email,
      phone,
      company,
      message,
    } = parsed.data;

    await resend.emails.send({
      from: "DuoArtAle.com <onboarding@resend.dev>",
      to: "artem.benefis@gmail.com",
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>

        <hr>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}