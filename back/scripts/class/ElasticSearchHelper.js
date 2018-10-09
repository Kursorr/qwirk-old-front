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
    constructor(port = 9200, host = '172.18.0.3') {
        this.index = 'data';
        this.type = 'novel';
        this.port = port;
        this.host = host;
        this.config = {
            index: this.index,
            type: this.type,
            client: new elasticsearch.Client({ host: { host, port } })
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
    putBookMapping() {
        const schema = {
            author: { type: 'keyword' },
            text: { type: 'text' }
        };
        return this.config.client.indices.putMapping({ index: this.index, type: this.type, body: { properties: schema } });
    }
    resetIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.config.client.indices.exists({ index: this.index })) {
                yield this.config.client.indices.delete({ index: this.index });
            }
            yield this.config.client.indices.create({ index: this.index });
            yield this.putBookMapping();
        });
    }
}
exports.elasticSearchHelper = elasticSearchHelper;