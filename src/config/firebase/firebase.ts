// firebase.ts
import * as admin from "firebase-admin";
import serviceAccountJson from "./serviceAccountKey.json";

const serviceAccount = serviceAccountJson as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
