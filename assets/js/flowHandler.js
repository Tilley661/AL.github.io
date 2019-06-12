//the below handles any onClick from svg files
function flowHandler(action, param){

    if (action === undefined || param === undefined){
        consoel.log(`issue getting information from SVG`, arguments);
        return false;
    }

    //action should be define and is likely going to be hyper link
    if (action === 'hyperlink'){
        //hyperlink action so send to new webpage
        window.location.href = param;
        return true;
    }

}