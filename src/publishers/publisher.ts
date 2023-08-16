import { Client } from 'mqtt';
import {connector} from "../mqtt/connector";

export class Publisher {
    private client: Client;

    constructor() {
        this.client = connector();
        this.client.on('connect', (connack) => {
            console.log(connack);
            console.log('this is publisher','Connected to MQTT broker');
        });

        this.client.on('close', (err) => {
            console.log('Connection closed');
        });

        this.client.on('reconnect', function () {
            console.log('Reconnecting...')
        })

        this.client.on('error', (error) => {
            console.error('Error during connection:', error);
        });
    }

    publish(topic: string, message: string): void {
        this.client.publish(topic, message, { qos: 2, retain: false }, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('Published')
            }
        });
    }

    async disconnect(): Promise<void> {
        await this.client.end();
        console.log('Disconnected from MQTT broker');
    }
}
