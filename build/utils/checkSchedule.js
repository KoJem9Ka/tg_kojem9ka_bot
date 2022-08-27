"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSchedule = void 0;
const axios_1 = __importDefault(require("axios"));
const node_html_parser_1 = __importDefault(require("node-html-parser"));
const lodash_1 = require("lodash");
const index_1 = require("../index");
const checkSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get('https://www.vstu.ru/student/raspisaniya/zanyatiy/index.php?dep=fevt');
    const ulElement = (0, node_html_parser_1.default)(data).querySelector('.content > ul:nth-child(3)');
    if ((0, lodash_1.isNil)(ulElement))
        throw new Error('Элемент списка на странице не найден!');
    const match = data.match(/3 курс.*?изменение: ([\d :-]+)/i);
    const fetchedDate = match === null || match === void 0 ? void 0 : match[1];
    if (!fetchedDate)
        throw new Error('Не найдена дата на странице!');
    const memory = yield index_1.prisma.memory.findUnique({ where: { id: 1 } });
    if ((0, lodash_1.isNil)(memory)) {
        yield index_1.prisma.memory.create({ data: { id: 1, date: fetchedDate } });
        return {
            changed: true,
            text: fetchedDate,
        };
    }
    if (memory.date !== fetchedDate) {
        yield index_1.prisma.memory.update({ where: { id: 1 }, data: { date: fetchedDate } });
        return {
            changed: true,
            text: `${memory.date} -> ${fetchedDate}`,
        };
    }
    return { changed: false };
});
exports.checkSchedule = checkSchedule;
