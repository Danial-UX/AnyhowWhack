"use client"

import { Card } from "@/components/ui/card"
import { VoiceAssistantInput } from "@/components/voice-assistant-input"
import { ThreeRunner } from "@/components/three-runner"
import { manualSteps } from "@/lib/manual-steps"

interface Canvas3DProps {
  currentStep: number
}

export function Canvas3D({ currentStep }: Canvas3DProps) {
  const step = manualSteps[currentStep]

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 items-center justify-center p-8">
        <Card className="relative aspect-square w-full max-w-2xl overflow-hidden border-2 border-secondary bg-white">
          <ThreeRunner code={step?.threeCode} stepKey={currentStep} />

          <div className="absolute left-4 top-4 flex max-w-[75%] flex-col gap-1 rounded-lg border border-border bg-card/95 px-3 py-2 text-xs font-medium text-foreground backdrop-blur-sm">
            <span className="uppercase tracking-wide text-muted-foreground">Step {currentStep + 1}</span>
            {step?.title && <span className="text-sm text-foreground">{step.title}</span>}
          </div>

          <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-card/90 px-3 py-1 text-xs text-muted-foreground shadow">
            <span>Drag to rotate</span>
            <span className="text-muted-foreground/60">•</span>
            <span>Scroll to zoom</span>
          </div>
        </Card>
      </div>

      <VoiceAssistantInput />
    </div>
  )
}



// "use client"

// import { Card } from "@/components/ui/card"
// import { Cable as Cube, RotateCw } from "lucide-react"
// import { VoiceAssistantInput } from "@/components/voice-assistant-input"

// interface Canvas3DProps {
//   currentStep: number
// }

// export function Canvas3D({ currentStep }: Canvas3DProps) {
//   return (
//     <div className="flex h-full flex-col">
//       <div className="flex flex-1 items-center justify-center p-8">
//         <Card className="relative aspect-square w-full max-w-2xl overflow-hidden border-2 border-secondary bg-white">
//           {/* Placeholder for 3D canvas */}
//           <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
//             <div className="rounded-full bg-primary/10 p-6">
//               <Cube className="h-16 w-16 text-primary" />
//             </div>
//             <div>
//               <h3 className="mb-2 text-lg font-semibold text-foreground">3D Canvas Area</h3>
//               <p className="text-sm text-muted-foreground">
//                 Three.js rendering will display here with black & white line art style
//               </p>
//             </div>
//             <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
//               <RotateCw className="h-4 w-4" />
//               <span>Drag to rotate • Scroll to zoom</span>
//             </div>
//           </div>

//           {/* Step indicator overlay */}
//           <div className="absolute left-4 top-4 rounded-lg border border-border bg-card/95 px-3 py-2 text-sm font-medium backdrop-blur-sm">
//             Step {currentStep + 1}
//           </div>
//         </Card>
//       </div>

//       <VoiceAssistantInput />
//     </div>
//   )
// }
