/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 이벤트를 일정 시간 동안 한번만 실행)
// _.throttle(함수, 시간ms)
window.addEventListener(
  'scroll',
  _.throttle(function () {
    // 페이지 스크롤 위치가 500px이 넘으면,
    if (window.scrollY > 500) {
      // 배지 요소 숨기기
      // gsap.to(요소, 지속시간s, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });

      // 페이지 스크롤 위치가 500px이 넘지 않으면,
    } else {
      // 배지 요소 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);

/**
 * 페이드 인 요소
 */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1,
  });
});

/**
 * SWIPER 슬라이더 사용
 */
// new 생성자(클래스)
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 가 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, // ms
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // let 변수선언 -> 재할당 가능
promotionToggleBtn.addEventListener('click', function () {
  // promotion 영역을 보여주거나 숨기는 기능
  isHidePromotion = !isHidePromotion; // !는 반대에 해당하는 값을 반환
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});
