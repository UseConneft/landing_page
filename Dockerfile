# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile
COPY . .
RUN npm run build

# Stage 2: Set up the production environment
FROM nginx:alpine

# Install Node.js in the Nginx image
RUN apk add --update nodejs npm

# Set working directory
WORKDIR /app

# Copy built Next.js application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx and Node.js application
CMD npm start & nginx -g 'daemon off;'
