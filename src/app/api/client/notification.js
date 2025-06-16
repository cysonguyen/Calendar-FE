import axios from "../index";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getNotificationApi({ userId }) {
    return await axios.get(`${BASE_URL}/notification/${userId}`);
}

export async function updateSeenNotificationApi({ userId }) {
    return await axios.put(`${BASE_URL}/notification/${userId}`);
}
