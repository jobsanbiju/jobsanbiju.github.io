import { motion } from 'motion/react';
import { Play, Award } from 'lucide-react';
import { useState } from 'react';
import thumb from '../../../images/thumb.jpg';
import HalationText from './HalationText';

const films = [
  {
    id: 1,
    title: 'Airbnb - Find Your Somewhere',
    category: 'Spec Commercial',
    duration: '1 min',
    year: '2026',
    thumbnail: thumb,
    awards: 'Personal Project',
    vimeoId: '1144231456',
  },
];

export function FilmShowcase() {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="work" className="section-surface section-fade py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4"><HalationText glowColor="rgba(255,60,60,1)" blurAmount="16px" opacity={0.85}>Selected Works</HalationText></h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of films and videos that showcase my passion for visual storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {films.map((film, index) => {
            const isActive = activeFilmId === film.id;
            return (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => {
                setActiveFilmId(film.id);
                setIsPlaying(true);
              }}
            >
              {isActive && isPlaying && film.vimeoId ? (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <div style={{ padding: '42.5% 0 0 0', position: 'relative', width: '100%' }}>
                    <iframe
                      src={`https://player.vimeo.com/video/${film.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      title={`${film.title} - Job San Biju`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity"></div>
                </>
              )}
              
              {/* Play button overlay */}
              {!(isActive && isPlaying) && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveFilmId(film.id);
                      setIsPlaying(true);
                    }}
                  >
                    <Play className="size-8 text-white fill-white" />
                  </button>
                </div>
              )}

              {/* Film info */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity ${isActive && isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/70 text-sm">{film.category}</span>
                  <span className="text-white/70 text-sm">•</span>
                  <span className="text-white/70 text-sm">{film.duration}</span>
                  <span className="text-white/70 text-sm">•</span>
                  <span className="text-white/70 text-sm">{film.year}</span>
                </div>
                <h3 className="text-white text-xl mb-2"><HalationText glowColor="rgba(255,70,70,0.95)" blurAmount="10px" opacity={0.72}>{film.title}</HalationText></h3>
                <p className="text-white/70 text-sm flex items-center gap-1">
                  <Award className="size-4" />
                  {film.awards}
                </p>
              </div>
            </motion.div>
          )})}
        </div>

        {/* Stats removed */}
      </div>
    </section>
  );
}
