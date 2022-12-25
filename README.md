# Project Type A

### 프로젝트 보일러플레이트 - 타입A

- 제작 & 사용 일자 : 2022년 12월
- 추가 고려할 사항 : [SEO] sitemap xml

### 사용 기술
```
Vite, React, TS, recoil, Reace-hook-form, Styled-component, date-fns, react-helmet-async
```

### 상세

| 분류 | 기술 선택 | 고민 내용 | 적용 | 학습필요 | 마이그레이션 |
| --- | --- | --- | --- | --- | --- |
| 빌더 | Vite, react, typescript | 안정성 | o | x |  |
| 전역관리 | recoil(다크모드+언어설정+로그인 상태) | 필요성 | o | x |  |
| Form | React-Hook-Form + yup | 적합성 | o | x |  |
| CSS | Styled-component (theme) | 트렌드 vs 러닝커브 | o | x | Tailwind |
| 언어 | Typescript | 프로젝트를 진행할 역량 | o | o |  |
| 날짜 | date-fns | 최적화가 잘된 lib 사용 | o | x |  |
| SEO | react-helmet-async | 서버사이드 랜더링 미숙 | o | x | Next |


### 작업 내역
- 221222: 프로젝트 설정
- 221225: [변경] react-helmet > react-helmet-async
