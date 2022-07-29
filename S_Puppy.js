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

//   Event on product gallery

let productImg = document.getElementById("productImg");

let Smal_Image = document.getElementsByClassName("Smal_Image");

Smal_Image[0].onclick = function () {
  productImg.src = Smal_Image[0].src;
}
Smal_Image[1].onclick = function () {
  productImg.src = Smal_Image[1].src;
}
Smal_Image[2].onclick = function () {
  productImg.src = Smal_Image[2].src;
}
Smal_Image[3].onclick = function () {
  productImg.src = Smal_Image[3].src;
}

// For Single Puppy Detail

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

let LatestData = [
  {
    id: 1, name: "Astrid",
    gender: "female",
    price: 2100,
    img: "Puppy/Golden puppy/1.jpg",
    img1: "Puppy/Golden puppy/1.1.jpg",
    img2: "Puppy/Golden puppy/1.2.jpg",
    img3: "Puppy/Golden puppy/1.1.jpg",
    category: "Goldendoodle",
    age: "7 Week"
  },
  {
    id: 2, name: "Amber",
    gender: "Female",
    price: 2400,
    img: "Puppy/German/1.jpg",
    img1: "Puppy/German/1.1.jpg",
    img2: "Puppy/German/1.2.jpg",
    im3: "Puppy/German/1.1.jpg",
    category: "German Shepherd",
    age: "6 Week"
  },
  {
    id: 3,
    name: "Lenisa",
    gender: "Female",
    price: 4400,
    img: "Puppy/pembroke/1.1.jpg",
    img1: "Puppy/pembroke/1.2.jpg",
    img2: "Puppy/pembroke/1.1.jpg",
    img3: "Puppy/pembroke/1.jpg",
    category: "Pembroke Welsh Corgi",
    age: "11 Week"
  },
  {
    id: 4, name: "Daisy",
    gender: "Female",
    price: 3010,
    img: "Puppy/Golden puppy/3.jpg",
    img1: "Puppy/Golden puppy/3.1.jpg",
    img2: "Puppy/Golden puppy/3.2.jpg",
    img3: "Puppy/Golden puppy/3.1.jpg",
    category: "German Shepherd",
    age: "9 Week"
  },
  {
    id: 5,
    name: "Trevor",
    gender: "Male",
    price: 4010,
    img: "Puppy/pembroke/3.jpg",
    img1: "Puppy/pembroke/3.1.jpg",
    img2: "Puppy/pembroke/3.2.jpg",
    img3: "Puppy/pembroke/3.1.jpg",
    category: "Pembroke Welsh Corgi",
    age: "4 Week"
  },
  {
    id: 6,
    name: "Tommy",
    gender: "Male",
    price: 3322,
    img: "Puppy/German/2.jpg",
    img1: "Puppy/German/2.1.jpg",
    img2: "Puppy/German/2.1.jpg",
    img3: "Puppy/German/2.1.jpg",
    category: "German Shepherd",
    age: "10 Week"
  },
  {
    id: 7,
    name: "Esra",
    gender: "Male",
    price: 2322,
    img: "Puppy/pembroke/2.jpg",
    img1: "Puppy/pembroke/2.1.jpg",
    img2: "Puppy/pembroke/2.2.jpg",
    img3: "Puppy/pembroke/2.1.jpg",
    category: "Pembroke Welsh Corgi",
    age: "6 Week"
  },
  {
    id: 8,
    name: "Rufus",
    gender: "Male",
    price: 3022,
    img: "Puppy/Golden puppy/2.jpg",
    img1: "Puppy/Golden puppy/2.1.jpg",
    img2: "Puppy/Golden puppy/2.2.jpg",
    img3: "Puppy/Golden puppy/2.1.jpg",
    category: "Goldendoodle",
    age: "12 Week"
  }
];

let FeaturePuppy = [
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
    id: 2, name: "Anna",
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
    id: 3, name: "Benny",
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
    id: 4, name: "Harley",
    img1: "Puppy/Golden puppy/12.jpg",
    img2: "Puppy/Golden puppy/12.1.jpg",
    img3: "Puppy/Golden puppy/12.2.jpg",
    img4: "Puppy/Golden puppy/12.1.jpg",
    gender: "Female",
    price: 2288,
    category: "Goldendoodle",
    age: "11 Weeks"
  },
];

let SinglePuppy = JSON.parse(localStorage.getItem("Puppy_1"));
console.log(SinglePuppy);
document.getElementById('Gender').innerHTML = SinglePuppy[0].gender;
document.getElementById('puppyCategory').innerHTML = SinglePuppy[0].category;
document.getElementById('Age').innerHTML = SinglePuppy[0].age;
document.getElementById('PuppyName').innerHTML = SinglePuppy[0].name;
document.getElementById('PuppyPrice').innerHTML = SinglePuppy[0].price;
document.getElementById('productImg').src = SinglePuppy[0].img1;
document.getElementById('productImg_1').src = SinglePuppy[0].img2;
document.getElementById('productImg_2').src = SinglePuppy[0].img3;
document.getElementById('productImg_3').src = SinglePuppy[0].img4;
document.getElementById('productImg_4').src = SinglePuppy[0].img1;

// for Featured Puppy Work!!!

let FeatureProductPannel = "";

FeaturePuppy.forEach((item) => {

  FeatureProductPannel += `
    <div class="col-4">
      <a href="product_detail.html"><img src="${item.img1}" key="${item.id}" class="SinglePuppyImg"></a>
          <a href="product_detail.html"><h2 key="${item.id}" class="SinglePuppy">${item.name}</h2></a>
          <p>${item.category}</p>
          <p>${item.age}</p>
      </div>
    `;

})

document.getElementById('FeatureProductpannel').innerHTML = FeatureProductPannel;

$(document).ready(() => {

  $(".SinglePuppyImg , .SinglePuppy").click(function () {
    let id = $(this).attr("key");

    let PuppySingle = FeaturePuppy.filter(function (item) {
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