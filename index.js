                      /***********heart Button  1 *****************/

// const counts = document.getElementById('heartCount')
// const heartButtons = document.getElementsByClassName("heartButton")
// for(let i =0 ; i< heartButtons.length; i++ ){

//     heartButtons[i].addEventListener('click', function(){
//         let countNumber = Number(counts.innerText)
//         counts.innerText = countNumber+1
        
//     })

    
// }

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
             const newCart = document.createElement('div')
        newCart.innerHTML =`
         <div class = " bg-[#fafafa] space-y-3" >
                <h2> ${titleName}</h2>
            
            <div>
                <h2>${titleNumber}</h2>
            </div>
            </div>
        `
        cartContainer.append(newCart)




         }
         else {
            alert('less coin')
         }


        // const newCart = document.createElement('div')
        // newCart.innerHTML =`
        //  <div class = " bg-[#fafafa] space-y-3" >
        //         <h2> ${titleName}</h2>
            
        //     <div>
        //         <h2>${titleNumber}</h2>
        //     </div>
        //     </div>
        // `
        // cartContainer.append(newCart)




        // const currentCoin = document.getElementById('coinCount').innerText
        // const totalCount = Number(currentCoin)-20;
        // document.getElementById('coinCount').innerText = totalCount

        // if(totalCount >=20){
        //     alert (`${titleName}, ${titleNumber}` )
        // }

        // if (totalCount <20 )  {
        //     alert('less coin')
        // }

    })
}


/*  clear button */
document.getElementById('btn-clear').addEventListener('click', function(){
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML ="";
})


/*  copy button function */

 const getCopyButton  = document.getElementsByClassName('btn-copy');
 for(let copy of getCopyButton) {
    copy.addEventListener('click', function(){
        alert("copy")
        const getCopyCount = document.getElementById('copy-count').innerText
        const currentCount = Number (getCopyCount) +1
        document.getElementById('copy-count').innerText = currentCount
        // console.log(getCopyCount);
        
    })
 }













/* practice traverse */

// const getButton = document.getElementsByClassName('btn-call')

// for ( let button of getButton){
//     button.addEventListener('click', function(){
//        let titleName =  button.parentNode.parentNode.children[1].children[0].innerText
//         let titleNumber = button.parentNode.parentNode.children[2].children[0].innerText
//         // console.log(titleNumber)
        

        
//     })
// }













