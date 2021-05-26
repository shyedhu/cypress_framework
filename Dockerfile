# Google Chrome 89 & Mozilla Firefox 86
FROM cypress/browsers:node14.16.0-chrome89-ff86
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run -b chrome -e ENV=https://shyedhu-react-app-3000.herokuapp.com/login'
