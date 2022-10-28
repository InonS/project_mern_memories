# https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e
#
# $ docker run --rm -it --user node -w /opt/app/ -v $(pwd):/opt/app/ node:lts-bullseye-slim /bin/bash

FROM node:lts-bullseye-slim AS development

# Since the image was built by node, continue with the user "node"
USER node

# Set node.js environment configuration to "development"
ENV NODE_ENV development

ENV APP_DIR /opt/app
ENV PORT 3000

# Add a work directory
WORKDIR $APP_DIR

# Cache and Install dependencies
# ADD package.json .
# ADD yarn.lock .
# RUN yarn install

# Copy app files
ADD . .

# Expose port
EXPOSE $PORT

# Start the app
# CMD [ "yarn", "start" ]