# Klaytn을 이용한 NFT 만들기 자료 정리 및 사용한 코드

## NFT란?
>블록체인 위에 있는 특정 스마트컨트랙의 토큰들
따라서 NFT Collection을 스마트컨트랙을 이용해서 만든다고 하면 특정 스마트 컨트랙을 배포해서 이 안에 여러가지 정보를 넣고
그 안의 토큰들을 오픈씨와 같은 NFT 거래 플랫폼에서 조회해 와서 정보를 표시해 주는 그런 형태



NFT 제작 흐름: 파트 제작 => 조합 생성 => OpenSea or 민팅/거래

## 스마트 컨트랙을 이용한  NFT 민팅/거래 흐름
>1. 이미지와 json 파일 준비
>2. ipfs라고 불리는 분산형 저장소에 저장
>3. ipfs 저장된 주소를 스마트컨트랙에 담아준다
>    1. 스마트컨트랙은 솔리디티라는 언어를 이용 / 클레이튼(KIP-17), 다른 블록체인(ERC-721) + 커스텀 코드
>4. Klaytn 블록체인 위에 배포
>5.  민팅에 참여할 사람들을 모음
>6. 특정 시간에 웹사이트를 열어서 배포한 스마트 컨트랙과 연결
>7. 사람들이 웹사이트를 통해 민팅을 해서 NFT를 직접 받아갈 수 있게 만들어줘야 함
>8. OpenSea에서 거래하거나 NFT를 활용한 임을 플레이 할 수 있게 됨


IPFS 분산형 저장소 => Piniata 이용
블록체인 위에서 무언가를 하려면 반드시 지갑이 필요함
클레이튼 블록 체인 위에서 작업을 수행  => 클레이튼 지갑 관리를 위해서는 카이카스 서비스 이용
스마트 컨트랙을 작성하고 배포하기 => Klaytn IDE 사용
baobab 은 클레이튼 블록체인의 테스트 환경


## 결과물
![스크린샷 2022-04-03 오후 9 51 24](https://user-images.githubusercontent.com/61587538/161430023-72879ac5-f8e9-4176-827b-a96b9b64a9b3.png)
![스크린샷 2022-04-03 오후 9 51 38](https://user-images.githubusercontent.com/61587538/161430030-fdd82171-27ca-49cf-b6fb-bedc6057732f.png)
![스크린샷 2022-04-03 오후 9 54 44](https://user-images.githubusercontent.com/61587538/161430043-abad1540-9077-4294-992f-69451d1b7e08.png)
