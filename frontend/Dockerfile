# Stage 1: Build Angular app
FROM node:latest AS angular-build

WORKDIR /app/frontend

COPY ./MyRestaurant/package.json ./
COPY ./MyRestaurant/package-lock.json ./

RUN npm install

COPY ./MyRestaurant ./

RUN npm run build

# Stage 2: Build Express.js backend
FROM node:latest AS express-build

WORKDIR /MyRestaurant/backend

COPY ./backend/package.json ./
COPY ./backend/package-lock.json ./

RUN npm install

COPY ./backend ./

# Stage 3: Final image with Angular build and Express.js
FROM node:latest

WORKDIR /app

COPY --from=angular-build /app/frontend/dist /app/frontend/dist
COPY --from=express-build /app/backend /app/backend

# Set any necessary environment variables for Express.js if required
ENV PORT=3000

# Install any global dependencies needed for Express.js (if any)
# RUN npm install -g <package_name>

EXPOSE 3000

CMD ["node", "src/app.js"]