const { Markup } = require('telegraf')
const bot = require ('./token')
const { startKb} = require('./keyboard')
const { nums, quote, moneta, rand} = require('./shedule')

bot.start(ctx => ctx.reply('Привет!', startKb()))


bot.hears('Числа от 1 до 100', ctx => ctx.reply(rand))

bot.hears('Игральные кости', ctx => ctx.reply(
    nums[Math.floor(Math.random() * nums.length)]
))

bot.hears('Случайная цитата', ctx => ctx.reply(
    quote[Math.floor(Math.random() * quote.length)]
))

bot.hears('Орел или Решка', ctx => ctx.reply(
    moneta[Math.floor(Math.random() * 2)]
))
