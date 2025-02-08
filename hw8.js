let favCompany = ["Samsung", "Apple", "Google", "Bosch", "Yandex", "Microsoft", "Rams", "Kaspi", "Asem's super company", "Nvidea"];

function chooseCompany () {
    for (let i = 0; i < favCompany.length; i++) {
        if (i === 0) {
            console.log("My 1-st choice is " + favCompany[i] + ".");
        } else if (i === 1) {
            console.log("My " + (i + 1) + "-nd " + favCompany[i] + ".")
        } else if (i === 2) {
            console.log("My " + (i + 1) + "-rd " + favCompany[i] + ".")
        } else {
            console.log("My " + (i + 1) + "-th " + favCompany[i] + ".")
        }
    }
}
chooseCompany()

let cuisine = ["Italian", "French","Russian", "Greek", "Chinese", "Korean", "Japanese"];

let choice = Math.floor(Math.random() * 7);

console.log(choice);
function chooseFood () {
    for (let i = 0; i < cuisine.length; i++) {
        let h = choice - i;
        console.log(cuisine[h]);
    }
}

chooseFood()
