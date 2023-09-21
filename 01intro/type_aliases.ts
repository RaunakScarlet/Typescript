type user = {
    name: string;
    id: number;
    email: string;
}

function getUser(User1: user) {
    console.log(User1.name,User1.id,User1.email);
    
}

getUser({name:"raunak",id:1,email:"scarlet@gmail.com"})