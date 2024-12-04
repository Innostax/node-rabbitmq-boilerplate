const amqp = require('amqplib');

const RABBITMQ_HOST = process.env.RABBITMQ_HOST || 'localhost';
const QUEUE_NAME = process.env.RABBITMQ_QUEUE || 'task_queue';

async function start() {
  try {
    const connection = await amqp.connect(`amqp://${RABBITMQ_HOST}`);
    const channel = await connection.createChannel();
    
    await channel.assertQueue(QUEUE_NAME, {
      durable: true
    });

    console.log(`Consumer ${process.env.NODE_ENV} waiting for messages in ${QUEUE_NAME}. To exit press CTRL+C`);

    channel.consume(QUEUE_NAME, (msg) => {
      if (msg !== null) {
        console.log(`Consumer ${process.env.NODE_ENV} received: ${msg.content.toString()}`);
        channel.ack(msg);
      }
    });

  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
  }
}

start();
