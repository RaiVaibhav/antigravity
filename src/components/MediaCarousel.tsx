"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const MediaCarousel = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  // Media items from the antigravity folder
  const mediaItems = [
    {
      type: "video",
      src: "/antigravity/bucket-list-achievement.mp4",
      title: "Bucket List Achievement",
    },
    {
      type: "image",
      src: "/antigravity/certified-pilot-1.jpg",
      title: "Certified P1 & P2 Pilot",
    },
    {
      type: "image",
      src: "/antigravity/certified-pilot-2.jpg",
      title: "Certification Achievement",
    },
    {
      type: "video",
      src: "/antigravity/learn-to-fly-india.mp4",
      title: "Learn to Fly in India",
    },
    {
      type: "video",
      src: "/antigravity/soar-like-bird.mp4",
      title: "Soar Like a Bird",
    },
    {
      type: "image",
      src: "/antigravity/team-achievement-1.jpg",
      title: "Team Achievement",
    },
    {
      type: "image",
      src: "/antigravity/team-achievement-2.jpg",
      title: "Team Achievement",
    },
    {
      type: "video",
      src: "/antigravity/post-monsoon-batches.mp4",
      title: "Post Monsoon Batches",
    },
  ];

  const handleVideoClick = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingVideo === index) {
      // Pause the video
      video.pause();
      setPlayingVideo(null);
    } else {
      // Stop any currently playing video
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.pause();
      }

      // Play the new video
      setPlayingVideo(index);
      try {
        await video.play();
      } catch (error) {
        console.log("Video play failed:", error);
        // Fallback: try again after a short delay
        setTimeout(() => {
          video.play().catch(console.log);
        }, 100);
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Videos & Photos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the thrill through our students&apos; adventures and
            achievements
          </p>
        </div>

        {/* Grid Layout with Max Items Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => item.type === "video" && handleVideoClick(index)}
            >
              <div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden">
                {item.type === "video" ? (
                  <>
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="w-full h-full object-cover"
                      controls={playingVideo === index}
                      muted
                      loop
                      preload="metadata"
                      onLoadedData={() =>
                        console.log(`Video ${index} loaded successfully`)
                      }
                      onError={(e) =>
                        console.error(`Video ${index} failed to load:`, e)
                      }
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {playingVideo !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play size={32} className="text-white ml-1" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                      VIDEO
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">
                      PHOTO
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCarousel;
