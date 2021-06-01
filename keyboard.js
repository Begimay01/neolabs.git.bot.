const { Markup } = require('telegraf')
const { telegram } = require('./token')

module.exports.startKb = () => {
    Markup
    .keyboard([
        ["Числа от 1 до 100"], 
        ["Случайная цитата"], 
        ["Орел или Решка"], 
        ["Игральные кости"]
    ])
    .resize()
}
