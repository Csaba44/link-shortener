# Use Node.js 18 as the base image (LTS version with structuredClone support)
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the app on port 5173
EXPOSE 5173

# Start Vite with --host for external access
CMD ["npm", "run", "dev", "--", "--host"]
