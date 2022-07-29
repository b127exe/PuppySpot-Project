var MenuItems = document.getElementById('MenuItems');
var MenuIcon = document.getElementById('3DotIcon');

MenuItems.style.maxHeight = "0px";
MenuIcon.style.transform = "rotateZ(0deg)";

function menuToggle() {
  if (MenuItems.style.maxHeight == "0px", MenuIcon.style.transform == "rotateZ(0deg)") {
    MenuIcon.style.transform = "rotateZ(90deg)";
    MenuItems.style.maxHeight = "270px"
  }
  else {
    MenuItems.style.maxHeight = "0px";
    MenuIcon.style.transform = "rotateZ(0deg)";
  }

};

// For All Type Of Puppy!!

let Pembroke = [
  {
    id: 1, name: "Lenisa",
    img1: "Puppy/pembroke/1.jpg",
    img2: "Puppy/pembroke/1.1.jpg",
    img3: "Puppy/pembroke/1.2.jpg",
    img4: "Puppy/pembroke/1.1.jpg",
    gender: "Female",
    price: 4400,
    category: "Pembroke Welsh Corgi",
    age: "11 Weeks"
  },
  {
    id: 2, name: "Esra",
    img1: "Puppy/pembroke/2.jpg",
    img2: "Puppy/pembroke/2.1.jpg",
    img3: "Puppy/pembroke/2.2.jpg",
    img4: "Puppy/pembroke/2.1.jpg",
    gender: "Male",
    price: 2322,
    category: "Pembroke Welsh Corgi",
    age: "6 Weeks"
  },
  {
    id: 3, name: "Trevor",
    img1: "Puppy/pembroke/3.jpg",
    img2: "Puppy/pembroke/3.1.jpg",
    img3: "Puppy/pembroke/3.2.jpg",
    img4: "Puppy/pembroke/3.1.jpg",
    gender: "Male",
    price: 4010,
    category: "Pembroke Welsh Corgi",
    age: "4 Weeks"
  },
  {
    id: 4, name: "Anna",
    img1: "Puppy/pembroke/4.jpg",
    img2: "Puppy/pembroke/4.1.jpg",
    img3: "Puppy/pembroke/4.2.jpg",
    img4: "Puppy/pembroke/4.1.jpg",
    gender: "Male",
    price: 2088,
    category: "Pembroke Welsh Corgi",
    age: "10 Weeks"
  },
  {
    id: 5, name: "Benny",
    img1: "Puppy/pembroke/6.jpg",
    img2: "Puppy/pembroke/6.1.jpg",
    img3: "Puppy/pembroke/6.2.jpg",
    img4: "Puppy/pembroke/6.1.jpg",
    gender: "Female",
    price: 2090,
    category: "Pembroke Welsh Corgi",
    age: "7 Weeks"
  },
  {
    id: 6, name: "Deigo",
    img1: "Puppy/pembroke/7.jpg",
    img2: "Puppy/pembroke/7.1.jpg",
    img3: "Puppy/pembroke/7.2.jpg",
    img4: "Puppy/pembroke/7.1.jpg",
    gender: "Male",
    price: 4560,
    category: "Pembroke Welsh Corgi",
    age: "9 Weeks"
  },
  {
    id: 7, name: "Selena",
    img1: "Puppy/pembroke/8.jpg",
    img2: "Puppy/pembroke/8.1.jpg",
    img3: "Puppy/pembroke/8.2.jpg",
    img4: "Puppy/pembroke/8.1.jpg",
    gender: "Female",
    price: 3980,
    category: "Pembroke Welsh Corgi",
    age: "13 Weeks"
  },
  {
    id: 8, name: "Ranger",
    img1: "Puppy/pembroke/9.jpg",
    img2: "Puppy/pembroke/9.1.jpg",
    img3: "Puppy/pembroke/9.2.jpg",
    img4: "Puppy/pembroke/9.1.jpg",
    gender: "Male",
    price: 4190,
    category: "Pembroke Welsh Corgi",
    age: "12 Weeks"
  },
  {
    id: 9, name: "Sadie",
    img1: "Puppy/pembroke/10.jpg",
    img2: "Puppy/pembroke/10.1.jpg",
    img3: "Puppy/pembroke/10.2.jpg",
    img4: "Puppy/pembroke/10.1.jpg",
    gender: "Female",
    price: 3070,
    category: "Pembroke Welsh Corgi",
    age: "6 Weeks"
  },
  {
    id: 10, name: "Roselee",
    img1: "Puppy/pembroke/11.jpg",
    img2: "Puppy/pembroke/11.1.jpg",
    img3: "Puppy/pembroke/11.2.jpg",
    img4: "Puppy/pembroke/11.1.jpg",
    gender: "Male",
    price: 3288,
    category: "Pembroke Welsh Corgi",
    age: "5 Weeks"
  },
  {
    id: 11, name: "Grace",
    img1: "Puppy/pembroke/5.jpg",
    img2: "Puppy/pembroke/5.1.jpg",
    img3: "Puppy/pembroke/5.2.jpg",
    img4: "Puppy/pembroke/5.1.jpg",
    gender: "Female",
    price: 2288,
    category: "Pembroke Welsh Corgi",
    age: "8 Weeks"
  },
  {
    id: 12, name: "Steve",
    img1: "Puppy/pembroke/5.jpg",
    img2: "Puppy/pembroke/5.1.jpg",
    img3: "Puppy/pembroke/5.2.jpg",
    img4: "Puppy/pembroke/5.1.jpg",
    gender: "Female",
    price: 4288,
    category: "Pembroke Welsh Corgi",
    age: "14 Weeks"
  }
];

let PembrokePanel = "";

Pembroke.forEach((items) => {

  PembrokePanel += `
      <div class="col-4">
          <a href="product_detail.html"><img src="${items.img1}" key="${items.id}" class="SingleFor"></a>
              <a href="product_detail.html"><h4 class="SingleForh4" key="${items.id}">${items.name}</h4></a>
              <p>${items.category}</p>    
              <p>$ ${items.price}</p>
      </div>
     `;

});

document.getElementById('productspanel_1').innerHTML = PembrokePanel;

$(document).ready(() => {

  $(".SingleForh4 , .SingleFor").click(function () {
    let id = $(this).attr("key");


    let PuppySingle_3 = Pembroke.filter(function (item) {
      if (item.id == id) {
        return item;
      }
    })

    localStorage.setItem('Puppy_1', JSON.stringify(PuppySingle_3));
  });

})

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
  }

  links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
  }

});