export function fun1()
{
    var password=document.getElementsByClassName("input1")[3];
    var button=document.getElementById("button");
    if(button.innerHTML=="Show")
    {
        password.type="text";
        button.innerHTML="Hide";
    }
    else
    {
        password.type="password";
        button.innerHTML="Show";
    }
}
export function fun2()
{
    var password=document.getElementsByClassName("input1")[3];
    var button=document.getElementById("button");
    if(password.value.length!=0)
    {
        button.style.display="inline-block";
    }
    else
    {
        button.style.display="none";
    }
}