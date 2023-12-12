export function myFunction() {
    var x = document.getElementById("notifications");
    var z=document.getElementById("nav").children;
    var y=document.body;
    if (x.style.display == "block") {
        for(let i=1;i<z.length;i++)
        {
            z[i].style.display="none";
        }
        y.style.marginTop="30px";
    }
    else {
        for(let i=0;i<z.length;i++)
        {
            z[i].style.display="block";
        }
    y.style.marginTop = "187.6px";
    }
}
export function deleteProfilePic()
{
    var profilePicElement = document.querySelector(".current-profile-pic img");
    profilePicElement.src = "";
}
export function changeProfilePic()
{
    document.getElementById("profilePicUpload").click();
}
export function profilePicUpload(event)
{
    console.log(event);
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var profilePicElement = document.querySelector(".current-profile-pic img");
        profilePicElement.src = e.target.result; // Display the selected image as the new profile picture
        };
        reader.readAsDataURL(file);
        // Add code to handle additional logic, such as uploading the picture to the server or saving the new picture in the database
    }
}
