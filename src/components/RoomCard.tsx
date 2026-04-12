import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Users, BedDouble } from 'lucide-react';

interface RoomProps {
  room: {
    _id: string;
    name: { [key: string]: string };
    description: { [key: string]: string };
    price: number;
    capacity: number;
    images: string[];
    type: string;
  };
}

export function RoomCard({ room }: RoomProps) {
  const locale = useLocale();
  const t = useTranslations('Rooms');

  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.images[0] || 'https://picsum.photos/seed/room/800/600'}
          alt={room.name[locale]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
          ${room.price} / night
        </div>
      </div>
      <CardHeader>
        <CardTitle className="font-display text-2xl">{room.name[locale]}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {room.description[locale]}
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {room.capacity}
          </div>
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1" />
            {room.type}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/reservation?room=${room._id}`}>
            {t('bookNow')}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
