# Stage 1: Build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files into /app (not /)
COPY package.json package-lock.json ./
# RUN  npm cache clean --force
# Install dependencies
RUN npm install

# Set environment variables
ENV DISABLE_FLOWBITE_REACT_CLASSLIST=true
ENV NODE_ENV=production

# Copy all source files into /app
COPY . .
RUN ls
# Build Next.js app
RUN npm run build

# Stage 2: Serve with Next.js built-in server
FROM node:18-alpine

WORKDIR /app

# Copy everything from builder
COPY --from=builder /app ./


EXPOSE 3000

CMD ["npm", "start"]
