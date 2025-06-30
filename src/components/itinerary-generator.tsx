'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Wand2, LoaderCircle } from 'lucide-react';
import { getItinerary } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Crear mi Itinerario
        </>
      )}
    </Button>
  );
}

export default function ItineraryGenerator() {
  const initialState = { itinerary: undefined, error: undefined };
  const [state, formAction] = useActionState(getItinerary, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.itinerary) {
      formRef.current?.reset();
    }
  }, [state.itinerary]);

  return (
    <section id="ai-itinerary" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Crea tu Aventura Personalizada
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Dinos qué te gusta y nuestra IA diseñará un itinerario único para tu estadía en San Martín de los Andes.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <form ref={formRef} action={formAction} className="space-y-4">
              <Textarea
                name="interests"
                placeholder="Ej: Nos encanta el trekking, la buena comida y los paisajes. Visitamos en verano y viajamos con niños."
                rows={4}
                required
                className="text-base"
              />
              <SubmitButton />
              {state.error && <p className="text-sm font-medium text-destructive">{state.error}</p>}
            </form>

            {state.itinerary && (
               <Alert className="mt-6 border-primary/50">
                <Wand2 className="h-4 w-4" />
                <AlertTitle className="font-headline text-primary">¡Tu Itinerario Personalizado!</AlertTitle>
                <AlertDescription className="mt-2 whitespace-pre-wrap font-body">
                  {state.itinerary}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}