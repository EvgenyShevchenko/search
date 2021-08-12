import apiClient from "./Api";

export const getIp = async (ip: string) => {
    try {
        const response = await apiClient.get(
            `/posts`, {
                params: {
                    ip: ip
                }
            }
        )
        return response.data
    } catch (error) {
        console.log('error')
    }
}

export const getFullName = async (fullName: string) => {
    try {
        const response = await apiClient.get(
            `/posts`, {
                params: {
                    fullName: fullName
                }
            }
        )
        return response.data
    } catch (error) {
        console.log('error')
    }
}

export const getEmail = async (email: string) => {
    try {
        const response = await apiClient.get(
            `/posts`, {
                params: {
                    email: email
                }
            }
        )

        return response.data
    } catch (error) {
        console.log('error')
    }
}

export const getNickName = async (nickname: string) => {
    try {
        const response = await apiClient.get(
            `/posts`, {
                params: {
                    nickname: nickname
                }
            }
        )
        return response.data
    } catch (error) {
        console.log('error')
    }
}

export const getPhone = async (phone: string) => {
    try {
        const response = await apiClient.get(
            `/posts`, {
                params: {
                    phone: phone
                }
            }
        )
        return response.data
    } catch (error) {
        console.log('error')
    }
}