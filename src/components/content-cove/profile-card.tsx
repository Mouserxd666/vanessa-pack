import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const VerifiedIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.4961 16.6133L6.46484 12.582L7.87891 11.168L10.4961 13.7852L16.1211 8.16016L17.5352 9.57422L10.4961 16.6133Z"
        fill="#3B82F6"
      />
    </svg>
  );

export function ProfileCard() {
  return (
    <div className="bg-card">
      <div className="relative h-48 md:h-64 w-full">
        <Image
          src="https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582955821-pr96nu-323.jpg"
          alt="Cover image for Vanessa Silva"
          data-ai-hint="woman posing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-6 translate-y-1/2">
          <Avatar className="h-28 w-28 border-4 border-card">
            <AvatarImage src="https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582936279-wce3jl-F6hQiMLWAAAYswZ.jpg" data-ai-hint="woman portrait" alt="Vanessa Silva" />
            <AvatarFallback>VS</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold font-headline">Vanessa Silva</h1>
            <VerifiedIcon />
        </div>
        <p className="text-muted-foreground">@vanessasilva</p>
        <p className="mt-2 text-foreground/80">Safadinha gostosa 🔥 Conteúdo exclusivo todos os dias ✨</p>
      </div>
    </div>
  );
}
