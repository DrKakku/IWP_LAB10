var MongoClient = require('mongodb').MongoClient;
var url =
    "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var many = [
        { name: 'Leni', address: ' Chennai 71' },
        { name: 'John', address: ' Chennai 71' },
        { name: 'Amy', address: 'Apple St 652' },
        { name: 'Peter', address: 'Mountain 21' },
        { name: 'Michael', address: 'Valley 345' },
        { name: 'Sandy', address: 'Ocean St 2' },
    ];
    var one = { name: 'Yash Tripathi', address: 'Delhi 96' };
    dbo.collection("student").insertMany(many, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount + " using insertMany");
    });
    dbo.collection("student").insertOne(one, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount + " using insertOne");
    });
    dbo.collection("student").findOne({ address: 'Bengaluru 81' }, function (err, res) {
        if (err) throw err;
        console.log("FindOne returned:");
        console.log(res);
    });
    dbo.collection("student").find({ address: ' Chennai 71' }, function (err, res) {
        if (err) throw err;
        console.log("Find returned:");
    });
    dbo.collection("student").updateOne({ address: 'Bengaluru 81' }, { $set: { address: 'Bangalore 81' } }, function (err) {
        if (err) throw err;
        console.log("Updated single document.");
    });
    dbo.collection("student").updateMany({ address: ' Chennai 71' }, { $set: {address: 'Chennai 72'} }, function (err) {
        if (err) throw err;
        console.log("Updated multiple documents.");
    });
    dbo.collection("student").deleteOne({ address: 'Bengaluru 81' }, function (err) {
        if (err) throw err;
        console.log("Deleted single doucument.");
    });
    dbo.collection("student").deleteMany({ address: 'Chennai 72' }, function (err) {
        if (err) throw err;
        console.log("Deleted multiple doucuments.");
        db.close();
    });
});
