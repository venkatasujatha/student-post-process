const EntitySchema = require('typeorm').EntitySchema;

const grades = new EntitySchema({
    name: 'grades',
    columns:{
        id:{
            primary: true,
            type: 'int',
            generated: true
        },
        min:
        {
            type: 'int',
        },
        max: {
            type: 'int',
        },
        grade: {
            type:'varchar',
        }
        
    }
})

module.exports ={grades}