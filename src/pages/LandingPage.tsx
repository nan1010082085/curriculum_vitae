import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// 个人自述内容
const personalStatement = "拥有9年前端开发经验，精通Vue生态与Vite构建工具，具备微前端架构设计能力。熟悉React、Angular等多技术栈，拥有公众号、管理后台、低代码平台等多样化项目经验。擅长前端性能优化与交互设计，致力于打造高效、优质的用户体验。";

export default function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 星光背景 */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: 'url(https://lf3-static.bytednsdoc.com/obj/eden-cn/0077eh7fd/pngtree-pure-black-starry-minimalist-dreamy-business-background-picture-image_913719.jpg)',
            filter: 'brightness(0.8)'
          }}
        />
        {/* 黑色半透明蒙版 */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        {/* 星光闪烁效果 */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'twinkle 8s infinite ease-in-out'
        }} />
      </div>

      {/* 主内容 */}
      <motion.div 
        className="relative z-10 max-w-2xl px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <p className="text-[clamp(1.5rem,5vw,2.5rem)] font-light text-gray-100 leading-relaxed">
          {personalStatement}
        </p>
      </motion.div>

      {/* 进入简历按钮 */}
      <motion.button
        onClick={() => navigate('/resume')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        whileHover={{ y: 2 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-gray-200 mb-2 text-sm tracking-wider">进入简历</span>
        <motion.i 
          className="fa-solid fa-chevron-down text-gray-200"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.button>

      {/* 星光闪烁动画 */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
