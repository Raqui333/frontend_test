function genRandomPost() {
  fetch('https://picsum.photos/1920/1080', {
    method: 'GET',
  }).then((res) => {
    const feed = document.getElementById('ihkk6');

    if (feed.querySelector('h1')) feed.querySelector('h1').remove();

    let img = document.createElement('img');
    img.src = res.url;
    img.className = 'post_img';

    img.onclick = () => openImgViewer(res.url);

    feed.appendChild(img);
  });
}

function genRandomProfile() {
  const url = 'https://randomuser.me/api';
  fetch(url, {
    method: 'GET',
  }).then(async (res) => {
    const data = await res.json();
    const { picture, login } = data.results[0];
    document.getElementById('id2zt').src = picture.large;
    document.getElementById('ikqd5').innerText = '@' + login.username;
  });
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function setupPage() {
  genRandomProfile();

  const posts = getRandomNumberBetween(3, 100);
  for (let i = 0; i <= posts; i++)
    genRandomPost(); // prettier-ignore

  document.getElementById('iynq7').innerText = posts + ' Publicações';

  document.getElementById('i6z6d').innerText =
    getRandomNumberBetween(0, 999) + ' Seguidores';

  document.getElementById('iws8o').innerText =
    getRandomNumberBetween(0, 999) + ' Seguindo';
}

function openImgViewer(url) {
  const image_viewer = document.createElement('div');
  image_viewer.id = 'i2gh';

  image_viewer.innerHTML = `
      <div id="ia2j">
        <img id="iwvbe" onclick="closeImgViwer()" src="./res/closer_icon.png"/>
        <img id="i29r3" src="${url}"/>
        <div id="ifdpq">
          <div id="ifnot">
            <div id="iwt1s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
              mollis ante sed dolor euismod semper. Proin pulvinar venenatis urna, 
              et facilisis eros lacinia et. Sed ornare tortor mauris, efficitur 
              facilisis metus laoreet non.
              <br/>
            </div>
          </div>
        </div>
      </div>
    `;

  document.body.appendChild(image_viewer);
  document.body.classList.add('disable-scrolling');
}

function closeImgViwer() {
  const viewer = document.getElementById('i2gh');

  if (viewer) {
    viewer.remove();

    document.querySelectorAll('.post_img').forEach((elem) => {
      elem.onclick = () => openImgViewer(elem.src);
    });

    document.body.classList.remove('disable-scrolling');
  }
}
