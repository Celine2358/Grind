function CelineLink() { // 셀리느 오픈채팅

    window.open("https://open.kakao.com/o/sP0Nmwjf", "_blank");
}
function GrindLink() { // 연마석 시뮬로 넘어가기
    window.location.href = 'index.html';
}

let BestRing = document.getElementById('BestRing'); // 좋은 반지 획득 사운드
BestRing.volume = 0.33; // 음량 33%

let BoxUIColor = document.getElementById('BoxUI'); // 반지 상자 박스
let Total1 = document.getElementById('Total1'); // 녹옥 상자 통계
let Total2 = document.getElementById('Total2'); // 홍옥, 흑옥, 백옥 상자 통계
let Total3 = document.getElementById('Total3'); // 타워인헨스 박스 통계
let BoxImg = document.getElementById('BoxImg'); // 반지 상자 이미지 변경
let Msg = document.getElementById('Msg'); // 알림창
let Effect = document.getElementById('Effect'); // 좋은 반지 획득 이펙트

// OpenBox1
let RingBox1Num = 0; // 녹옥 상자 오픈 횟수
let Lv3Ring2 = 0; // 컨티 3레벨 획득
let Etc1 = 0; // 잡링 획득

// OpenBox2, 3, 4
let RingBox2Num = 0; // 홍옥 상자 오픈 횟수
let RingBox3Num = 0; // 흑옥 상자 오픈 횟수
let RingBox4Num = 0; // 백옥 상자 오픈 횟수
let Lv3Ring1 = 0; // 리레 3레벨 획득
let Lv4Ring1 = 0; // 리레 4레벨 획득
let Lv4Ring2 = 0; // 컨티 4레벨 획득
let Ring3 = 0; // 웨퍼 S,D,I,L 4레벨 획득
let Ring4 = 0; // 리테 4레벨 획득
let Etc2 = 0; // 잡링 획득

// OpenBox5
let RingBox5Num = 0; // 타워인헨스 박스 오픈 횟수
let Tower4 = 0; // 타워인헨스 4레벨 획득
let TowerEtc = 0; // 타워인헨스 잡링 획득

function clearMsg() { // 알림창 초기화
    Msg.innerHTML = '';
}

function BoxChange1() { // 녹옥 -> 홍옥
    document.getElementById('BoxSelect1').style.display = 'none';
    document.getElementById('BoxSelect2').style.display = 'block';
    document.getElementById('RingBoxdiv1').style.display = 'none';
    document.getElementById('RingBoxdiv2').style.display = 'block';
    BoxUIColor.style.border = '2px solid red';
    BoxUIColor.style.boxShadow = '0 0 10px red';
    Total1.style.display = 'none';
    Total2.style.display = 'block';

    RingBox1Num = 0; // 녹옥 초기화
    Lv3Ring1 = 0;
    Lv3Ring2 = 0;
    Etc1 = 0;

    document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
    document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
    document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
    document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;
}
function BoxChange2() { // 홍옥 -> 흑옥
    document.getElementById('BoxSelect2').style.display = 'none';
    document.getElementById('BoxSelect3').style.display = 'block';
    document.getElementById('RingBoxdiv2').style.display = 'none';
    document.getElementById('RingBoxdiv3').style.display = 'block';
    BoxUIColor.style.border = '2px solid gray';
    BoxUIColor.style.boxShadow = '0 0 10px gray';
    BoxImg.src = 'RingBox3.png'

    RingBox2Num = 0; // 홍옥 초기화
    Lv3Ring1 = 0;
    Lv4Ring1 = 0;
    Lv4Ring2 = 0;
    Ring3 = 0;
    Ring4 = 0;
    Etc2 = 0;

    document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
    document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
    document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
    document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
    document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
    document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
    document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;
}
function BoxChange3() { // 흑옥 -> 백옥
    document.getElementById('BoxSelect3').style.display = 'none';
    document.getElementById('BoxSelect4').style.display = 'block';
    document.getElementById('RingBoxdiv3').style.display = 'none';
    document.getElementById('RingBoxdiv4').style.display = 'block';
    BoxUIColor.style.border = '2px solid yellow';
    BoxUIColor.style.boxShadow = '0 0 12px yellow';
    BoxImg.src = 'RingBox4.png'

    RingBox3Num = 0; // 흑옥 초기화
    Lv3Ring1 = 0;
    Lv4Ring1 = 0;
    Lv4Ring2 = 0;
    Ring3 = 0;
    Ring4 = 0;
    Etc2 = 0;

    document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
    document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
    document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
    document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
    document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
    document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
    document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;
}
function BoxChange4() { // 백옥 -> 타워
    document.getElementById('BoxSelect4').style.display = 'none';
    document.getElementById('BoxSelect5').style.display = 'block';
    document.getElementById('RingBoxdiv4').style.display = 'none';
    document.getElementById('RingBoxdiv5').style.display = 'block';
    BoxUIColor.style.border = '2px solid skyblue';
    BoxUIColor.style.boxShadow = '0 0 10px skyblue';
    BoxImg.src = 'RingBox2.png'
    Total2.style.display = 'none';
    Total3.style.display = 'block';

    RingBox4Num = 0; // 백옥 초기화
    Lv3Ring1 = 0;
    Lv4Ring1 = 0;
    Lv4Ring2 = 0;
    Ring3 = 0;
    Ring4 = 0;
    Etc2 = 0;

    document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
    document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
    document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
    document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
    document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
    document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
    document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

}
function BoxChange5() { // 타워 -> 녹옥
    document.getElementById('BoxSelect1').style.display = 'block';
    document.getElementById('BoxSelect5').style.display = 'none';
    document.getElementById('RingBoxdiv1').style.display = 'block';
    document.getElementById('RingBoxdiv5').style.display = 'none';
    BoxUIColor.style.border = '2px solid lightgreen';
    BoxUIColor.style.boxShadow = '0 0 10px lightgreen';
    Total1.style.display = 'block';
    Total3.style.display = 'none';

    RingBox5Num = 0; // 타워인헨스 초기화
    Tower4 = 0;
    TowerEtc = 0;

    document.getElementById('BoxTotal3').textContent = ' : ' + RingBox5Num;
    document.getElementById('Lv4Tower').textContent = ' : ' + Tower4;
    document.getElementById('EtcTotal3').textContent = '기타 : ' + TowerEtc;

}

function OpenBox1() { // 녹옥 반지 상자 오픈

    let Random1 = Math.random() * 100; // 0 ~ 99 난수
    let lvlRandom1 = Math.floor(Math.random() * 100); // 0 ~ 99 난수

    if (lvlRandom1 < 50) { // 시드링 1레벨 50%

        if (Random1 < 2.11268) { // 리레 1레벨 2.11268%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 2.11268 && Random1 < 4.22536) { // 컨티 1레벨 2.11268%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 4.22536 && Random1 < 7.04226) { // 웨퍼S 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 7.04226 && Random1 < 9.85916) { // 웨퍼D 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 9.85916 && Random1 < 12.67606) { // 웨퍼I 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 12.67606 && Random1 < 15.49296) { // 웨퍼L 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 15.49296 && Random1 < 18.30986) { // 얼티 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 18.30986 && Random1 < 21.12676) { // 리테 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 21.12676 && Random1 < 23.94366) { // 링썸 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 23.94366 && Random1 < 26.76056) { // 크뎀 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 26.76056 && Random1 < 29.57746) { // 크라이시스HM 1레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 29.57746 && Random1 < 33.09859) { // 버든리프트 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleansingRing.png';
            RingText.textContent = '버든리프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 33.09859 && Random1 < 36.61972) { // 오버패스 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'OverpassRing.png';
            RingText.textContent = '오버패스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 36.61972 && Random1 < 40.14085) { // 레퍼S 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - S링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 40.14085 && Random1 < 43.66198) { // 레퍼D 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - D링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 43.66198 && Random1 < 47.18311) { // 레퍼I 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - I링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 47.18311 && Random1 < 50.70424) { // 레퍼L 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - L링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 50.70424 && Random1 < 54.22537) { // 헬스컷 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'HealthCutRing.png';
            RingText.textContent = '헬스컷 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 54.22537 && Random1 < 57.74650) { // 크리디펜스 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDefenseRing.png';
            RingText.textContent = '크리디펜스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 57.74650 && Random1 < 61.26763) { // 리밋 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LimitRing.png';
            RingText.textContent = '리밋 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 61.26763 && Random1 < 64.78876) { // 듀라빌리티 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'DurabilityRing.png';
            RingText.textContent = '듀라빌리티 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 64.78876 && Random1 < 68.30989) { // 리커버디펜스 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanDefenseRing.png';
            RingText.textContent = '리커버디펜스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 68.30989 && Random1 < 71.83102) { // 실드스와프 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ShieldSwapRing.png';
            RingText.textContent = '실드스와프 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 71.83102 && Random1 < 75.35215) { // 마나컷 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ManaCutRing.png';
            RingText.textContent = '마나컷 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 75.35215 && Random1 < 78.87328) { // 크라이시스H 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHRing.png';
            RingText.textContent = '크라이시스 - H링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 78.87328 && Random1 < 82.39441) { // 크라이시스M 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisMRing.png';
            RingText.textContent = '크라이시스 - M링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 82.39441 && Random1 < 85.91554) { // 크리쉬프트 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalShiftRing.png';
            RingText.textContent = '크리쉬프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 85.91554 && Random1 < 89.43667) { // 스탠스쉬프트 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'StanceShiftRing.png';
            RingText.textContent = '스탠스쉬프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 89.43667 && Random1 < 92.95780) { // 리커버스탠스 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanStanceRing.png';
            RingText.textContent = '리커버스탠스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 92.95780 && Random1 < 96.47893) { // 스위프트 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'SwiftRing.png';
            RingText.textContent = '스위프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 96.47893 && Random1 < 100) { // 리플렉티브 1레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ReflectiveRing.png';
            RingText.textContent = '리플렉티브 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else if (lvlRandom1 >= 50 && lvlRandom1 < 91) { // 시드링 2레벨 41%

        if (Random1 < 2.11268) { // 리레 2레벨 2.11268%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 2.11268 && Random1 < 4.22536) { // 컨티 2레벨 2.11268%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 4.22536 && Random1 < 7.04226) { // 웨퍼S 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 7.04226 && Random1 < 9.85916) { // 웨퍼D 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 9.85916 && Random1 < 12.67606) { // 웨퍼I 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 12.67606 && Random1 < 15.49296) { // 웨퍼L 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 15.49296 && Random1 < 18.30986) { // 얼티 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 18.30986 && Random1 < 21.12676) { // 리테 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 21.12676 && Random1 < 23.94366) { // 링썸 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 23.94366 && Random1 < 26.76056) { // 크뎀 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 26.76056 && Random1 < 29.57746) { // 크라이시스HM 2레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 29.57746 && Random1 < 33.09859) { // 버든리프트 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleansingRing.png';
            RingText.textContent = '버든리프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 33.09859 && Random1 < 36.61972) { // 오버패스 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'OverpassRing.png';
            RingText.textContent = '오버패스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 36.61972 && Random1 < 40.14085) { // 레퍼S 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - S링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 40.14085 && Random1 < 43.66198) { // 레퍼D 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - D링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 43.66198 && Random1 < 47.18311) { // 레퍼I 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - I링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 47.18311 && Random1 < 50.70424) { // 레퍼L 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - L링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 50.70424 && Random1 < 54.22537) { // 헬스컷 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'HealthCutRing.png';
            RingText.textContent = '헬스컷 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 54.22537 && Random1 < 57.74650) { // 크리디펜스 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDefenseRing.png';
            RingText.textContent = '크리디펜스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 57.74650 && Random1 < 61.26763) { // 리밋 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LimitRing.png';
            RingText.textContent = '리밋 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 61.26763 && Random1 < 64.78876) { // 듀라빌리티 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'DurabilityRing.png';
            RingText.textContent = '듀라빌리티 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 64.78876 && Random1 < 68.30989) { // 리커버디펜스 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanDefenseRing.png';
            RingText.textContent = '리커버디펜스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 68.30989 && Random1 < 71.83102) { // 실드스와프 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ShieldSwapRing.png';
            RingText.textContent = '실드스와프 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 71.83102 && Random1 < 75.35215) { // 마나컷 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ManaCutRing.png';
            RingText.textContent = '마나컷 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 75.35215 && Random1 < 78.87328) { // 크라이시스H 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHRing.png';
            RingText.textContent = '크라이시스 - H링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 78.87328 && Random1 < 82.39441) { // 크라이시스M 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisMRing.png';
            RingText.textContent = '크라이시스 - M링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 82.39441 && Random1 < 85.91554) { // 크리쉬프트 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalShiftRing.png';
            RingText.textContent = '크리쉬프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 85.91554 && Random1 < 89.43667) { // 스탠스쉬프트 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'StanceShiftRing.png';
            RingText.textContent = '스탠스쉬프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 89.43667 && Random1 < 92.95780) { // 리커버스탠스 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanStanceRing.png';
            RingText.textContent = '리커버스탠스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 92.95780 && Random1 < 96.47893) { // 스위프트 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'SwiftRing.png';
            RingText.textContent = '스위프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 96.47893 && Random1 < 100) { // 리플렉티브 2레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ReflectiveRing.png';
            RingText.textContent = '리플렉티브 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else { // 시드링 3레벨 9%

        if (Random1 < 2.11268) { // 리레 3레벨 2.11268%
            RingBox1Num += 1;
            Lv3Ring1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.3) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random1 >= 2.11268 && Random1 < 4.22536) { // 컨티 3레벨 2.11268%
            RingBox1Num += 1;
            Lv3Ring2 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.3) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random1 >= 4.22536 && Random1 < 7.04226) { // 웨퍼S 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 7.04226 && Random1 < 9.85916) { // 웨퍼D 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 9.85916 && Random1 < 12.67606) { // 웨퍼I 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 12.67606 && Random1 < 15.49296) { // 웨퍼L 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 15.49296 && Random1 < 18.30986) { // 얼티 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 18.30986 && Random1 < 21.12676) { // 리테 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 21.12676 && Random1 < 23.94366) { // 링썸 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 23.94366 && Random1 < 26.76056) { // 크뎀 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 26.76056 && Random1 < 29.57746) { // 크라이시스HM 3레벨 2.81690%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 29.57746 && Random1 < 33.09859) { // 버든리프트 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleansingRing.png';
            RingText.textContent = '버든리프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 33.09859 && Random1 < 36.61972) { // 오버패스 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'OverpassRing.png';
            RingText.textContent = '오버패스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 36.61972 && Random1 < 40.14085) { // 레퍼S 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - S링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 40.14085 && Random1 < 43.66198) { // 레퍼D 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - D링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 43.66198 && Random1 < 47.18311) { // 레퍼I 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - I링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 47.18311 && Random1 < 50.70424) { // 레퍼L 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - L링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 50.70424 && Random1 < 54.22537) { // 헬스컷 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'HealthCutRing.png';
            RingText.textContent = '헬스컷 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 54.22537 && Random1 < 57.74650) { // 크리디펜스 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDefenseRing.png';
            RingText.textContent = '크리디펜스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 57.74650 && Random1 < 61.26763) { // 리밋 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LimitRing.png';
            RingText.textContent = '리밋 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 61.26763 && Random1 < 64.78876) { // 듀라빌리티 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'DurabilityRing.png';
            RingText.textContent = '듀라빌리티 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 64.78876 && Random1 < 68.30989) { // 리커버디펜스 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanDefenseRing.png';
            RingText.textContent = '리커버디펜스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 68.30989 && Random1 < 71.83102) { // 실드스와프 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ShieldSwapRing.png';
            RingText.textContent = '실드스와프 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 71.83102 && Random1 < 75.35215) { // 마나컷 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ManaCutRing.png';
            RingText.textContent = '마나컷 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 75.35215 && Random1 < 78.87328) { // 크라이시스H 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHRing.png';
            RingText.textContent = '크라이시스 - H링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 78.87328 && Random1 < 82.39441) { // 크라이시스M 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisMRing.png';
            RingText.textContent = '크라이시스 - M링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 82.39441 && Random1 < 85.91554) { // 크리쉬프트 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalShiftRing.png';
            RingText.textContent = '크리쉬프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 85.91554 && Random1 < 89.43667) { // 스탠스쉬프트 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'StanceShiftRing.png';
            RingText.textContent = '스탠스쉬프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 89.43667 && Random1 < 92.95780) { // 리커버스탠스 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanStanceRing.png';
            RingText.textContent = '리커버스탠스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 92.95780 && Random1 < 96.47893) { // 스위프트 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'SwiftRing.png';
            RingText.textContent = '스위프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random1 >= 96.47893 && Random1 < 100) { // 리플렉티브 3레벨 3.52113%
            RingBox1Num += 1;
            Etc1 += 1;
            document.getElementById('BoxTotal1').textContent = ' : ' + RingBox1Num;
            document.getElementById('Lv3TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv3TotalB').textContent = ' : ' + Lv3Ring2;
            document.getElementById('EtcTotal1').textContent = '기타 : ' + Etc1;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ReflectiveRing.png';
            RingText.textContent = '리플렉티브 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }
    }
}

function OpenBox2() { // 홍옥 반지 상자 오픈

    let Random2 = Math.random() * 100; // 0 ~ 99 난수
    let lvlRandom2 = Math.floor(Math.random() * 100); // 0 ~ 99 난수

    if (lvlRandom2 < 40) { // 시드링 1레벨 40%

        if (Random2 < 6.92308) { // 리레 1레벨 6.92308%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 6.92308 && Random2 < 13.84616) { // 컨티 1레벨 6.92308%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 13.84616 && Random2 < 20.00001) { // 웨퍼S 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 20.00001 && Random2 < 26.15386) { // 웨퍼D 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 26.15386 && Random2 < 32.30771) { // 웨퍼I 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 32.30771 && Random2 < 38.46156) { // 웨퍼L 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 38.46156 && Random2 < 44.61541) { // 얼티 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 44.61541 && Random2 < 50.76926) { // 리테 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 50.76926 && Random2 < 56.92311) { // 링썸 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 56.92311 && Random2 < 63.07696) { // 크뎀 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 63.07696 && Random2 < 69.23081) { // 크라이시스HM 1레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 69.23081 && Random2 < 70.76927) { // 버든리프트 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleansingRing.png';
            RingText.textContent = '버든리프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 70.76927 && Random2 < 72.30773) { // 오버패스 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'OverpassRing.png';
            RingText.textContent = '오버패스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 72.30773 && Random2 < 73.84619) { // 레퍼S 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - S링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 73.84619 && Random2 < 75.38465) { // 레퍼D 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - D링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 75.38465 && Random2 < 76.92311) { // 레퍼I 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - I링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 76.92311 && Random2 < 78.46157) { // 레퍼L 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - L링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 78.46157 && Random2 < 80.00003) { // 헬스컷 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'HealthCutRing.png';
            RingText.textContent = '헬스컷 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 80.00003 && Random2 < 81.53849) { // 크리디펜스 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDefenseRing.png';
            RingText.textContent = '크리디펜스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 81.53849 && Random2 < 83.07695) { // 리밋 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LimitRing.png';
            RingText.textContent = '리밋 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 83.07695 && Random2 < 84.61541) { // 듀라빌리티 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'DurabilityRing.png';
            RingText.textContent = '듀라빌리티 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 84.61541 && Random2 < 86.15387) { // 리커버디펜스 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanDefenseRing.png';
            RingText.textContent = '리커버디펜스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 86.15387 && Random2 < 87.69233) { // 실드스와프 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ShieldSwapRing.png';
            RingText.textContent = '실드스와프 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 87.69233 && Random2 < 89.23079) { // 마나컷 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ManaCutRing.png';
            RingText.textContent = '마나컷 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 89.23079 && Random2 < 90.76925) { // 크라이시스H 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHRing.png';
            RingText.textContent = '크라이시스 - H링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 90.76925 && Random2 < 92.30771) { // 크라이시스M 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisMRing.png';
            RingText.textContent = '크라이시스 - M링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 92.30771 && Random2 < 93.84617) { // 크리쉬프트 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalShiftRing.png';
            RingText.textContent = '크리쉬프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 93.84617 && Random2 < 95.38463) { // 스탠스쉬프트 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'StanceShiftRing.png';
            RingText.textContent = '스탠스쉬프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 95.38463 && Random2 < 96.92309) { // 리커버스탠스 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanStanceRing.png';
            RingText.textContent = '리커버스탠스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 96.92309 && Random2 < 98.46155) { // 스위프트 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'SwiftRing.png';
            RingText.textContent = '스위프트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 98.46155 && Random2 < 100) { // 리플렉티브 1레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ReflectiveRing.png';
            RingText.textContent = '리플렉티브 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else if (lvlRandom2 >= 40 && lvlRandom2 < 70) { // 시드링 2레벨 30%

        if (Random2 < 6.92308) { // 리레 2레벨 6.92308%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 6.92308 && Random2 < 13.84616) { // 컨티 2레벨 6.92308%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 13.84616 && Random2 < 20.00001) { // 웨퍼S 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 20.00001 && Random2 < 26.15386) { // 웨퍼D 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 26.15386 && Random2 < 32.30771) { // 웨퍼I 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 32.30771 && Random2 < 38.46156) { // 웨퍼L 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 38.46156 && Random2 < 44.61541) { // 얼티 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 44.61541 && Random2 < 50.76926) { // 리테 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 50.76926 && Random2 < 56.92311) { // 링썸 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 56.92311 && Random2 < 63.07696) { // 크뎀 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 63.07696 && Random2 < 69.23081) { // 크라이시스HM 2레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 69.23081 && Random2 < 70.76927) { // 버든리프트 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleansingRing.png';
            RingText.textContent = '버든리프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 70.76927 && Random2 < 72.30773) { // 오버패스 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'OverpassRing.png';
            RingText.textContent = '오버패스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 72.30773 && Random2 < 73.84619) { // 레퍼S 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - S링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 73.84619 && Random2 < 75.38465) { // 레퍼D 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - D링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 75.38465 && Random2 < 76.92311) { // 레퍼I 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - I링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 76.92311 && Random2 < 78.46157) { // 레퍼L 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - L링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 78.46157 && Random2 < 80.00003) { // 헬스컷 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'HealthCutRing.png';
            RingText.textContent = '헬스컷 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 80.00003 && Random2 < 81.53849) { // 크리디펜스 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDefenseRing.png';
            RingText.textContent = '크리디펜스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 81.53849 && Random2 < 83.07695) { // 리밋 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LimitRing.png';
            RingText.textContent = '리밋 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 83.07695 && Random2 < 84.61541) { // 듀라빌리티 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'DurabilityRing.png';
            RingText.textContent = '듀라빌리티 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 84.61541 && Random2 < 86.15387) { // 리커버디펜스 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanDefenseRing.png';
            RingText.textContent = '리커버디펜스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 86.15387 && Random2 < 87.69233) { // 실드스와프 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ShieldSwapRing.png';
            RingText.textContent = '실드스와프 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 87.69233 && Random2 < 89.23079) { // 마나컷 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ManaCutRing.png';
            RingText.textContent = '마나컷 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 89.23079 && Random2 < 90.76925) { // 크라이시스H 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHRing.png';
            RingText.textContent = '크라이시스 - H링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 90.76925 && Random2 < 92.30771) { // 크라이시스M 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisMRing.png';
            RingText.textContent = '크라이시스 - M링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 92.30771 && Random2 < 93.84617) { // 크리쉬프트 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalShiftRing.png';
            RingText.textContent = '크리쉬프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 93.84617 && Random2 < 95.38463) { // 스탠스쉬프트 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'StanceShiftRing.png';
            RingText.textContent = '스탠스쉬프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 95.38463 && Random2 < 96.92309) { // 리커버스탠스 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanStanceRing.png';
            RingText.textContent = '리커버스탠스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 96.92309 && Random2 < 98.46155) { // 스위프트 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'SwiftRing.png';
            RingText.textContent = '스위프트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 98.46155 && Random2 < 100) { // 리플렉티브 2레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ReflectiveRing.png';
            RingText.textContent = '리플렉티브 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else if (lvlRandom2 >= 70 && lvlRandom2 < 90) { // 시드링 3레벨 20%

        if (Random2 < 6.92308) { // 리레 3레벨 6.92308%
            RingBox2Num += 1;
            Lv3Ring1 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 6.92308 && Random2 < 13.84616) { // 컨티 3레벨 6.92308%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 13.84616 && Random2 < 20.00001) { // 웨퍼S 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 20.00001 && Random2 < 26.15386) { // 웨퍼D 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 26.15386 && Random2 < 32.30771) { // 웨퍼I 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 32.30771 && Random2 < 38.46156) { // 웨퍼L 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 38.46156 && Random2 < 44.61541) { // 얼티 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 44.61541 && Random2 < 50.76926) { // 리테 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 50.76926 && Random2 < 56.92311) { // 링썸 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 56.92311 && Random2 < 63.07696) { // 크뎀 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 63.07696 && Random2 < 69.23081) { // 크라이시스HM 3레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 69.23081 && Random2 < 70.76927) { // 버든리프트 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleansingRing.png';
            RingText.textContent = '버든리프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 70.76927 && Random2 < 72.30773) { // 오버패스 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'OverpassRing.png';
            RingText.textContent = '오버패스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 72.30773 && Random2 < 73.84619) { // 레퍼S 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - S링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 73.84619 && Random2 < 75.38465) { // 레퍼D 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - D링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 75.38465 && Random2 < 76.92311) { // 레퍼I 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - I링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 76.92311 && Random2 < 78.46157) { // 레퍼L 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - L링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 78.46157 && Random2 < 80.00003) { // 헬스컷 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'HealthCutRing.png';
            RingText.textContent = '헬스컷 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 80.00003 && Random2 < 81.53849) { // 크리디펜스 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDefenseRing.png';
            RingText.textContent = '크리디펜스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 81.53849 && Random2 < 83.07695) { // 리밋 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LimitRing.png';
            RingText.textContent = '리밋 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 83.07695 && Random2 < 84.61541) { // 듀라빌리티 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'DurabilityRing.png';
            RingText.textContent = '듀라빌리티 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 84.61541 && Random2 < 86.15387) { // 리커버디펜스 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanDefenseRing.png';
            RingText.textContent = '리커버디펜스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 86.15387 && Random2 < 87.69233) { // 실드스와프 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ShieldSwapRing.png';
            RingText.textContent = '실드스와프 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 87.69233 && Random2 < 89.23079) { // 마나컷 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ManaCutRing.png';
            RingText.textContent = '마나컷 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 89.23079 && Random2 < 90.76925) { // 크라이시스H 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHRing.png';
            RingText.textContent = '크라이시스 - H링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 90.76925 && Random2 < 92.30771) { // 크라이시스M 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisMRing.png';
            RingText.textContent = '크라이시스 - M링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 92.30771 && Random2 < 93.84617) { // 크리쉬프트 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalShiftRing.png';
            RingText.textContent = '크리쉬프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 93.84617 && Random2 < 95.38463) { // 스탠스쉬프트 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'StanceShiftRing.png';
            RingText.textContent = '스탠스쉬프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 95.38463 && Random2 < 96.92309) { // 리커버스탠스 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanStanceRing.png';
            RingText.textContent = '리커버스탠스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 96.92309 && Random2 < 98.46155) { // 스위프트 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'SwiftRing.png';
            RingText.textContent = '스위프트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 98.46155 && Random2 < 100) { // 리플렉티브 3레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ReflectiveRing.png';
            RingText.textContent = '리플렉티브 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else { // 시드링 4레벨 10%

        if (Random2 < 6.92308) { // 리레 4레벨 6.92308%
            RingBox2Num += 1;
            Lv4Ring1 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random2 >= 6.92308 && Random2 < 13.84616) { // 컨티 4레벨 6.92308%
            RingBox2Num += 1;
            Lv4Ring2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random2 >= 13.84616 && Random2 < 20.00001) { // 웨퍼S 4레벨 6.15385%
            RingBox2Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random2 >= 20.00001 && Random2 < 26.15386) { // 웨퍼D 4레벨 6.15385%
            RingBox2Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random2 >= 26.15386 && Random2 < 32.30771) { // 웨퍼I 4레벨 6.15385%
            RingBox2Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random2 >= 32.30771 && Random2 < 38.46156) { // 웨퍼L 4레벨 6.15385%
            RingBox2Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random2 >= 38.46156 && Random2 < 44.61541) { // 얼티 4레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 44.61541 && Random2 < 50.76926) { // 리테 4레벨 6.15385%
            RingBox2Num += 1;
            Ring4 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play()

        } else if (Random2 >= 50.76926 && Random2 < 56.92311) { // 링썸 4레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 56.92311 && Random2 < 63.07696) { // 크뎀 4레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 63.07696 && Random2 < 69.23081) { // 크라이시스HM 4레벨 6.15385%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 69.23081 && Random2 < 70.76927) { // 버든리프트 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleansingRing.png';
            RingText.textContent = '버든리프트 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 70.76927 && Random2 < 72.30773) { // 오버패스 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'OverpassRing.png';
            RingText.textContent = '오버패스 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 72.30773 && Random2 < 73.84619) { // 레퍼S 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - S링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 73.84619 && Random2 < 75.38465) { // 레퍼D 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - D링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 75.38465 && Random2 < 76.92311) { // 레퍼I 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - I링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 76.92311 && Random2 < 78.46157) { // 레퍼L 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LevelRing.png';
            RingText.textContent = '레벨퍼프 - L링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 78.46157 && Random2 < 80.00003) { // 헬스컷 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'HealthCutRing.png';
            RingText.textContent = '헬스컷 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 80.00003 && Random2 < 81.53849) { // 크리디펜스 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDefenseRing.png';
            RingText.textContent = '크리디펜스 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 81.53849 && Random2 < 83.07695) { // 리밋 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'LimitRing.png';
            RingText.textContent = '리밋 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 83.07695 && Random2 < 84.61541) { // 듀라빌리티 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'DurabilityRing.png';
            RingText.textContent = '듀라빌리티 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 84.61541 && Random2 < 86.15387) { // 리커버디펜스 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanDefenseRing.png';
            RingText.textContent = '리커버디펜스 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 86.15387 && Random2 < 87.69233) { // 실드스와프 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ShieldSwapRing.png';
            RingText.textContent = '실드스와프 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 87.69233 && Random2 < 89.23079) { // 마나컷 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ManaCutRing.png';
            RingText.textContent = '마나컷 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 89.23079 && Random2 < 90.76925) { // 크라이시스H 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHRing.png';
            RingText.textContent = '크라이시스 - H링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 90.76925 && Random2 < 92.30771) { // 크라이시스M 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisMRing.png';
            RingText.textContent = '크라이시스 - M링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 92.30771 && Random2 < 93.84617) { // 크리쉬프트 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalShiftRing.png';
            RingText.textContent = '크리쉬프트 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 93.84617 && Random2 < 95.38463) { // 스탠스쉬프트 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'StanceShiftRing.png';
            RingText.textContent = '스탠스쉬프트 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 95.38463 && Random2 < 96.92309) { // 리커버스탠스 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CleanStanceRing.png';
            RingText.textContent = '리커버스탠스 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 96.92309 && Random2 < 98.46155) { // 스위프트 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'SwiftRing.png';
            RingText.textContent = '스위프트 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random2 >= 98.46155 && Random2 < 100) { // 리플렉티브 4레벨 1.53846%
            RingBox2Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox2Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ReflectiveRing.png';
            RingText.textContent = '리플렉티브 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    }
}


function OpenBox3() { // 흑옥 반지 상자 오픈

    let Random3 = Math.random() * 100; // 0 ~ 99 난수
    let lvlRandom3 = Math.floor(Math.random() * 100); // 0 ~ 99 난수

    if (lvlRandom3 < 25) { // 시드링 1레벨 25%

        if (Random3 < 12.50) { // 리레 1레벨 12.50%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 12.50 && Random3 < 25.00) { // 컨티 1레벨 12.50%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 25.00 && Random3 < 33.33) { // 웨퍼S 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 33.33 && Random3 < 41.66) { // 웨퍼D 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 41.66 && Random3 < 49.99) { // 웨퍼I 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 49.99 && Random3 < 58.32) { // 웨퍼L 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 58.32 && Random3 < 66.65) { // 얼티 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 66.65 && Random3 < 74.98) { // 리테 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 74.98 && Random3 < 83.31) { // 링썸 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 83.31 && Random3 < 91.64) { // 크뎀 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 91.64 && Random3 < 100) { // 크라이시스HM 1레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.1) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else if (lvlRandom3 >= 25 && lvlRandom3 < 50) { // 시드링 2레벨 25%

        if (Random3 < 12.50) { // 리레 2레벨 12.50%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 12.50 && Random3 < 25.00) { // 컨티 2레벨 12.50%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 25.00 && Random3 < 33.33) { // 웨퍼S 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 33.33 && Random3 < 41.66) { // 웨퍼D 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 41.66 && Random3 < 49.99) { // 웨퍼I 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 49.99 && Random3 < 58.32) { // 웨퍼L 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 58.32 && Random3 < 66.65) { // 얼티 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 66.65 && Random3 < 74.98) { // 리테 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 74.98 && Random3 < 83.31) { // 링썸 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 83.31 && Random3 < 91.64) { // 크뎀 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 91.64 && Random3 < 100) { // 크라이시스HM 2레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.2) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else if (lvlRandom3 >= 50 && lvlRandom3 < 80) { // 시드링 3레벨 30%
        
        if (Random3 < 12.50) { // 리레 3레벨 12.50%
            RingBox3Num += 1;
            Lv3Ring1 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 12.50 && Random3 < 25.00) { // 컨티 3레벨 12.50%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 25.00 && Random3 < 33.33) { // 웨퍼S 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 33.33 && Random3 < 41.66) { // 웨퍼D 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 41.66 && Random3 < 49.99) { // 웨퍼I 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 49.99 && Random3 < 58.32) { // 웨퍼L 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 58.32 && Random3 < 66.65) { // 얼티 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 66.65 && Random3 < 74.98) { // 리테 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 74.98 && Random3 < 83.31) { // 링썸 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 83.31 && Random3 < 91.64) { // 크뎀 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 91.64 && Random3 < 100) { // 크라이시스HM 3레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else { // 시드링 4레벨 20%
        
        if (Random3 < 12.50) { // 리레 4레벨 12.50%
            RingBox3Num += 1;
            Lv4Ring1 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random3 >= 12.50 && Random3 < 25.00) { // 컨티 4레벨 12.50%
            RingBox3Num += 1;
            Lv4Ring2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random3 >= 25.00 && Random3 < 33.33) { // 웨퍼S 4레벨 8.33%
            RingBox3Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random3 >= 33.33 && Random3 < 41.66) { // 웨퍼D 4레벨 8.33%
            RingBox3Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random3 >= 41.66 && Random3 < 49.99) { // 웨퍼I 4레벨 8.33%
            RingBox3Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random3 >= 49.99 && Random3 < 58.32) { // 웨퍼L 4레벨 8.33%
            RingBox3Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random3 >= 58.32 && Random3 < 66.65) { // 얼티 4레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 66.65 && Random3 < 74.98) { // 리테 4레벨 8.33%
            RingBox3Num += 1;
            Ring4 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random3 >= 74.98 && Random3 < 83.31) { // 링썸 4레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 83.31 && Random3 < 91.64) { // 크뎀 4레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random3 >= 91.64 && Random3 < 100) { // 크라이시스HM 4레벨 8.33%
            RingBox3Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox3Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }
    }
}

function OpenBox4() { // 백옥 반지 상자 오픈

    let Random4 = Math.random() * 100; // 0 ~ 99 난수
    let lvlRandom4 = Math.floor(Math.random() * 100); // 0 ~ 99 난수

    if (lvlRandom4 < 65) { // 시드링 3레벨 65%

        if (Random4 < 14.28571) { // 리레 3레벨 14.28571%
            RingBox4Num += 1;
            Lv3Ring1 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 14.28571 && Random4 < 28.57142) { // 컨티 3레벨 14.28571%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 28.57142 && Random4 < 36.50793) { // 웨퍼S 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 36.50793 && Random4 < 44.44444) { // 웨퍼D 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 44.44444 && Random4 < 52.38095) { // 웨퍼I 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 52.38095 && Random4 < 60.31746) { // 웨퍼L 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 60.31746 && Random4 < 68.25397) { // 얼티 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 68.25397 && Random4 < 76.19048) { // 리테 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 76.19048 && Random4 < 84.12699) { // 링썸 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 84.12699 && Random4 < 92.06350) { // 크뎀 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 92.06350 && Random4 < 100) { // 크라이시스HM 3레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.3) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }

    } else { // 시드링 4레벨 35%

        if (Random4 < 14.28571) { // 리레 4레벨 14.28571%
            RingBox4Num += 1;
            Lv4Ring1 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RestraintRing.png';
            RingText.textContent = '리스트레인트 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random4 >= 14.28571 && Random4 < 28.57142) { // 컨티 4레벨 14.28571%
            RingBox4Num += 1;
            Lv4Ring2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'ContinuousRing.png';
            RingText.textContent = '컨티뉴어스 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random4 >= 28.57142 && Random4 < 36.50793) { // 웨퍼S 4레벨 7.93651%
            RingBox4Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - S링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random4 >= 36.50793 && Random4 < 44.44444) { // 웨퍼D 4레벨 7.93651%
            RingBox4Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - D링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random4 >= 44.44444 && Random4 < 52.38095) { // 웨퍼I 4레벨 7.93651%
            RingBox4Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - I링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random4 >= 52.38095 && Random4 < 60.31746) { // 웨퍼L 4레벨 7.93651%
            RingBox4Num += 1;
            Ring3 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'WeaponRing.png';
            RingText.textContent = '웨폰퍼프 - L링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random4 >= 60.31746 && Random4 < 68.25397) { // 얼티 4레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'UltimatumRing.png';
            RingText.textContent = '얼티메이덤 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 68.25397 && Random4 < 76.19048) { // 리테 4레벨 7.93651%
            RingBox4Num += 1;
            Ring4 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RiskTakerRing.png';
            RingText.textContent = '리스크테이커 링(Lv.4) 아이템을 1개 얻었습니다!';
            RingText.style.color = 'crimson';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

            Effect.style.display = 'block';
            setTimeout(function() {
                Effect.style.display = 'none';
            }, 800);
            BestRing.play();

        } else if (Random4 >= 76.19048 && Random4 < 84.12699) { // 링썸 4레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'RingOfSum.png';
            RingText.textContent = '링 오브 썸(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 84.12699 && Random4 < 92.06350) { // 크뎀 4레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CriticalDamageRing.png';
            RingText.textContent = '크리데미지 링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        } else if (Random4 >= 92.06350 && Random4 < 100) { // 크라이시스HM 4레벨 7.93651%
            RingBox4Num += 1;
            Etc2 += 1;
            document.getElementById('BoxTotal2').textContent = ' : ' + RingBox4Num;
            document.getElementById('Lv4TotalA').textContent = ' : ' + Lv3Ring1;
            document.getElementById('Lv4TotalB').textContent = ' : ' + Lv4Ring1;
            document.getElementById('Lv4TotalC').textContent = ' : ' + Lv4Ring2;
            document.getElementById('Lv4TotalD').textContent = ' : ' + Ring3;
            document.getElementById('Lv4TotalE').textContent = ' : ' + Ring4;
            document.getElementById('EtcTotal2').textContent = '기타 : ' + Etc2;

            let RingMsg = document.createElement('p'); // 알림창 다음 요소
            let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
            let RingText = document.createElement('span'); // 알림창 다음 문장
            RingImage.src = 'CrisisHMRing.png';
            RingText.textContent = '크라이시스 - HM링(Lv.4) 아이템을 1개 얻었습니다.';
            RingMsg.appendChild(RingImage);
            RingMsg.appendChild(RingText);
            Msg.appendChild(RingMsg);
            Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        }
    }
}

function OpenBox5() { // 타워인헨스 박스 오픈

    let Random5 = Math.floor(Math.random() * 100); // 0 ~ 99 난수

    if (Random5 < 41) { // 타워인헨스 1레벨 41%
        RingBox5Num += 1;
        TowerEtc += 1;
        document.getElementById('BoxTotal3').textContent = ' : ' + RingBox5Num;
        document.getElementById('Lv4Tower').textContent = ' : ' + Tower4;
        document.getElementById('EtcTotal3').textContent = '기타 : ' + TowerEtc;

        let RingMsg = document.createElement('p'); // 알림창 다음 요소
        let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
        let RingText = document.createElement('span'); // 알림창 다음 문장
        RingImage.src = 'TowerInhanceRing.png';
        RingText.textContent = '타워인헨스 링(Lv.1) 아이템을 1개 얻었습니다.';
        RingMsg.appendChild(RingImage);
        RingMsg.appendChild(RingText);
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서

    } else if (Random5 >= 41 && Random5 < 69) { // 타워인헨스 2레벨 28%
        RingBox5Num += 1;
        TowerEtc += 1;
        document.getElementById('BoxTotal3').textContent = ' : ' + RingBox5Num;
        document.getElementById('Lv4Tower').textContent = ' : ' + Tower4;
        document.getElementById('EtcTotal3').textContent = '기타 : ' + TowerEtc;

        let RingMsg = document.createElement('p'); // 알림창 다음 요소
        let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
        let RingText = document.createElement('span'); // 알림창 다음 문장
        RingImage.src = 'TowerInhanceRing.png';
        RingText.textContent = '타워인헨스 링(Lv.2) 아이템을 1개 얻었습니다.';
        RingMsg.appendChild(RingImage);
        RingMsg.appendChild(RingText);
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서

    } else if (Random5 >= 69 && Random5 < 89) { // 타워인헨스 3레벨 20%
        RingBox5Num += 1;
        TowerEtc += 1;
        document.getElementById('BoxTotal3').textContent = ' : ' + RingBox5Num;
        document.getElementById('Lv4Tower').textContent = ' : ' + Tower4;
        document.getElementById('EtcTotal3').textContent = '기타 : ' + TowerEtc;

        let RingMsg = document.createElement('p'); // 알림창 다음 요소
        let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
        let RingText = document.createElement('span'); // 알림창 다음 문장
        RingImage.src = 'TowerInhanceRing.png';
        RingText.textContent = '타워인헨스 링(Lv.3) 아이템을 1개 얻었습니다.';
        RingMsg.appendChild(RingImage);
        RingMsg.appendChild(RingText);
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서

    } else { // 타워인헨스 4레벨 11%
        RingBox5Num += 1;
        Tower4 += 1;
        document.getElementById('BoxTotal3').textContent = ' : ' + RingBox5Num;
        document.getElementById('Lv4Tower').textContent = ' : ' + Tower4;
        document.getElementById('EtcTotal3').textContent = '기타 : ' + TowerEtc;

        let RingMsg = document.createElement('p'); // 알림창 다음 요소
        let RingImage = document.createElement('img'); // 알림창 획득 반지 이미지
        let RingText = document.createElement('span'); // 알림창 다음 문장
        RingImage.src = 'TowerInhanceRing.png';
        RingText.textContent = '타워인헨스 링(Lv.4) 아이템을 1개 얻었습니다!';
        RingText.style.color = 'blue';
        RingMsg.appendChild(RingImage);
        RingMsg.appendChild(RingText);
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서

        Effect.style.display = 'block';
        setTimeout(function() {
            Effect.style.display = 'none';
        }, 800);
        BestRing.play();
    }
}