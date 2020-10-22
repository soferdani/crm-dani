import { action, observable , makeObservable} from 'mobx'
import castumer from './castumer'
import data from '../react-crm-starter-data/data'

let newData = []
for (let i of data) {
    const [firstName, lastName] = i.name.split(' ')
    newData.push(new castumer(i.id, firstName, lastName , i.email, i.firstContact, i.emailType, i.sold, i.owner, i.country ))
}
class allData {
    clients = newData

    constructor() {
        makeObservable(this, {
            clients: observable,
            addClient: action
        })
    }
    addClient = (name,surname,country,owner,email) => {
        const id = '_' + Math.random().toString(36).substr(2, 9)
        const firstContact = Date.now()
        this.clients.push(new castumer(id,name, surname ,email, firstContact, null, false, owner, country ))
    }
    




}



export default allData