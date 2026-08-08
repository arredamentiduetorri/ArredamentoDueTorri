import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const prodotti = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/prodotti' }),
	schema: z.object({
		nome: z.string(),
		categoria: z.string(),
		prezzo: z.string().optional(),
		immagine: z.string(),
		immagini: z.array(z.string()).optional(),
		inEvidenza: z.boolean().default(false),
	}),
});

const pagine = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pagine' }),
	schema: z.object({
		titolo: z.string(),
	}),
});

const recensioni = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/recensioni' }),
	schema: z.object({
		nome: z.string(),
		fonte: z.string().default('Google'),
		valutazione: z.number().min(1).max(5).default(5),
		luogo: z.string(),
		testo: z.string(),
	}),
});

const impostazioni = defineCollection({
	loader: file('./src/content/impostazioni/generale.yaml'),
	schema: z.object({
		nomeAttivita: z.string(),
		indirizzo: z.string(),
		telefono: z.string(),
		email: z.string(),
		orari: z.string(),
		piva: z.string().optional(),
		facebook: z.string().optional(),
		instagram: z.string().optional(),
	}),
});

export const collections = { prodotti, pagine, impostazioni, recensioni };
