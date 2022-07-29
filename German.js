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

let GermanArray = [
  {
    id: 1, name: "Amber",
    img1: "Puppy/German/1.jpg",
    img2: "Puppy/German/1.1.jpg",
    img3: "Puppy/German/1.2.jpg",
    img4: "Puppy/German/1.1.jpg",
    gender: "Female",
    price: 2400,
    category: "German Shephard",
    age: "6 Weeks"
  },
  {
    id: 2, name: "Tommy",
    img1: "Puppy/German/2.jpg",
    img2: "Puppy/German/2.1.jpg",
    img3: "Puppy/German/2.2.jpg",
    img4: "Puppy/German/2.1.jpg",
    gender: "Male",
    price: 3322,
    category: "German Shephard",
    age: "10 Weeks"
  },
  {
    id: 3, name: "Daisy",
    img1: "Puppy/German/3.jpg",
    img2: "Puppy/German/3.1.jpg",
    img3: "Puppy/German/3.2.jpg",
    img4: "Puppy/German/3.1.jpg",
    gender: "Female",
    price: 3010,
    category: "German Shephard",
    age: "9 Weeks"
  },
  {
    id: 4, name: "Anna",
    img1: "Puppy/German/4.jpg",
    img2: "Puppy/German/4.1.jpg",
    img3: "Puppy/German/4.2.jpg",
    img4: "Puppy/German/4.1.jpg",
    gender: "Male",
    price: 3088,
    category: "German Shephard",
    age: "14 Weeks"
  },
  {
    id: 5, name: "Chrissy",
    img1: "Puppy/German/6.jpg",
    img2: "Puppy/German/6.1.jpg",
    img3: "Puppy/German/6.2.jpg",
    img4: "Puppy/German/6.1.jpg",
    gender: "Female",
    price: 3090,
    category: "German Shephard",
    age: "6 Weeks"
  },
  {
    id: 6, name: "Jenny",
    img1: "Puppy/German/7.jpg",
    img2: "Puppy/German/7.1.jpg",
    img3: "Puppy/German/7.2.jpg",
    img4: "Puppy/German/7.1.jpg",
    gender: "Male",
    price: 2560,
    category: "German Shephard",
    age: "4 Weeks"
  },
  {
    id: 7, name: "Eleven",
    img1: "Puppy/German/8.jpg",
    img2: "Puppy/German/8.1.jpg",
    img3: "Puppy/German/8.2.jpg",
    img4: "Puppy/German/8.1.jpg",
    gender: "Female",
    price: 2980,
    category: "German Shephard",
    age: "12 Weeks"
  },
  {
    id: 8, name: "Kate",
    img1: "Puppy/German/9.jpg",
    img2: "Puppy/German/9.1.jpg",
    img3: "Puppy/German/9.2.jpg",
    img4: "Puppy/German/9.1.jpg",
    gender: "Male",
    price: 3190,
    category: "German Shephard",
    age: "5 Weeks"
  },
  {
    id: 9, name: "Max",
    img1: "Puppy/German/10.jpg",
    img2: "Puppy/German/10.1.jpg",
    img3: "Puppy/German/10.2.jpg",
    img4: "Puppy/German/10.1.jpg",
    gender: "Female",
    price: 2070,
    category: "German Shephard",
    age: "10 Weeks"
  },
  {
    id: 10, name: "Raven",
    img1: "Puppy/German/11.jpg",
    img2: "Puppy/German/11.1.jpg",
    img3: "Puppy/German/11.2.jpg",
    img4: "Puppy/German/11.1.jpg",
    gender: "Male",
    price: 2288,
    category: "German Shephard",
    age: "11 Weeks"
  },
  {
    id: 11, name: "Justin",
    img1: "Puppy/German/5.jpg",
    img2: "Puppy/German/5.1.jpg",
    img3: "Puppy/German/5.2.jpg",
    img4: "Puppy/German/5.1.jpg",
    gender: "Female",
    price: 3288,
    category: "German Shephard",
    age: "8 Weeks"
  },
  {
    id: 12, name: "Ellie",
    img1: "Puppy/German/5.jpg",
    img2: "Puppy/German/5.1.jpg",
    img3: "Puppy/German/5.2.jpg",
    img4: "Puppy/German/5.1.jpg",
    gender: "Female",
    price: 3288,
    category: "German Shephard",
    age: "6 Weeks"
  }
];

let GermanPanel = "";

GermanArray.forEach((items) => {

  GermanPanel += `
        <div class="col-4">
            <a href="product_detail.html"><img src="${items.img1}" key="${items.id}" class="SingleFor"></a>
                <a href="product_detail.html"><h4 class="SingleForh4" key="${items.id}">${items.name}</h4></a>
                <p>${items.category}</p>    
                <p>$ ${items.price}</p>
        </div>
       `;

});

document.getElementById('productspanel_1').innerHTML = GermanPanel;

$(document).ready(() => {


  $(".SingleForh4 , .SingleFor").click(function () {
    let id = $(this).attr("key");


    let PuppySingle = GermanArray.filter(function (item) {
      if (item.id == id) {
        return item;
      }
    })

    localStorage.setItem('Puppy_1', JSON.stringify(PuppySingle));
  });

});

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