


const timeValid = (date1 , date2) =>{
    console.log(typeof(date1) , date2);
    
    const t1 = new Date(date1).getTime() ; 
    const t2  = new Date(date2).getTime() ; 
    return t1 < t2 ; 
}

module.exports = {
     timeValid 
}