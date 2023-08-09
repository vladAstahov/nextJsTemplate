export const makeRequest = async <T>({
    url,
    method = 'GET',
    body
}: {
    url: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: Record<string, unknown>
}): Promise<T> => fetch(url, {
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    ...(method !== 'GET' && {
        body: JSON.stringify(body)
    })
}).then(response => response.json())