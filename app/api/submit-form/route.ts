import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

type SheetForm = {
  name: string;
  phone: string;
  dewasa: string;
  kanak: string;
  timeslot: string;
  ucapan: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json() as SheetForm;

  try {
    // prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [body.name, body.phone, body.dewasa, body.kanak, body.timeslot, body.ucapan],
        ],
      },
    });

    return NextResponse.json({
      data: response.data,
    });

  } catch (e) {
    console.error(e);
    return NextResponse.json({
      message: 'Something went wrong'
    }, {
      status: 500,
    });
  }
}
