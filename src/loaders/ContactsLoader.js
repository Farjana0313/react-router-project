import { getContacts } from "../contacts";

export async function getContactsloader() {
    const contacts = await getContacts();
    return { contacts };
}