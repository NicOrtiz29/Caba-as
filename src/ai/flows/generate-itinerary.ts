// use server'

/**
 * @fileOverview Generates a personalized itinerary for guests in San Martin de los Andes based on their interests.
 *
 * - generatePersonalizedItinerary - A function that generates the itinerary.
 * - GeneratePersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - GeneratePersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import { genkit } from 'genkit';
import { openAI } from 'genkitx-openai';
import { z } from 'zod';

// Initialize Genkit with the OpenAI plugin
const ai = genkit({
  plugins: [
    openAI({
      apiKey: process.env.OPENAI_API_KEY || "", // Reads the key from .env.local
    }),
  ],
});

const GeneratePersonalizedItineraryInputSchema = z.object({
  interests: z.string().describe('A description of the activities and interests of the guest. Consider the time of year.'),
});
export type GeneratePersonalizedItineraryInput = z.infer<typeof GeneratePersonalizedItineraryInputSchema>;

const GeneratePersonalizedItineraryOutputSchema = z.object({
  itinerary: z.string().describe('A personalized itinerary based on the provided interests.'),
});
export type GeneratePersonalizedItineraryOutput = z.infer<typeof GeneratePersonalizedItineraryOutputSchema>;

export async function generatePersonalizedItinerary(
  input: GeneratePersonalizedItineraryInput
): Promise<GeneratePersonalizedItineraryOutput> {
  const prompt = `
    Eres un conserje de un hotel boutique y experto en viajes especializado en San Martín de los Andes, Argentina. Tu objetivo es crear un itinerario memorable y personalizado para un huésped.

    Basado en los intereses del huésped, genera un itinerario detallado y atractivo para su estadía. Considera las actividades estacionales, la proximidad de los lugares y ofrece consejos prácticos.

    **Intereses del huésped:**
    "${input.interests}"

    **Instrucciones de formato:**
    - Comienza con un saludo cálido y acogedor gracias por escogernos, en las cabañas de fabi te recomendamos lo siguiente.
    - Organiza el itinerario por días (ej. Día 1, Día 2, etc.).
    - Para cada día, sugiere actividades para la mañana, tarde y noche.
    - Incluye nombres de lugares específicos (ej. restaurantes, senderos, lagos).
    - Agrega una breve descripción de por qué la actividad es una buena sugerencia.
    - Finaliza con un deseo amigable para su estadía.
    - Utiliza saltos de línea para que la salida sea fácil de leer.
  `;

  const { output } = await ai.generate({
    model: 'openai/gpt-4o',
    prompt: prompt,
    output: {
      schema: GeneratePersonalizedItineraryOutputSchema,
    },
  });

  return output || { itinerary: 'No se pudo generar un itinerario. Por favor, intenta de nuevo.' };
}
