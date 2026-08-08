/** Icone di riserva (stessa famiglia grafica delle icone categoria in home) per i prodotti senza una foto reale. */
export const iconePerSlug: Record<string, string> = {};

export function slugProdotto(id: string): string {
	return id.replace(/^(it|en)\//, '');
}

export function immagineSegnaposto(immagine: string): boolean {
	return immagine.startsWith('https://placehold.co');
}
