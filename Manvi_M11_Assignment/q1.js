function calculatenetsalary(emp_obj , percentage=30){

    let totalnetSalary = emp_obj.totalSalary-((percentage/100)*emp_obj.totalSalary )
    console.log(totalnetSalary)

}
calculatenetsalary({id: 1, totalSalary: 50000, dept: "IT"})
calculatenetsalary({id: 1, totalSalary: 90000, dept: "IT"},)