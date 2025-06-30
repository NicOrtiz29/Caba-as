import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cabins } from '@/lib/data';
import { Badge } from './ui/badge';

export interface Amenity {
  icon: LucideIcon;
  text: string;
}

export default function CabinShowcase() {
  return (
    <section id="cabins" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestras Cabañas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Cuatro refugios únicos diseñados para tu confort en el corazón de la Patagonia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cabins.map((cabin) => (
            <Card key={cabin.name} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {cabin.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video relative">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4" />
                  <CarouselNext className="absolute right-4" />
                </Carousel>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{cabin.name}</CardTitle>
                <CardDescription className="mt-2 text-base">{cabin.description}</CardDescription>
                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-4">Comodidades</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    {cabin.amenities.map((amenity) => (
                      <div key={amenity.text} className="flex items-center gap-3">
                        <amenity.icon className="h-5 w-5 text-primary" />
                        <span>{amenity.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}