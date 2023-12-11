# Stage 2: Build Express.js backend
FROM node:latest AS express-build

WORKDIR /MyRestaurant/backend

COPY ./backend/package.json ./
COPY ./backend/package-lock.json ./

RUN npm install

COPY . ./MyRestaurant/backend

# Stage 3: Final image with Angular build and Express.js
FROM node:latest

WORKDIR /MyRestaurant

COPY --from=angular-build /MyRestaurant/frontend/dist /MyRestaurant/frontend/dist
COPY --from=express-build /MyRestaurant/backend /MyRestaurant/backend

# Set any necessary environment variables for Express.js if required
ENV PORT=3000

# Install any global dependencies needed for Express.js (if any)
# RUN npm install -g <package_name>

EXPOSE 3000

CMD ["node", "app.js"]