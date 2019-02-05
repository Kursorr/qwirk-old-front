'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib");
const chalk = require("chalk");
class AmqpHelper {
    constructor() {
        this.config = {
            protocol: 'amqp',
            hostname: '17',
            port: 5672,
            username: 'guest',
            password: 'guest'
        };
    }
    sendToAmqp(content) {
        const open = amqp.connect(this.config);
        open.then(conn => {
            return conn.createChannel();
        }).then((ch) => __awaiter(this, void 0, void 0, function* () {
            const ex = 'logs';
            yield ch.assertExchange(ex, 'fanout', { durable: false });
            yield ch.publish(ex, '', Buffer.from(content));
        }));
    }
    static getFromAmqp(queue) {
        const open = amqp.connect('amqp://guest:guest@172.18.0.5:5672'); // IP RabbitMQ
        open.then(conn => {
            console.log(chalk.red('OPEN'));
            return conn.createChannel();
        }).then((ch) => __awaiter(this, void 0, void 0, function* () {
            const q = queue;
            console.log(chalk.red('YES !'));
            yield ch.assertQueue(q, { durable: true });
            yield ch.consume(q, msg => {
                console.log(" [x] Received %s", msg.content.toString());
            }, { noAck: true });
        })).catch(e => {
            console.log(chalk.red(e));
        });
    }
}
exports.AmqpHelper = AmqpHelper;
