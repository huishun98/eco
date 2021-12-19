import { initiativesSheetIndex } from "../../config";
import { GoogleSpreadsheet } from "google-spreadsheet";

async function getInitiativesSheet() {
    const doc = new GoogleSpreadsheet(process.env.VUE_APP_SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
        client_email: process.env.VUE_APP_client_email,
        private_key: atob(process.env.VUE_APP_encoded_private_key),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[initiativesSheetIndex];
    await sheet.loadHeaderRow();
    return sheet
}

export { getInitiativesSheet }