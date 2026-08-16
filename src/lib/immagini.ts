import type { ImageMetadata } from 'astro';

const immaginiLocali = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{jpg,jpeg,png,webp}', {
	eager: true,
});

/**
 * Risolve un percorso tipo "/images/foo.jpg" nell'ImageMetadata locale corrispondente,
 * cosi da poterlo passare al componente <Image> di astro:assets ed ottenere
 * ridimensionamento, conversione a WebP e width/height automatici.
 * Un URL remoto (es. un futuro placeholder) viene restituito invariato.
 */
export function risolviImmagine(percorso: string): ImageMetadata | string {
	if (/^https?:\/\//.test(percorso)) return percorso;
	const chiave = percorso.replace(/^\/images\//, '/src/assets/images/');
	return immaginiLocali[chiave]?.default ?? percorso;
}

/** Elenca in ordine alfabetico le foto della cartella di un prodotto (src/assets/images/{slug}/*). */
export function fotoCartellaProdotto(slug: string): ImageMetadata[] {
	return Object.keys(immaginiLocali)
		.filter((chiave) => chiave.startsWith(`/src/assets/images/${slug}/`))
		.sort()
		.map((chiave) => immaginiLocali[chiave].default);
}
