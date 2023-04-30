import mongoose from "mongoose";
const connectDB = (url) => {
mongoose.set('strictQuery',true);
//when we use the search function we ll need it
mongoose.connect(url)
//we gonna call the connect function(with then catch to control the function) with our url 
    .then(()=> console.log('mongodb is connected'))
    .catch((err)=> console.log(err));
}

export default connectDB;