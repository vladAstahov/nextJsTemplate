export type AdminApi = {
    login: (params: {
        login: string,
        password: string
    }) => Promise<{
        isExist: boolean
    }>
}