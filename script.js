let img=document.getElementsByClassName("images")[0];
let gap=100;

let int=setInterval(function(){
img.style.transition="3s"
img.style.marginLeft=-gap+"%";
gap=gap+100;
if(gap>400)
{
    setTimeout(()=>{
       img.style.transition="0s";
       img.style.marginLeft=-0+"%";
       gap=100;
    },3000)
}
},3000)
console.log(window)

