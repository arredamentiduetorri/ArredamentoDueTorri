import it from './it';
import en from './en';

export const lingue = { it, en };
export type Lingua = keyof typeof lingue;

export function rilevaLingua(url: URL): Lingua {
	return url.pathname.startsWith('/en') ? 'en' : 'it';
}

export function traduzioni(lang: Lingua) {
	return lingue[lang];
}

export function percorso(lang: Lingua, path: string): string {
	if (lang === 'it') return path;
	return path === '/' ? '/en' : `/en${path}`;
}

/** Converte l'URL corrente nell'equivalente nell'altra lingua (per il selettore lingua). */
export function percorsoAltraLingua(lang: Lingua, pathname: string): string {
	if (lang === 'it') return percorso('en', pathname);
	const senzaPrefisso = pathname === '/en' ? '/' : pathname.replace(/^\/en/, '');
	return senzaPrefisso === '' ? '/' : senzaPrefisso;
}

const giorniInglese: Record<string, string> = {
	Lunedì: 'Monday',
	Martedì: 'Tuesday',
	Mercoledì: 'Wednesday',
	Giovedì: 'Thursday',
	Venerdì: 'Friday',
	Sabato: 'Saturday',
	Domenica: 'Sunday',
};

/** Traduce i nomi dei giorni nel testo degli orari (dal CMS, sempre in italiano) quando lang è 'en'. */
export function traduciOrari(testo: string, lang: Lingua): string {
	if (lang !== 'en' || !testo) return testo;
	return testo
		.split('\n')
		.map((riga) => {
			let tradotta = riga;
			for (const [it, en] of Object.entries(giorniInglese)) {
				tradotta = tradotta.replace(new RegExp(`^(\\s*)${it}`, 'i'), `$1${en}`);
			}
			return tradotta.replace(/\bChiuso\b/gi, 'Closed');
		})
		.join('\n');
}
