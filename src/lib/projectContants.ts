// 项目数据
const projectsData = [
  {
    id: 1,
    title: '泰时管理平台',
    period: '2023.04-2025.07',
    description:
      '基于 Vue3 + TypeScript + Vite 搭建工程，集成 Pinia 状态管理、Element-UI 组件库实现 12+核心模块（财务/销售/合同/资源/预算决算等）的模块化开发',
    technologies: ['Vue3', 'TypeScript', 'Pinia', 'Element UI', 'IndexedDB', 'Excel', 'PDF'],
    imagePrompt: '泰时管理OA',
    achievements: [
      '性能突破：首屏加载↑72%、样式体积↓40%',
      '流程革命：审批效率↑35%、支撑2000+日操作量',
      '零误差保障：金融计算精度达0.001%',
      '扩展能力：模块化设计支持12+业务单元敏捷迭代'
    ]
  },
  {
    id: 2,
    title: '可视化低代码平台',
    period: '2021.04-2023.03',
    description:
      '全栈式前端架构基于Vue3 + TypeScript + Vite搭建工程，集成Pinia状态管理、Element-UI组件库，实现12+核心模块（财务/销售/合同/资源/预算决算等）的模块化开发。',
    technologies: ['Vue3', 'TypeScript', 'Vite', 'Pinia', 'Element-UI', 'Excel', 'PDF'],
    imagePrompt: '低代码平台界面，拖放式编辑器，组件库，数据可视化',
    achievements: [
      '性能突破：首屏加载↑72%、样式体积↓40%',
      '流程革命：审批效率↑35%、支撑2000+日操作量',
      '零误差保障：金融计算精度达0.001%'
    ]
  },
  {
    id: 3,
    title: '3D可视化看板平台',
    period: '2022.01-2022.12',
    description:
      '主导看板模块架构设计与组件生态开发，实现拖拽式可视化看板搭建。基于micro-app动态加载第三方组件/界面，支持Monaco代码编辑器实现高级自定义。',
    technologies: ['Vue3', 'TypeScript', 'Pinia', 'micro-app', 'IndexedDB', '3D', 'GLB'],
    imagePrompt: '3D可视化看板，拖拽式界面，数据图表，3D模型展示',
    achievements: [
      '开发并维护100+图元组件库',
      '搭建3D物料管理平台，推动跨系统资产复用率提升60%+',
      '日均支撑500+业务看板生成'
    ]
  },
  {
    id: 4,
    title: '中石化IPSecVPN管理平台',
    period: '2019.07-2019.11',
    description:
      '端到端前端交付，独立负责需求分析、架构设计、编码实现及测试全流程。基于Vue 3 + TypeScript构建企业级应用，重构核心交互流程，优化隧道配置向导页，减少用户操作步骤40%。',
    technologies: ['Vue3', 'TypeScript', 'Webpack', 'RESTful API', '企业级应用'],
    imagePrompt: 'VPN管理平台界面，网络安全，策略配置，数据监控',
    achievements: ['首屏加载时长压缩至1.2s内', '高效联调API 120+，问题闭环率100%', '建成中石化IPSecVPN设备集中管控平台']
  }
]

export default projectsData
