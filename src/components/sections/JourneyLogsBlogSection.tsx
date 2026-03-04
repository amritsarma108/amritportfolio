import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Sparkles, Mountain, Compass, ArrowLeft } from "lucide-react";
import { useState, useRef } from "react";

interface JourneyLogsBlogSectionProps {
  onClose: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullStory: string;
  quote: string;
  reflection: string;
  tags: string[];
  image: string;
  location: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Halesi Mahadev",
    subtitle: "Fear & Faith",
    description: "A journey into the sacred cave where Lord Shiva is believed to reside. Between darkness and devotion.",
    fullStory: `The entrance to Halesi Mahadev felt like stepping between worlds. Carved into the limestone cliffs of the Khaling forest, this cave has been a sacred pilgrimage site for centuries.

I remember the moment I first saw the darkness of the cave mouth - my heart raced with an primal fear. The legends spoke of Shiva residing here, but what awaited in that profound darkness?

As I descended deeper, the light from the entrance faded. My flashlight barely cut through the thick air. Then, I heard it - the sound of water dripping, echoing through chambers that felt infinite.

In that moment of complete darkness and uncertainty, I realized something profound: faith isn't about having all the answers. It's about walking forward even when you can't see the path.

The inner sanctum, when I finally reached it, held a silence that spoke louder than any prayer. Devotees had left offerings - coins, flowers, tridents wrapped in red cloth. I sat there for hours, feeling the ancient energy of devotion that had accumulated over millennia.

Coming out, the forest seemed brighter. The mountains in the distance looked different. I had entered fearing the darkness and emerged with a quiet certainty that would stay with me forever.`,
    quote: "Fear is just faith in reverse. When you walk through it, you find what you're really made of.",
    reflection: "This journey taught me that the places that scare us often hold our greatest transformations. The cave didn't change - I did.",
    tags: ["Faith", "Spiritual Journey", "Inner Peace", "Courage"],
image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
    location: "Halesi, Nepal"
  },
  {
    id: "2",
    title: "Korchen Dada",
    subtitle: "Friendship & Struggle",
    description: "Crossing the high mountain pass with friends who became family. When the path is hard, you find out who truly walks with you.",
    fullStory: `Korchen Dada sits at 4,200 meters - a prayer flag draped pass that connects two remote valleys. The trail is punishing: steep ascents, loose scree, and weather that changes in minutes.

I started the climb with three friends. We were excited, confident. By midday, two had turned back due to altitude sickness. Only my friend Santosh and I continued.

At 3,800 meters, the altitude hit me. Each step became a negotiation with my body. Santosh slowed down without complaint, matching my pace exactly. When I needed rest, he waited. When I doubted we could make it, he simply said, "We'll go together. Slow is fine."

The final push to the pass was in thick mist. I couldn't see more than five meters ahead. But I could hear Santosh's breathing behind me, steady and reassuring.

When we finally stood at Korchen Dada, the clouds parted for exactly thirty seconds. A sea of peaks stretched before us - distant, ancient, indifferent to our small struggle. Thousands of prayer flags snapped in the wind, their red and yellow fragments carrying mantras to the heavens.

I wept. Not from exhaustion, but from the overwhelming gratitude for a friend who refused to leave my side.`,
    quote: "A friend who stays when the altitude gets dangerous isn't just a friend. They're family by choice.",
    reflection: "True friendship isn't about walking the easy path together. It's about matching each other's pace when the path becomes impossible.",
    tags: ["Friendship", "Mountain", "Trust", "Perseverance"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    location: "Korchen Dada, Nepal"
  },
  {
    id: "3",
    title: "Dupcheswor & Gosaikunda",
    subtitle: "Solo Journey",
    description: "Alone at 4,300 meters in the Himalayas. When the world goes quiet, you finally hear yourself.",
    fullStory: `Gosaikunda - the sacred lake at 4,300 meters - had called to me for years. Legends said its waters were formed from the tears of Lord Shiva. I needed to see it.

This time, I went alone. No friends, no guides, just my backpack and the trail.

The first day brought me to Dupcheswor - another lake, lower and smaller. The trail was empty. I passed only one other hiker in four days. The silence was absolute.

At Gosaikunda, I arrived just before sunset. The lake lay still as glass, reflecting the surrounding peaks perfectly. No sound except the wind and my own heartbeat. I sat on a boulder and watched the light change - pink to orange to purple to stars.

In that solitude, I heard myself clearly for the first time in years. All the noise of daily life - expectations, fears, the constant doing - dissolved. What remained was simple: just being. Just existing in one of the most beautiful places on earth.

The next morning, I woke to frozen fingers and a camera that refused in the cold. None of it mattered. I to work had found what I came for - not the lake, but the silence. Not the view, but the version of myself that emerges when there's nothing to distract from the present moment.`,
    quote: "In silence, you don't hear the world differently. You hear yourself clearly for the first time.",
    reflection: "Solo travel isn't about loneliness. It's about meeting yourself without the noise of others' expectations.",
    tags: ["Solo Travel", "Self Discovery", "Himalayas", "Meditation"],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    location: "Gosaikunda, Nepal"
  },
  {
    id: "4",
    title: "Poon Hill",
    subtitle: "Progress Over Speed",
    description: "The most famous sunrise viewpoint in Nepal. A reminder that the best views come to those who climb slowly.",
    fullStory: `Poon Hill is famous for its sunrise - the moment when the first light paints the Annapurna range in shades of gold and pink. Thousands make the pre-dawn climb every year.

I almost missed it. Arriving late in the afternoon, I watched the sunset paint the same mountains in equally magnificent colors. The crowds would come at 4 AM. I had the mountains to myself at 6 PM.

The next morning, I woke naturally - not to an alarm, but to birdsong. I climbed slowly, deliberately. Behind me, I heard the headlamps of the sunrise chasers, their flashlights bobbing up the trail.

At the top, I found a quiet corner. When the light came, it came gradually - not as a dramatic reveal, but as a gentle unfolding. The peaks turned from purple to blue to gold over twenty minutes.

I saw others rush to take photos and leave. I stayed. I breathed. I let the silence of the mountains settle into my bones.

The descent taught me the same lesson. Those who climbed fastest had missed the subtle beauty of the trail - the moss on stones, the prayer flags against blue sky, the tea houses with their warm wood and aroma of dal bhat.

Speed had never been my friend. At Poon Hill, I finally understood why.`,
    quote: "The mountain doesn't care how fast you climb. It only cares that you showed up with presence.",
    reflection: "Progress over speed. Presence over performance. The destination is just an excuse to take the journey.",
    tags: ["Sunrise", "Annapurna", "Growth", "Mindfulness"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    location: "Poon Hill, Nepal"
  }
];

function BlogCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${post.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      
      {/* Cinematic Blur */}
      <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-indigo-500/30 transition-all duration-500" />
      <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-indigo-200 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">
            {post.title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-sm text-indigo-300 font-medium">
            {post.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-sm text-slate-300 line-clamp-2">
            {post.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: modalRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      
      {/* Modal */}
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scroll Progress */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
        
        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </motion.button>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-slate-300"
          >
            <Mountain className="w-4 h-4" />
            {post.location}
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              {post.title}
            </h2>
            <p className="text-indigo-300 font-medium mb-6">{post.subtitle}</p>
          </motion.div>
          
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {post.tags.map((tag, i) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-8"
          />
          
          {/* Story */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.fullStory.split('\n\n').map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-slate-300 leading-relaxed mb-4"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="my-8 p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30"
          >
            <p className="text-lg text-indigo-200 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "{post.quote}"
            </p>
          </motion.blockquote>
          
          {/* Reflection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Reflection</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {post.reflection}
            </p>
          </motion.div>
          
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={onClose}
            className="mt-8 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -100 + "px"],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/30"
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function JourneyLogsBlogSection({ onClose }: JourneyLogsBlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <FloatingParticles />
        
        <div className="relative p-8 md:p-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/20">
                <Compass className="w-6 h-6 text-indigo-300" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-100" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Journey Logs
              </h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-slate-300 leading-relaxed mb-10 font-light"
          >
            Spiritual travel journal —{' '}
            <span className="text-indigo-300">not destinations, but inner transformations</span>.
          </motion.p>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogModal 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
