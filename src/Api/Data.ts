import apiClient from "./Api";

 const getIp = async () => {
    try {
        const response = await apiClient.get(
            ``
        )
        return response.data
    } catch (error) {
        console.log('error')
    }
}

export default getIp;