import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  phone: string;
  item: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as SheetForm;

  console.log("Received body:", body);

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

    // Find the next available row in the range
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!H:H", // Check column H to find the next empty row
    });

    const numRows = getRows.data.values ? getRows.data.values.length : 0;
    const nextRow = numRows + 1; // Calculate the next available row

    const range = `Sheet1!H${nextRow}:J${nextRow}`; // Define the target range

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.SHEET_ID,
      range: range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.phone, body.item]],
      },
    });

    console.log("Google Sheets API response:", response.data);

    return NextResponse.json(
      {
        data: response.data,
      },
      {
        headers: {
          "Cache-Control": "no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json(
      {
        message: 'Something went wrong'
      },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    );
  }
}
