document.querySelector("form")
.addEventListener("submit",async function(event){
    event.preventDefault();
    let username= document.getElementById("username").value;
let password= document.getElementById("pass").value;
try{
    let user=await Login(username,password);
    if(user){
        window.location.href="/table.html";
    }
    console.log("user loged in:",user);
}
catch(error){
    console.error("Login error",error.message);
}
});
const Login= async(username,password)=>{
    var users=await fetch("./users.json").then((response)=>{
        return response.json();
    });
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var user= users.userdetails.find((user)=>user.name === username && user.password===password);
            if(user){
                resolve(user);
            }
            else{
                reject(new Error("Invalid User"));
                alert("Invalid User!");
            }
        },1000);
    });
};