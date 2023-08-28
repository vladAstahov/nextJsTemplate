import { makeRequest } from "@/shared/lib/request/makeRequest";
import { AdminApi } from "./types";

const login: AdminApi['login'] = async params => makeRequest({
    url: '/admin/login/api',
    method: 'POST',
    body: params
})

export const adminApi: AdminApi = {
    login
}