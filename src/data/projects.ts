export interface Project {
  id: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  tags: string[]
  github: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 'kunming-webgis',
    title: {
      zh: '昆明市旅游景点可视化和路径规划系统',
      en: 'Kunming Tourism Visualization & Route Planning System',
    },
    description: {
      zh: '基于Vue3与OpenLayers构建的WebGIS旅游应用，集成高德双图层底图（街道/卫星自由切换），渲染17+景点POI并按类型分色标注；支持关键词搜索与分类筛选，结果实时联动地图与列表；通过GeoServer WFS服务获取OSM道路数据，前端构建拓扑图并实现A*最短路径算法，路径以动态虚线动画渲染；自主完成WGS84→GCJ02坐标校正，有效解决国内地图偏移问题；采用Composition API将地图、数据、路径规划三层解耦，确保代码高内聚低耦合，具备良好的可维护性与扩展性。',
      en: 'A WebGIS tourism app built with Vue3 and OpenLayers, featuring Amap dual-layer basemaps (street/satellite toggle), 17+ POI markers color-coded by type, keyword search with real-time map-list sync, A* shortest path routing via GeoServer WFS/OSM road data with animated dashed-line rendering, and WGS84→GCJ02 coordinate correction for China map offset. Uses Composition API for clean separation of map, data, and routing logic.',
    },
    tags: ['Vue3', 'OpenLayers', 'A*', 'GeoServer', 'WFS', 'TypeScript'],
    github: 'https://github.com/buicad/demo',
    demo: '/videos/kunming-demo.mp4',
  },
  {
    id: 'zst-agent',
    title: {
      zh: '智扫通机器人智能客服',
      en: 'Smart Vacuum Robot AI Customer Service',
    },
    description: {
      zh: '基于LangGraph+Python构建扫地机器人智能客服，核心功能为对话答疑与用户报告生成。采用ReAct推理-行动循环，Agent自主调用RAG检索、记录查询、天气定位、报告生成等7种工具；RAG基于Chroma+BGE-M3支持多格式文档检索与MD5去重；设计中间件实现日志追踪与双场景提示词自动切换；模型工厂（Ollama/Qwen3）统一管理；Streamlit实现流式逐字输出与多轮对话管理；YAML配置与日志脱敏。',
      en: 'An AI customer service for robot vacuums built with LangGraph and Python. Uses ReAct reasoning-action loop with 7 agent tools including RAG retrieval, weather, and report generation. RAG pipeline powered by Chroma + BGE-M3 with MD5 deduplication. Features middleware for logging and dual-scenario prompt switching, model factory pattern (Ollama/Qwen3), Streamlit streaming output, and YAML-based configuration.',
    },
    tags: ['LangGraph', 'Python', 'RAG', 'Chroma', 'BGE-M3', 'Streamlit'],
    github: 'https://github.com/buicad/deom1',
    demo: '/videos/zst-agent-demo.mp4',
  },
]

export default projects
