import { TOPIC } from "./mqtt/config";
import { Publisher } from "./publishers/publisher";

async function run() {
    const publisher = new Publisher();

    let messageCounter = 1;
    const message = `Message ${messageCounter}`;
    publisher.publish(TOPIC, message);
}

run();