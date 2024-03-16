# Use Node.js LTS as base image
FROM node:lts

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on (by default 3000)
EXPOSE 80

# Command to run the Next.js application
CMD ["npm", "start"]
