
fetch("/XML/Speisen/hauptspeisen.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const fleischContainer = document.getElementById("fleisch-container");
        const gefluegelContainer = document.getElementById("gefluegel-container");
        const fischContainer = document.getElementById("fisch-container");
        
        const fleisch = xml.getElementsByTagName("fleisch")[0].getElementsByTagName("hauptspeise")
        for (let i = 0; i < fleisch.length; i++) {
            const name = fleisch[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = fleisch[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = fleisch[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            fleischContainer.appendChild(div);
        }
        
        const gefluegel = xml.getElementsByTagName("gefluegel")[0].getElementsByTagName("hauptspeise")
        for (let i = 0; i < gefluegel.length; i++) {
            const name = gefluegel[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = gefluegel[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = gefluegel[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            gefluegelContainer.appendChild(div);
        }

        const fisch = xml.getElementsByTagName("fisch")[0].getElementsByTagName("hauptspeise")
        for (let i = 0; i < fisch.length; i++) {
            const name = fisch[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = fisch[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = fisch[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            fischContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));
