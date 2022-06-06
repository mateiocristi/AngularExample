
export class PacientService {

    pacients: Pacient[] = [];
    counter;

    constructor() {
        this.counter = 0;
    }

    AddNewPacient(nume, prenume, data, sex, CNP, telefon) {

        let orderNr = this.GenerateOrderNr();

        this.pacients.push({
            nume: nume,
            prenume: prenume, 
            dataNasterii: data,
            sex: sex, 
            CNP: CNP,
            tel: telefon,
            orderNr: orderNr
        })

        localStorage.setItem('pacients', JSON.stringify(this.pacients));

    }

    EditPacient(nume, prenume, data, sex, CNP, telefon, orderNr) {
        this.pacients.forEach(pacient => {
            if (pacient.orderNr === Number(orderNr)) {
                pacient.nume = nume;
                pacient.prenume = prenume;
                pacient.dataNasterii = data;
                pacient.CNP = CNP;
                pacient.sex = sex;
                pacient.tel = telefon;
            }
        })
    }

    GetPacient(orderNr) {
        let pac;
        this.pacients.forEach(pacient => {
            if (pacient.orderNr === Number(orderNr)) {
                pac = pacient;
            }
        })
        return pac;
    }

    RemovePacient(orderNr) {
       console.log('remove id', orderNr);
       
        const index = this.pacients.findIndex(pacient => {
            return pacient.orderNr === Number(orderNr);
        })

        if (index !== -1) {
            this.pacients.splice(index, 1);
        }


        
    }

    private GenerateOrderNr() {
        const nr = this.counter;
        this.counter++;
        return this.counter;
    }
}

interface Pacient {
    nume,
    prenume,
    dataNasterii,
    sex,
    CNP, 
    tel,
    orderNr
}

export { Pacient }

