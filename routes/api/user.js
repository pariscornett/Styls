module.exports = function (app) {

    const User = '../../models/User';
    let users = [];

    //Test Route
    app.get("/api/user/test", (req, res) => {
        res.json({
            success: true,
            msg: "Testing endpoint works!"
        });
    });

    // get all users
    // return a json of all users in the db


    // create a user
    // create a new user in the db


    // login a user
    // authenticate the user
    // send back the user profile as json


    // delete a user (opt.)
    // will delete a user from db


    // create an item
    // create a new item
    // find a user by id
    // push the new item to the user's clothingItems array ($push)
    // res.json the new user profile


    // read all items from user
    // find a user by id
    // send a json of their clothingItems to front end


    // delete an item
    // find a user by id
    // remove the item with the corresponding id from the clothingItems array
    // send back the json with the item removed


    // update an item (opt.)
    // find auser by id
    // find the item
    // update the details ($set)
    // send back the json with the item updated
};