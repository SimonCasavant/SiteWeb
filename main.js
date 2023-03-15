//alert("Javascript is working");

function myFunction() {
    document.getElementById("pop-up").style.display = "none";
  }
      
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements =  document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const url = 'https://api.henrikdev.xyz/valorant/v1/mmr/na/Simon/olo'

async function getData() {
  const res = await fetch(url);
  const fdata = await res.json();
  const data = await fdata.data;
  const {currenttierpatched, ranking_in_tier, elo, name, tag} = data;
  document.getElementById('rank').textContent = 'Rank: ' + currenttierpatched + ' ' + ranking_in_tier + '/100'
  document.getElementById('elo').textContent = 'Elo total: ' + elo
  document.getElementById('name').textContent = name + '#' + tag
}


getData();

//.catch(error => {
//  console.log(error)
//})