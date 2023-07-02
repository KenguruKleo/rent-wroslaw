import { GoogleSpreadsheet } from 'google-spreadsheet';

let doc: GoogleSpreadsheet
let initialized = false

export const initRemoteData = async () => {
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  doc = new GoogleSpreadsheet(SHEET_ID);

  await doc.useServiceAccountAuth({
    // env var values are copied from service account credentials generated by google
    // see "Authentication" section in docs for more info
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY!.replace(/\\n/gm, "\n"),
  });

  await doc.loadInfo()
  console.log('doc.title', doc.title)

  initialized = true;
}

export const getRemoteDoc = async () => {
  if (initialized) {
    return doc
  }

  await initRemoteData()

  return doc
}

