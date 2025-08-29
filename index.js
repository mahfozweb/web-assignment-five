 

/* ****************  heart Button 2 ********************** */

const getHeart = document.getElementsByClassName('heartButton')
for( let heart of getHeart){
    const root = heart.addEventListener('click', function(){
        const totalCount = document.getElementById('heartCount').innerText;
        let currentCount = Number(totalCount) +1
        document.getElementById('heartCount').innerText = currentCount
       
        
    })
    
}

/* *******************  cart added******************* */


const getCallButton = document.getElementsByClassName('btn-call')
for( let button of getCallButton){
    button.addEventListener('click', function(){
        let titleName =  button.parentNode.parentNode.children[1].children[0].innerText
        let titleNumber = button.parentNode.parentNode.children[2].children[0].innerText
        const cartContainer = document.getElementById('cart-container');

         const currentCoin = document.getElementById('coinCount').innerText
         if( currentCoin >=20 ){
            alert (`${titleName}, ${titleNumber}` )
            let totalCount = Number(currentCoin)-20;
            document.getElementById('coinCount').innerText = totalCount

            /* call time show  **************/
            
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0' );
            const minutes = now.getMinutes().toString().padStart(2, '0' );
            const seconds = now.getSeconds().toString().padStart(2, '0' );
            const callTimes = `${hours}:${minutes}:${seconds}`;

            /* new cart add */

             const newCart = document.createElement('div')
        newCart.innerHTML =`
         <div class = " bg-[#fafafa] space-y-3 flex justify-between p-1" >
            <div class="">
              <h2 class="font-bold"> ${titleName}</h2>
                <h2 class="text-[#5c5c5c]">${titleNumber}</h2>
            </div>
            <div >
              <p class="text-[#111111] font-semibold">Time: ${callTimes}</p>
            </div>
            </div>
        `
        cartContainer.append(newCart)


         }
         else {
            alert('less coin')
         }


      

    })
}


/*  clear button */
document.getElementById('btn-clear').addEventListener('click', function(){
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML ="";
})


/*  copy button function */

 const getCopyButton  = document.getElementsByClassName('btn-copy');
 for(let copyBtn of getCopyButton) {
    copyBtn.addEventListener('click', function(){

        /* count and alert  */
        const getCopyCount = document.getElementById('copy-count').innerText
        const currentCount = Number (getCopyCount) +1
        document.getElementById('copy-count').innerText = currentCount
        alert("copy")

        /* copied area*/

        let titleNumber = copyBtn.parentNode.parentNode.children[2].children[0].innerText
        const tempInput = document.createElement('textarea')
        tempInput.value = titleNumber
        document.body.appendChild(tempInput)  
        tempInput.select()
        document.execCommand ('copy')
        document.body.removeChild(tempInput)

        
        
    })
 }










