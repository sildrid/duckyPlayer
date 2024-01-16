const canv = document.createElement("canvas");
canv.width = 320;
canv.height = 240;

// canvas css

canv.style = `
  box-sizing: border-box;    
  background-color: #112;
  padding: 8px;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;
`;
const canvResize = ()=>{
  if(window.innerWidth<window.innerHeight*1.3){
    canv.style.width = "100%";
    canv.style.height = "auto";
  }else{
    canv.style.width = "auto";
    canv.style.height = "96vh";
  }
}
canvResize();
window.addEventListener("resize",canvResize);

// webGL

try{
  const gl = canv.getContext("webgl");
  if(!gl){
    throw new Error("webGL not supported!");
  }
}
catch(err){
  console.log(err);
}















const gameContainer = document.querySelector("#game-container");
if(!gameContainer){
  throw new Error("Error: Game container not found!");
}else{
  gameContainer.appendChild(canv);
}

export default "meh";

//////////////////////////////////////////////////////////////
// unoptimized codebase
// //////////////////////////////////////7


