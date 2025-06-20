# Investimentos x Bets - Landing Page

## Overview

This is a Portuguese-language landing page application focused on financial education, specifically comparing investment strategies versus betting/gambling. The application is built as a single-page application (SPA) that presents educational content in an e-book format, designed to guide users away from gambling and towards sound investment practices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite integration
- **API Structure**: RESTful API with `/api` prefix routing
- **Session Management**: Prepared for PostgreSQL-based sessions via connect-pg-simple

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for schema migrations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### Content Structure
1. **Hero Section**: Eye-catching header with alert banner and main title
2. **Educational Sections**: Multiple content sections comparing betting vs. investment
3. **Interactive Elements**: Chat interface for user engagement
4. **Visual Components**: Video carousel and data comparison tables

### UI Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Custom dark color scheme optimized for financial content
- **Interactive Elements**: Forms, buttons, modals, and tooltips
- **Animation**: Smooth transitions and hover effects

### Chat Integration
- **External Webhook**: Integration with n8n workflow automation
- **Real-time Messaging**: Simulated chat interface for user interaction
- **AI Assistant**: "Priminho IA" character for financial guidance

## Data Flow

1. **Client Requests**: React application serves static content
2. **API Calls**: TanStack Query manages server state and caching
3. **Database Operations**: Drizzle ORM handles data persistence
4. **External Services**: Webhook integration for chat functionality
5. **Session Management**: User sessions tracked via PostgreSQL store

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **express**: Web application framework
- **wouter**: Lightweight routing library

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for managing CSS classes

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, PostgreSQL 16, and web modules
- **Port Configuration**: Application runs on port 5000, exposed as port 80
- **Hot Reload**: Vite development server with HMR enabled
- **Error Handling**: Runtime error modal for development debugging

### Production Build
- **Build Process**: Vite builds client assets, esbuild bundles server code
- **Output**: Static assets in `dist/public`, server bundle in `dist/index.js`
- **Deployment Target**: Autoscale deployment configuration
- **Environment**: Production mode with optimized builds

### Database Setup
- **Schema Deployment**: `npm run db:push` for schema updates
- **Connection**: Environment variable `DATABASE_URL` required
- **Migration Management**: Drizzle Kit handles schema migrations

## Deployment Strategy

The application is configured for deployment on Replit's autoscale infrastructure with the following characteristics:

- **Build Command**: `npm run build` - Builds both client and server
- **Start Command**: `npm run start` - Runs production server
- **Development**: `npm run dev` - Starts development server with HMR
- **Database**: PostgreSQL 16 module with Drizzle ORM integration

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```