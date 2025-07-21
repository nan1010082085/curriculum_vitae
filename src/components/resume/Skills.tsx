import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// 技能数据
const skillsData = [
  { category: '核心框架与工具', items: [
    { name: 'Vue', level: 5 },
    { name: 'Pinia', level: 4 },
    { name: 'Vite', level: 5 },
    { name: 'Webpack', level: 4 },
    { name: 'TypeScript', level: 4 },
  ]},
  { category: 'UI与可视化', items: [
    { name: 'ElementPlus', level: 4 },
    { name: 'ECharts', level: 4 },
    { name: 'AntV', level: 3 },
    { name: 'Tailwind CSS', level: 4 },
  ]},
  { category: '微前端', items: [
    { name: 'micro-app', level: 3 },
  ]},
  { category: '跨平台/技术栈', items: [
    { name: 'React', level: 3 },
    { name: 'Angular', level: 2 },
    { name: 'Node.js', level: 3 },
    { name: 'HBuilder', level: 4 },
  ]},
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <div ref={ref}>
      <h2 className="text-2xl font-bold text-gray-100 mb-6 pb-2 border-b border-gray-700">技能栈</h2>
      
      <div className="space-y-6">
        {skillsData.map((category, index) => (
          <div key={category.category} className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">
              {category.category}
            </h3>
            
            <div className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}/5</span>
                  </div>
                  
                  <motion.div 
                    className="h-2 bg-gray-800 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * (index * category.items.length + skillIndex),
                      ease: 'easeOut'
                    }}
                  >
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </motion.div>
                  
                  {/* 星级显示 */}
                  <div className="flex justify-end mt-1">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`fa-solid fa-star text-xs ${
                          i < skill.level ? 'text-indigo-400' : 'text-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
