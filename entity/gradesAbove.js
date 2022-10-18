const EntitySchema = require('typeorm').EntitySchema;

const gradesAbove =new EntitySchema({
    name: 'gradesAbove',
    columns:{
        id:{
            primary: true,
            type: 'int',
            generated: true
        },
        name:{
            type: 'varchar',

        }
    }
})

module.exports = {gradesAbove}