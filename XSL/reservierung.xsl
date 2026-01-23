<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="text" encoding="UTF-8"/>

<xsl:template match="/reservierung">

<xsl:text>                                                  ========================================</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>                                                          RESERVIERUNGSBESTÄTIGUNG        </xsl:text>  
<xsl:text>&#10;</xsl:text>
<xsl:text>                                                  ========================================</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>&#10;</xsl:text>

<xsl:text>Datum / Uhrzeit: </xsl:text>
    <xsl:value-of select="zeitstempel"/>
<xsl:text>&#10;</xsl:text>
<xsl:text>&#10;</xsl:text>

<xsl:text>----------------------------------------</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Persönliche Daten:                      </xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>----------------------------------------</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Vorname:    </xsl:text>
    <xsl:value-of select="vorname"/>
<xsl:text>&#10;</xsl:text>

<xsl:text>Nachname:   </xsl:text>
    <xsl:value-of select="nachname"/>
<xsl:text>&#10;</xsl:text>

<xsl:text>E-Mail:     </xsl:text>
    <xsl:value-of select="email"/>
<xsl:text>&#10;</xsl:text>

<xsl:text>Telefon:    </xsl:text>
    <xsl:value-of select="telefon"/>
<xsl:text>&#10;</xsl:text>

<xsl:text>&#10;</xsl:text>

<xsl:text>----------------------------------------</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Reservierungsdetails:                   </xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>----------------------------------------</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Datum:      </xsl:text>
    <xsl:value-of select="datum"/>
<xsl:text>&#10;</xsl:text>

<xsl:text>Uhrzeit:    </xsl:text>
    <xsl:value-of select="uhrzeit"/>
<xsl:text>&#10;</xsl:text>

<xsl:text>Personen:   </xsl:text>
    <xsl:value-of select="personen"/>
<xsl:text>&#10;</xsl:text>

<xsl:text>&#10;</xsl:text>
<xsl:text>Besondere Wünsche:</xsl:text>
<xsl:text>&#10;</xsl:text>
    <xsl:value-of select="anmerkungen"/>
<xsl:text>&#10;</xsl:text>
<xsl:text>&#10;</xsl:text>

<xsl:text>Wenn Sie Fragen haben oder Ihre Reservierung ändern oder stornieren möchten, können Sie uns kontaktieren.</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>----------------------------------------</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Kontakt:                                </xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>----------------------------------------</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>📞 Telefonnummer: +43/660-123-4567</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>📧 E-Mail: erzahlendehappchen@gmail.com</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Wir wünschen Ihnen einen schönen Tag und wir freuen uns darauf, Sie zum gebuchten Termin begrüßen zu dürfen!</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Mit freundlichen Grüßen</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>Ihr Erzählende Häppchen Team</xsl:text>
<xsl:text>&#10;</xsl:text>
<xsl:text>========================================</xsl:text>

</xsl:template>
</xsl:stylesheet>