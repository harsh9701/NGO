module.exports.renderHomePage = (req, res) => {
    res.render("index");
};

module.exports.renderAboutPage = (req, res) => {
    res.render("about");
};

module.exports.renderProjectPage = (req, res) => {
    res.render("projects");
};

module.exports.renderDonatePage = (req, res) => {
    res.render("donate");
};

module.exports.renderSuccessPage = (req, res) => {
    res.render("success");
};

module.exports.proccessDonation = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Donation',
                    },
                    unit_amount: req.body.amount * 100,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}/success`,
            cancel_url: `${req.protocol}://${req.get('host')}/donate`,
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};