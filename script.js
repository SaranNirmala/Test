var container= document.createElement("div");
container.className="container";
var row=document.createElement("div")
row.className="row";
container.append(row);
row.style.marginTop="30px";



async function foo(){
    var url="https://emojihub.yurace.pro/api/all";
    var data= await fetch(url);
    var data1= await data.json();
    console.log(data1);
    // console.log(data1[0].htmlCode[0]);
   for(let i=0; i<=data1.length-1; i++)
   {
    row.innerHTML +=` <div class="col-md-2">
    <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">${data1[i].name}</div>
    <div class="card-body">
      <h5 class="card-title">${data1[i].group}</h5>
      <p class="card-text">${data1[i].htmlCode[0]}</p>
      <p class="card-text">${data1[i].unicode[0]}</p>
    </div>
  </div>
  </div>`;
  document.body.append(container);
   }
   
}
foo();

