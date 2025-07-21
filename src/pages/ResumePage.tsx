import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

// 导入简历各部分组件
import Header from '@/components/resume/Header';
import PersonalInfo from '@/components/resume/PersonalInfo';
import Skills from '@/components/resume/Skills';
import Education from '@/components/resume/Education';
import WorkExperience from '@/components/resume/WorkExperience';
import Projects from '@/components/resume/Projects';
import Interests from '@/components/resume/Interests';

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const { scrollY } = useScroll();
  
  // 监听滚动，更新当前活动区域
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = scrollY.get();
      
      // 检查每个部分的位置
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (currentPosition >= offsetTop && currentPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      });
    };
    
    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY]);
  
  // 滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="relative min-h-screen">
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

      {/* 固定头部 */}
      <Header activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* 主内容区域 */}
      <main className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧栏 */}
          <div className="lg:col-span-1 space-y-8">
            {/* 个人信息区域 */}
            <div 
              ref={el => sectionsRef.current.about = el}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/30"
            >
              <PersonalInfo />
            </div>
            
            {/* 技能区域 */}
            <div 
              ref={el => sectionsRef.current.skills = el}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/30"
            >
              <Skills />
            </div>
            
            {/* 兴趣爱好区域 */}
            <div 
              ref={el => sectionsRef.current.interests = el}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/30"
            >
              <Interests />
            </div>
          </div>

          {/* 右侧栏 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 教育背景区域 */}
            <div 
              ref={el => sectionsRef.current.education = el}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/30"
            >
              <Education />
            </div>
            
            {/* 工作经历区域 */}
            <div 
              ref={el => sectionsRef.current.experience = el}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/30"
            >
              <WorkExperience />
            </div>
            
            {/* 项目经历区域 */}
            <div 
              ref={el => sectionsRef.current.projects = el}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/30"
            >
              <Projects />
            </div>
          </div>
        </div>
      </main>
      
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
