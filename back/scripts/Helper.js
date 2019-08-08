"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty = (field) => {
    return (field === undefined || field === null || field === '' || field === [] || field === false);
};
exports.isEmpty = isEmpty;
const randomTag = (min = 1000, max = 9999) => {
    return (Math.random() * (max - min + 1) | 0) + min;
};
exports.randomTag = randomTag;
const decodeBase64Image = (data) => {
    if (!data)
        return '';
    const matches = data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let response = {};
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
    return response;
};
exports.decodeBase64Image = decodeBase64Image;
const imgPath = (result) => {
    if (!result)
        return 'anonym.jpg';
    const imgTypeRegularExpression = /\/(.*?)$/;
    const imgType = result.type.match(imgTypeRegularExpression);
    const imgName = randomText(14);
    const uploadedImgPath = imgName + '.' + imgType[1];
    return uploadedImgPath;
};
exports.imgPath = imgPath;
function randomText(value) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567';
    for (let i = 0; i < value; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
exports.randomText = randomText;
