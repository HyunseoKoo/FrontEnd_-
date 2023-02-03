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

/* 5. .disk
    애니메이션을 추가해야할 disk 태그 */
const $disk = document.querySelector('.disk'); // div.disk

/*6. 
    1)play 버튼이 눌러졌을 때 배경 화면이 그라데이션에서 앨범 이미지로 변경 및 디스크 회전
    2) 중지 버튼이 눌러지면 디스크 회전 중지 배경 화면 그라데이션으로 */
const $playBtnGroup = document.querySelector('.play_btn_group');
const $playBtn = document.querySelector('.play_btn_group > button:first-child'); // button
const $stopBtn = document.querySelector('.play_btn_group > button:last-child'); // button

/*
 7. 생성된 ul의 li의 이미지태그를 가지고 올 것입니다.
 
    * 현재 선택된 노래의 focus
      흰색 테두리 + 크기 커짐
 
    + 이미지 눌렀을 때도 이동 가능 */
const $ImgGroup = document.querySelectorAll('.list_btn_group > ul > li'); // [li][/li],[li][/li],[li][/li]
// console.log($ImgGroup)
const $img1 = document.querySelectorAll('.list_btn_group > ul > li > img')[0]; // <img src='./assets/img/iu_0.jpg'>
const $img2 = document.querySelectorAll('.list_btn_group > ul > li > img')[1]; // <img src='./assets/img/iu_1.jpg'>
const $img3 = document.querySelectorAll('.list_btn_group > ul > li > img')[2]; // <img src='./assets/img/iu_1.jpg'>

$imgList[currentPlayIndex].classList.add('play');
// 1. [<] 버튼 누르면 발생되는 이벤트 함수
function prevImgPoint() {
  // 2번) 이전 페이지로 넘어감 (index가 0이되면 마지막 index로 변경)
  if (currentPlayIndex <= 0) {
    currentPlayIndex = $imgList.length - 1;
  } else {
    currentPlayIndex--;
  }

  // 7번) 이전에 설정된 'play'속성 삭제 (해당 속성이 어느 index에 적용되어 있는지 모르는 상태이지 for문으로 전체 인덱스에 모두 적용)
  for (let item of $imgList) {
    item.classList.remove('play');
  }
  // 현재 index(crruentPlayIndex)에만 'play'속성 적용
  $imgList[currentPlayIndex].classList.add('play');

  // 3번) 디스크 내부 원 색상 변경
  for (i = 0; i < musicListData.length; i++) {
    if (currentPlayIndex == [i]) {
      $diskInner.style.backgroundColor = musicListData[i].color[0];
    }
  }

  // 4번) 배경색(그라데이션) 변경
  for (i = 0; i < musicListData.length; i++) {
    if (currentPlayIndex == [i]) {
      $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]})`;
    }
  }
  // +) play버튼 눌렀다가 [<] 버튼 클릭할 경우를 대비하여, 디스크 회전 기능 삭제
  $disk.classList.remove('active');
}
// 실행1
$PrevBtn1.addEventListener('click', prevImgPoint);

// 2. [>] 버튼 누르면 발생되는 이벤트 함수
function nextImgPoint() {
  // 2번) 이미지 index 다음 index로 변경 (마지막 index는 처음 index로 변경)
  if ($imgList.length - 1 <= currentPlayIndex) {
    currentPlayIndex = 0;
  } else {
    currentPlayIndex++;
  }
  //  7번) 이전에 설정된 'play'속성 삭제 (해당 속성이 어느 index에 적용되어 있는지 모르는 상태이지 for문으로 전체 인덱스에 모두 적용)
  for (let item of $imgList) {
    item.classList.remove('play');
  }
  // 현재 index(crruentPlayIndex)에만 'play'속성 적용
  $imgList[currentPlayIndex].classList.add('play');

  // 3번) 디스크 내부 원 색상 변경
  for (i = 0; i < musicListData.length; i++) {
    if (currentPlayIndex == [i]) {
      $diskInner.style.backgroundColor = musicListData[i].color[0];
    }
  }

  // 4번) 배경색(그라데이션) 변경
  for (i = 0; i < musicListData.length; i++) {
    if (currentPlayIndex == [i]) {
      $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]})`;
    }
  }

  // +) play버튼 눌렀다가 [<] 버튼 클릭할 경우를 대비하여, 디스크 회전 기능 삭제
  $disk.classList.remove('active');
}
// 실행2
$NextBtn2.addEventListener('click', nextImgPoint);

// 3. [PLAY] 버튼 클릭하면 발생하는 이벤트 함수
function PlayBtnClick() {
  for (i = 0; i < musicListData.length; i++) {
    if (currentPlayIndex == i) {
      $backgroundColor.style.backgroundImage = `url(${musicListData[i].src})`;
      $backgroundColor.style.backgroundRepeat = 'no-repeat';
      $backgroundColor.style.backgroundSize = 'cover';
    }

    $disk.classList.add('active');
  }
}
// 실행3
$playBtn.addEventListener('click', PlayBtnClick);

// 4. [STOP] 버튼 클릭하면 발생하는 이벤트 함수
// function resetBackground() {
function StopBtnClick() {
  for (i = 0; i < musicListData.length; i++) {
    if (currentPlayIndex == i) {
      $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]})`;
    }

    $disk.classList.remove('active');
  }
  $ImgGroup;
}
// 실행4
$stopBtn.addEventListener('click', StopBtnClick);

// 5. 이미지 클릭하면 배경색 & 디스크 이너 색상 변경

$ImgGroup.forEach((el, index) => {
  el.onclick = (e) => {
    currentPlayIndex = [...el.parentElement.children].findIndex((item) => {
      return item == e.target.parentElement;
    });
    // console.log([...el.parentElement.children.children]);

    for (let el of $ImgGroup) {
      el.children[0].classList.remove('play');
      if (e.target == el.children[0]) {
        $backgroundColor.style.backgroundImage = `linear-gradient(120deg, ${musicListData[currentPlayIndex].color[0]}, ${musicListData[currentPlayIndex].color[1]})`;
        $diskInner.style.backgroundColor = musicListData[currentPlayIndex].color[0];
        e.target.classList.add('play');
      }
    }
  };
});
