

const FilterDataById=(id,Data)=>{
    console.log(Data );
    
    const FilteredObj=Data.filter(data=>data._id==id);
    
    return FilteredObj[0];    

};


export default FilterDataById;