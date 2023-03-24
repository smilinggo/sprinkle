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



const InstagramFeed = () => {
  const [instagramMedia, setInstagramMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchInstagramMedia = async () => {
  const accessToken = instagramApiKey;
  const response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
  
  if (!response.ok) {
    const text = await response.text();
    console.error('Error fetching Instagram media:', text);
    return;
  }

  const data = await response.json();
  setInstagramMedia(data.data.slice(-5));
};

    fetchInstagramMedia();
  }, []);

  return (
    <div className="flex flex-row justify-between w-full mt-4">
      {instagramMedia.map((media) => (
        <div key={media.id} className="rounded overflow-hidden shadow-lg flex-1 mx-2">
          <a href={media.permalink} target="_blank" rel="noopener noreferrer" className="group">
            {media.media_type === 'IMAGE' && <img src={media.media_url} alt="" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70" />}
            {media.media_type === 'VIDEO' && <img src={media.thumbnail_url} alt="" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70" />}
          </a>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
