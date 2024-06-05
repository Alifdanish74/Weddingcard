import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET(req: NextRequest) {
  try {
    console.log("Fetching bookings...");

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

    console.log("Calling Google Sheets API...");
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!H:J",
    });

    const bookings = response.data.values || [];
    console.log("Bookings fetched:", bookings);

    return NextResponse.json({ bookings }, {
      headers: {
        "Cache-Control": "no-cache, max-age=0" // Disable caching
      }
    });

  } catch (e) {
    console.error("Error fetching bookings:", e);
    return NextResponse.json({
      message: 'Something went wrong'
    }, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, max-age=0' // Disable caching
      }
    });
  }
}
