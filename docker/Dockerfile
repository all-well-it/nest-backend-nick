# Use the official Node.js 18 Alpine Linux image as the base image
FROM node:18-alpine

# Set the working directory to /
WORKDIR /

# Copy the yarn.lock file to the working directory
COPY yarn.lock ./

# Copy the package.json to the working directory
COPY package*.json ./

# Install the dependencies for the application using yarn
RUN yarn install

# Copy the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose port 3000 
EXPOSE 3000

# Define the default command to run when the container starts
CMD ["yarn", "run", "start:dev"]