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
exports.activateBot = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const index_1 = require("./index");
const lodash_1 = require("lodash");
const checkSchedule_1 = require("./utils/checkSchedule");
const utils_1 = require("./utils/utils");
const activateBot = () => __awaiter(void 0, void 0, void 0, function* () {
    const bot = new node_telegram_bot_api_1.default(process.env.BOT_TOKEN, { polling: true });
    bot.onText(/^\/check$/, (msg, match) => {
        void bot.sendMessage(msg.chat.id, `${msg.chat.id}`);
    });
    bot.onText(/^\/sign$/, (msg, match) => __awaiter(void 0, void 0, void 0, function* () {
        const chat_id = msg.chat.id.toString();
        const founded = yield index_1.prisma.signed_chats.findUnique({ where: { id: chat_id } });
        if ((0, lodash_1.isNil)(founded)) {
            yield index_1.prisma.signed_chats.create({ data: { id: chat_id } });
            yield bot.sendMessage(chat_id, `Чат успешно подписан!`);
        }
        else {
            yield bot.sendMessage(chat_id, `Так нельзя, чат уже был подписан.`);
        }
    }));
    bot.onText(/^\/unsign$/, (msg, match) => __awaiter(void 0, void 0, void 0, function* () {
        const chat_id = msg.chat.id.toString();
        const founded = yield index_1.prisma.signed_chats.findUnique({ where: { id: chat_id } });
        if ((0, lodash_1.isNil)(founded)) {
            yield bot.sendMessage(chat_id, `Так нельзя, текущий чат не был подписан.`);
        }
        else {
            yield index_1.prisma.signed_chats.delete({ where: { id: chat_id } });
            yield bot.sendMessage(chat_id, `Чат успешно отписан!`);
        }
    }));
    do {
        console.log('check');
        const check = yield (0, checkSchedule_1.checkSchedule)();
        if (check.changed) {
            console.log('Новое расписание!');
            const chatIds = (yield index_1.prisma.signed_chats.findMany()).map(obj => obj.id);
            for (const chatId of chatIds)
                bot.sendMessage(chatId, `Новое расписание! ${check.text}`);
        }
        yield (0, utils_1.delay)(1000 * 60 * 25);
        // await delay( 3000 )
    } while (true);
});
exports.activateBot = activateBot;
