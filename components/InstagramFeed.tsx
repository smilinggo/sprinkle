import React from "react";

interface MediaItem {
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

const InstagramFeed = ({ instagramMedia }: { instagramMedia: MediaItem[] }) => {
  if (instagramMedia.length === 0) {
    return <p>No Instagram media found.</p>;
  }

  return (
    <div className="flex flex-row justify-between w-full mt-4">
      {instagramMedia.map((media) => (
        <div
          key={media.id}
          className="rounded overflow-hidden shadow-lg flex-1 mx-2"
        >
          <a
            href={media.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            {media.media_type === "IMAGE" && (
              <img
                src={media.media_url}
                alt=""
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
            )}
            {media.media_type === "VIDEO" && (
              <img
                src={media.thumbnail_url}
                alt=""
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
