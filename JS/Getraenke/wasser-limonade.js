fetch("/XML/Getraenke/wasser-limonade.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const wasserContainer = document.getElementById("wasser-container");
        const limonadeContainer = document.getElementById("limonade-container");
        
        const wasser = xml.getElementsByTagName("wasser")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < wasser.length; i++) {
            const name = wasser[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = wasser[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = wasser[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            wasserContainer.appendChild(div);
        }
        
        const limonade = xml.getElementsByTagName("limonade")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < limonade.length; i++) {
            const name = limonade[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = limonade[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = limonade[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            limonadeContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));