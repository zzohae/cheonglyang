 //팝업
  const membersdata = [
  {
  profilepic: "https://github.com/zzohae/cheonglyang/blob/1311aae5bda30c0c66d6b1e5a955f6df7fd3aca7/img/main/popup_KSH.png?raw=true",
  position: "PM",
  name: "김성현",
  quote: "디자인 가능한 풀스택 기획자",
  cando: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/indesign-40.svg",
  candoalt: "인디자인",
  divName: "kim",
  bar : [{
    title : "기획",
    width : 50
  },
  {
    title : "개발",
    width : 10
  },
  {
    title : "디자인",
    width : 30
  }]
  },
  {
    profilepic: "https://github.com/zzohae/cheonglyang/blob/1311aae5bda30c0c66d6b1e5a955f6df7fd3aca7/img/main/popup_JHY.png?raw=true",
    position: "I.C. Developer",
    name: "조해연",
    quote: "100% 순수 국산 햇퍼블리셔(당도100)",
    cando: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png",
    candoalt: "블렌더3D",
    divName: "jo",
    bar : [{
      title : "기획",
      width : 20
    },
    {
      title : "개발",
      width : 80
    },
    {
      title : "디자인",
      width : 20
    }]
  
  },
  {
    profilepic: "https://github.com/zzohae/cheonglyang/blob/1311aae5bda30c0c66d6b1e5a955f6df7fd3aca7/img/main/popup_LHE.png?raw=true",
    position: "UX·UI",
    name: "이혜은",
    quote: "!important;",
    cando: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/after-effects.svg",
    candoalt: "애프터이펙트",
    divName: "lee",
    bar : [{
      title : "기획",
      width : 30
    },
    {
      title : "개발",
      width : 10
    },
    {
      title : "디자인",
      width : 50
    }]
    }
];
  const dim =
  `<div class="dim-overlay" id="dimOverlay">
        <div class="popup">

            <div class="popup_buttons">
                <button id="todayClose">하루 동안 보지 않기</button>
                <button id="closePopup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                            d="M7.5 9.74185L2.74427 14.5109C2.44361 14.8098 2.06096 14.9592 1.59632 14.9592C1.13167 14.9592 0.749022 14.8098 0.44837 14.5109C0.149457 14.212 0 13.8315 0 13.3696C0 12.9076 0.149457 12.5272 0.44837 12.2283L5.21739 7.45924L0.44837 2.74435C0.149457 2.44367 0 2.06101 0 1.59636C0 1.13168 0.149457 0.749022 0.44837 0.44837C0.747283 0.149457 1.12772 0 1.58967 0C2.05163 0 2.43207 0.149457 2.73098 0.44837L7.5 5.21739L12.2149 0.44837C12.5156 0.149457 12.8982 0 13.3629 0C13.8276 0 14.2102 0.149457 14.5109 0.44837C14.837 0.774457 15 1.16168 15 1.61005C15 2.05842 14.837 2.43207 14.5109 2.73098L9.74185 7.45924L14.5109 12.215C14.8098 12.5156 14.9592 12.8983 14.9592 13.3629C14.9592 13.8276 14.8098 14.2102 14.5109 14.5109C14.1848 14.837 13.7976 15 13.3492 15C12.9008 15 12.5272 14.837 12.2283 14.5109L7.5 9.74185Z"
                            fill="white" />
                    </svg>
                </button>
            </div>

            <div class="popup_info">

            </div>

        </div>
  </div>`;
  window.addEventListener('load', function(){
  let memberrect = "";
  const rectTarget = document.querySelector('.popup_info');
  for (x of membersdata){
    memberrect += `<div class="popup_rect" id="${x.divName}">
                    <div class="profile">
                        <img src="${x.profilepic}" >

                        <div class="popup_name">
                            <h2>${x.position}</h2>
                            <h2>${x.name}</h2>
                        </div>

                        <div class="cando">
                            <img src="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop-40.svg" alt="포토샵">
                            <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg" alt="일러스트레이터">
                            <img src="${x.cando}" alt="${x.candoalt}">
                            <img class="cover" src="https://hoing.io/storage/2020/10/vscode-logo-2.png" alt="VScode">
                            <img src="https://imakestuff.online/wp-content/uploads/2019/12/HTML-CSS-JS-Logo-350x360.png" alt="HTML, CSS, JS">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png" alt="피그마">
                        </div>

                        <div class="Contribution">`;


                        for (i of x.bar){
                        memberrect += `<div class="Con">
                                                  <p>${i.title}</p>
                                                  <p class="bar w${i.width}"></p>
                                        </div>`
                       }

                       memberrect += `</div>
                        <div class="another">
                            <h1>"${x.quote}"</h1>
                        </div>
                    </div>
                </div>`; 
  };
  rectTarget.innerHTML = memberrect;
  });

if (document.querySelector('.swiper')) {
  $("body").prepend(dim);

  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('dimOverlay').classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  window.onload = function() {
    document.getElementById('dimOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };
}

  
 // 퀵메뉴
  const Qmenu = `<div class='myQmenu'>
                                  <div class='inquiry'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" fill="none">
  <path d="M9.461 6.461C10.93 4.99196 12.9225 4.16667 15 4.16667C16.0287 4.16667 17.0473 4.36928 17.9977 4.76294C18.9481 5.15661 19.8116 5.7336 20.539 6.461C21.2664 7.18839 21.8434 8.05193 22.2371 9.00231C22.6307 9.9527 22.8333 10.9713 22.8333 12V13.1667H21.6667C21.092 13.1667 20.5409 13.3949 20.1346 13.8013C19.7283 14.2076 19.5 14.7587 19.5 15.3333V20.3333C19.5 20.908 19.7283 21.4591 20.1346 21.8654C20.5409 22.2717 21.092 22.5 21.6667 22.5H22.7698C22.6813 22.843 22.5023 23.1594 22.2475 23.4142C21.8725 23.7893 21.3638 24 20.8333 24H17.5411C17.3704 23.7813 17.1586 23.5966 16.9166 23.457C16.5873 23.2668 16.2137 23.1667 15.8333 23.1667H14.1667C13.592 23.1667 13.0409 23.3949 12.6346 23.8013C12.2283 24.2076 12 24.7587 12 25.3333C12 25.908 12.2283 26.4591 12.6346 26.8654C13.0409 27.2717 13.592 27.5 14.1667 27.5H15.8333C16.2137 27.5 16.5873 27.3999 16.9166 27.2097C17.1586 27.07 17.3704 26.8854 17.5411 26.6667H20.8333C22.071 26.6667 23.258 26.175 24.1332 25.2998C25.0083 24.4247 25.5 23.2377 25.5 22V12C25.5 10.6211 25.2284 9.25574 24.7007 7.98182C24.1731 6.70791 23.3996 5.55039 22.4246 4.57538C21.4496 3.60036 20.2921 2.82694 19.0182 2.29926C17.7443 1.77159 16.3789 1.5 15 1.5C13.6211 1.5 12.2557 1.77159 10.9818 2.29926C9.70791 2.82694 8.55039 3.60036 7.57538 4.57538C6.60036 5.55039 5.82694 6.70791 5.29926 7.98182C4.77159 9.25574 4.5 10.6211 4.5 12V20.3333C4.5 20.908 4.72827 21.4591 5.1346 21.8654C5.54093 22.2717 6.09203 22.5 6.66667 22.5H8.33333C8.90797 22.5 9.45907 22.2717 9.8654 21.8654C10.2717 21.4591 10.5 20.908 10.5 20.3333V15.3333C10.5 14.7587 10.2717 14.2076 9.8654 13.8013C9.45907 13.3949 8.90797 13.1667 8.33333 13.1667H7.16667V12C7.16667 9.92247 7.99196 7.93003 9.461 6.461Z" fill="#214AEE" stroke="white" stroke-linejoin="round"/>
</svg><ul></ul></div>
                                  <a href='#' class='scroll-top'>TOP</a>
                                  </div>`
$("body").append(Qmenu);

function toggleScrollTop() {
    const scrollTarget = document.querySelector('.myQmenu');
    if (scrollTarget) {
        window.scrollY > 100 ? scrollTarget.classList.add('active') : scrollTarget.classList.remove('active');
    }
}

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);

document.querySelector('.scroll-top')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 퀵메뉴 토글
const inquirysite = [
  { atext: "챗봇상담", href: "#" },
  { atext: "상품문의", href: "#" }
];

window.addEventListener('load', function() {
  let inquirylist = '';

  for (let x of inquirysite) {
    inquirylist += `<li><a href="${x.href}" class='mybtn'>${x.atext}</a></li>`;
  }

  document.querySelector(".inquiry ul").innerHTML = inquirylist;

  document.querySelector(".inquiry").addEventListener('click', function() {
    this.classList.toggle('listopen');
  });
});

// 상단광고
const topadcontent = `
<div class='d-flex jcc bg-active top-ad'>
    <a href='' class='text-white'>[광고] 그린컴퓨터아트학원 신도림점과 KDT가 낳은 인재들... 첫 프로젝트 선보여</a>
    <button class="whitemode closebtn ">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 1.5L1.5 16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.5 1.5L16.5 16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
</div>  
`;

$("#header150103").prepend(topadcontent);

const topAD = document.querySelector('.top-ad  .closebtn ');        

topAD.addEventListener('click', ()=>{
    document.querySelector('#header150103').classList.toggle('up')
})

  

// 검색영역
const serchIcon = document.querySelector('#header150103 > div.header-wrap > div.search-box > form > a > img');

serchIcon.src = 'https://raw.githubusercontent.com/zzohae/cheonglyang/9f23950209cb0095743b7291830088975ebf1cec/img/common/search.svg';
  
document.querySelector('#header150103 > div.header-wrap > .search-box > form input:nth-of-type(4)').placeholder = '';

// 유틸
const topmyutil = `
  <div class='top-myutil'>

  </div>  
  `;
 $(".header-wrap").append(topmyutil);
  
const topmyutildata = [
  {
  alt: "알림",
  src: "https://raw.githubusercontent.com/zzohae/cheonglyang/80cdd978f61e1e909b53a941d60a1482bbf820ef/img/common/noti.svg",
  href: "javascript:GoMenu('orderlist');"
  },
  {
  alt: "장바구니",
  src: "https://raw.githubusercontent.com/zzohae/cheonglyang/80cdd978f61e1e909b53a941d60a1482bbf820ef/img/common/cart.svg",
  href: "javascript:GoMenu('cart');"
  },
  {
  alt: "내 정보",
  src: "https://raw.githubusercontent.com/zzohae/cheonglyang/80cdd978f61e1e909b53a941d60a1482bbf820ef/img/common/user.svg",
  href: "javascript:GoMenu('join');"
  },
  {
  alt: "로그인",
  src: "https://raw.githubusercontent.com/zzohae/cheonglyang/7d04a92e74805652dbc84a1399c7695b206c7806/img/common/login.svg",
  href: "javascript:GoMenu('login');"
  }
];

window.addEventListener('load', function() {
  let utillist = '';

  for ( x of topmyutildata ) {
    utillist += `<a href="${x.href}" onfocus="this.blur()"><img src="${x.src}" alt="${x.alt}"></a>`;
  }

  document.querySelector('.top-myutil').innerHTML = utillist;
});

  //장바구니 담기 버튼
function getLastSixCharacters(url) {
    return url.slice(-6);
}

$(document).ready(function() {
    const createInCartButton = (lastSix) => {
        const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
      <path d="M25.9952 3.53337C25.3599 2.88873 24.6056 2.37736 23.7754 2.02847C22.9451 1.67958 22.0553 1.5 21.1566 1.5C20.258 1.5 19.3681 1.67958 18.5379 2.02847C17.7077 2.37736 16.9534 2.88873 16.3181 3.53337L14.9997 4.87059L13.6812 3.53337C12.398 2.23186 10.6575 1.50067 8.84269 1.50067C7.0279 1.50067 5.28743 2.23186 4.00418 3.53337C2.72092 4.83488 2 6.6001 2 8.44072C2 10.2813 2.72092 12.0466 4.00418 13.3481L5.32264 14.6853L14.9997 24.5L24.6767 14.6853L25.9952 13.3481C26.6307 12.7037 27.1349 11.9387 27.4789 11.0967C27.8229 10.2547 28 9.35216 28 8.44072C28 7.52928 27.8229 6.62677 27.4789 5.78475C27.1349 4.94273 26.6307 4.1777 25.9952 3.53337Z" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

        const inCartBtn = $('<a>', {
            href: `javascript:reg_cart('${lastSix}')`,
            html: svgIcon,
            class: 'incart'
        });

        inCartBtn.on('click', function() {
            $(this).toggleClass('active');
        });

        return inCartBtn;
    };

    $('ul.bxSlide71957_S1, ul.bxSlide72298_S1').each(function() {
        $(this).find('li').each(function() {
            const existingLink = $(this).find('a').attr('href');
            const lastSix = getLastSixCharacters(existingLink);

            const inCartBtn = createInCartButton(lastSix);
            $(this).prepend(inCartBtn);
        });
    });
    $('a.incart').attr('alt', '장바구니에 담기');
  $('ul.bxSlide72298_S1 li a.incart').addClass('incart2');
});

  
// footer
const targetElement = document.querySelector('#footer > div.pvuse_wrap > div');
const footerInfoWrap = document.createElement('div');
footerInfoWrap.classList.add('footerinfo-wrap');
targetElement.appendChild(footerInfoWrap);

document.querySelector('#footer > div.pvuse_wrap').appendChild(Object.assign(document.createElement('div'), { className: 'newcopyright' }));
document.querySelector('.newcopyright').appendChild(document.createElement('div'));
document.querySelector('.newcopyright div').appendChild(document.createElement('p'));
document.querySelector('.newcopyright div').appendChild(Object.assign(document.createElement('a'), { className: 'mybtn' }));

const infoContainer = document.querySelector('#footer > div.pvuse_wrap > div > .footerinfo-wrap');
const fragment = document.createDocumentFragment();

const createDivWithContent = (divClassName, title, items) => {
    const contentDiv = document.createElement('div');
    contentDiv.className = divClassName;

    const newH3 = document.createElement('h3');
    newH3.textContent = title;
    contentDiv.appendChild(newH3);

    const newUl = document.createElement('ul');
    items.forEach(item => {
        const newLi = document.createElement('li');
        const newSpan = document.createElement('span');
        newSpan.textContent = item.label;
        newLi.appendChild(newSpan);
  
        if (item.link) {
            const newLink = document.createElement('a');
            newLink.href = item.link;
            newLink.textContent = item.value;
            newLi.appendChild(newLink);
        } else {
            newLi.appendChild(document.createTextNode(`${item.value}`));
        }
        newUl.appendChild(newLi);
    });

    contentDiv.appendChild(newUl);
    return contentDiv;
};

fragment.appendChild(createDivWithContent('comInfo', '회사정보', [
    { label: '회사명', value: '청량리종합시장 상인 협동조합' },
    { label: '대표자', value: '조혜현' },
    { label: '소재지', value: '서울시 동대문구 홍릉로1길 68-3' },
    { label: '이메일', value: 'cnm365@naver.com' }
]));
fragment.appendChild(createDivWithContent('CScenter', '고객센터', [
    { label: '평일', value: '09:00~18:00' },
    { label: '점심', value: '12:00~13:00' },
    { label: '휴무', value: '토/일/공휴일' }
]));

fragment.appendChild(createDivWithContent('CSinfo', '고객지원', [
    { label: '', value:'입금계좌안내', link: '#' },
    { label: '', value:'배송안내', link: '#' },
    { label: '', value:'구매안전서비스', link: '#' },
    { label: '', value:'자주묻는 질문', link: '#' }
]));

infoContainer.appendChild(fragment);

const socialLink = document.createElement('div');
socialLink.classList.add('SNS-link');

const links = [
    { text: '페이스북', href: '#' },
    { text: '유튜브', href: '#' },
    { text: '인스타그램', href: '#' }
];

links.forEach(link => {
    const newA = document.createElement('a');
    newA.alt = link.text;
    newA.href = link.href;
    socialLink.appendChild(newA);
});

targetElement.appendChild(socialLink);

document.querySelector('.CScenter h3').innerHTML += `<br>02-962-7100`;
const csInfoLinks = document.querySelectorAll('.CSinfo ul li a');
csInfoLinks.forEach(csInfoLink => {
    csInfoLink.innerHTML += '<img src="https://raw.githubusercontent.com/zzohae/cheonglyang/f54d1c818cf2dba578c0d5993089ad4bf20d79cc/img/common/link.svg" alt="더 보기">';
});
document.querySelector('.newcopyright div p').innerHTML += '© 2024 그린컴퓨터아트학원 신도림 KDT 3기 team 청량마켓. ALL RIGHTS RESERVED.';
document.querySelector('.newcopyright div a').innerHTML += '상품문의하기 >';
document.querySelector('.newcopyright div a').setAttribute('href', '#');