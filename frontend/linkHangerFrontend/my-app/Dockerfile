# Stage 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json /
RUN npm install
ENV DISABLE_FLOWBITE_REACT_CLASSLIST=true 
ENV NODE_ENV=production
COPY . .
# COPY .flowbite-react .flowbite-react
RUN npm run build

# Stage 2: Serve with Next.js built-in server
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]