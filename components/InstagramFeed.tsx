import React, { useEffect, useState } from 'react';

interface MediaItem {
  id: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

const INSTAGRAM_API_KEY = process.env.INSTAGRAM_API_KEY;

const InstagramFeed = () => {
  const [instagramMedia, setInstagramMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchInstagramMedia = async () => {
      const accessToken = INSTAGRAM_API_KEY; 
      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
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
