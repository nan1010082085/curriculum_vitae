import { motion } from 'framer-motion';

export default function PersonalInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-gray-100 mb-6 pb-2 border-b border-gray-700">个人简介</h2>
      
      <div className="space-y-4 text-gray-300">
        <p className="leading-relaxed">
          30岁，9年工作经验，求职意向为前端开发工程师，期望工作城市北京。籍贯黑龙江鹤岗，非党员。
        </p>
        
        <div className="pt-4 border-t border-gray-800/50">
          <h3 className="text-lg font-semibold text-gray-200 mb-3">个人优势</h3>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <i className="fa-solid fa-star text-indigo-400 mt-1 mr-2" />
              <span>技术深度与效率：精通Vue生态与Vite构建工具，可快速集成并定制ElementPlus/ECharts；精通微前端技术，能进行高效架构设计。</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-star text-indigo-400 mt-1 mr-2" />
              <span>跨栈开发能力：了解多技术栈(React/Angular/Node等)，具备跨技术栈开发能力，可实现多平台开发(Web/小程序/App)。</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-star text-indigo-400 mt-1 mr-2" />
              <span>丰富项目经验：拥有公众号、管理后台、低代码等多样化项目经验，能灵活应对各类需求。</span>
            </li>
          </ul>
        </div>
        
        <div className="pt-4 border-t border-gray-800/50">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center text-sm">
              <i className="fa-solid fa-phone text-gray-400 mr-2 w-5 text-center" />
              <span>15117960621</span>
            </div>
            <div className="flex items-center text-sm">
              <i className="fa-solid fa-envelope text-gray-400 mr-2 w-5 text-center" />
              <span>nan1010082085@163.com</span>
            </div>
            <div className="flex items-center text-sm">
              <i className="fa-solid fa-map-marker-alt text-gray-400 mr-2 w-5 text-center" />
              <span>北京</span>
            </div>
            <div className="flex items-center text-sm">
              <i className="fa-solid fa-briefcase text-gray-400 mr-2 w-5 text-center" />
              <span>9年工作经验</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
