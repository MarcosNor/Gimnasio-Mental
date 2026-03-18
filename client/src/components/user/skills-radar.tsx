import { useMemo } from "react"

interface SkillData {
  skill: string
  level: number
  maxLevel: number
}

interface SkillsRadarProps {
  data: SkillData[]
  size?: number
}

export function SkillsRadar({ data, size = 300 }: SkillsRadarProps) {
  const center = size / 2
  const levels = 5
  const radius = (size - 60) / 2

  const points = useMemo(() => {
    const angleStep = (2 * Math.PI) / data.length
    const startAngle = -Math.PI / 2

    return data.map((item, i) => {
      const angle = startAngle + i * angleStep
      const normalizedValue = item.level / item.maxLevel
      const r = normalizedValue * radius

      return {
        ...item,
        x: center + r * Math.cos(angle),
        y: center + r * Math.sin(angle),
        labelX: center + (radius + 24) * Math.cos(angle),
        labelY: center + (radius + 24) * Math.sin(angle),
        angle,
      }
    })
  }, [data, center, radius])

  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(" ")

  const gridPolygons = useMemo(() => {
    const angleStep = (2 * Math.PI) / data.length
    const startAngle = -Math.PI / 2

    return Array.from({ length: levels }, (_, levelIndex) => {
      const levelRadius = ((levelIndex + 1) / levels) * radius
      const levelPoints = data.map((_, i) => {
        const angle = startAngle + i * angleStep
        return `${center + levelRadius * Math.cos(angle)},${center + levelRadius * Math.sin(angle)}`
      })
      return levelPoints.join(" ")
    })
  }, [data, levels, radius, center])

  const axisLines = useMemo(() => {
    const angleStep = (2 * Math.PI) / data.length
    const startAngle = -Math.PI / 2

    return data.map((_, i) => {
      const angle = startAngle + i * angleStep
      return {
        x2: center + radius * Math.cos(angle),
        y2: center + radius * Math.sin(angle),
      }
    })
  }, [data, radius, center])

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        {gridPolygons.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            className="text-border"
            strokeDasharray={i < levels - 1 ? "4 4" : undefined}
          />
        ))}

        {axisLines.map((line, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth={1}
            className="text-border"
          />
        ))}

        <polygon
          points={polygonPoints}
          fill="currentColor"
          fillOpacity={0.15}
          stroke="currentColor"
          strokeWidth={2}
          className="text-primary"
        />

        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={5}
            fill="currentColor"
            className="text-primary"
          />
        ))}

        {points.map((point, i) => (
          <text
            key={i}
            x={point.labelX}
            y={point.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-foreground text-xs font-medium"
          >
            {point.skill}
          </text>
        ))}
      </svg>
    </div>
  )
}
