const mongoose = require ("mongoose");

//reference to Schema constructor
const Schema = mongoose.Schema;

//uses Schema constructor to make an AllUsersSchema object
const AllUsersSchema = new Schema ({
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

//This creates our model from the above schema, using mongoose's model
const AllUsers = mongoose.model("AllUsers", AllUsersSchema);

//Export the User Model
module.exports = AllUsers;