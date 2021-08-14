var images=
["https://comps.canstockphoto.com/happy-family-parents-with-child-mom-eps-vectors_csp84281638.jpg","https://img.freepik.com/free-vector/girl-shy-character_1450-155.jpg?size=338&ext=jpg", 
"https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg","https://thumbs.dreamstime.com/z/mother-daughter-mom-kid-talking-having-fun-30506383.jpg"]
var names = ["Family book","Pankaj Sahu" ,"Avani Sahu", "Shiji John Sahu", ];
var i=0;
function update ()
{
    i++;
    var numbers_of_family_memebers_in_array=5
    if(i> numbers_of family_member_in_array)
{
i=0;
}
var updatedImage = images[i];
var updatedName= names[i];
document.getElementById("family_member_image").src= updatedImage;
document.getElementById("family_member_name").innerHTML=updatedName;
}