import {makeAutoObservable} from 'mobx';

class Store {
    data = []
    error = ''

    constructor() {
        makeAutoObservable(this)
    }

    setDate(res: any) {
        this.data = res
    }

    setError(res: any) {
        this.error = res
    }
}

export default new Store()