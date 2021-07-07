# express test

### rabbitmq test
  1. install rabbitmq by docker
  `docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 --restart=unless-stopped -e RABBITMQ_DEFAULT_USER=root -e RABBITMQ_DEFAULT_PASS=root rabbitmq:management`
  2. install node package `npm i amqplib`
  3. connect uri `amqp://root:root@localhost:5672` 
  4. and then queue and consume!