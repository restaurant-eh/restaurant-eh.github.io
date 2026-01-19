fetch("/XML/Getraenke/erfrischungsgetraenke.xml")
    .then(response => response.text())
    .then(xmlString => new DOMParser().parseFromString(xmlString, "text/xml"))
    .then(xml => {
        const kohlensaeureContainer = document.getElementById("kohlensaeure-container");
        const fruchtsaefteContainer = document.getElementById("fruchtsaefte-container");
        
        const kohlensaeure = xml.getElementsByTagName("kohlensaeure")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < kohlensaeure.length; i++) {
            const name = kohlensaeure[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = kohlensaeure[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = kohlensaeure[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            kohlensaeureContainer.appendChild(div);
        }
        
        const fruchtsaefte = xml.getElementsByTagName("fruchtsaefte")[0].getElementsByTagName("getraenk")
        for (let i = 0; i < fruchtsaefte.length; i++) {
            const name = fruchtsaefte[i].getElementsByTagName("name")[0].textContent;
            const beschreibung = fruchtsaefte[i].getElementsByTagName("beschreibung")[0].textContent;
            const preis = fruchtsaefte[i].getElementsByTagName("preis")[0].textContent
            const div = document.createElement("div");
            div.classList.add("getraenk");
            div.innerHTML = `
                <h3 class="getraenk-name">${name}</h3>
                <p class="getraenk-beschreibung">${beschreibung}</p>
                <strong class="getraenk-preis">${preis} €</strong> `
            fruchtsaefteContainer.appendChild(div);
        }
    })
    .catch(err => console.error("XML fehler:", err));