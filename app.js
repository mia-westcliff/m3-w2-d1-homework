const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'statsdb';
const client = new MongoClient(url);

// Connect to database
client.connect()
  .then(() => {
    /*console.log('Connected Successfully & Database Created!')
    //Close the database connection
    client.close();*/

    var dbo = client.db(dbName);
    /*dbo.createCollection('uscensus').then(function() {
      console.log("Collection created");
      client.close();
    })*/

    /*var stats = [
        {
            'city': 'San Juan', 
            'zip': '00926', 
            'state': 'PR', 
            'income': '34781',
            'age': '44'
        },
        {
            'city': 'Corona', 
            'zip': '11368', 
            'state': 'NY', 
            'income': '50797',
            'age': '32'
        },
        {
            'city': 'Chicago', 
            'zip': '60629', 
            'state': 'IL', 
            'income': '42019',
            'age': '31'
        },
        {
            'city': 'El Paso', 
            'zip': '79936', 
            'state': 'TX', 
            'income': '54692',
            'age': '31'
        },
        {
            'city': 'Los Angeles', 
            'zip': '90011', 
            'state': 'CA', 
            'income': '36954',
            'age': '28'
        },
        {
            'city': 'Norwalk', 
            'zip': '90650', 
            'state': 'CA', 
            'income': '66453',
            'age': '35'
        }
    ];
    dbo.collection("uscensus").insertMany(stats).then(function(res) {
        console.log("Number of document inserted:" + res.insertedCount);
        client.close();
    })*/

    /*var stats = [
        {
            'city': 'Pacoima', 
            'zip': '91331', 
            'state': 'CA', 
            'income': '60360',
            'age': '33'
        },
        {
            'city': 'Ketchikan', 
            'zip': '99950', 
            'state': 'AK', 
            'income': '00000',
            'age': '00'
        }
    ];
    dbo.collection("uscensus").insertMany(stats).then(function() {
        console.log("2 document inserted");
        client.close();
    })*/

    /*var query = {city: "Corona"};
    dbo.collection('uscensus').find(query)
        .toArray()
        .then(items => {
            console.log(`Successfully found ${items.length} documents.`);
            console.log(items);
            client.close();
        })*/
    
    /*var query = {state: "CA"};
    dbo.collection('uscensus').find(query)
        .toArray()
        .then(items => {
            console.log(`Successfully found ${items.length} documents.`);
            console.log(items);
            client.close();
    })*/

    /*var query = {state: "AK"};
    var newvalue = {$set: {'income': '38910', 'age': '46'}}
    dbo.collection('uscensus').updateOne(query, newvalue).then(function() {
            console.log(`Successfully update documents.`);
            client.close();
    })*/

    var mysort = {state: 1}
    dbo.collection('uscensus').find()
        .sort(mysort)
        .toArray()
        .then(items => {
            console.log(`Successfully sorted ${items.length} documents.`);
            console.log(items);
            client.close();
    })
  })
  .catch(error => console.log('Failed to connect', error))
