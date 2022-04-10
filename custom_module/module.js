// Підключаємо необхідні файли
const shop = require("./passanger");
const storage = require("./train");
const good  = require("./ticket");

// Доступні операції з магазинами
exports.findPassanger      = shop.findPassanger;
exports.addPassanger       = shop.addPassanger;
exports.removePassanger    = shop.removePassanger;
exports.editPassanger      = shop.editPassanger;
exports.getPassanger       = shop.getPassanger;

// Доступні операції з складами
exports.findTrain        = storage.findTrain;
exports.addTrain         = storage.addTrain;
exports.removeTrain      = storage.removeTrain;
exports.editTrain        = storage.editTrain;
exports.getTrain         = storage.getTrain;
exports.maxtickets       = storage.maxtickets;
// Доступні операції з товарами
exports.findTicket                  = good.findGood;
exports.addTicket                   = good.addTicket;
exports.removeTicket                = good.removeTicket;
exports.editTicket                  = good.editTicket;
exports.getTicket                   = good.getTicket;
exports.buyingTicketForTrain              = good.buyingTicketForTrain;
exports.addToShop                 = good.addToShop;
exports.cancelTicketForTrain         = good.cancelTicketForTrain;
exports.changeOneTicketForAnother      = good.changeOneTicketForAnother;
exports.moveGoodFromStorageToShop = good.moveGoodFromStorageToShop;
