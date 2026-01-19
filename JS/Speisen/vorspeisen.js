fetch("/XML/Speisen/vorspeisen.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const kaltesContainer = document.getElementById("kaltes-container");
        const warmesContainer = document.getElementById("warmes-container");
        
        const kaltes = xml.getElementsByTagName("kaltes")[0].getElementsByTagName("vorspeise")
        for (let i = 0; i < kaltes.length; i++) {
            const name = kaltes[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = kaltes[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = kaltes[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            kaltesContainer.appendChild(div);
        }
        
        const warmes = xml.getElementsByTagName("warmes")[0].getElementsByTagName("vorspeise")
        for (let i = 0; i < warmes.length; i++) {
            const name = warmes[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = warmes[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = warmes[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("gericht");
            div.innerHTML = `
                <h3 class="gericht-name">${name}</h3>
                <p class="gericht-beschreibung">${beschreibung}</p>
                <strong class="gericht-preis">${preis} €</strong> `
            warmesContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));