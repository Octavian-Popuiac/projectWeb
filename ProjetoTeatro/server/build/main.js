"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/data', (req, res) => {
    console.log("Api data");
    res.json({ message: 'Hello World!' });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
