import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const instagramApiKey = publicRuntimeConfig.INSTAGRAM_API_KEY;

interface MediaItem {
  id: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

const Gallery = () => {
  const [instagramMedia, setInstagramMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchInstagramMedia = async () => {
      const accessToken = instagramApiKey
      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
      const data = await response.json();
      setInstagramMedia(data.data);
    };

    fetchInstagramMedia();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">Instagram Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {instagramMedia.map((media) => (
          <div key={media.id} className="rounded overflow-hidden shadow-lg">
            <a href={media.permalink} target="_blank" rel="noopener noreferrer" className="group">
              {media.media_type === 'IMAGE' && <img src={media.media_url} alt="" className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-70" />}
              {media.media_type === 'VIDEO' && <img src={media.thumbnail_url} alt="" className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-70" />}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
