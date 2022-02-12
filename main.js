const skillsData = {
  "title": "skills",
  "data": [
    {
      "leng": "Python",
      "score": 10
    },
    {
      "leng": "Java",
      "score": 8
    },
    {
      "leng": "JavaScript",
      "score": 6
    },
    {
      "leng": "React",
      "score": 7
    },
    {
      "leng": "C",
      "score": 2
    },
    {
      "leng": "Tu mamá",
      "score": 5
    }
  ]
}
const renderSkills = () => {
  let mainlist = document.createElement("ul");
  mainlist.className='skill_list'
  for (i = 0; i < skillsData.data.length; i++) {
    let liItem = document.createElement("li");
    let liText = document.createTextNode(skillsData.data[i].leng)
    liItem.appendChild(liText);
    for (x = 0; x < skillsData.data[i].score; x++) {
      const giantrat = document.createElement("img")
      giantrat.src = "https://drive.google.com/uc?export=view&id=1Jvfg78IrdVf9msghI_ArFiEksueeZzrq"
      giantrat.className="giantrat"
      liItem.appendChild(giantrat)
    }
    liItem.className="skill_list__element"
    mainlist.appendChild(liItem)
  }
  const cont = document.getElementById("skillcont")
  cont.appendChild(mainlist)
  cont.removeChild(document.getElementById("skillrenderbutt"))
  
}
let slideIndex = 1;
const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("hero");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const scrollToHash = (hashName) => {
  location.hash = "#" + hashName;
}

const onClickHandler = () => {
  const name = document.getElementById("name").value
  const mssg = document.getElementById("mssg").value
  const mail = document.getElementById("mail").value
  console.log(`ip: 252.57.105.182\n${name}\n${mail}\n${mssg}`)
  alert("Mensaje Enviado\n\nHemos captado su ip y la están rastrendo las autoridades")
}