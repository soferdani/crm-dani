import { action, observable , makeObservable} from 'mobx'
import castumer from './castumer'

class allData {
    clients = []

    constructor() {
        makeObservable(this, {
            clients: observable,
            addClient: action
        })
    }
    addClient = (clint) => {
        this.clients.push(new castumer(clint.id, clint.name, clint.email, clint.firstContact, clint.emailType, clint.sold, clint.owner, clint.country ))
    }

}



export default allData