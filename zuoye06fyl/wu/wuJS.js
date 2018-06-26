function popUp(winURL){
window.open(winURL,"popup","width=480,height=320");
}
document.getElementsByTagName("a")[0].onclick=function(){
popUp(this.href);return false;
};