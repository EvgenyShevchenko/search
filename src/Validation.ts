import getIp from "./Api/Data";


const Validation = (formData: any) => {
    const ip = /"([0-9]{1,3}[\.]){3}[0-9]{1,3}"/
    console.log('ок')
    if (ip.test(formData)) {
        console.log('оasdк')
    }

}

export default Validation;