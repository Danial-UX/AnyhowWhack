# AnyhowWhack


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
   ```

3. **Start the development server**
   ```bash
   pnpm dev
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