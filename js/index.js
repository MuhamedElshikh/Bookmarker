var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteurl");
var tableContent = document.getElementById("tableContent");
var sumbitButton = document.getElementById("sumbitButton");
var bookMarkList;
if(localStorage.getItem("bookMarks")==null){
    bookMarkList = []
    
    }
    else{
        bookMarkList = JSON.parse(localStorage.getItem("bookMarks"));
        display()
    }
    
function addbookMark(){
    if(siteName.classList.contains("is-valid")&&siteUrl.classList.contains("is-valid")){
        var bookMark = {bookMarkName:siteName.value , siteUrlName : siteUrl.value }
        bookMarkList.push(bookMark)
        console.log(bookMarkList)
        localStorage.setItem("bookMarks",JSON.stringify(bookMarkList))
        cleare ()
        display()
        siteName.classList.remove("is-valid")
        siteUrl.classList.remove("is-valid")
    }
    else{
  window.alert("wrong data in the site name the first litter maust be capitale and the url must be valid")
    }
}
function cleare (){
    siteName.value = null;
    siteUrl.value =null
}
function display(){

    var cartona= "";
    for(var i=0;i<bookMarkList.length;i++)
    {
        cartona += `<tr><th class="text-capitalize">${i + 1 }</th>
        <th class="text-capitalize">${bookMarkList[i].bookMarkName}</th>
        <th class="text-capitalize"><button onclick="viset(${i})" class="btn btn-vist">vist</button></th>
        <th class="text-capitalize"><button onclick="deleted (${i})" class="btn btn-delete">Delete</button></th>
      </tr>`
      
      
      
    }
    tableContent.innerHTML = cartona;
}
function deleted (x){
    bookMarkList.splice(x,1)
    display();
    localStorage.setItem("bookMarks",JSON.stringify(bookMarkList));
    

}    
function viset (y){

    bookMarkList[y].siteUrlName
    open(`https://${bookMarkList[y].siteUrlName}`)
}
function cheak (element){
var regex = {siteName: /^[A-Z]{1}[A-Za-z]{2,20}$/,siteUrl:/[A-Za-z]{1,50}\.com|.net/ig}
if(element.id=="siteName"){
    if(regex["siteName"].test(siteName.value)){
siteName.classList.add("is-valid")
siteName.classList.remove("is-invalid")


    }
    else{
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
    } 
    

}
else(element.id=="siteurl")
{
    if(regex["siteUrl"].test(siteUrl.value)){
        siteUrl.classList.add("is-valid")
        siteUrl.classList.remove("is-invalid")
               
    }
            else{
                siteUrl.classList.add("is-invalid")
                siteUrl.classList.remove("is-valid")
                
            } 
            
    

}

}