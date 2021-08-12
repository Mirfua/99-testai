const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi

let maziausiVisi = [];
let maz = 0;

for (let i = 0; i < data.length; i++){
        maziausiVisi[i] = (Math.min(...data[i].marks))
    }
    maz = Math.min(...maziausiVisi)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] == maz){
        console.log("Mokiniai kurie turi prasciausia pazymi:", data[i].name, maz);
//        break;
    }
}

// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

let visuDidziausi = [];
let did = 0;

for (let i = 0; i < data.length; i++){
        visuDidziausi[i] = (Math.max(...data[i].marks))
    }
    did = Math.max(...visuDidziausi)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] == did){
        console.log("Mokiniai kurie turi geriausia pazymi:", data[i].name, did);
    }
}

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

let visuVidurkiai = []
let mazVidurkis = 0;
let sum = 0;

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++){
    sum += (data[i].marks[j])
    }
    visuVidurkiai[i] = sum / data[i].marks.length
    sum = 0;
}
mazVidurkis = Math.min(...visuVidurkiai)
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] == mazVidurkis){
        console.log("Mokiniai kurie turi prasciausia pazymiu vidurki:", data[i].name, mazVidurkis);
    }
}

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki

//nesigauna...

// Isspausdina mokinio varda, jei jis turi pazymi 8

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] == 8){
        console.log("Mokiniai kurie turi pazymi 8: ", data[i].name);
    }
}

// Isspausdina mokinio varda, jei jis neturi pazymio 7

let x = 0;
for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++)
    if(data[i].marks[j] == 7){
        x += 1;
}
if(x == 0)

console.log("Mokiniai kurie neturi pazymio 7", data[i].name);
}
