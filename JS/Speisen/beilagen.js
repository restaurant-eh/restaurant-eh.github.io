
fetch("/XML/Speisen/beilagen.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const kartoffelnContainer = document.getElementById("kartoffeln-container");
        const sonstigeContainer = document.getElementById("sonstige-container");
        
        const kartoffeln = xml.getElementsByTagName("kartoffeln")[0].getElementsByTagName("kartoffel")
        for (let i = 0; i < kartoffeln.length; i++) {
            const name = kartoffeln[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = kartoffeln[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = kartoffeln[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            kartoffelnContainer.appendChild(div);
        }
        
        const sonstige = xml.getElementsByTagName("sonstige")[0].getElementsByTagName("sonstig")
        for (let i = 0; i < sonstige.length; i++) {
            const name = sonstige[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = sonstige[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = sonstige[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            sonstigeContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));
