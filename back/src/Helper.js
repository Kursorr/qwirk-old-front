"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty = (field) => {
    return (field === undefined || field === null || field === '' || field === [] || field === false);
};
exports.isEmpty = isEmpty;
