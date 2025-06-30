'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function MapSection() {
  const lat = -40.275949;
  const lon = -71.388911;

  // This URL is for embedding an interactive Google Map.
  // It uses the specific coordinates for the cabins for better accuracy.
  const googleMapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=16&output=embed`;

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
          <CardContent className="p-0 md:p-2">
            <iframe
              title="Mapa de ubicación de las cabañas"
              src={googleMapEmbedUrl}
              className="w-full aspect-video rounded-md"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}