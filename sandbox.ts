interface Mahasiswa {
    nim: number,
    nama: string,
    active: boolean,
    age: number
}

const mhs: Mahasiswa = {
    nim: 1901010120,
    nama: 'zakiul fikri',
    active: true,
    age: 20
}

interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue){
    console.log(labeledObj.label)
}

let objKu = {
    size: 10,
    label: "size 10 object"
}

printLabel(objKu)
