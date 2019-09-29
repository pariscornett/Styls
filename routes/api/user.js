module.exports = function (app) {
    app.get("/api/user/test", (req, res) => {
        res.json({
            success: true,
            msg: "Testing endpoint works!"
        });
    });
};