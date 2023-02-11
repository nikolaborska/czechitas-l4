// tady je místo pro náš program

//NEPRAKTICKÉ!!!!
//let address = "Ulička 831/1, 623 00 Brno-Kohoutovice"

//O B J E K T může být jakkoliv dlouhý, dodržovata konvenci pojmenování, vždy jen jeden název pro jednu věc (nebude fungovat na vícero pojmenování)

let address = {
    streetName: "Ulička",
    number: 831 / 1, //toto číslo nemusí být string
    city: "Brno",
    postalCode: "623 00", //toto už se musí psát jako string, protože tam má mezeru
}

//klíč = streetName
//hodnota = Ulička 
//vlastnosti = streetName: "Ulička", 
//VŽDY musí být oddělený  čárkou 

// T E Č K O V Á  N O T A C E -> address.city (vyjede Brno) do konzole. 
// Změna tečkovou notací = addres.number = 28 (změní číslo ulice z 1 na 28)! 

// Z Á K A Z N Í K 

let user1 = {
    fullName: "Nikola Borská",
    login: "bornikol",
    address: { // vnoření dalšího objektu
        streetName: "Dunajská",
        number: 7,
        city: "Brno",
        postalCode: "625 00",
    }, //vždy se musí oddělit čárkou 
    cartItems: 0,
}

//tečková notace by vypadal takhle: user1.address.city (vyjede Brno) 

//D E S T R U K T U R O V Á N Í 

let product = {
    name: "Plyšový medvídek",
    price: 480,
    currency: "Kč",
};

let name = product.name;
let price = product.price;
let currency = product.currency;

//nebo lehčeji -> 
//let { name, price, currency } = product;

//Tímto zápisem říkáme, že chceme vyrobit tři proměnné, do kterých se uloží hodnoty z objektu product. 

//U K O L V H O D I N E Č1

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
        floorage: 100,
        balcony: 2,
        units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
        rent: 28000,
        fees: {
            water: 1000,
            energy: 2500,
            services: 560,
        },
        currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
}

//Pomocí tečkové notace vypište do stránky dispozici bytu.

//apartment.disposition;

//Vypište do stránky čistý nájem bez poplatků.

//let rent = price.rent;

//Vypište do stránky celý objekt představující výměru bytu.

//

// Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je do stránky.

//location = {
//    city: 'Prague',
//    district: 'Old Town',
// },

//Změnte stav inzerátu z 'free' na 'taken'.

//apartment.status = "taken";

//U K O L V H O D I N E Č2
let bookShelf = {
    name: "Cesta za dobrodružstvím",
    author: "J.K.Rowlings",
    pages: 630,
    publisher: "KOSMAS",
    publishedDate: 1997,
    characters: {
        main: "Alice",
        animalOne: "rabbit",
        animalTwo: "turtle",
    },
}

let bookies = {
    name: "Hello motherfucker",
    author: "SinCitynella",
    pages: 320,
    publisher: "KOSMAS",
    publishedDate: 2015,
    characters: {
        main: "Pervert",
        animalOne: "dobermann",
        animalTwo: "rotweiller",
    },
}

// V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.

//Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.

//U K O L V H O D I N E Č3

const person = {
    name: prompt("Jake je vase jmeno a primeni?"),
    age: Number(prompt("Jaky je vas vek?")),
};

document.body.innerHTML += "<p>Zadane jmeno je: " + person.name + ", vas vek je: " + person.age + ", boli ste zaregistrovany na ockovanie.</p>";

