fetch("/XML/Getraenke/tee-kaffee.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const teeContainer = document.getElementById("tee-container");
        const kaffeeContainer = document.getElementById("kaffee-container");
        
        const tee = xml.getElementsByTagName("tee")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < tee.length; i++) {
            const name = tee[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = tee[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = tee[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            teeContainer.appendChild(div);
        }
        
        const kaffee = xml.getElementsByTagName("kaffee")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < kaffee.length; i++) {
            const name = kaffee[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = kaffee[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = kaffee[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            kaffeeContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));