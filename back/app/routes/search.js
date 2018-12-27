"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ElasticSearchHelper_1 = require("../../scripts/class/ElasticSearchHelper");
const search = express.Router();
search.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const search = new ElasticSearchHelper_1.elasticSearchHelper();
    const result = yield search.getData(req.query.term);
    res.status(200).json({
        result
    });
}));
exports.default = search;
