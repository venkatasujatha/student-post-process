const EntitySchema = require('typeorm').EntitySchema;
const student =new EntitySchema({
    name: 'student',
    columns:{
        id:{
            primary: true,
            type: 'int',
            generated: true
        },
        name:
        {
            type: 'varchar'
        },
        cgpa:{
            type:'float'
        },
    }
})

module.exports ={student}