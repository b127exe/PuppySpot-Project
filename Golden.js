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

let GoldenArray = [
  {
    id: 1, name: "Astrid",
    img1: "Puppy/Golden puppy/1.jpg",
    img2: "Puppy/Golden puppy/1.1.jpg",
    img3: "Puppy/Golden puppy/1.2.jpg",
    img4: "Puppy/Golden puppy/1.1.jpg",
    gender: "Female",
    price: 2100,
    category: "Goldendoodle",
    age: "5 Weeks"
  },
  {
    id: 2, name: "Rufus",
    img1: "Puppy/Golden puppy/2.jpg",
    img2: "Puppy/Golden puppy/2.1.jpg",
    img3: "Puppy/Golden puppy/2.2.jpg",
    img4: "Puppy/Golden puppy/2.1.jpg",
    gender: "Male",
    price: 3022,
    category: "Goldendoodle",
    age: "12 Weeks"
  },
  {
    id: 3, name: "Annie",
    img1: "Puppy/Golden puppy/3.jpg",
    img2: "Puppy/Golden puppy/3.1.jpg",
    img3: "Puppy/Golden puppy/3.2.jpg",
    img4: "Puppy/Golden puppy/3.1.jpg",
    gender: "Female",
    price: 2010,
    category: "Goldendoodle",
    age: "7 Weeks"
  },
  {
    id: 4, name: "Oscar",
    img1: "Puppy/Golden puppy/4.jpg",
    img2: "Puppy/Golden puppy/4.1.jpg",
    img3: "Puppy/Golden puppy/4.2.jpg",
    img4: "Puppy/Golden puppy/4.1.jpg",
    gender: "Male",
    price: 2088,
    category: "Goldendoodle",
    age: "9 Weeks"
  },
  {
    id: 5, name: "Scout",
    img1: "Puppy/Golden puppy/6.jpg",
    img2: "Puppy/Golden puppy/6.1.jpg",
    img3: "Puppy/Golden puppy/6.2.jpg",
    img4: "Puppy/Golden puppy/6.1.jpg",
    gender: "Female",
    price: 2090,
    category: "Goldendoodle",
    age: "4 Weeks"
  },
  {
    id: 6, name: "Alissa",
    img1: "Puppy/Golden puppy/7.jpg",
    img2: "Puppy/Golden puppy/7.1.jpg",
    img3: "Puppy/Golden puppy/7.2.jpg",
    img4: "Puppy/Golden puppy/7.1.jpg",
    gender: "Male",
    price: 3560,
    category: "Goldendoodle",
    age: "8 Weeks"
  },
  {
    id: 7, name: "Quinn",
    img1: "Puppy/Golden puppy/8.jpg",
    img2: "Puppy/Golden puppy/8.1.jpg",
    img3: "Puppy/Golden puppy/8.2.jpg",
    img4: "Puppy/Golden puppy/8.1.jpg",
    gender: "Female",
    price: 3980,
    category: "Goldendoodle",
    age: "14 Weeks"
  },
  {
    id: 8, name: "Eddy",
    img1: "Puppy/Golden puppy/9.jpg",
    img2: "Puppy/Golden puppy/9.1.jpg",
    img3: "Puppy/Golden puppy/9.2.jpg",
    img4: "Puppy/Golden puppy/9.1.jpg",
    gender: "Male",
    price: 2190,
    category: "Goldendoodle",
    age: "8 Weeks"
  },
  {
    id: 9, name: "Florie",
    img1: "Puppy/Golden puppy/10.jpg",
    img2: "Puppy/Golden puppy/10.1.jpg",
    img3: "Puppy/Golden puppy/10.2.jpg",
    img4: "Puppy/Golden puppy/10.1.jpg",
    gender: "Female",
    price: 3070,
    category: "Goldendoodle",
    age: "13 Weeks"
  },
  {
    id: 10, name: "Freya",
    img1: "Puppy/Golden puppy/11.jpg",
    img2: "Puppy/Golden puppy/11.1.jpg",
    img3: "Puppy/Golden puppy/11.2.jpg",
    img4: "Puppy/Golden puppy/11.1.jpg",
    gender: "Male",
    price: 3288,
    category: "Goldendoodle",
    age: "6 Weeks"
  },
  {
    id: 11, name: "Harley",
    img1: "Puppy/Golden puppy/12.jpg",
    img2: "Puppy/Golden puppy/12.1.jpg",
    img3: "Puppy/Golden puppy/12.2.jpg",
    img4: "Puppy/Golden puppy/12.1.jpg",
    gender: "Female",
    price: 2288,
    category: "Goldendoodle",
    age: "11 Weeks"
  },
  {
    id: 12, name: "Bella",
    img1: "Puppy/Golden puppy/12.jpg",
    img2: "Puppy/Golden puppy/12.1.jpg",
    img3: "Puppy/Golden puppy/12.2.jpg",
    img4: "Puppy/Golden puppy/12.1.jpg",
    gender: "Female",
    price: 2288,
    category: "Goldendoodle",
    age: "11 Weeks"
  }
];

let GoldenPanel = "";

GoldenArray.forEach((items) => {

  GoldenPanel += `
        <div class="col-4">
            <a href="product_detail.html"><img src="${items.img1}" key="${items.id}" class="SingleFor"></a>
                <a href="product_detail.html"><h4 class="SingleForh4" key="${items.id}">${items.name}</h4></a>
                <p>${items.category}</p>    
                <p>$ ${items.price}</p>
        </div>
       `;

});

document.getElementById('productspanel_1').innerHTML = GoldenPanel;

$(document).ready(() => {

  $(".SingleForh4 , .SingleFor").click(function () {
    let id = $(this).attr("key");


    let PuppySingle = GoldenArray.filter(function (item) {
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