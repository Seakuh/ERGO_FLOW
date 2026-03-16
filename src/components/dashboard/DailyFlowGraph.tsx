import { useState } from 'react'
import { dailyGoalNodes } from '../../data/dailyGoals'
import { useDailyStore } from '../../store/dailyStore'
import * as LucideIcons from 'lucide-react'

const CELL_WIDTH = 160
const CELL_HEIGHT = 100
const NODE_RADIUS = 26
const PADDING = 40

interface AnimatingNodeId {
  id: string
  timestamp: number
}

export default function DailyFlowGraph() {
  const { getTodayCompleted, toggleGoal } = useDailyStore()
  const completed = getTodayCompleted()
  const [animatingNodes, setAnimatingNodes] = useState<AnimatingNodeId[]>([])

  const handleNodeClick = (nodeId: string) => {
    // Add animation
    const newId = nodeId + Date.now()
    setAnimatingNodes((prev) => [...prev, { id: newId, timestamp: Date.now() }])

    // Remove animation after 300ms
    setTimeout(() => {
      setAnimatingNodes((prev) => prev.filter((n) => n.id !== newId))
    }, 300)

    // Toggle goal
    toggleGoal(nodeId)
  }

  // Calculate SVG dimensions
  const maxX = Math.max(...dailyGoalNodes.map((n) => n.x))
  const maxY = Math.max(...dailyGoalNodes.map((n) => n.y))
  const svgWidth = (maxX + 1) * CELL_WIDTH + 2 * PADDING
  const svgHeight = (maxY + 1) * CELL_HEIGHT + 2 * PADDING

  // Calculate node positions
  const getNodePos = (x: number, y: number) => ({
    x: PADDING + x * CELL_WIDTH + CELL_WIDTH / 2,
    y: PADDING + y * CELL_HEIGHT + CELL_HEIGHT / 2
  })

  // Helper to draw bezier curve between two nodes
  const drawPath = (x1: number, y1: number, x2: number, y2: number) => {
    const midX = (x1 + x2) / 2
    return `M ${x1} ${y1} Q ${midX} ${y1 + (y2 - y1) * 0.3} ${x2} ${y2}`
  }

  // Render a lucide icon by name
  const renderIcon = (iconName: string, size: number = 20) => {
    const IconComponent = (LucideIcons as any)[iconName]
    if (!IconComponent) return null
    return <IconComponent size={size} />
  }

  return (
    <div className="w-full flex justify-center p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-100">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        width={svgWidth}
        height={svgHeight}
        className="max-w-full h-auto"
        style={{ minHeight: '320px' }}
      >
        {/* Draw connections first (so they appear behind nodes) */}
        <g strokeWidth="2" fill="none">
          {dailyGoalNodes.map((node) =>
            node.connections.map((connectedId) => {
              const connectedNode = dailyGoalNodes.find((n) => n.id === connectedId)
              if (!connectedNode) return null

              const pos1 = getNodePos(node.x, node.y)
              const pos2 = getNodePos(connectedNode.x, connectedNode.y)

              const bothComplete = completed.includes(node.id) && completed.includes(connectedId)
              const stroke = bothComplete ? '#93C5FD' : '#E2E8F0'

              return (
                <path
                  key={`${node.id}-${connectedId}`}
                  d={drawPath(pos1.x, pos1.y, pos2.x, pos2.y)}
                  stroke={stroke}
                  strokeLinecap="round"
                />
              )
            })
          )}
        </g>

        {/* Draw nodes */}
        {dailyGoalNodes.map((node) => {
          const pos = getNodePos(node.x, node.y)
          const isCompleted = completed.includes(node.id)
          const isAnimating = animatingNodes.some((an) => an.id.startsWith(node.id))

          return (
            <g key={node.id} className="cursor-pointer" onClick={() => handleNodeClick(node.id)}>
              {/* Node circle background */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={NODE_RADIUS}
                fill={isCompleted ? '#EFF6FF' : '#FFFFFF'}
                stroke={isCompleted ? '#4F8DF7' : '#E5E7EB'}
                strokeWidth={isCompleted ? 2.5 : 1.5}
                className={`transition-all duration-200 ${isAnimating ? 'scale-110' : 'scale-100'}`}
                style={{
                  transform: isAnimating ? `scale(1.15)` : 'scale(1)',
                  transformBox: 'fill-box',
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                  transitionProperty: 'all',
                  transitionDuration: '200ms',
                  transitionTimingFunction: 'ease-out'
                }}
              />

              {/* Icon inside node */}
              <foreignObject
                x={pos.x - 12}
                y={pos.y - 12}
                width={24}
                height={24}
                className={`flex items-center justify-center ${isCompleted ? 'text-accent-primary' : 'text-gray-600'} transition-colors duration-200`}
              >
                <div className="flex items-center justify-center">
                  {isCompleted ? (
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className="animate-in fade-in duration-150"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    renderIcon(node.icon, 18)
                  )}
                </div>
              </foreignObject>

              {/* Label below node */}
              <text
                x={pos.x}
                y={pos.y + NODE_RADIUS + 18}
                textAnchor="middle"
                className={`text-xs font-semibold transition-colors duration-200 ${
                  isCompleted ? 'fill-accent-primary' : 'fill-gray-700'
                }`}
                fontSize="12"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500 max-w-xs">
        <p className="font-medium text-gray-700 mb-1">Click nodes to mark complete</p>
        <p>Your daily flow helps establish an optimal routine for physical health, mental performance, and creative output.</p>
      </div>
    </div>
  )
}
