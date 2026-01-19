fetch("/XML/Getraenke/spritzer-wein.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const spritzerContainer = document.getElementById("spritzer-container");
        const weinContainer = document.getElementById("wein-container");
        
        const spritzer = xml.getElementsByTagName("spritzer")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < spritzer.length; i++) {
            const name = spritzer[i].getElementsByTagName("name")[0].textContent;
            const weinbasis = spritzer[i].getElementsByTagName("weinbasis")[0].textContent;
            const verhaeltnis = spritzer[i].getElementsByTagName("verhaeltnis")[0].textContent;
            const beschreibung = spritzer[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = spritzer[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-weinbasis">(${weinbasis})</p>
                <p class="getraenk-verhaeltnis">${verhaeltnis}</p>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            spritzerContainer.appendChild(div);
        }
        
        const wein = xml.getElementsByTagName("wein")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < wein.length; i++) {
            const name = wein[i].getElementsByTagName("name")[0].textContent;
            const kategorie = wein[i].getElementsByTagName("kategorie")[0].textContent;
            const alkohol = wein[i].getElementsByTagName("alkohol")[0].textContent;
            const beschreibung = wein[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = wein[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-kategorie">(${kategorie})</p>
                <p class="getraenk-alkohol">${alkohol} % vol</p>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            weinContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));