# Stage 1: Install dependencies and build the project
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy project files
COPY . .

# Build the Next.js project
RUN npm run build

# Stage 2: Create a smaller runtime image
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Install production-only dependencies
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
RUN npm ci --only=production --legacy-peer-deps

# Copy Next.js build output and static files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the Next.js port
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "start"]
