type user = {
    name: string;
    id: number;
    email: string;
}

function getUserDetails(User1: user) {
    console.log(User1.name,User1.id,User1.email);
    
}

getUserDetails({name:"raunak",id:1,email:"scarlet@gmail.com"})