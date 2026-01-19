function handleFormSubmit(event) {

    const form = event.target;
    const formData = new FormData(form);

    let textData = ' '.repeat(49) + "========================================\n";
    textData += ' '.repeat(53) + `Datum/Zeit - ${new Date().toLocaleString('de-DE')}\n`;
    textData += ' '.repeat(49) + '='.repeat(40) + '\n';

    textData += ' '.repeat(50) + "* Vielen Dank für Ihre Reservierung! * \n"
    textData += ' '.repeat(49) + '='.repeat(40) + '\n\n';

    textData += "Hiermit senden wir Ihnen eine Reservierungsbestätigung mit allen Informationen zu Ihrer Buchung.\n\n";

    formData.forEach((value, key) => {
        if (key !== '_subject' && key !== 'Datenschutz:') {
            textData += ` ⇒ ${key} ${value}\n`;
        }
    });

    textData += "\nWenn Sie Fragen haben oder Ihre Reservierung ändern oder stornieren möchten, können Sie uns kontaktieren.\n\n";

    textData += "Kontakt:\n";
    textData += '-'.repeat(8) + '\n';
    textData += "📞 Telefonnummer: +43/660-123-4567\n";
    textData += "📧 E-Mail: erzahlendehappchen@gmail.com\n";
    textData += '-'.repeat(40) + '\n\n';

    textData += "Wir wünschen Ihnen einen schönen Tag und wir freuen uns darauf, Sie zum gebuchten Termin begrüßen zu dürfen!\n\n\n";
    textData += "Mit freundlichen Grüßen\n\n";
    textData += "Ihr Erzählende Häppchen Team\n";
    textData += '='.repeat(28) + '\n\n';

    const blob = new Blob([textData], { type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() +1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    a.download = `Reservierungserinnerung - ${day}.${month}.${year} / ${hours}-${minutes}-${seconds}.txt`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    document.getElementById('successRueckmeldung').style.display = 'flex';
}