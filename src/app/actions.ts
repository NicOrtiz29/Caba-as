'use server';

import { generatePersonalizedItinerary } from '@/ai/flows/generate-itinerary';
import { z } from 'zod';

const ItinerarySchema = z.object({
  interests: z.string().min(10, 'Por favor, describe tus intereses con más detalle (mínimo 10 caracteres).'),
});

type ItineraryState = {
  itinerary?: string;
  error?: string | null;
}

export async function getItinerary(prevState: ItineraryState, formData: FormData): Promise<ItineraryState> {
  const validatedFields = ItinerarySchema.safeParse({
    interests: formData.get('interests'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.interests?.[0]
    };
  }

  try {
    const result = await generatePersonalizedItinerary({ interests: validatedFields.data.interests });
    if (result.itinerary) {
      return { itinerary: result.itinerary, error: null };
    }
    return { error: 'No pudimos generar un itinerario con esa información. Intenta ser más específico.' };
  } catch (e) {
    console.error(e);
    return { error: 'Ocurrió un error al generar el itinerario. Por favor, intenta de nuevo más tarde.' };
  }
}
