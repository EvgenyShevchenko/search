import {makeAutoObservable} from 'mobx';

 class Store {
    data = '';

    constructor() {
        makeAutoObservable(this)
    }

    setDate(res: any) {
        this.data = res
    }
}
export default new Store();