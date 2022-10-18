const { LessThan, MoreThan } = require("typeorm");
const { dataSource } = require("../database");

const gradeRepo = dataSource.getRepository("grades");
const student = require("../entity/student");
const studentRepo = dataSource.getRepository("student");
const gradesAbove = dataSource.getRepository("gradesAbove");

const add1 = async (req, res) => {
  try {
    const resp = await gradeRepo.save(req.body);
    console.log("data is inserted");
    res.send(resp);
  } catch (error) {
    console.log(error.message);
  }
};

const addCgpa = async (req, res) => {

  try {
    const percentage = req.body.percentage;
    const cgpa = percentage / 10;
    const name = req.body.name;
    console.log(cgpa);
    console.log(percentage);
    const student = { cgpa, name };
    console.log(student);
    delete req.body.percentage;
    console.log(req.body)
    const resp = await studentRepo.save(student);
    console.log(resp);
    
    const value1 = await gradeRepo.findOne({
      select:{
        grade:true,
      },
      where: {
        min: LessThan(percentage),
        max: MoreThan(percentage),
      }
    });
    console.log(value1);
    

    if(value1.grade < "D")
    {
      await gradesAbove.save({name :resp.name,id:resp.id})
    }
    
   console.log("done")
  } catch (error) {
    console.log(error.message);
  }
  
};
module.exports = { add1, addCgpa };
