# # Use Node.js LTS as base image
# FROM node:lts

# # Set working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js application
# RUN npm run build

# # Expose the port Next.js is running on (by default 3000)
# EXPOSE 3000

# # Command to run the Next.js application
# CMD ["npm", "start"]


FROM node:lts as dependencies
WORKDIR /my-project
COPY package.json package-lock.json ./
RUN yarn install


FROM node:lts as builder
WORKDIR /my-project
COPY ./ .
COPY ./.env .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn run build
FROM node:lts as runner
WORKDIR /my-project
ENV NODE_ENV production
COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/.env ./.env
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json
ENV HOSTNAME="0.0.0.0"
EXPOSE 3000

CMD ["yarn", "start", "-p" , "3000"]