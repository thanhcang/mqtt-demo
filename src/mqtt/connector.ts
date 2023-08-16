import {Client, connect} from 'mqtt';
import {MQTT_BROKER_URL} from "./config";
import MqttClient from "mqtt/src/lib/client";

export function connector(): Client {
    const client: MqttClient = connect(MQTT_BROKER_URL);
    return client;
}