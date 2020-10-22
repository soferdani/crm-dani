import { action, makeObservable, observable } from 'mobx'


export default class costumer {
    id
    firstName
    surname
    email
    firstContact
    emailType
    sold
    owner
    country

    constructor(id, firstName, surname, email, firstContact, emailType, sold, owner, country) {
        this.id = id
        this.firstName = firstName
        this.surname = surname
        this.email = email
        this.firstContact = firstContact
        this.emailType = emailType
        this.sold = sold
        this.owner = owner
        this.country = country

        makeObservable(this, {
            id: observable,
            firstName: observable,
            surname:observable,
            email: observable,
            firstContact: observable,
            emailType: observable,
            sold: observable,
            owner: observable,
            country: observable
        })
    }

}
