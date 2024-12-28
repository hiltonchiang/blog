import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function WVert({ children }: Props) {
  return (
    <div className="text-2xl text-center hover:skew-x-12 [writing-mode:vertical-rl] [text-orientation:upright]">
      {children}
    </div>
  )
}
