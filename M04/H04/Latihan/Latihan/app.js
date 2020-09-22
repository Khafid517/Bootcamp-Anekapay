  
const express = require('express');
var { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = require('./schema.js');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
  
app.listen(4000, () => {
  console.log('Server is runnin on port 4000...');
});