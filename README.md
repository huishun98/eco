# Eco
(project title to be updated)

This is sustainability project in collaboration with @hxchua. The project is deployed on [Netlify](https://ecosg.netlify.app/).

The tech stack used includes Vue and Google Sheets API.

## Run locally
1. Install dependencies: `npm install`
2. Run the application: `npm run serve`

## Environment variables (required)
- VUE_APP_SPREADSHEET_ID (ID of the Google Sheet to access)
- VUE_APP_client_email (from Google Cloud Console → APIs & Services → (Enable Google Sheets API) → Credentials → Create Credentials (for Service Account))
- VUE_APP_encoded_private_key (a base64-encoded ASCII string generated from the private key in the Service Account credentials from Google Cloud Console)
