
fetch("/XML/Speisen/salate-soucen.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const salateContainer = document.getElementById("salate-container");
        const soucenContainer = document.getElementById("soucen-container");
        
        const salate = xml.getElementsByTagName("salate")[0].getElementsByTagName("salat")
        for (let i = 0; i < salate.length; i++) {
            const name = salate[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = salate[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = salate[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            salateContainer.appendChild(div);
        }
        
        const soucen = xml.getElementsByTagName("soucen")[0].getElementsByTagName("souce")
        for (let i = 0; i < soucen.length; i++) {
            const name = soucen[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = soucen[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = soucen[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            soucenContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));
