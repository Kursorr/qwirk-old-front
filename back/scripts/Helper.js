"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty = (field) => {
    return (field === undefined || field === null || field === '' || field === [] || field === false);
};
exports.isEmpty = isEmpty;
const randomTag = (min, max) => {
    return '#' + ((Math.random() * (max - min + 1) | 0) + min);
};
exports.randomTag = randomTag;
