
fetch("/XML/Speisen/desserts.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const klassischeContainer = document.getElementById("klassische-container");
        const eissorbetsContainer = document.getElementById("eis-sorbets-container");
        
        const klassische = xml.getElementsByTagName("klassische")[0].getElementsByTagName("dessert")
        for (let i = 0; i < klassische.length; i++) {
            const name = klassische[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = klassische[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = klassische[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            klassischeContainer.appendChild(div);
        }
        
        const eissorbets = xml.getElementsByTagName("eissorbets")[0].getElementsByTagName("dessert")
        for (let i = 0; i < eissorbets.length; i++) {
            const name = eissorbets[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = eissorbets[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = eissorbets[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            eissorbetsContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));
