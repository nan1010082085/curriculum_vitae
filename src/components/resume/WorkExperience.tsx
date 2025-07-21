import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import workExperienceData from '@/contants/workConstants'

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(workExperienceData[0].id)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div ref={ref}>
      <h2 className='text-2xl font-bold text-gray-100 mb-6 pb-2 border-b border-gray-700'>工作经历</h2>

      <div className='relative'>
        {/* 时间线 */}
        <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent transform translate-x-1/2 hidden md:block' />

        <div className='space-y-8'>
          {workExperienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
              className='relative'>
              {/* 时间线节点 */}
              <div className='absolute left-4 top-6 w-4 h-4 rounded-full bg-indigo-500 border-2 border-gray-900 transform translate-x-1/2 hidden md:block' />

              <div className='ml-0 md:ml-12'>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between'>
                  <div className='flex items-center'>
                    {/* 公司Logo占位符 */}
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-white font-bold text-lg mr-4 border border-indigo-500/30'>
                      {exp.logo}
                    </div>

                    <div>
                      <h3 className='text-xl font-semibold text-gray-100'>{exp.company}</h3>
                      <p className='text-indigo-400'>{exp.position}</p>
                    </div>
                  </div>

                  <div className='mt-2 md:mt-0 flex items-center'>
                    <span className='text-gray-400 whitespace-nowrap'>{exp.period}</span>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className='ml-4 text-gray-400 hover:text-indigo-400 transition-colors'
                      aria-label={expandedId === exp.id ? '收起详情' : '展开详情'}>
                      <i className={`fa-solid ${expandedId === exp.id ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                    </button>
                  </div>
                </div>

                {/* 内容区域 */}
                <motion.div
                  className='mt-4 bg-gray-800/20 rounded-xl p-5 border border-gray-700/20 text-gray-300 text-sm leading-relaxed'
                  initial={{ maxHeight: 0, opacity: 0, padding: 0 }}
                  animate={{
                    maxHeight: expandedId === exp.id ? '2000px' : 0,
                    opacity: expandedId === exp.id ? 1 : 0,
                    padding: expandedId === exp.id ? '1.5rem' : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                  overflow='hidden'>
                  <div className='space-y-4'>
                    <div>
                      <h4 className='text-gray-200 font-medium mb-2'>工作内容:</h4>
                      <pre className='whitespace-pre-line text-gray-300'>{exp.content}</pre>
                    </div>

                    {exp.achievements.length ? (
                      <div>
                        <h4 className='text-gray-200 font-medium mb-2'>主要业绩:</h4>
                        <ul className='space-y-2'>
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className='flex items-start'>
                              <i className='fa-solid fa-star text-indigo-400 mt-1 mr-2 text-xs' />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
