# Moahub 랜딩 페이지

Moahub의 메인 랜딩 페이지입니다.

## 사이트 구조

- 메인 도메인: https://moahub.co.kr
- MBTI 테스트: https://mbti.moahub.co.kr

## 배포 방법

1. GitHub에 push
2. GitHub Pages 자동 배포
3. Cafe24 DNS 설정 확인

## DNS 설정 (Cafe24)

```
호스트명: @
타입: CNAME
값: jejuolledev.github.io
```

또는

```
호스트명: @
타입: A 레코드 4개
값:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## ads.txt 수정

`ads.txt` 파일에서 `YOUR_PUBLISHER_ID`를 실제 Google AdSense Publisher ID로 변경하세요.
