import { action, makeObservable, observable } from 'mobx'


export default class costumer {
    id
    name
    email
    firstContact
    emailType
    sold
    owner
    country

    constructor(id, name, email, firstContact, emailType, sold, owner, country) {
        this.id = id
        this.name = name
        this.email = email
        this.firstContact = firstContact
        this.emailType = emailType
        this.sold = sold
        this.owner = owner
        this.country = country

        makeObservable(this, {
            id: observable,
            name: observable,
            email: observable,
            firstContact: observable,
            emailType: observable,
            sold: observable,
            owner: observable,
            country: observable
        })
    }

}
