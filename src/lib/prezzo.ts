function estraiNumero(testo: string): number | null {
	const pulito = testo.replace(/\./g, '').replace(',', '.');
	const match = pulito.match(/\d+(\.\d+)?/);
	return match ? parseFloat(match[0]) : null;
}

/** Percentuale di sconto tra due prezzi in testo libero (es. "da 890 €"). Null se non calcolabile. */
export function percentualeSconto(prezzoOriginale: string, prezzoScontato: string): number | null {
	const originale = estraiNumero(prezzoOriginale);
	const scontato = estraiNumero(prezzoScontato);
	if (originale === null || scontato === null || originale <= 0 || scontato >= originale) return null;
	return Math.round(((originale - scontato) / originale) * 100);
}
