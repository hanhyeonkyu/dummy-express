import amqplib from "amqplib";
import env from "dotenv";
env.config();

export namespace rabbitmq {
  let channel: any = null;

  export const connect = async () => {
    try {
      const conn = await amqplib.connect(process.env.RBMQ_URL as string);
      channel = await conn.createChannel();
    } catch (err) {
      console.log(err);
    }
  };

  export const publisher = async (task: string, msg: any) => {
    let assert = await (channel as amqplib.Channel).assertQueue(task);
    if (assert) {
      return (channel as amqplib.Channel).sendToQueue(task, Buffer.from(msg));
    }
  };
  export const consumer = async (task: string) => {
    let assert = await (channel as amqplib.Channel).assertQueue(task);
    if (assert) {
      let ret = null;
      await (channel as amqplib.Channel).consume(
        task,
        (msg) => {
          if (msg !== null) {
            ret = msg.content.toString();
          }
        },
        { noAck: true }
      );
      return ret;
    }
  };
}
