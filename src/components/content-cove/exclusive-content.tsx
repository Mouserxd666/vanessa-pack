'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus, X, Video } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const mediaItems = [
  { id: 1, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582936279-wce3jl-F6hQiMLWAAAYswZ.jpg', type: 'photo' },
  { id: 2, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582955821-pr96nu-323.jpg', type: 'photo' },
  { id: 3, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583065167-9tlkobi-321.jpg', type: 'photo' },
  { id: 4, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583066743-qzlq39-325.jpg', type: 'photo' },
  { id: 5, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583067054-95jz6l-327.jpg', type: 'photo' },
  { id: 6, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583067368-g9n51-329.jpg', type: 'photo' },
  { id: 7, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583067639-0zhqx8-332.jpg', type: 'photo' },
  { id: 8, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583067948-2p7w-338.jpg', type: 'photo' },
  { id: 9, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583068298-k2o58n-342.jpg', type: 'photo' },
  { id: 10, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583068571-me3gx-350.jpg', type: 'photo' },
  { id: 11, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583068856-i9m7a6-352.jpg', type: 'photo' },
  { id: 12, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583069168-rxohjr-5026539078962752733_12174e08f03d9fb6e4c.jpg', type: 'photo' },
  { id: 13, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583069429-jtcek9-5026539078962752734_121de82e45cee598cef.jpg', type: 'photo' },
  { id: 14, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583069671-yu6c4-c2c54426-b50e-4420-8210-de99064a5ebb.jpeg', type: 'photo' },
  { id: 15, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583069957-plhruv-c365a942-4a6e-49f5-b6af-6bc89878b8b4.jpeg', type: 'photo' },
  { id: 16, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583070216-tuhyv-d381aa27-c6f1-49d6-b76d-1e68c9c99b6c.jpeg', type: 'photo' },
  { id: 17, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583070498-74voci-IMG_2342.JPG', type: 'photo' },
  { id: 18, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583070808-jfrsc7-IMG_2369.JPG', type: 'photo' },
  { id: 19, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583071170-wpycdv-IMG_2412.JPG', type: 'photo' },
  { id: 20, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583071441-7krq15-IMG_2438.JPG', type: 'photo' },
  { id: 21, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583072153-biwtmo-IMG_2450.JPG', type: 'photo' },
  { id: 22, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583072674-emepwo-IMG_2484.JPG', type: 'photo' },
  { id: 23, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583072932-88m3aj-IMG_2490.JPG', type: 'photo' },
  { id: 24, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583073194-q9ayi-IMG_2529.JPG', type: 'photo' },
  { id: 25, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583073480-pciqy-IMG_2530.JPG', type: 'photo' },
  { id: 26, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583073731-s4k6rq-IMG_2554.JPG', type: 'photo' },
  { id: 27, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583074046-3talcm-IMG_2555.JPG', type: 'photo' },
  { id: 51, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583155977-01qnyj-IMG_7158.MP4', type: 'video' },
  { id: 52, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583157878-jyrxqm-IMG_7162.MP4', type: 'video' },
  { id: 53, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583158539-xa7r2d-VID_20230707_143029_657.mp4', type: 'video' },
  { id: 54, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583160076-i917pr-VID_20241212_031740_208.mp4', type: 'video' },
  { id: 55, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583161163-siy7yk-VID_20241212_031751_678.mp4', type: 'video' },
  { id: 56, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583162640-x6n76d-VID_20241212_031751_827.mp4', type: 'video' },
  { id: 57, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583164641-5uytry-VID_20241212_031828_006.mp4', type: 'video' },
  { id: 58, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583166409-e75jid-VID_20241212_031935_085.mp4', type: 'video' },
  { id: 59, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583168051-4slhf3-video_2022-12-07_10-57-39.mp4', type: 'video' },
  { id: 60, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583169264-43sbe-06.mp4', type: 'video' },
  { id: 28, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583074905-opq1rzh-IMG_2613.JPG', type: 'photo' },
  { id: 29, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583075180-likf5c-IMG_2632.JPG', type: 'photo' },
  { id: 30, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583075658-bwe5r85-IMG_2641.JPG', type: 'photo' },
  { id: 31, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583076019-s3e7xg-IMG_2653.JPG', type: 'photo' },
  { id: 32, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583076388-hxy70x-IMG_2727.JPG', type: 'photo' },
  { id: 33, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583077623-nflp-IMG_2766.JPG', type: 'photo' },
  { id: 34, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583078005-1xvsi-IMG_2776.JPG', type: 'photo' },
  { id: 35, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583078278-monst-IMG_2788.JPG', type: 'photo' },
  { id: 36, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583078868-3qz089-IMG_2790.JPG', type: 'photo' },
  { id: 37, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583079139-nkevqk-IMG_2792.JPG', type: 'photo' },
  { id: 38, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583079780-7mp4oo-IMG_2798.JPG', type: 'photo' },
  { id: 39, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583080095-fsapso-IMG_20241107_020221_932a89f7745c92bb9f1.jpg', type: 'photo' },
  { id: 40, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583080459-1hnxw9-IMG_20241107_020221_5601dbcadbb7171afad.jpg', type: 'photo' },
  { id: 41, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583080776-0kehla-IMG_20241107_020221_91916cd95729f4f768e.jpg', type: 'photo' },
  { id: 42, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583081084-cw84hp-IMG_20241212_145712_415575c5a3958346d16.jpg', type: 'photo' },
  { id: 43, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583081405-u580u-IMG_20241212_145712_066f5d2f015a1790c20.jpg', type: 'photo' },
  { id: 44, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583081652-gk34d-IMG_20241212_145712_542af166e0f9c623b4d.jpg', type: 'photo' },
  { id: 45, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583081945-v8vfcp-IMG_20241212_145715_9505b0ac77868686144.jpg', type: 'photo' },
  { id: 46, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583082257-155q8j-IMG_20241212_145715_76547aac637cc3ddc7e.jpg', type: 'photo' },
  { id: 61, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583173512-iehmef-9lzWp6mT_720p.mp4', type: 'video' },
  { id: 62, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583178841-92855-IMG_7167.MP4', type: 'video' },
  { id: 63, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583185070-9kyzlq-VID_20241212_031827_595.mp4', type: 'video' },
  { id: 64, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583187264-6r48j-VID_20241212_031827_932.mp4', type: 'video' },
  { id: 65, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583187264-6r48j-VID_20241212_031827_932.mp4', type: 'video' },
  { id: 66, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583189212-k0fbox-VID_20241212_031828_041.mp4', type: 'video' },
  { id: 67, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583191380-y87hd-VID_20241212_031828_084.mp4', type: 'video' },
  { id: 68, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583193794-q1ssfc-VID_20241212_031918_147%20(1).mp4', type: 'video' },
  { id: 69, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583198042-az2kaw-VID_20241212_031918_160.mp4', type: 'video' },
  { id: 70, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583202255-v8x4ar-VID_20241212_031918_786.mp4', type: 'video' },
  { id: 71, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583206156-fo9kpp-VID_20241212_031934_868.mp4', type: 'video' },
  { id: 72, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583208398-vwa83-VID_20241212_031935_069.mp4', type: 'video' },
  { id: 73, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583214198-4vb4yh-VID_20241212_031935_174.mp4', type: 'video' },
  { id: 74, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583216356-retmet-VID_20241212_031935_197%20(1).mp4', type: 'video' },
  { id: 75, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583219061-2t3pj-VID_20241212_031935_610.mp4', type: 'video' },
  { id: 76, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583221896-6g2z7-VID_20241212_031940_557.mp4', type: 'video' },
  { id: 77, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583225214-pqhame-VID_20241212_031940_805.mp4', type: 'video' },
  { id: 78, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583227561-co0xo-VID_20241212_031940_856.mp4', type: 'video' },
  { id: 79, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583230268-q6cfy-VID_20241212_031940_958.mp4', type: 'video' },
  { id: 80, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583232698-s851yu-VID_20241212_031941_145.mp4', type: 'video' },
  { id: 81, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583235727-m2db8u-VID_20241212_031941_236.mp4', type: 'video' },
  { id: 82, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583238894-bpk12e-video%2004.mp4', type: 'video' },
  { id: 83, url: 'https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756583241866-doayq-videos%2005.mp4', type: 'video' },
];

const photos = mediaItems.filter(item => item.type === 'photo');
const videos = mediaItems.filter(item => item.type === 'video');

const INITIAL_VISIBLE_COUNT = 9;
const LOAD_MORE_COUNT = 9;

function MediaGrid({
  items,
  showMore: initialShowMore,
  onItemClick,
}: {
  items: typeof mediaItems;
  showMore?: boolean;
  onItemClick: (url: string, type: string) => void;
}) {
  const [visibleCount, setVisibleCount] = useState(initialShowMore ? INITIAL_VISIBLE_COUNT : items.length);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  const remainingCount = items.length - visibleCount;

  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + LOAD_MORE_COUNT, items.length));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
      {visibleItems.map(item => (
        <div
          key={item.id}
          className="relative aspect-square w-full overflow-hidden rounded-lg group cursor-pointer"
          onClick={() => onItemClick(item.url, item.type)}
        >
          {item.type === 'photo' ? (
             <Image
              src={item.url}
              alt={`Media ${item.id}`}
              data-ai-hint="woman posing"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          ) : (
            <video 
              src={item.url} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          )}
          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="p-2 bg-black/50 rounded-full">
                <Video className="h-8 w-8 text-white" />
              </div>
            </div>
          )}
        </div>
      ))}
      {initialShowMore && hasMore && (
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-secondary/50">
          <Image
            src={items[visibleCount].url}
            alt={`Media ${items[visibleCount].id}`}
            data-ai-hint="woman posing"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-foreground gap-2 p-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-card/80 hover:bg-card h-12 w-12 transition-transform hover:scale-110"
              onClick={handleShowMore}
            >
              <Plus className="h-6 w-6" />
            </Button>
            <p className="font-semibold">Ver mais</p>
            <p className="text-sm text-muted-foreground">({remainingCount}+ restantes)</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function ExclusiveContent() {
  const [selectedMedia, setSelectedMedia] = useState<{url: string, type: string} | null>(null);

  const handleItemClick = (url: string, type: string) => {
    setSelectedMedia({ url, type });
  };

  const handleCloseDialog = () => {
    setSelectedMedia(null);
  };

  return (
    <section className="mt-8">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold font-headline">Meus Packs Exclusivos</h2>
            <TabsList className="grid grid-cols-3 md:w-auto md:inline-flex mb-0">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="photos">📸 Fotos</TabsTrigger>
                <TabsTrigger value="videos">🎥 Vídeos</TabsTrigger>
            </TabsList>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Conteúdo exclusivo</h3>
          <TabsContent value="all" className="mt-0">
            <MediaGrid items={mediaItems} showMore onItemClick={handleItemClick} />
          </TabsContent>
          <TabsContent value="photos" className="mt-0">
            <MediaGrid items={photos} onItemClick={handleItemClick} />
          </TabsContent>
          <TabsContent value="videos" className="mt-0">
            <MediaGrid items={videos} onItemClick={handleItemClick} />
          </TabsContent>
        </div>
      </Tabs>
      <Dialog open={!!selectedMedia} onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
        <DialogContent className="max-w-3xl p-0">
          <DialogHeader>
            <DialogTitle className="sr-only">Visualizar Mídia</DialogTitle>
             <DialogClose className="absolute right-2 top-2 z-10">
                <X className="h-6 w-6" />
             </DialogClose>
          </DialogHeader>
          {selectedMedia && selectedMedia.type === 'photo' && (
            <div className="relative aspect-[4/3] w-full">
              <Image src={selectedMedia.url} alt="Visualização de imagem" fill className="object-contain" />
            </div>
          )}
          {selectedMedia && selectedMedia.type === 'video' && (
            <div className="relative aspect-video w-full">
              <video src={selectedMedia.url} controls autoPlay className="w-full h-full" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}