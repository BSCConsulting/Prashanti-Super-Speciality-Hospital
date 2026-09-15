import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabase } from "@/lib/supabase";
import { validateAppointment } from "@/lib/validate-appointment";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!validateAppointment(body)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide patient name, a valid phone number, department, and preferred date (YYYY-MM-DD).",
        },
        { status: 400 },
      );
    }

    const row = {
      patient_name: body.patient_name.trim(),
      phone: body.phone.trim(),
      department: body.department.trim(),
      preferred_date: body.preferred_date,
      status: "Pending",
    };

    let supabase;
    try {
      supabase = getSupabase();
    } catch {
      console.error("Supabase env missing");
      return NextResponse.json(
        {
          success: false,
          message:
            "Booking desk is temporarily unavailable online. Please call 08742-222424.",
        },
        { status: 503 },
      );
    }

    const { data, error } = await supabase
      .from("patient_inquiries")
      .insert(row)
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Could not save your inquiry. Please try again or call the helpline.",
        },
        { status: 500 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const doctor =
          typeof body.doctor === "string" ? body.doctor : undefined;
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "bsc.consulting123@gmail.com",
          subject: `New appointment inquiry — ${row.patient_name}`,
          html: `
            <h2>Prashanthi Hospital — New Patient Inquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(row.patient_name)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(row.phone)}</p>
            <p><strong>Department:</strong> ${escapeHtml(row.department)}</p>
            <p><strong>Preferred date:</strong> ${escapeHtml(row.preferred_date)}</p>
            ${doctor ? `<p><strong>Doctor:</strong> ${escapeHtml(doctor)}</p>` : ""}
            <p><strong>Status:</strong> Pending</p>
            <p><strong>Inquiry ID:</strong> ${data?.id ?? "n/a"}</p>
          `,
        });
      } catch (emailErr) {
        console.error("Resend email error:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your appointment request has been received. Our desk will contact you shortly.",
      id: data?.id,
    });
  } catch (err) {
    console.error("Appointment API error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Unexpected server error. Please call 08742-222424.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
