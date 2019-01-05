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
const elasticsearch = require("elasticsearch");
class elasticSearchHelper {
    constructor() {
        this.config = {
            index: 'data',
            type: 'novel',
            client: new elasticsearch.Client({ host: { host: '172.18.0.4', port: 9200 } })
        };
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.config.client.cluster.health({});
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    mapping() {
        const schema = {
            text: { type: 'text' }
        };
        return this.config.client.indices.putMapping({ index: this.config.index, type: this.config.type, body: { properties: schema } });
    }
    resetIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.config.client.indices.exists({ index: this.config.index })) {
                yield this.config.client.indices.delete({ index: this.config.index });
            }
            yield this.config.client.indices.create({ index: this.config.index });
            yield this.mapping();
        });
    }
    readAndInsertData(messages) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.resetIndex();
                yield this.insertData(messages);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    insertData(messages) {
        return __awaiter(this, void 0, void 0, function* () {
            const bulkOps = [];
            for (let i = 0; i < messages.length; i++) {
                bulkOps.push({ index: { _index: this.config.index, _type: this.config.type } });
                bulkOps.push({
                    location: i,
                    text: messages[i]
                });
            }
            yield this.config.client.bulk({ body: bulkOps });
        });
    }
    getData(term, offset = 0) {
        const body = {
            from: offset,
            query: {
                match: {
                    text: {
                        query: term,
                        operator: 'and',
                        fuzziness: 'auto'
                    }
                }
            },
            highlight: { fields: { text: {} } }
        };
        return this.config.client.search({ index: this.config.index, type: this.config.type, body });
    }
}
exports.elasticSearchHelper = elasticSearchHelper;
