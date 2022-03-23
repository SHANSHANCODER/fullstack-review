//Import the mongoose module

const mongoose = require("mongoose");
//Set up default mongoose connection
mongoose.connect("mongodb://localhost/fetcher", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//define schema
let repoSchema = new mongoose.Schema({
  id: Number,
  name: String,
  html_url: String,
  description: String,
  forks_count: Number,
  // TODO: your schema here!
});

// Compile model from schema
let Repo = mongoose.model("Repo", repoSchema);

// var shanshanrepo = new Repo({repo_id:123, repo_name:'shanshan repo',
// repo_html_url: 'www.abc.com'})
// shanshanrepo.save();

// console.log(shanshanrepo);
// console.log(shanshanrepo.repo_id);

// const getdata= ([...data]) =>{
// data = {
//   id : data.id,

// }
// //console.log("data>>>>>>>",data)
// }



let save = (data) => {
  Repo.create(data,(err,result)=>{
    if (err){
      throw err;
    } else {
      console.log(result)
    }
  })
  // for (var i = 0; i < data.length; i++) {
  //   let userrepo = new Repo({
  //     repo_id: data[i].id,
  //     repo_name: data[i].name,
  //     repo_html_url: data[i].html_url,
  //     repo_description: data[i].description,
  //     repo_count: data[i].fork_count,
  //   });
  //   // console.log ('userrepos>>>>',userrepos)
  //   // console.log('userrepo>>>>',userrepo)
  //   userrepo.save();
    //model.create
    // repos.aggregate(
    //   [
    //     {$sort : {repo_id: 1}}
    //   ]
    // )
 // }
  //let repos = Repo.find()

 // console.log("Repo>>>>");
  // data = {
  //   id : data.id,
  //   name : data.name,
  //   html_url : data.html_url,
  //   description : data.description,
  //   fork_count : data.fork_count
  // }
  // console.log("save data>>>>",data)

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  //insert into db
};


Repo.find((err,result)=>{
if(err){
  throw err;
} else {
   console.log('result>>>>>>>>',result)
   
}
})

module.exports.save = save;
