const musicListData = [
  {
    src: './assets/img/iu_0.jpg',
    color: ['#0272a4', '#f6a564'],
  },
  {
    src: './assets/img/iu_1.jpg',
    color: ['#b6bfc8', '#36595b'],
  },
  {
    src: './assets/img/iu_2.jpg',
    color: ['#e58e82', '#6f569f'],
  },
];
// 요소정리
/*
 1. .list_btn_group > ul
     - li태그의 자식요소로 이미지를 갖고
     - 해당 ul의 자식으로서 추가*/

const $imgUl = document.getElementsByTagName('ul')[0];
$imgUl.innerHTML = `<li class = imgLi><img src="${musicListData[0].src}"></li><li class= ImgLi><img src='${musicListData[1].src}'></li><li class= ImgLi><img src='${musicListData[2].src}'></li>`;

/*
 2. .list_btn_group > button:first-child
    .list_btn_group > button:last-child
     p.s let currentPlayIndex = 0; */
const $PrevBtn1 = document.querySelector('.list_btn_group > button:first-child'); // <button>&lt;</button>
const $NextBtn2 = document.querySelector('.list_btn_group > button:last-child'); // <button>&gt;</button>
const $imgList = document.querySelectorAll('.list_btn_group > ul > li > img'); // NodeList(3) [img, img, img]
let currentPlayIndex = 0;

/*
 3. disk_inner
    선택된 노래가 바뀔 때마다 디스크 내부의 원은 바뀐다.*/
const $diskInner = document.querySelector('.disk_inner'); // <div class="disck_inner"></div>

/*
 4. main
    선택된 노래가 바뀔 때마다 배경화면이 바뀐다 (백드로필터..?)
    선택된 노래가 샐행되면 앨범 이미지로 바뀐다
    p.s let playstatus = 0(false); => 처음 시작될때는 정지되어있을테니까*/
const $backgroundColor = document.getElementsByTagName('main')[0]; // main
let playstatus = 0;

function prevImgPoint() {
  // 2번
  if (currentPlayIndex <= 0) {
    currentPlayIndex = $imgList.length - 1;
    // console.log('0보다 작을 때', currentPlayIndex);
  } else {
    currentPlayIndex--;
    // console.log(currentPlayIndex);
  }

  for (let item of $imgList) {
    item.classList.remove('play');
  }
  $imgList[currentPlayIndex].classList.add('play');
  // 3번
  if (currentPlayIndex == 0) {
    $diskInner.style.backgroundColor = musicListData[0].color[0];
  } else if (currentPlayIndex == 1) {
    $diskInner.style.backgroundColor = musicListData[1].color[0];
  } else if (currentPlayIndex == 2) {
    $diskInner.style.backgroundColor = musicListData[2].color[0];
  }
  // 4번
  if (currentPlayIndex == 0) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[0].color[0]}, ${musicListData[0].color[1]})`;
  } else if (currentPlayIndex == 1) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[1].color[0]}, ${musicListData[1].color[1]})`;
  } else if (currentPlayIndex == 2) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[2].color[0]}, ${musicListData[2].color[1]})`;
  }
  $disk.classList.remove('active');
}
$PrevBtn1.addEventListener('click', prevImgPoint);

function nextImgPoint() {
  // 2번
  if ($imgList.length - 1 <= currentPlayIndex) {
    currentPlayIndex = 0;
  } else {
    currentPlayIndex++;
  }
  for (let item of $imgList) {
    item.classList.remove('play');
  }
  $imgList[currentPlayIndex].classList.add('play');
  // 3번
  if (currentPlayIndex == 0) {
    $diskInner.style.backgroundColor = musicListData[0].color[0];
  } else if (currentPlayIndex == 1) {
    $diskInner.style.backgroundColor = musicListData[1].color[0];
  } else if (currentPlayIndex == 2) {
    $diskInner.style.backgroundColor = musicListData[2].color[0];
  }
  // 4번
  if (currentPlayIndex == 0) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[0].color[0]}, ${musicListData[0].color[1]})`;
  } else if (currentPlayIndex == 1) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[1].color[0]}, ${musicListData[1].color[1]})`;
  } else if (currentPlayIndex == 2) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[2].color[0]}, ${musicListData[2].color[1]})`;
  }
  $disk.classList.remove('active');
}
$NextBtn2.addEventListener('click', nextImgPoint);
/*
 5. .disk
    애니메이션을 추가해야할 disk 태그 */
const $disk = document.querySelector('.disk'); // div.disk

/*6. 
    1)play 버튼이 눌러졌을 때 배경 화면이 그라데이션에서 앨범 이미지로 변경 및 디스크 회전
    2) 중지 버튼이 눌러지면 디스크 회전 중지 배경 화면 그라데이션으로 */
const $playBtnGroup = document.querySelector('.play_btn_group');
const $playBtn = document.querySelector('.play_btn_group > button:first-child'); // button
const $stopBtn = document.querySelector('.play_btn_group > button:last-child'); // button

function changeBackground() {
  //   if (currentPlayIndex <= 0) {
  //     console.log('0보다 작을 때', currentPlayIndex);
  //   } else {
  //     console.log(currentPlayIndex);
  //   }
  if (currentPlayIndex == 0) {
    $backgroundColor.style.backgroundImage = `url(${musicListData[0].src})`;
    $backgroundColor.style.backgroundRepeat = 'no-repeat';
    $backgroundColor.style.backgroundSize = 'cover';
  } else if (currentPlayIndex == 1) {
    $backgroundColor.style.backgroundImage = `url(${musicListData[1].src})`;
    $backgroundColor.style.backgroundRepeat = 'no-repeat';
    $backgroundColor.style.backgroundSize = 'cover';
  } else if (currentPlayIndex == 2) {
    $backgroundColor.style.backgroundImage = `url(${musicListData[2].src})`;
    $backgroundColor.style.backgroundRepeat = 'no-repeat';
    $backgroundColor.style.backgroundSize = 'cover';
  }
  $disk.classList.add('active');
}
$playBtn.addEventListener('click', changeBackground);

function resetBackground() {
  if (currentPlayIndex == 0) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[0].color[0]}, ${musicListData[0].color[1]})`;
  } else if (currentPlayIndex == 1) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[1].color[0]}, ${musicListData[1].color[1]})`;
  } else if (currentPlayIndex == 2) {
    $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[2].color[0]}, ${musicListData[2].color[1]})`;
  }
  $disk.classList.remove('active');
}
$stopBtn.addEventListener('click', resetBackground);

/*
 7. 생성된 ul의 li의 이미지태그를 가지고 올 것입니다.
 
    * 현재 선택된 노래의 focus
      흰색 테두리 + 크기 커짐
 
    + 이미지 눌렀을 때도 이동 가능 */
const $imgLiGroup = document.querySelectorAll('ul > li');
console.log($imgLiGroup);
const $img1 = document.querySelectorAll('.list_btn_group > ul > li > img')[0]; // <img src='./assets/img/iu_0.jpg'>
const $img2 = document.querySelectorAll('.list_btn_group > ul > li > img')[1]; // <img src='./assets/img/iu_1.jpg'>
const $img3 = document.querySelectorAll('.list_btn_group > ul > li > img')[2]; // <img src='./assets/img/iu_1.jpg'>

$imgLiGroup.forEach((el, index) => {
  el.onclick = (e) => {
    console.log(index); // 0 1 2
    console.log(e.target); // <img src='./assets/img/iu_0.jpg'> [클릭한 img]
    if (e.target == $img1) {
      $backgroundColor.style.backgroundImage = `url(${musicListData[0].src})`;
      $backgroundColor.style.backgroundRepeat = 'no-repeat';
      $backgroundColor.style.backgroundSize = 'cover';
      $disk.classList.add('active');
    } else if (e.target == $img2) {
      $backgroundColor.style.backgroundImage = `url(${musicListData[1].src})`;
      $backgroundColor.style.backgroundRepeat = 'no-repeat';
      $backgroundColor.style.backgroundSize = 'cover';
      $disk.classList.add('active');
    } else if (e.target == $img3) {
      $backgroundColor.style.backgroundImage = `url(${musicListData[2].src})`;
      $backgroundColor.style.backgroundRepeat = 'no-repeat';
      $backgroundColor.style.backgroundSize = 'cover';
      $disk.classList.add('active');
    }
  };
});
