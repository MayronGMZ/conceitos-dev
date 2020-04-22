"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function User(req, res) {
    var user = CreateUser_1.default({
        name: 'Mayron Souza',
        email: 'mayrondrummer@gmail.com',
        password: '123456',
    });
    return res.json(user);
}
exports.User = User;
