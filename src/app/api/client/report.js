import axios from "../index";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getReportByIdApi(reportId) {
    return await axios.get(`${BASE_URL}/report/${reportId}`);
}

export async function createReportApi({ report }) {
    return await axios.post(`${BASE_URL}/report`, report);
}

export async function updateReportApi({ reportId, report }) {
    return await axios.put(`${BASE_URL}/report/${reportId}`, report);
}

export async function deleteReportApi({ reportId }) {
    return await axios.delete(`${BASE_URL}/report/${reportId}`);
}