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
  { id: 64, url: 'https://raspatudopix.com.br/imagens/5.mp4', type: 'video' },
  { id: 18, url: 'https://raspatudopix.com.br/imagens/36.jpg', type: 'photo' },
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
