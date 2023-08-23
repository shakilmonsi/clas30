document.getElementById("apply-bg").addEventListener('click',function(){
  const friends=document.getElementsByClassName('friend')
//   console.log(friends)
for(const friend  of friends ){
        friend.style.backgroundColor="lightblue"
        console.log(friend)
}
})
document.getElementById('center-third').addEventListener('click',function(){
       console.log('shakil')
        const third=document.getElementById('five')

        third.style.textAlign='center'
})
//add a friends and ok 
 document.getElementById('add-friend').addEventListener('click',function(){
        const friendContainer=document.getElementById('friends')
        const friend=document.createElement('div');
        friend.classList.add('friend')
        friend.innerHTML=`
        <h3 class="friend-name"> New friend</h3>
        <p>something  new added</p>

        `
        friendContainer.appendChild(friend)
 })
 
// document.getElementById('center-third').addEventListener("click",function(){
//   const third=document.getElementById("third-friend")      

// console.log(third)
// // third.style.textAlign="center"
// })
// document.getElementById('center-third').addEventListener("click",function(){
//        console.log('shakilm')
        // const third =document.getElementById("five")
        // third.style.textAlign='center'
// })