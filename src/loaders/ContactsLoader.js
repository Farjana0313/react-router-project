import localforage from "localforage";
import { getContacts } from "../contacts";

export async function getContactsloader() {
    // localforage.clear();
    const contacts = await getContacts();
    return { contacts };
}