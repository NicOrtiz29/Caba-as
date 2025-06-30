import Link from "next/link";
import { MountainSnow, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <MountainSnow className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-bold">Entreñires cabañas de montaña</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Tu hogar en San Martín de los Andes.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
             <h3 className="font-semibold mb-4 font-headline">Navegación</h3>
             <div className="flex flex-col gap-2 text-sm">
                <Link href="#cabins" className="hover:text-primary transition-colors">Cabañas</Link>
                <Link href="#location" className="hover:text-primary transition-colors">Ubicación</Link>
                <Link href="#booking" className="hover:text-primary transition-colors">Reservas</Link>
             </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 font-headline">Contacto</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
               <a href="mailto:contacto@smacabins.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>contacto@smacabins.com</span>
                </a>
                <a href="tel:+5492944000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+54 9 294 400-0000</span>
                </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Entreñires cabañas de montaña. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
