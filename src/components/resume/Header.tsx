import { motion, useScroll, useTransform } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const sections = [
  { id: 'about', label: '个人简介' },
  { id: 'education', label: '教育背景' },
  { id: 'skills', label: '技能栈' },
  { id: 'experience', label: '工作经历' },
  { id: 'projects', label: '个人项目' },
  { id: 'interests', label: '兴趣爱好' },
];

export default function Header({ activeSection, onSectionClick }: HeaderProps) {
  const { scrollY } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 50], ['transparent', 'rgba(10, 10, 20, 0.8)']);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300"
      style={{ 
        backgroundColor: headerBackground,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* 姓名和职位 */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-100 tracking-tight">杨东楠</h1>
          <p className="text-gray-300 text-sm">前端开发工程师</p>
        </div>
        
        {/* 导航菜单 - 桌面版 */}
        <nav className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                activeSection === section.id 
                  ? 'text-white font-medium' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="block h-0.5 w-full bg-indigo-400 mt-1 rounded-full" />
              )}
            </button>
          ))}
        </nav>
        
        {/* 联系方式 */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/nan1010082085" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-github mr-1" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
