'use client';
import axios from "../index";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
console.log('BASE_URL', BASE_URL);


export async function login(formData) {
    return await axios.post(`${BASE_URL}/auth/login`, formData);
};

export async function register(formData) {
    return await axios.post(`${BASE_URL}/auth/register`, formData);
};

export async function getUser(id) {
    return await axios.get(`${BASE_URL}/account/info/${id}`);
};

export async function changePasswordApi(passwordInfo, id) {
    return await axios.put(`${BASE_URL}/account/password/${id}`, passwordInfo);
};

export async function changeInfoApi(info, id) {
    return await axios.patch(`${BASE_URL}/account/info/${id}`, info);
};

export async function getGroupsApi(userId) {
    console.log(BASE_URL);
    return await axios.get(`${BASE_URL}/account/groups/${userId}`);
};

export async function getGroupByQueryApi(query) {
    return await axios.get(`${BASE_URL}/account/groups`, {
        params: query
    });
};

export async function getGroupByIdApi(groupId) {
    return await axios.get(`${BASE_URL}/account/group/${groupId}`);
};

export async function updateGroupApi(groupId, group) {
    return await axios.put(`${BASE_URL}/account/group/${groupId}`, group);
};

export async function createGroupApi(group) {
    return await axios.post(`${BASE_URL}/account/group`, group);
};

export async function deleteGroupApi(groupId) {
    return await axios.delete(`${BASE_URL}/account/group/${groupId}`);
};

export async function getStaffsApi({ id, full_name, email, msnv, username, page, pageSize }) {
    return await axios.get(`${BASE_URL}/account/info`, {
        params: {
            id,
            full_name,
            email,
            msnv,
            username,
            page,
            pageSize
        }
    });
};

export async function createStaffApi(staff) {
    return await axios.post(`${BASE_URL}/account/staff`, staff);
};

export async function importStaffsApi(data) {
    return await axios.post(`${BASE_URL}/account/import`, data);
};


