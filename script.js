async function asdf(){
    var blod=await fetch('https://randomuser.me/api/');
    var ans = await blod.json;
}
console.log(ans);
asdf();
