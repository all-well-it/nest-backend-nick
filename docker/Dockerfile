# Use the official Node.js 18 Alpine Linux image as the base image
FROM node:18-alpine

# Set the working directory to /
WORKDIR /

# Copy the yarn.lock file to the working directory
COPY yarn.lock ./

# Copy the .env file to the working directory
COPY .env ./

# Copy the *.json to the working directory
COPY *.json ./

# Install the dependencies for the application using yarn
RUN yarn install

# Expose port 3000 
EXPOSE 3000

# Define the default command to run when the container starts
CMD ["yarn", "run", "start:dev"]