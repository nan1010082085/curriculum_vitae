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
    technologies: ['Vue3', 'TypeScript', 'Vite', 'Pinia', 'micro-app', 'Excel', 'PDF'],
    imagePrompt: '低代码平台界面，拖放式编辑器，组件库，数据可视化',
    achievements: [
      '性能突破：首屏加载↑72%、样式体积↓40%',
      '流程革命：审批效率↑35%、支撑2000+日操作量',
      '零误差保障：金融计算精度达0.001%',
      '开发并维护100+图元组件库',
      '搭建3D物料管理平台，推动跨系统资产复用率提升60%+',
      '日均支撑500+业务看板生成'
    ]
  },
  {
    id: 3,
    title: '云安全',
    period: '2020.11-2021.03',
    description:
      '参与企业安全云平台管理系统开发，实现云资源安全管控与监控功能负责云上网络安全管理项目前端研发，设计并实现网络安全管理界面',
    technologies: ['Angular', '内部定制UI库'],
    imagePrompt: 'VPN管理平台界面，网络安全，策略配置，数据监控',
    achievements: [
      '基于 Angular 框架开发核心功能模块',
      '深度集成 内部定制UI库 实现统一交互体验',
      '通过手动测试与部署保障质量（无CI/CD流程）'
    ]
  },
  {
    id: 4,
    title: '国家电网-安全策略管理工具',
    period: '2019.11-2020.11',
    description:
      '快速响应需求变化。将“场景化、流程化、透明化”的设计原则高效落地，重构传统以功能/设备划分的交互模式。实现复杂的数据可视化（设备状态、策略执行、流程拓扑）与交互式流程图。保障大型系统用户体验一致性及开发效率。',
    technologies: ['Vue3', 'TypeScript', 'Webpack', 'ElementUI', '企业级应用'],
    imagePrompt: 'VPN管理平台界面，网络安全，策略配置，数据监控',
    achievements: [
      '抽象封装可复用业务组件 25+（如表单组合、流程节点、状态卡片、复杂筛选器等），覆盖核心业务场景，提升团队开发效率30%+，有效减少重复代码与潜在错误。',
      '紧密协同产品与 UED，精准还原产品原型与设计稿，主导前端交互逻辑实现与视觉呈现，通过细节优化（如动效、反馈、布局）提升用户满意度（NPS/内部反馈显著提升）。',
      '高效对接后端团队，设计合理 API 交互方案，主导接口联调与问题排查，确保数据流畅通，持续优化前端性能（如首屏加载、操作响应）。',
      '实现包括 IP 地址校验（IPv4）等在内的基础工具函数与表单验证逻辑。'
    ]
  },
  {
    id: 5,
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
