fetch("/XML/Getraenke/kraeuter-schnaps.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const kraeuterContainer = document.getElementById("kraeuter-container");
        const schnapsContainer = document.getElementById("schnaps-container");
        
        const kraeuter = xml.getElementsByTagName("kraeuter")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < kraeuter.length; i++) {
            const name = kraeuter[i].getElementsByTagName("name")[0].textContent;
            const inhalt = kraeuter[i].getElementsByTagName("inhalt")[0].textContent;
            const alkohol = kraeuter[i].getElementsByTagName("alkohol")[0].textContent;
            const beschreibung = kraeuter[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = kraeuter[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-inhalt">(${inhalt}cl)</p>
                <p class="getraenk-alkohol">${alkohol} % vol</p>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            kraeuterContainer.appendChild(div);
        }
        
        const schnaps = xml.getElementsByTagName("schnaps")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < schnaps.length; i++) {
            const name = schnaps[i].getElementsByTagName("name")[0].textContent;
            const inhalt = schnaps[i].getElementsByTagName("inhalt")[0].textContent;
            const alkohol = schnaps[i].getElementsByTagName("alkohol")[0].textContent;
            const beschreibung = schnaps[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = schnaps[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-inhalt">(${inhalt}cl)</p>
                <p class="getraenk-alkohol">${alkohol} % vol</p>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            schnapsContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));