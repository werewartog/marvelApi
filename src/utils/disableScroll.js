export const disableScroll = (bool) =>{
    let body = document.getElementsByTagName("BODY")[0];
    if(bool === true){
        body.style.overflow = "hidden";
    }
    else{
        body.style.overflow = "auto";;
    }
}
