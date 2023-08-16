import {Client} from 'mqtt';
import {connector} from "../mqtt/connector";
import {TOPIC} from "../mqtt/config";

export class Subscriber {
    private client: Client;

    constructor() {
        this.client = connector();
        this.client.on('connect', () => {
            console.log('subscriber 1','Connected to MQTT broker');
            this.client.subscribe(TOPIC);
        });

        this.client.on('message', (topic, message) => {
            console.log('subscriber 1',`Received message on topic ${topic}: ${message.toString()}`);
            // this.client.end();
        });
    }

    disconnect(): void {
        this.client.end();
        console.log('Disconnected from MQTT broker');
    }
}
