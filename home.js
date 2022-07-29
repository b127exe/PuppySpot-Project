var MenuItems = document.getElementById('MenuItems');
var MenuIcon =  document.getElementById('3DotIcon');

MenuItems.style.maxHeight = "0px";
MenuIcon.style.transform = "rotateZ(0deg)";

function menuToggle(){
    if( MenuItems.style.maxHeight == "0px" , MenuIcon.style.transform == "rotateZ(0deg)")
    {
      MenuIcon.style.transform = "rotateZ(90deg)";
      MenuItems.style.maxHeight = "270px"
    }
    else{
      MenuItems.style.maxHeight = "0px";
      MenuIcon.style.transform = "rotateZ(0deg)";
    }
    
};

//For Latest Array

let LatestData = [
  {id: 1 , name: "Astrid" ,
   gender: "female" , 
   price: 2100 , 
   img1: "Puppy/Golden puppy/1.jpg" , 
   img2: "Puppy/Golden puppy/1.2.jpg" , 
   img3: "Puppy/Golden puppy/1.1.jpg" , 
   img4: "Puppy/Golden puppy/1.2.jpg", 
   category: "Goldendoodle" , age: "7 Week"},
  {id: 2 , 
   name: "Oscar" , 
   gender: "Male" , 
   price: 2400 , 
   img1:"Puppy/Golden puppy/4.jpg" , 
   img2:"Puppy/Golden puppy/4.1.jpg" , 
   img3:"Puppy/Golden puppy/4.2.jpg" , 
   img4:"Puppy/Golden puppy/4.1.jpg" , 
   category: "Goldendoodle" , age: "9 Week"},
  {id: 3 , 
   name: "Lenisa" , 
   gender: "Female" , 
   price: 4400 , 
   img1: "Puppy/pembroke/1.jpg" , 
   img2: "Puppy/pembroke/1.2.jpg" , 
   img3: "Puppy/pembroke/1.1.jpg" , 
   img4: "Puppy/pembroke/1.2.jpg" , 
   category: "Pembroke Welsh Corgi" , 
   age: "11 Week"},
  {id: 4 , 
   name: "Daisy" , 
   gender: "Female" , 
   price: 3010 , 
   img1: "Puppy/Golden puppy/3.jpg" , 
   img2: "Puppy/Golden puppy/3.1.jpg" , 
   img3: "Puppy/Golden puppy/3.2.jpg" , 
   img4: "Puppy/Golden puppy/3.1.jpg" , 
   category: "German Shepherd" , 
   age: "9 Week"},
  {id: 5 , 
   name: "Trevor" , 
   gender: "Male" , 
   price: 4010 , 
   img1: "Puppy/pembroke/3.jpg" , 
   img2: "Puppy/pembroke/3.1.jpg" , 
   img3: "Puppy/pembroke/3.2.jpg" , 
   img4: "Puppy/pembroke/3.1.jpg" , 
   category: "Pembroke Welsh Corgi" , 
   age: "4 Week"},
  {id: 6 , 
   name: "Tommy" , 
   gender: "Male" , 
   price: 3322 , 
   img1: "Puppy/German/2.jpg" , 
   img2: "Puppy/German/2.1.jpg" , 
   img3: "Puppy/German/2.2.jpg" , 
   img4: "Puppy/German/2.1.jpg" , 
   category: "German Shepherd" , 
   age: "10 Week"},
  {id: 7 , 
   name: "Esra" , 
   gender: "Male" , 
   price: 2322 , 
   img1: "Puppy/pembroke/2.jpg" , 
   img2: "Puppy/pembroke/2.1.jpg" , 
   img3: "Puppy/pembroke/2.2.jpg" , 
   img4: "Puppy/pembroke/2.1.jpg"  , 
   category: "Pembroke Welsh Corgi" , 
   age: "6 Week"},
  {id: 8 , 
   name: "Rufus" , 
   gender: "Male" , 
   price: 3022 , 
   img1: "Puppy/Golden puppy/2.jpg" , 
   img2: "Puppy/Golden puppy/2.1.jpg" , 
   img3: "Puppy/Golden puppy/2.2.jpg" , 
   img4: "Puppy/Golden puppy/2.1.jpg" ,
   category: "Goldendoodle" , 
   age: "12 Week"}
];

let frontLatestPanel = "";

LatestData.forEach((item)=>{

 frontLatestPanel +=`
    <div class="col-4">
     <a href="product_detail.html"><img src="${item.img1}" key="${item.id}" class="SingleFor"></a>
         <a href="product_detail.html"><h2 key="${item.id}" class="SingleForh2">${item.name}</h2></a>
         <p>${item.category}</p>
         <p>${item.age}</p>
     </div> 
 `; 
});

document.getElementById('latestProductPanel').innerHTML = frontLatestPanel;

//For Feature Array

let FeaturePuppy = [
  {
    id:1 , name:"Lenisa" ,
       img1:"Puppy/pembroke/1.jpg" , 
       img2:"Puppy/pembroke/1.1.jpg" ,
       img3:"Puppy/pembroke/1.2.jpg" ,
       img4:"Puppy/pembroke/1.1.jpg" ,
       gender:"Female" , 
       price: 4400 ,
       category:"Pembroke Welsh Corgi" ,
       age:"11 Weeks"
  },
  {
       id:2 , name:"Anna" ,
       img1:"Puppy/German/4.jpg" , 
       img2:"Puppy/German/4.1.jpg" ,
       img3:"Puppy/German/4.2.jpg" ,
       img4:"Puppy/German/4.1.jpg" ,
       gender:"Male" , 
       price: 3088 ,
       category:"German Shephard" ,
       age:"14 Weeks"
  },
  {
       id:3 , name:"Benny" ,
       img1:"Puppy/pembroke/6.jpg" , 
       img2:"Puppy/pembroke/6.1.jpg" ,
       img3:"Puppy/pembroke/6.2.jpg" ,
       img4:"Puppy/pembroke/6.1.jpg" ,
       gender:"Female" , 
       price: 2090 ,
       category:"Pembroke Welsh Corgi" ,
       age:"7 Weeks"
  },
  {
       id:4 , name:"Harley" ,
       img1:"Puppy/Golden puppy/12.jpg" , 
       img2:"Puppy/Golden puppy/12.1.jpg" ,
       img3:"Puppy/Golden puppy/12.2.jpg" ,
       img4:"Puppy/Golden puppy/12.1.jpg" ,
       gender:"Female" , 
       price: 2288 ,
       category:"Goldendoodle" ,
       age:"11 Weeks"
  },
];

let FeatureProductPannel ="";

 FeaturePuppy.forEach((item)=>{

  FeatureProductPannel +=`
  <div class="col-4">
    <a href="product_detail.html"><img src="${item.img1}" key="${item.id}" class="SinglePuppyImg"></a>
        <a href="product_detail.html"><h2 key="${item.id}" class="SinglePuppy">${item.name}</h2></a>
        <p>${item.category}</p>
        <p>${item.age}</p>
    </div>
  `;
 
 })

document.getElementById('FeatureProductpannel').innerHTML = FeatureProductPannel;

// JQuary i use!!

$(document).ready(()=>{

  $(".SingleForh2 , .SingleFor").click(function(){
      let id = $(this).attr("key");
              
    
              let PuppySingle = LatestData.filter(function(item){
                  if(item.id  == id){
                      return item;
                  }
              });
    
              localStorage.setItem( 'Puppy_1'  , JSON.stringify(PuppySingle));
    });

    $(".SinglePuppyImg , .SinglePuppy").click(function(){
      let id = $(this).attr("key");
              
    
              let PuppySingle_2 = FeaturePuppy.filter(function(item){
                  if(item.id  == id){
                      return item;
                  }
              })
    
              localStorage.setItem( 'Puppy_1'  , JSON.stringify(PuppySingle_2));
      });

      // for Page Crawler
      $(window).scroll(function(){
         let scroll = $(window).scrollTop();
         let dHeight = $(document).height();
         let wHeight = $(window).height();
         let value = (scroll/(dHeight-wHeight)) * 80;
         $('ul .progress-line').css('height',value + '%');
      })
})

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}


document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});


// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// })
