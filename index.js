alert('working')

document.addEventListener('click', (e) => {
 let  btnId = e.target.id 
 let moodBtn = document.getElementById(`${btnId}`)
 

 let myDate = new Date()
 let timelineContainer = document.querySelector('.timelineContainer')
 let element = document.createElement('div')
 let paraGetMood = document.createElement('p')
 let paragetMoodDate = document.createElement('p')

 //  assining class

 element.classList.add('element')
 paraGetMood.classList.add('getMood')
 paragetMoodDate.classList.add('getMoodDate')

 //  assinig values 

 paraGetMood.innerText = moodBtn.innerText
 paragetMoodDate.innerText = myDate.toLocaleString()

 //  apeanding 

 element.appendChild(paraGetMood)
 element.appendChild(paragetMoodDate)
 timelineContainer.appendChild(element)

 let item = timelineContainer.innerHTML

 localStorage.setItem('first',item)
 console.log(item);
 
 
 
})

window.addEventListener('load',() => {
  let timelineContainer = document.querySelector('.timelineContainer')
   timelineContainer.innerHTML = localStorage.getItem('first')


  

})







