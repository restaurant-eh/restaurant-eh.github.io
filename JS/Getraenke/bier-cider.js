fetch("/XML/Getraenke/bier-cider.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const bierContainer = document.getElementById("bier-container");
        const ciderContainer = document.getElementById("cider-container");
        
        const bier = xml.getElementsByTagName("bier")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < bier.length; i++) {
            const name = bier[i].getElementsByTagName("name")[0].textContent;
            const inhalt = bier[i].getElementsByTagName("inhalt")[0].textContent;
            const alkohol = bier[i].getElementsByTagName("alkohol")[0].textContent;
            const beschreibung = bier[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = bier[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-inhalt">(${inhalt}l)</p>
                <p class="getraenk-alkohol">${alkohol} % vol</p>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            bierContainer.appendChild(div);
        }
        
        const cider = xml.getElementsByTagName("cider")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < cider.length; i++) {
            const name = cider[i].getElementsByTagName("name")[0].textContent;
            const inhalt = cider[i].getElementsByTagName("inhalt")[0].textContent;
            const alkohol = cider[i].getElementsByTagName("alkohol")[0].textContent;
            const beschreibung = cider[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = cider[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-inhalt">(${inhalt}l)</p>
                <p class="getraenk-alkohol">${alkohol} % vol</p>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            ciderContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));