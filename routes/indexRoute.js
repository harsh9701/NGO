const express = require("express");
const route = express.Router();

const { renderHomePage, renderAboutPage, renderProjectPage, renderDonatePage, renderSuccessPage, proccessDonation } = require("../controllers/index");

route.get("/", renderHomePage);
route.get("/about", renderAboutPage);
route.get('/projects', renderProjectPage);
route.get('/donate', renderDonatePage);
route.get('/success', renderSuccessPage);
route.post('/process-donation', proccessDonation);

module.exports = route;