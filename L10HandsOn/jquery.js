$(document).ready(function() {
    $(".pics").hover(function() {
        $(this).toggleClass("size");
    });
});

let hubRequest = new XMLHttpRequest();
hubRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let gitObject = JSON.parse(this.responseText);
        console.log(gitObject);
        for (var i=0; i < gitObject.length; i++) {
            document.getElementById("ajaxGitHub").innerHTML +="<li>" + gitObject[i].name + "</li>";
        }
    }
}

hubRequest.open("GET","https://api.github.com/users/sylverr38/repos",true);
hubRequest.send();