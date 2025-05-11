import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, phoneNumber,email, message } =
      await req.json();

    console.log(firstName);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[firstName, lastName, phoneNumber, email, message]],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    return NextResponse.json({ error: `Error submitting the form data` });
  }
}
