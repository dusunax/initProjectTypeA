import styled from "styled-components";

export default function Main() {
  console.log(pointTopixel(40));

  function pointTopixel(point: number) {
    return ((point * 96) / 72).toFixed(2);
  }

  return (
    <FontTest>
      <h1>Main 0 한글</h1>
      <h2>유니코드 + 폰트 테스트 & 1122</h2>
    </FontTest>
  );
}

const FontTest = styled.div`
  @font-face {
    font-family: "NotoSansKR";
    src: url("/openconcert/fonts/NotoSansKR-Regular-Hestia.woff") format("woff");
    font-style: normal;
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("/openconcert/fonts/dancingscript-webfont.woff") format("woff");
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A;
  }
  /* @import url("https://fonts.googleapis.com/css2?family=Sevillana&display=swap");

  font-family: "Sevillana", cursive;
  font-weight: bold;

  h1 {
    @font-face {
      background-color: red;
      font-family: "Roboto", sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
      unicode-range: U+0020-007E;
      font-style: normal;
    }
  } */
`;

// 초기값
// U+0-10FFFF
