 //apply change event on select option to get option values i.e select values
       //hamburger menu
       let hamburger=document.querySelector('.hamburger')
       let menu=document.querySelector('.menu')
       let search=document.querySelector('.search')
       let dots=document.querySelector('.dots')
       hamburger.addEventListener('click',()=>{
           menu.classList.toggle('menu_toggle')
           search.classList.remove('search_toggle')
       })
       dots.addEventListener('click',()=>{
           search.classList.toggle('search_toggle')
           menu.classList.remove('menu_toggle')
       })

       let city_name=document.querySelector('.city_name')+','
        let country_name=document.querySelector('.country_name')
        let temp=document.querySelector('.temp')
        let temp1=document.querySelector('.temp1')
        let temp2=document.querySelector('.temp2')
        let img=document.querySelector('#img')
       async function weatherValue(){
           const proxy=`https://cors-anywhere.herokuapp.com/`
           let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=042c40be82ceb853462a975b5175d6ec&units=metric`)
           let data=await response.json()
           getData(data)
       }
       weatherValue()
       let input=document.getElementById('input')
       async function func(){
           const proxy=`https://cors-anywhere.herokuapp.com/`
           let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=042c40be82ceb853462a975b5175d6ec&units=metric`)
           let data=await response.json()
           getData(data)
           input.value=""
       }
        let btn=document.querySelector('.btn')
        btn.addEventListener('click',()=>{
            if(input.value){
                func()
            }
            else{
                console.log("please enter city name")
            }
        })
       function getData(data){
        let city_name=document.querySelector('.city_name')
           city_name.innerHTML=data.name+','
           country_name.innerHTML=data.sys.country
           temp.innerHTML=data.main.temp + "°C"
           temp1.innerHTML=data.main.temp_min + "°C"
           temp2.innerHTML=data.main.temp_max + "°C"
           let iconCode=data.weather[0].icon;
           img.src="http://openweathermap.org/img/w/"+iconCode+".png"

       }
      function fall(){
          let div=document.createElement('div')
          div.className='snow'
          div.innerHTML="🌨"
          div.style.left=Math.random()*100+"vw"
          div.style.animationDuration=Math.random()+1+"s"
          document.body.appendChild(div)
          setTimeout(() => {
              div.remove()
          }, 2000);
      }
      fall()
     setInterval(() => {
          fall()
      }, 200);
     function time(){
         let date=new Date()
         let year=date.getFullYear()
         let month=date.getMonth()+1
         if(month<10){
             month="0"+month
         }
         let dates=date.getDate()
         if(dates<10){
             dates="0"+dates
         }
         document.querySelector('.date').innerHTML=year+"-"+month+"-"+dates+","
         let hour=date.getHours()
         if(hour<10){
             hour="0"+hour
         }
         let minute=date.getMinutes()
         if(minute<10){
             minute="0"+minute
         }
         let seconds=date.getSeconds()
         if(seconds<10){
             seconds="0"+seconds
         }
         document.querySelector('.times').innerHTML=hour+":"+minute+":"+seconds
     }
     time()
     setInterval(() => {
         time()
     }, 1000);