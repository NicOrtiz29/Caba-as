import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function MapSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ubicación Privilegiada
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            En el Barrio Piedra de San Francisco, sobre la Ruta 40, te ofrecemos un acceso rápido tanto a la ciudad como a las principales atracciones naturales.
          </p>
        </div>
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-2">
            <div className="aspect-video relative w-full">
              <Image
                src="https://placehold.co/1200x600"
                alt="Mapa mostrando la ubicación de las cabañas en San Martín de los Andes"
                data-ai-hint="map Andes"
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="h-12 w-12 text-accent drop-shadow-lg" fill="currentColor" />
                 <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
              </div>
            </div>
          </CardContent>
        </Card>
         <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>Mapa interactivo próximamente.</p>
          </div>
      </div>
    </section>
  );
}