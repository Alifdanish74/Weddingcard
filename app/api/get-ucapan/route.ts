// app/api/get-ucapan/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export const dynamic = 'force-dynamic';

export const GET = async (req: NextRequest) => {
  try {
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

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!B:H",
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        ucapan: [],
      });
    }

    const ucapanData = rows.slice(1).map(row => ({
      name: row[0],
      ucapan: row[6],
    }));

    const res = NextResponse.json({
      ucapan: ucapanData,
    });
    res.headers.set('Cache-Control', 'no-cache, must-revalidate, proxy-revalidate');
    res.headers.set('Pragma', 'no-cache');
    res.headers.set('Expires', '0');

    return res;

  } catch (e) {
    console.error(e);
    return NextResponse.json({
      message: 'Something went wrong'
    }, {
      status: 500,
    });
  }
}
