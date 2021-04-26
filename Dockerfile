# import the base image
FROM node:12

WORKDIR /user/samplewebapp
# copy project files
COPY ./ ./
# install dependancies
RUN npm install

# run default command 

CMD [ "npm","start" ]

