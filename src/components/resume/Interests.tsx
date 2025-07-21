import interestsData from '@/contants/interestsContants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Interests() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <div ref={ref}>
      <h2 className="text-2xl font-bold text-gray-100 mb-6 pb-2 border-b border-gray-700">兴趣爱好</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {interestsData.map((interest, index) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.05 * index, ease: 'easeOut' }}
            className="flex items-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/20 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 mr-3 group-hover:scale-110 transition-transform duration-300">
              <i className={`fa-solid ${interest.icon}`} />
            </div>
            <span className="text-gray-300">{interest.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
