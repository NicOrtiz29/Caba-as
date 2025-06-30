import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { testimonials } from '@/lib/data';

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Descubre por qué nuestros visitantes eligen Entreñires cabañas de montaña una y otra vez.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-md">
                    <CardContent className="p-6 flex-grow">
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="italic text-muted-foreground">
                        “{testimonial.quote}”
                      </blockquote>
                    </CardContent>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t">
                      <p className="font-semibold text-right text-sm text-primary">{testimonial.name}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}