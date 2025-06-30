import type { Amenity } from '@/components/cabin-showcase';
import type { Testimonial } from '@/components/testimonials';
import { BedDouble, Wifi, ParkingCircle, Tv, UtensilsCrossed, Snowflake, Wind, Users, Trees } from 'lucide-react';

export const cabins = [
  {
    name: 'Cabaña del Bosque',
    description: 'Refugio acogedor rodeado de un denso bosque de coihues, ideal para amantes de la naturaleza que buscan paz y tranquilidad.',
    amenities: [
      { icon: BedDouble, text: '2 Camas Queen' },
      { icon: Wifi, text: 'Wi-Fi de Alta Velocidad' },
      { icon: ParkingCircle, text: 'Estacionamiento Privado' },
      { icon: Tv, text: 'TV Satelital' },
      { icon: UtensilsCrossed, text: 'Cocina Equipada' },
      { icon: Snowflake, text: 'Calefacción Central' },
    ] as Amenity[],
    images: [
      { src: 'https://placehold.co/800x600/4B0082/F0F0F8', alt: 'Vista exterior de la Cabaña del Bosque', hint: 'cabin forest' },
      { src: 'https://placehold.co/800x600/F0F0F8/4B0082', alt: 'Interior de la Cabaña del Bosque', hint: 'cozy interior' },
      { src: 'https://placehold.co/800x600/B22222/FFFFFF', alt: 'Balcón con vista al bosque', hint: 'forest view' },
    ],
  },
  {
    name: 'Cabaña del Lago',
    description: 'Despierta con impresionantes vistas al Lago Lácar. Esta cabaña ofrece acceso directo a la playa y un ambiente sereno.',
    amenities: [
      { icon: BedDouble, text: '1 Cama King, 2 Individuales' },
      { icon: Wifi, text: 'Wi-Fi de Alta Velocidad' },
      { icon: ParkingCircle, text: 'Estacionamiento Privado' },
      { icon: Wind, text: 'Acceso al lago' },
      { icon: UtensilsCrossed, text: 'Cocina Gourmet' },
      { icon: Snowflake, text: 'Hogar a Leña' },
    ] as Amenity[],
    images: [
      { src: 'https://placehold.co/800x600/4B0082/F0F0F8', alt: 'Vista de la Cabaña del Lago desde el agua', hint: 'lake cabin' },
      { src: 'https://placehold.co/800x600/F0F0F8/4B0082', alt: 'Sala de estar con vista al lago', hint: 'lake view' },
      { src: 'https://placehold.co/800x600/B22222/FFFFFF', alt: 'Dormitorio principal de la cabaña', hint: 'bedroom view' },
    ],
  },
  {
    name: 'Cabaña de la Montaña',
    description: 'Ubicada en lo alto de la ladera, esta cabaña ofrece vistas panorámicas de las montañas y un refugio perfecto después de un día de esquí.',
    amenities: [
      { icon: Users, text: 'Capacidad para 8 personas' },
      { icon: Wifi, text: 'Wi-Fi de Alta Velocidad' },
      { icon: ParkingCircle, text: 'Estacionamiento para 2 vehículos' },
      { icon: Tv, text: 'Smart TV 55"' },
      { icon: UtensilsCrossed, text: 'Parrilla exterior' },
      { icon: Snowflake, text: 'Guarda esquís' },
    ] as Amenity[],
    images: [
      { src: 'https://placehold.co/800x600/4B0082/F0F0F8', alt: 'Cabaña de la Montaña con picos nevados al fondo', hint: 'mountain cabin' },
      { src: 'https://placehold.co/800x600/F0F0F8/4B0082', alt: 'Interior rústico y moderno de la cabaña', hint: 'rustic interior' },
      { src: 'https://placehold.co/800x600/B22222/FFFFFF', alt: 'Vista desde la terraza de la cabaña', hint: 'mountain vista' },
    ],
  },
  {
    name: 'Cabaña Los Arrayanes',
    description: 'Un encantador escondite rodeado por el mágico bosque de Arrayanes, ofreciendo una experiencia única y privada.',
    amenities: [
      { icon: BedDouble, text: '1 Cama King' },
      { icon: Trees, text: 'Bosque de Arrayanes' },
      { icon: ParkingCircle, text: 'Estacionamiento' },
      { icon: Tv, text: 'TV y Lector de DVD' },
      { icon: UtensilsCrossed, text: 'Cocina completa' },
      { icon: Snowflake, text: 'Calefacción a gas' },
    ] as Amenity[],
    images: [
      { src: 'https://placehold.co/800x600/4B0082/F0F0F8', alt: 'Entrada a la Cabaña Los Arrayanes', hint: 'forest entrance' },
      { src: 'https://placehold.co/800x600/F0F0F8/4B0082', alt: 'Dormitorio acogedor con detalles en madera', hint: 'wood bedroom' },
      { src: 'https://placehold.co/800x600/B22222/FFFFFF', alt: 'Patio privado en medio del bosque', hint: 'private patio' },
    ],
  }
];

export const testimonials = [
  {
    name: 'Familia González',
    quote: 'Una experiencia inolvidable. Las cabañas son hermosas y la atención fue excelente. El generador de itinerarios nos ayudó a descubrir lugares increíbles. ¡Volveremos!',
    rating: 5,
  },
  {
    name: 'Ana y Juan',
    quote: 'El lugar perfecto para una escapada romántica. La Cabaña del Lago tiene una vista que te deja sin aliento. Muy tranquilo y privado. Totalmente recomendado.',
    rating: 5,
  },
  {
    name: 'Grupo de Amigos',
    quote: 'Alquilamos la Cabaña de la Montaña para un viaje de esquí y fue la mejor decisión. Súper cómoda, espaciosa y cerca de todo. La pasamos genial.',
    rating: 4,
  },
   {
    name: 'Martina R.',
    quote: 'La paz que se respira en la Cabaña del Bosque es única. Ideal para desconectar de la ciudad. Las instalaciones son de primera calidad y muy confortables.',
    rating: 5,
  }
] as Testimonial[];
