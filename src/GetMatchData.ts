import {getIp, getFullName, getEmail, getNickName, getPhone} from "./Api/DataApi";
import Store from "./store/store"

type formData = string

const GetMatchData = async (formData: formData) => {
    formData = formData.trim()
    const onlyNumbers = /\d/
    const isIp = /\b((?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:(?<!\.)\b|\.)){4}/
    const isFullName = formData.split(' ').length === 2 && !onlyNumbers.test(formData) && !onlyNumbers.test(formData)
    const isEmail = /\S+@\S+\.\S+/
    const isNickName = formData.split(' ').length === 1 && !onlyNumbers.test(formData) && formData !== ''
    const isPhone = /^(\+7|7|8|\+1||\+2||\+3||\+4||\+5||\+6|)?[\s\-]?\(?[123456789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

    if (isIp.test(formData)) {
        console.log('айпи')
        const response = await getIp(formData)
        Store.setDate(response)
        console.log(Store)
        return '/Ip'
        Store.setError('')

    } else if (isFullName) {
        const fullName = formData.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ')
        console.log(fullName)
        const response = await getFullName(fullName)
        Store.setDate(response)
        Store.setError('')
        return '/FullName'

    } else if (isEmail.test(formData)) {
        console.log('email')
        const response = await getEmail(formData)
        Store.setDate(response)
        Store.setError('')
        return '/Email'

    } else if (isNickName && !isEmail.test(formData)) {
        const nickName = formData.replace(/\@/g, '')
        console.log(nickName)
        const response = await getNickName(nickName)
        Store.setDate(response)
        Store.setError('')
        return '/NickName'

    } else if (isPhone.test(formData)) {
        const phone = formData.replace(/-|\(|\)/g, "")
        console.log(phone)
        const response = await getPhone(phone)
        Store.setDate(response)
        return '/Phone'
        Store.setError('')

    } else {
        Store.setError('Ошибка')
    }
}

export default GetMatchData;