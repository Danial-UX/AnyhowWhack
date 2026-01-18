# AnyhowWhack

Tired of flat diagrams, unclear arrows, and steps that seem to skip the part you’re actually stuck on? Traditional assembly manuals often leave users guessing, slowing down what should be a straightforward build.

## What it does?
AnyhowWHACK turns those static manuals into intuitive, step by step 3D animations. Users simply upload an assembly manual, and Gemini.AI transforms it into a clean, interactive visualisation that preserves the familiar black-and-white instruction style without the confusion. Each step is rendered clearly in 3D, with labeled parts and smooth animations that show exactly how components fit together in a 360 view.

## Features

📤 Upload once, let AI do the rest.
Drag and drop a PDF or image of your assembly manual and AnyhowWHACK immediately gets to work analysing steps, identifying parts, and structuring the entire build process. A live progress indicator keeps you informed as your manual is transformed.

## All your manuals, organized and accessible.
Every processed manual is stored in a personal library, making it easy to revisit past builds or manage multiple projects at once. Visual thumbnails and smart search help you find what you need at a glance, while clear status indicators show whether a manual is ready, still processing, or needs attention.

## See the assembly, not just the instructions.
Each manual comes to life in an interactive 3D viewer that walks you through the build step by step. Parts are highlighted as they’re needed, animations clearly show how components fit together, and a fullscreen mode lets you focus entirely on the task at hand—no more guessing from flat diagrams.

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** 
- **mongoDB** 
- **Gemini AI** 

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── library/           # Manual library page
│   ├── processing/[id]/   # Processing status page
│   ├── viewer/[id]/       # 3D manual viewer
│   └── page.tsx          # Home page with upload
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── canvas-3d.tsx     # 3D visualization component
│   ├── voice-assistant-input.tsx
│   └── ...               # Feature components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
├── public/               # Static assets
└── styles/               # Global styles
```


### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Danial-UX/AnyhowWhack.git
   cd AnyhowWhack/frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```
