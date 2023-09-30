
FROM node:18.8.0-alpine


WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH


COPY package.json /app/package.json
RUN npm install
COPY . /app/
RUN npm install @vue/cli@3.7.0 -g


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

#docker build -t vuestoreloasi .

#docker run -it -d -p 4550:5173 --rm --name vuestoreloasi vuestoreloasi
