let btn = document.getElementById('button');
let lista = document.getElementById('list');


const dodawanie = function(e) {
    e.preventDefault();

    
    /* Dodanie produktu do listy */

    let produkt = document.getElementById('product').value;
    let ilosc = document.getElementById('quantity').value;

    if(produkt.length == 0)  alert("Wpisz produkt")
    if(ilosc.length == 0)  alert("Wpisz ilość")
    else{

        let liElement = document.createElement('li');
        let produktNode = document.createTextNode(produkt + ` - ` + ilosc);
        liElement.appendChild(produktNode);

        lista.appendChild(liElement);


        // usuwanie komentarza po kliknięciu

        let clean = document.createElement('button');
        let cleanText = document.createTextNode("usuń");

        function displayNone() {
            lista.removeChild(liElement);
        }

        clean.appendChild(cleanText);
        clean.addEventListener('click', () => displayNone());
        liElement.appendChild(clean);
    }

    product.value = "";
    quantity.value = "";
}

btn.addEventListener('click', dodawanie)


