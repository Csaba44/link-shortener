# Use Node.js as the base image
FROM node

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install TypeScript globally (if needed)
RUN npm install -g typescript

# Copy all files
COPY . .

# Compile TypeScript files
RUN tsc

# Expose the app on port 5000
EXPOSE 5000

# Start the server
CMD ["npm", "run", "dev"]
