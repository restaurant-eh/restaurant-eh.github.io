function handleFormSubmit(event) {

    const form = event.target;
    const data = new FormData(form);

    fetch("/XML/reservierung.xml")
        .then(res => res.text())
        .then(xmlTemplate => {

            const values = {
                zeitstempel: new Date().toLocaleString("de-DE"),
                vorname: data.get("Vorname:"),
                nachname: data.get("Nachname:"),
                email: data.get("E-Mail:"),
                telefon: data.get("Telefonnummer:"),
                datum: data.get("Datum:"),
                uhrzeit: data.get("Uhrzeit:"),
                personen: data.get("Personen:"),
                anmerkungen: data.get("Anmerkungen:") || "-"
            };

            for (const key in values) {
                xmlTemplate = xmlTemplate.replaceAll(`{${key}}`, values[key]);
            }

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlTemplate, "text/xml");

            return fetch("/XSL/reservierung.xsl")
                .then(res => res.text())
                .then(xslText => ({ xmlDoc, xslText }));
        })

        .then(({ xmlDoc, xslText }) => {

            const parser = new DOMParser();
            const xslDoc = parser.parseFromString(xslText, "text/xml");

            const processor = new XSLTProcessor();
            processor.importStylesheet(xslDoc);

            const result = processor.transformToFragment(xmlDoc, document);
            const text = result.textContent;

            const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
            const blob = new Blob([bom, text], { type: 'text/plain;charset=utf-8'});

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "Reservierungserinnerung.txt";

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            document.getElementById('successRueckmeldung').style.display = 'flex';
        });
}