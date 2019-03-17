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
class Amqp {
    constructor(user, pass, host, port, vh) {
        this.user = user;
        this.pass = pass;
        this.host = host;
        this.port = port;
        this.vh = vh;
    }
    connect(exchange) {
        return __awaiter(this, void 0, void 0, function* () {
            const dsn = `amqp://${this.user}:${this.pass}@${this.host}:${this.port}/${this.vh}`;
            const conn = yield amqp.connect(dsn);
            const channel = yield conn.createChannel();
            yield channel.assertExchange(exchange.name, exchange.type, exchange.options);
            return channel;
        });
    }
    send(exchange, routingKey, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield this.connect(exchange);
            const buffer = new Buffer(JSON.stringify(content));
            yield channel.publish(exchange.name, routingKey, buffer);
            yield channel.close();
        });
    }
    get(exchange, routingKey, callback, qName = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield this.connect(exchange);
            let queue = null;
            if (qName) {
            }
            else {
                queue = yield channel.assertQueue('', { exclusive: true });
            }
            const queueName = queue.queue;
            yield channel.bindQueue(queueName, exchange.name, routingKey);
            yield channel.consume(queueName, (msg) => {
                const content = JSON.parse(msg.content.toString('utf8'));
                callback(content, msg, queueName);
            }, { noAck: false });
        });
    }
    static initExchange(name, type, options) {
        return {
            name,
            type,
            options
        };
    }
}
exports.Amqp = Amqp;
