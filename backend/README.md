# Backend

## Structure
```
backend/
 ├── src/
 │   ├── index.ts          # Entry point
 │   ├── supabase.ts       # Supabase client
 │   ├── routes/manuals.ts # API routes
 │   ├── services/
 │   │   ├── aiParser.ts
 │   │   └── pdfExtractor.ts
 ├── package.json
 └── .env                  # Environment variables
```

## Architecture
```
Frontend (Next.js)
   |
   | POST /api/manuals/upload
   v
Backend API (Node)
   |
   |-- Upload file → Supabase Storage
   |-- Create manual DB record
   |-- Extract text/images
   |-- LLM → steps JSON
   |-- Store steps in DB
   v
Supabase
   ├── Storage (manuals/)
   └── Postgres (manuals, steps)
```

## Running locally 
1. Run the command
    ```
    npx ts-node src/index.ts
    ```
2. You should see:
    ```
    Backend running at http://localhost:4000
    ```