type NOS = number|string;
type ObjWithNU = {name:string, uid: NOS}

const loginDetails  = (uid: NOS, item:string)=>{
    console.log(`${item} has a uid of ${uid}`);
}

const greet  = (user:ObjWithNU)=>{
    console.log(`${user.name} say hello`);
}