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

// Dados atualizados
const profile = {
  coverImage: {
    url: "https://raspatudopix.com.br/imagens/1.jpg",
    alt: "Cover image for Larissa Santos",
    hint: "woman posing",
    width: 1200,
    height: 400,
  },
  profileAvatar: {
    url: "https://raspatudopix.com.br/imagens/35.jpg",
    alt: "Larissa Santos",
    hint: "woman portrait",
  },
};

const mediaItems = [
  { id: 64, url: "https://raspatudopix.com.br/imagens/5.mp4", type: "video", hint: "" },
  { id: 18, url: "https://raspatudopix.com.br/imagens/36.jpg", type: "photo", hint: "woman posing" },
  { id: 55, url: "https://raspatudopix.com.br/imagens/73.jpg", type: "photo", hint: "woman posing" },
  { id: 63, url: "https://raspatudopix.com.br/imagens/4.mp4", type: "video", hint: "" },
  { id: 21, url: "https://raspatudopix.com.br/imagens/39.jpg", type: "photo", hint: "woman posing" },
  { id: 7, url: "https://raspatudopix.com.br/imagens/7.jpg", type: "photo", hint: "woman posing" },
  { id: 56, url: "https://raspatudopix.com.br/imagens/74.jpg", type: "photo", hint: "woman posing" },
  { id: 74, url: "https://raspatudopix.com.br/imagens/16.mp4", type: "video", hint: "" },
  { id: 26, url: "https://raspatudopix.com.br/imagens/44.jpg", type: "photo", hint: "woman posing" },
  { id: 48, url: "https://raspatudopix.com.br/imagens/66.jpg", type: "photo", hint: "woman posing" },
  { id: 2, url: "https://raspatudopix.com.br/imagens/2.jpg", type: "photo", hint: "woman posing" },
  { id: 66, url: "https://raspatudopix.com.br/imagens/7.mp4", type: "video", hint: "" },
  { id: 31, url: "https://raspatudopix.com.br/imagens/49.jpg", type: "photo", hint: "woman posing" },
  { id: 13, url: "https://raspatudopix.com.br/imagens/13.jpg", type: "photo", hint: "woman posing" },
  { id: 4, url: "https://raspatudopix.com.br/imagens/4.jpg", type: "photo", hint: "woman posing" },
  { id: 35, url: "https://raspatudopix.com.br/imagens/53.jpg", type: "photo", hint: "woman posing" },
  { id: 1, url: "https://raspatudopix.com.br/imagens/1.jpg", type: "photo", hint: "woman posing" },
  { id: 30, url: "https://raspatudopix.com.br/imagens/48.jpg", type: "photo", hint: "woman posing" },
  { id: 14, url: "https://raspatudopix.com.br/imagens/14.jpg", type: "photo", hint: "woman posing" },
  { id: 45, url: "https://raspatudopix.com.br/imagens/63.jpg", type: "photo", hint: "woman posing" },
  { id: 24, url: "https://raspatudopix.com.br/imagens/42.jpg", type: "photo", hint: "woman posing" },
  { id: 65, url: "https://raspatudopix.com.br/imagens/6.mp4", type: "video", hint: "" },
  { id: 5, url: "https://raspatudopix.com.br/imagens/5.jpg", type: "photo", hint: "woman posing" },
  { id: 19, url: "https://raspatudopix.com.br/imagens/37.jpg", type: "photo", hint: "woman posing" },
  { id: 50, url: "https://raspatudopix.com.br/imagens/68.jpg", type: "photo", hint: "woman posing" },
  { id: 47, url: "https://raspatudopix.com.br/imagens/65.jpg", type: "photo", hint: "woman posing" },
  { id: 20, url: "https://raspatudopix.com.br/imagens/38.jpg", type: "photo", hint: "woman posing" },
  { id: 28, url: "https://raspatudopix.com.br/imagens/46.jpg", type: "photo", hint: "woman posing" },
  { id: 62, url: "https://raspatudopix.com.br/imagens/3.mp4", type: "video", hint: "" },
  { id: 23, url: "https://raspatudopix.com.br/imagens/41.jpg", type: "photo", hint: "woman posing" },
  { id: 46, url: "https://raspatudopix.com.br/imagens/64.jpg", type: "photo", hint: "woman posing" },
  { id: 41, url: "https://raspatudopix.com.br/imagens/59.jpg", type: "photo", hint: "woman posing" },
  { id: 75, url: "https://raspatudopix.com.br/imagens/17.mp4", type: "video", hint: "" },
  { id: 16, url: "https://raspatudopix.com.br/imagens/16.jpg", type: "photo", hint: "woman posing" },
  { id: 57, url: "https://raspatudopix.com.br/imagens/75.jpg", type: "photo", hint: "woman posing" },
  { id: 61, url: "https://raspatudopix.com.br/imagens/2.mp4", type: "video", hint: "" },
  { id: 73, url: "https://raspatudopix.com.br/imagens/15.mp4", type: "video", hint: "" },
  { id: 34, url: "https://raspatudopix.com.br/imagens/52.jpg", type: "photo", hint: "woman posing" },
  { id: 10, url: "https://raspatudopix.com.br/imagens/10.jpg", type: "photo", hint: "woman posing" },
  { id: 58, url: "https://raspatudopix.com.br/imagens/76.jpg", type: "photo", hint: "woman posing" },
  { id: 49, url: "https://raspatudopix.com.br/imagens/67.jpg", type: "photo", hint: "woman posing" },
  { id: 11, url: "https://raspatudopix.com.br/imagens/11.jpg", type: "photo", hint: "woman posing" },
  { id: 37, url: "https://raspatudopix.com.br/imagens/55.jpg", type: "photo", hint: "woman posing" },
  { id: 42, url: "https://raspatudopix.com.br/imagens/60.jpg", type: "photo", hint: "woman posing" },
  { id: 6, url: "https://raspatudopix.com.br/imagens/6.jpg", type: "photo", hint: "woman posing" },
  { id: 67, url: "https://raspatudopix.com.br/imagens/8.mp4", type: "video", hint: "" },
  { id: 27, url: "https://raspatudopix.com.br/imagens/45.jpg", type: "photo", hint: "woman posing" },
  { id: 71, url: "https://raspatudopix.com.br/imagens/12.mp4", type: "video", hint: "" },
  { id: 51, url: "https://raspatudopix.com.br/imagens/69.jpg", type: "photo", hint: "woman posing" },
  { id: 32, url: "https://raspatudopix.com.br/imagens/50.jpg", type: "photo", hint: "woman posing" },
  { id: 17, url: "https://raspatudopix.com.br/imagens/35.jpg", type: "photo", hint: "woman posing" },
  { id: 44, url: "https://raspatudopix.com.br/imagens/62.jpg", type: "photo", hint: "woman posing" },
  { id: 3, url: "https://raspatudopix.com.br/imagens/3.jpg", type: "photo", hint: "woman posing" },
  { id: 29, url: "https://raspatudopix.com.br/imagens/47.jpg", type: "photo", hint: "woman posing" },
  { id: 15, url: "https://raspatudopix.com.br/imagens/15.jpg", type: "photo", hint: "woman posing" },
  { id: 53, url: "https://raspatudopix.com.br/imagens/71.jpg", type: "photo", hint: "woman posing" },
  { id: 69, url: "https://raspatudopix.com.br/imagens/10.mp4", type: "video", hint: "" },
  { id: 68, url: "https://raspatudopix.com.br/imagens/9.mp4", type: "video", hint: "" },
  { id: 40, url: "https://raspatudopix.com.br/imagens/58.jpg", type: "photo", hint: "woman posing" },
  { id: 70, url: "https://raspatudopix.com.br/imagens/11.mp4", type: "video", hint: "" },
  { id: 25, url: "https://raspatudopix.com.br/imagens/43.jpg", type: "photo", hint: "woman posing" },
  { id: 38, url: "https://raspatudopix.com.br/imagens/56.jpg", type: "photo", hint: "woman posing" },
  { id: 33, url: "https://raspatudopix.com.br/imagens/51.jpg", type: "photo", hint: "woman posing" },
  { id: 36, url: "https://raspatudopix.com.br/imagens/54.jpg", type: "photo", hint: "woman posing" },
  { id: 59, url: "https://raspatudopix.com.br/imagens/77.jpg", type: "photo", hint: "woman posing" },
  { id: 9, url: "https://raspatudopix.com.br/imagens/9.jpg", type: "photo", hint: "woman posing" },
  { id: 54, url: "https://raspatudopix.com.br/imagens/72.jpg", type: "photo", hint: "woman posing" },
  { id: 22, url: "https://raspatudopix.com.br/imagens/40.jpg", type: "photo", hint: "woman posing" },
  { id: 39, url: "https://raspatudopix.com.br/imagens/57.jpg", type: "photo", hint: "woman posing" },
  { id: 72, url: "https://raspatudopix.com.br/imagens/14.mp4", type: "video", hint: "" },
  { id: 8, url: "https://raspatudopix.com.br/imagens/8.jpg", type: "photo", hint: "woman posing" },
  { id: 43, url: "https://raspatudopix.com.br/imagens/61.jpg", type: "photo", hint: "woman posing" },
  { id: 12, url: "https://raspatudopix.com.br/imagens/12.jpg", type: "photo", hint: "woman posing" },
  { id: 52, url: "https://raspatudopix.com.br/imagens/70.jpg", type: "photo", hint: "woman posing" },
  { id: 60, url: "https://raspatudopix.com.br/imagens/1.mp4", type: "video", hint: "" },
];

// separa fotos e vídeos automaticamente
const photos = mediaItems.filter(item => item.type === 'photo');
const videos = mediaItems.filter(item => item.type === 'video');

// componente principal
export default function ProfilePage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto p-4">
      <Image
        src={profile.coverImage.url}
        alt={profile.coverImage.alt}
        width={profile.coverImage.width}
        height={profile.coverImage.height}
        className="rounded-2xl object-cover w-full h-64"
      />

      <div className="flex items-center gap-4 mt-[-4rem] z-10">
        <Image
          src={profile.profileAvatar.url}
          alt={profile.profileAvatar.alt}
          width={100}
          height={100}
          className="rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-2xl font-bold text-white drop-shadow-md">
          Larissa Santos
        </h1>
      </div>

      <Tabs defaultValue="photos" className="w-full mt-6">
        <TabsList className="flex justify-center gap-4 mb-4">
          <TabsTrigger value="photos">Fotos</TabsTrigger>
          <TabsTrigger value="videos">Vídeos</TabsTrigger>
        </TabsList>

        <TabsContent value="photos">
          <MediaGrid items={photos} onSelect={setSelectedItem} />
        </TabsContent>
        <TabsContent value="videos">
          <MediaGrid items={videos} onSelect={setSelectedItem} />
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Visualizar mídia</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X />
              </Button>
            </DialogClose>
          </DialogHeader>
          {selectedItem?.type === 'photo' ? (
            <Image
              src={selectedItem.url}
              alt={selectedItem.hint || 'media'}
              width={800}
              height={800}
              className="rounded-xl object-contain w-full"
            />
          ) : (
            <video
              src={selectedItem.url}
              controls
              className="rounded-xl w-full"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MediaGrid({ items, onSelect }: { items: any[]; onSelect: any }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item)}
          className="cursor-pointer relative group"
        >
          {item.type === 'photo' ? (
            <Image
              src={item.url}
              alt={item.hint || 'photo'}
              width={300}
              height={300}
              className="rounded-xl object-cover w-full aspect-square group-hover:opacity-80 transition"
            />
          ) : (
            <div className="relative">
              <video
                src={item.url}
                className="rounded-xl object-cover w-full aspect-square group-hover:opacity-80 transition"
                muted
                loop
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Video className="text-white w-10 h-10 drop-shadow-lg" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
