/** Icone di riserva (stessa famiglia grafica delle icone categoria in home) per i prodotti senza una foto reale. */
export const iconePerSlug: Record<string, string> = {
	'armadio-scorrevole-emilia':
		'<rect x="3" y="2" width="18" height="2" rx="1" /><rect x="3.3" y="4.2" width="8.2" height="16.6" rx="1" /><rect x="12.5" y="4.2" width="8.2" height="16.6" rx="1" /><rect x="3" y="20.2" width="18" height="1.6" rx="0.8" /><rect x="9.6" y="10.5" width="0.9" height="2.6" rx="0.45" /><rect x="13.5" y="10.5" width="0.9" height="2.6" rx="0.45" />',
	'letto-imbottito-bologna':
		'<rect x="1" y="3" width="2.2" height="13" rx="1" /><rect x="3.2" y="9" width="19.8" height="7" rx="1.8" /><rect x="4.5" y="5.5" width="5.5" height="4.5" rx="1.3" /><rect x="2.5" y="16.2" width="1.6" height="3" rx="0.5" /><rect x="21.5" y="16.2" width="1.6" height="3" rx="0.5" />',
	'libreria-modulare-torri':
		'<rect x="3" y="3" width="1.6" height="18" rx="0.6" /><rect x="19.4" y="3" width="1.6" height="18" rx="0.6" /><rect x="3" y="3" width="18" height="1.6" rx="0.6" /><rect x="3" y="19.4" width="18" height="1.6" rx="0.6" /><rect x="3" y="9" width="18" height="1.4" rx="0.5" /><rect x="3" y="15" width="18" height="1.4" rx="0.5" /><rect x="6" y="4.6" width="1.3" height="4" rx="0.4" /><rect x="8" y="4.6" width="1.3" height="4" rx="0.4" /><rect x="10.3" y="4" width="1.3" height="4.6" rx="0.4" />',
	'tavolo-noce-verona':
		'<rect x="2" y="6.5" width="20" height="2.4" rx="1.2" /><rect x="3.5" y="9" width="2" height="9.5" rx="0.6" /><rect x="18.5" y="9" width="2" height="9.5" rx="0.6" />',
};

export function slugProdotto(id: string): string {
	return id.replace(/^(it|en)\//, '');
}

export function immagineSegnaposto(immagine: string): boolean {
	return immagine.startsWith('https://placehold.co');
}
