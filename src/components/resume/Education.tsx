import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    school: '吉林大学',
    major: '计算机科学与技术',
    degree: '大专',
    year: '2020-2023',
    type: '非全日制'
  }
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <div ref={ref}>
      <h2 className="text-2xl font-bold text-gray-100 mb-6 pb-2 border-b border-gray-700">教育背景</h2>
      
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
            className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/20 hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">{edu.school}</h3>
                <p className="text-indigo-400">{edu.major} · {edu.degree}</p>
              </div>
              <span className="text-gray-400 whitespace-nowrap">{edu.year}</span>
            </div>
            
            <div className="mt-3 text-gray-300">
              <p>{edu.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
