import projectsData from '@/lib/projectContants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <div ref={ref}>
      <h2 className="text-2xl font-bold text-gray-100 mb-6 pb-2 border-b border-gray-700">个人项目</h2>
      
      <div className="space-y-10">
        {projectsData.map((project, index) => {
          // 生成项目图片URL
          const imagePrompt = encodeURIComponent(`${project.imagePrompt}, dark theme, starry background, clean interface`);
          const imageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%24%7BimagePrompt%7D&sign=fe5f52000e3a388bcc4aa2a9660fe107`;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                    <p className="text-indigo-400">{project.period}</p>
                  </div>
                </div>
                
                {/* 项目截图 */}
                <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-5 border border-gray-700/50 group">
                  <img 
                    src={imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* 光晕效果 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                
                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* 项目成就 */}
                <div>
                  <h4 className="text-gray-200 font-medium mb-2 text-sm">项目成就:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fa-solid fa-check-circle text-indigo-400 mt-1 mr-2 text-xs" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
