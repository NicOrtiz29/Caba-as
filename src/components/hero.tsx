import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-white sm:h-[80vh] sm:min-h-[600px]">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="/images/portada.jpg"
        alt="Paisaje de la Patagonia con montañas y un lago"
        data-ai-hint="patagonia landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center container">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-shadow-lg sm:text-6xl md:text-7xl">
          Tu Refugio en la Patagonia
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200 text-shadow-md md:text-xl">
          Descubre la magia de San Martín de los Andes desde nuestras acogedoras cabañas.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#booking">Reserva Ahora</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#cabins">Ver Cabañas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}