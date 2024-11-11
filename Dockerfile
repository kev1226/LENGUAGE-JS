# Use the official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy all the source code (from `LANGUAGE-JAVASCRIPT/` to the container)
COPY . .

# Expose the port on which the application runs
EXPOSE 8082

# Define the command to run the application
CMD ["node", "app.js"]