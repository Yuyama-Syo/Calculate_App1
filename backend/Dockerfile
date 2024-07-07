FROM node:22.1.0

WORKDIR /app

COPY package*.json ./

RUN npm install && \
    npm install -g @nestjs/cli && \
    npm install --save @nestjs/typeorm typeorm mysql2 && \
    npm install --save-dev ts-node

RUN

COPY . .

EXPOSE 3000

ENV NODE_ENV=development

# CMD ["npm", "run", "start:dev"]



# FROM node:22.1.0

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# ENV NODE_ENV=development