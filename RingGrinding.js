function CelineLink() { // 셀리느 오픈채팅

    window.open("https://open.kakao.com/o/sP0Nmwjf", "_blank");
}
function RingBoxLink() { // 반지상자 시뮬로 넘어가기
    window.location.href = 'RingBox.html';
}

let GrindStone = 1; // 연마석 수량
let GrindStoneSum = 0; // 연마석 사용량
let DefaultMeso = 500000000; // 5억 메소
let DefaultMesoSum = 0; // 메소 사용량
let RingSelect = 0; // 시드링 선택 (0=미선택, 1=선택)
let SuccessNum = 0; // 연마 성공 횟수
let FailNum = 0; // 연마 실패 횟수
let TryNum = 0; // 시도 횟수

let GrindNum = document.getElementById('GrindNum'); // 사용할 연마석 갯수
let Ring = document.getElementById('RingA'); // 강화 대상 시드링
let Result = document.getElementById('RingB'); // 결과
let Lv4 = document.getElementById('RingLv'); // 4레벨
let Lv5 = document.getElementById('ResultLv'); // 5레벨
let Chance = document.getElementById('Chance'); // 확률 표기
let Meso = document.getElementById('Meso'); // 사용 메소 표기
let Msg = document.getElementById('Msg'); // 알림창
let G = document.getElementById('G'); // 연마석 사용 갯수
let MesoSum = document.getElementById('MesoSum'); // 메소 합계
let Success = document.getElementById('Success'); // 성공 횟수 표기
let Fail = document.getElementById('Fail'); // 실패 횟수 표기
let Try = document.getElementById('Try'); // 시도 횟수 표기
let SuccessSound = document.getElementById('SuccessSound'); // 성공 효과음
let FailSound = document.getElementById('FailSound'); // 실패 효과음
let Effect = document.getElementById('gifImage'); // 이펙트

SuccessSound.volume = 0.3; // 음량 30%
FailSound.volume = 0.3; // 음량 30%

let En = { // 반지 연마 대상(0:미선택 1:선택 2:5레벨)
    Ring1 : 0,
    Ring2 : 0,
    Ring3 : 0,
    Ring4 : 0,
    Ring5 : 0,
    Ring6 : 0,
    Ring7 : 0,
    Ring8 : 0,
    Ring9 : 0,
}

function Ring1() { // 리스트레인트 링 함수

    if (En.Ring1 == 2) {
        alert('리스트레인트 링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 리레 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 1;
        En.Ring2 = 0;
        En.Ring3 = 0;
        En.Ring4 = 0;
        En.Ring5 = 0;
        En.Ring6 = 0;
        En.Ring7 = 0;
        En.Ring8 = 0;
        En.Ring9 = 0;
        Ring.src = "RestraintRing.png";
        Result.src = "RestraintRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기

        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[리스트레인트 링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring2() { // 컨티뉴어스 링 함수
    
    if (En.Ring2 == 2) {
        alert('컨티뉴어스 링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 컨티 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 1;
        En.Ring3 = 0;
        En.Ring4 = 0;
        En.Ring5 = 0;
        En.Ring6 = 0;
        En.Ring7 = 0;
        En.Ring8 = 0;
        En.Ring9 = 0;
        Ring.src = "ContinuousRing.png";
        Result.src = "ContinuousRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기

        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[컨티뉴어스 링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring3() { // 리스크테이커 링 함수
    
    if (En.Ring3 == 2) {
        alert('리스크테이커 링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 리테 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 0;
        En.Ring3 = 1;
        En.Ring4 = 0;
        En.Ring5 = 0;
        En.Ring6 = 0;
        En.Ring7 = 0;
        En.Ring8 = 0;
        En.Ring9 = 0;
        Ring.src = "RiskTakerRing.png";
        Result.src = "RiskTakerRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기

        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[리스크테이커 링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring4() { // 웨폰퍼프 S 링 함수

    if (En.Ring4 == 2) {
        alert('웨폰퍼프 - S링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 웨퍼S 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 0;
        En.Ring3 = 0;
        En.Ring4 = 1;
        En.Ring5 = 0;
        En.Ring6 = 0;
        En.Ring7 = 0;
        En.Ring8 = 0;
        En.Ring9 = 0;
        Ring.src = "WeaponSRing.png";
        Result.src = "WeaponSRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기
    
        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[웨폰퍼프 - S링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring5() { // 웨폰퍼프 D 링 함수

    if (En.Ring5 == 2) {
        alert('웨폰퍼프 - D링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 웨퍼D 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 0;
        En.Ring3 = 0;
        En.Ring4 = 0;
        En.Ring5 = 1;
        En.Ring6 = 0;
        En.Ring7 = 0;
        En.Ring8 = 0;
        En.Ring9 = 0;
        Ring.src = "WeaponDRing.png";
        Result.src = "WeaponDRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기
    
        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[웨폰퍼프 - D링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring6() { // 웨폰퍼프 I 링 함수

    if (En.Ring6 == 2) {
        alert('웨폰퍼프 - I링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 웨퍼I 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 0;
        En.Ring3 = 0;
        En.Ring4 = 0;
        En.Ring5 = 0;
        En.Ring6 = 1;
        En.Ring7 = 0;
        En.Ring8 = 0;
        En.Ring9 = 0;
        Ring.src = "WeaponIRing.png";
        Result.src = "WeaponIRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기
    
        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[웨폰퍼프 - I링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring7() { // 웨폰퍼프 L 링 함수

    if (En.Ring7 == 2) {
        alert('웨폰퍼프 - L링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 웨퍼L 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 0;
        En.Ring3 = 0;
        En.Ring4 = 0;
        En.Ring5 = 0;
        En.Ring6 = 0;
        En.Ring7 = 1;
        En.Ring8 = 0;
        En.Ring9 = 0;
        Ring.src = "WeaponLRing.png";
        Result.src = "WeaponLRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기
    
        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[웨폰퍼프 - L링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring8() { // 링 오브 썸 함수

    if (En.Ring8 == 2) {
        alert('링 오브 썸 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 링썸 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 0;
        En.Ring3 = 0;
        En.Ring4 = 0;
        En.Ring5 = 0;
        En.Ring6 = 0;
        En.Ring7 = 0;
        En.Ring8 = 1;
        En.Ring9 = 0;
        Ring.src = "RingOfSum.png";
        Result.src = "RingOfSum.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기
    
        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[링 오브 썸 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function Ring9() { // 크리데미지 링 함수

    if (En.Ring9 == 2) {
        alert('크리데미지 링 5레벨 연마에 성공하였습니다. 다른 반지를 선택해주세요.');
    } else {
        RingSelect = 1; // 크뎀링 선택
        GrindStone = 1; // 연마석 갯수 초기화
        // 시드링 중복 방지
        En.Ring1 = 0;
        En.Ring2 = 0;
        En.Ring3 = 0;
        En.Ring4 = 0;
        En.Ring5 = 0;
        En.Ring6 = 0;
        En.Ring7 = 0;
        En.Ring8 = 0;
        En.Ring9 = 1;
        Ring.src = "CriticalDamageRing.png";
        Result.src = "CriticalDamageRing.png";
        Lv4.textContent = 'Lv. 4';
        Lv5.textContent = 'Lv. 5';
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = DefaultMeso.toLocaleString(); // 숫자 값에 쉼표 넣기
    
        let RingMsg = document.createElement('p'); // 알림창 다음 문장
        RingMsg.textContent = '[크리데미지 링 4레벨]을 선택하였습니다.';
        Msg.appendChild(RingMsg);
        Msg.scrollTop = Msg.scrollHeight; // 자동 커서
    }
}

function GrindMinus() { // 연마석 감소
    GrindStone--;

    if (RingSelect == 0) {
        alert("연마할 특수 스킬 반지를 선택하세요!");

    } else if (RingSelect == 1 && GrindStone == 1) { // 연마석 1개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '10%';
        Meso.textContent = (DefaultMeso).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 2) { // 연마석 2개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '20%';
        Meso.textContent = (DefaultMeso * 2).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 3) { // 연마석 3개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '30%';
        Meso.textContent = (DefaultMeso * 4).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 4) { // 연마석 4개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '40%';
        Meso.textContent = (DefaultMeso * 7).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 0) { // 연마석 범위 미만
        GrindStone++;
        GrindNum.textContent = (GrindStone) + ' / 5'
        alert('생명의 연마석을 1개 미만으로 설정할 수 없습니다.');
    }
}

function GrindPlus() { // 연마석 증가
    GrindStone++;

    if (RingSelect == 0) {
        alert("연마할 특수 스킬 반지를 선택하세요!");

    } else if (RingSelect == 1 && GrindStone == 2) { // 연마석 2개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '20%';
        Meso.textContent = (DefaultMeso * 2).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 3) { // 연마석 3개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '30%';
        Meso.textContent = (DefaultMeso * 4).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 4) { // 연마석 4개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '40%';
        Meso.textContent = (DefaultMeso * 7).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 5) { // 연마석 5개
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '50%';
        Meso.textContent = (DefaultMeso * 10).toLocaleString(); // 숫자 값에 쉼표 넣기

    } else if (RingSelect == 1 && GrindStone == 6) { // 연마석 초과
        GrindStone--;
        GrindNum.textContent = (GrindStone) + ' / 5'
        alert('생명의 연마석을 6개 이상 사용할 수 없습니다.');
    }
}

function GrindMAX() { // 연마석 MAX
    
    if (RingSelect == 0) {
        alert("연마할 특수 스킬 반지를 선택하세요!");
    } else {
        GrindStone = 5; // 연마석 MAX(5)
        GrindNum.textContent = (GrindStone) + ' / 5'
        Chance.textContent = '50%';
        Meso.textContent = (DefaultMeso * 10).toLocaleString(); // 숫자 값에 쉼표 넣기
    }
}

function Cancle() { // 취소 버튼
    RingSelect = 0;
    GrindStone = 1;

    Ring.src = "empty.png";
    Result.src = "empty.png";
    Lv4.textContent = '';
    Lv5.textContent = '';
    GrindNum.textContent = '';
    Chance.textContent = '';
    Meso.textContent = '';

    let RingMsg = document.createElement('p'); // 알림창 다음 문장
    RingMsg.textContent = '생명의 연마석 사용을 취소합니다.';
    Msg.appendChild(RingMsg);
    Msg.scrollTop = Msg.scrollHeight; // 자동 커서
}

// 시드링 연마 함수들
function Enchant() {
    if (RingSelect == 0) {
        alert("연마할 특수 스킬 반지를 선택하세요!");
    } else {
        EnchantStart();
    }
}

function EnchantStart() {

    if (En.Ring1 == 1) { // 리스트레인트 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring1 = 2; // 리레 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring1').src = 'RestraintRing5.png'
                document.getElementById('ToolTip1').src = 'Ring1_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring1 = 2; // 리레 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring1').src = 'RestraintRing5.png'
                document.getElementById('ToolTip1').src = 'Ring1_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring1 = 2; // 리레 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring1').src = 'RestraintRing5.png'
                document.getElementById('ToolTip1').src = 'Ring1_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring1 = 2; // 리레 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring1').src = 'RestraintRing5.png'
                document.getElementById('ToolTip1').src = 'Ring1_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring1 = 2; // 리레 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring1').src = 'RestraintRing5.png'
                document.getElementById('ToolTip1').src = 'Ring1_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스트레인트 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring1 == 2) {
    }

    if (En.Ring2 == 1) { // 컨티뉴어스 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring2 = 2; // 컨티 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring2').src = 'ContinuousRing5.png'
                document.getElementById('ToolTip2').src = 'Ring2_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring2 = 2; // 컨티 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring2').src = 'ContinuousRing5.png'
                document.getElementById('ToolTip2').src = 'Ring2_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring2 = 2; // 컨티 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring2').src = 'ContinuousRing5.png'
                document.getElementById('ToolTip2').src = 'Ring2_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring2 = 2; // 컨티 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring2').src = 'ContinuousRing5.png'
                document.getElementById('ToolTip2').src = 'Ring2_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring2 = 2; // 컨티 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring2').src = 'ContinuousRing5.png'
                document.getElementById('ToolTip2').src = 'Ring2_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[컨티뉴어스 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring2 == 2) {
    }

    if (En.Ring3 == 1) { // 리스크테이커 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring3 = 2; // 리테 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring3').src = 'RiskTakerRing5.png'
                document.getElementById('ToolTip3').src = 'Ring3_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring3 = 2; // 리테 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring3').src = 'RiskTakerRing5.png'
                document.getElementById('ToolTip3').src = 'Ring3_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring3 = 2; // 리테 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring3').src = 'RiskTakerRing5.png'
                document.getElementById('ToolTip3').src = 'Ring3_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring3 = 2; // 리테 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring3').src = 'RiskTakerRing5.png'
                document.getElementById('ToolTip3').src = 'Ring3_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring3 = 2; // 리테 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring3').src = 'RiskTakerRing5.png'
                document.getElementById('ToolTip3').src = 'Ring3_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[리스크테이커 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring3 == 2) {
    }

    if (En.Ring4 == 1) { // 웨폰퍼프 S 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring4 = 2; // 웨퍼S 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring4').src = 'WeaponRing5.png'
                document.getElementById('ToolTip4').src = 'Ring4_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring4 = 2; // 웨퍼S 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring4').src = 'WeaponRing5.png'
                document.getElementById('ToolTip4').src = 'Ring4_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring4 = 2; // 웨퍼S 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring4').src = 'WeaponRing5.png'
                document.getElementById('ToolTip4').src = 'Ring4_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring4 = 2; // 웨퍼S 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring4').src = 'WeaponRing5.png'
                document.getElementById('ToolTip4').src = 'Ring4_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring4 = 2; // 웨퍼S 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring4').src = 'WeaponRing5.png'
                document.getElementById('ToolTip4').src = 'Ring4_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - S링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring4 == 2) {
    }

    if (En.Ring5 == 1) { // 웨폰퍼프 D 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring5 = 2; // 웨퍼D 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring5').src = 'WeaponRing5.png'
                document.getElementById('ToolTip5').src = 'Ring5_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring5 = 2; // 웨퍼D 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring5').src = 'WeaponRing5.png'
                document.getElementById('ToolTip5').src = 'Ring5_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring5 = 2; // 웨퍼D 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring5').src = 'WeaponRing5.png'
                document.getElementById('ToolTip5').src = 'Ring5_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring5 = 2; // 웨퍼D 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring5').src = 'WeaponRing5.png'
                document.getElementById('ToolTip5').src = 'Ring5_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring5 = 2; // 웨퍼D 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring5').src = 'WeaponRing5.png'
                document.getElementById('ToolTip5').src = 'Ring5_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - D링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring5 == 2) {
    }

    if (En.Ring6 == 1) { // 웨폰퍼프 I 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring6 = 2; // 웨퍼I 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring6').src = 'WeaponRing5.png'
                document.getElementById('ToolTip6').src = 'Ring6_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring6 = 2; // 웨퍼I 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring6').src = 'WeaponRing5.png'
                document.getElementById('ToolTip6').src = 'Ring6_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring6 = 2; // 웨퍼I 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring6').src = 'WeaponRing5.png'
                document.getElementById('ToolTip6').src = 'Ring6_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring6 = 2; // 웨퍼I 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring6').src = 'WeaponRing5.png'
                document.getElementById('ToolTip6').src = 'Ring6_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring6 = 2; // 웨퍼I 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring6').src = 'WeaponRing5.png'
                document.getElementById('ToolTip6').src = 'Ring6_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - I링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring6 == 2) {
    }

    if (En.Ring7 == 1) { // 웨폰퍼프 L 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring7 = 2; // 웨퍼L 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring7').src = 'WeaponRing5.png'
                document.getElementById('ToolTip7').src = 'Ring7_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring7 = 2; // 웨퍼L 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring7').src = 'WeaponRing5.png'
                document.getElementById('ToolTip7').src = 'Ring7_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring7 = 2; // 웨퍼L 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring7').src = 'WeaponRing5.png'
                document.getElementById('ToolTip7').src = 'Ring7_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring7 = 2; // 웨퍼L 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring7').src = 'WeaponRing5.png'
                document.getElementById('ToolTip7').src = 'Ring7_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring7 = 2; // 웨퍼L 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring7').src = 'WeaponRing5.png'
                document.getElementById('ToolTip7').src = 'Ring7_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[웨폰퍼프 - L링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring7 == 2) {
    }

    if (En.Ring8 == 1) { // 링 오브 썸
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring8 = 2; // 링썸 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring8').src = 'RingOfSum5.png'
                document.getElementById('ToolTip8').src = 'Ring8_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring8 = 2; // 링썸 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring8').src = 'RingOfSum5.png'
                document.getElementById('ToolTip8').src = 'Ring8_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring8 = 2; // 링썸 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring8').src = 'RingOfSum5.png'
                document.getElementById('ToolTip8').src = 'Ring8_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring8 = 2; // 링썸 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring8').src = 'RingOfSum5.png'
                document.getElementById('ToolTip8').src = 'Ring8_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring8 = 2; // 링썸 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring8').src = 'RingOfSum5.png'
                document.getElementById('ToolTip8').src = 'Ring8_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[링 오브 썸] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring8 == 2) {
    }

    if (En.Ring9 == 1) { // 크리데미지 링
        if (GrindStone == 1) { // 연마석 1개
            GrindStoneSum += 1;
            DefaultMesoSum += 500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.1) {
                SuccessNum += 1;
                En.Ring9 = 2; // 크뎀링 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring9').src = 'CriticalDamageRing5.png'
                document.getElementById('ToolTip9').src = 'Ring9_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 2) { // 연마석 2개
            GrindStoneSum += 2;
            DefaultMesoSum += 1000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.2) {
                SuccessNum += 1;
                En.Ring9 = 2; // 크뎀링 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring9').src = 'CriticalDamageRing5.png'
                document.getElementById('ToolTip9').src = 'Ring9_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 3) { // 연마석 3개
            GrindStoneSum += 3;
            DefaultMesoSum += 2000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.3) {
                SuccessNum += 1;
                En.Ring9 = 2; // 크뎀링 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring9').src = 'CriticalDamageRing5.png'
                document.getElementById('ToolTip9').src = 'Ring9_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 4) { // 연마석 4개
            GrindStoneSum += 4;
            DefaultMesoSum += 3500000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.4) {
                SuccessNum += 1;
                En.Ring9 = 2; // 크뎀링 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring9').src = 'CriticalDamageRing5.png'
                document.getElementById('ToolTip9').src = 'Ring9_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        } else if (GrindStone == 5) { // 연마석 5개
            GrindStoneSum += 5;
            DefaultMesoSum += 5000000000;
            TryNum += 1;
            G.textContent = ': ' + (GrindStoneSum);
            MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
            Try.textContent = 'Try : ' + (TryNum);
            if (Math.random() < 0.5) {
                SuccessNum += 1;
                En.Ring9 = 2; // 크뎀링 5렙 성공
                Success.textContent = 'Success : ' + (SuccessNum);
                SuccessSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링 5레벨] 연마에 성공했습니다!';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서
                document.getElementById('Ring9').src = 'CriticalDamageRing5.png'
                document.getElementById('ToolTip9').src = 'Ring9_5.png'

                Effect.src = "Success.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            } else {
                FailNum += 1;
                Fail.textContent = 'Fail : ' + (FailNum);
                FailSound.play();
                let RingMsg = document.createElement('p'); // 알림창 다음 문장
                RingMsg.textContent = '[크리데미지 링] 연마에 실패했습니다...';
                Msg.appendChild(RingMsg);
                Msg.scrollTop = Msg.scrollHeight; // 자동 커서

                Effect.src = "Fail.gif";
                setTimeout(function() {
                    Effect.src = "empty.png";
                }, 1600);
            }
        }
    } else if (En.Ring9 == 2) {
    }
}

function Reset() { // 초기화 버튼
    GrindStoneSum = 0;
    DefaultMesoSum = 0;
    TryNum = 0;
    SuccessNum = 0;
    FailNum = 0;
    RingSelect = 0;
    GrindStone = 1;
    En.Ring1 = 0;
    En.Ring2 = 0;
    En.Ring3 = 0;
    En.Ring4 = 0;
    En.Ring5 = 0;
    En.Ring6 = 0;
    En.Ring7 = 0;
    En.Ring8 = 0;
    En.Ring9 = 0;

    // 값 초기화
    G.textContent = ': ' + (GrindStoneSum);
    MesoSum.textContent = ': ' + (DefaultMesoSum).toLocaleString();
    Try.textContent = 'Try : ' + (TryNum);
    Success.textContent = 'Success : ' + (SuccessNum);
    Fail.textContent = 'Fail : ' + (FailNum);

    // UI 초기화
    Ring.src = "empty.png";
    Result.src = "empty.png";
    Lv4.textContent = '';
    Lv5.textContent = '';
    GrindNum.textContent = '';
    Chance.textContent = '';
    Meso.textContent = '';

    // 인벤토리 초기화
    document.getElementById('Ring1').src = 'RestraintRing4.png';
    document.getElementById('Ring2').src = 'ContinuousRing4.png';
    document.getElementById('Ring3').src = 'RiskTakerRing4.png';
    document.getElementById('Ring4').src = 'WeaponRing4.png';
    document.getElementById('Ring5').src = 'WeaponRing4.png';
    document.getElementById('Ring6').src = 'WeaponRing4.png';
    document.getElementById('Ring7').src = 'WeaponRing4.png';
    document.getElementById('Ring8').src = 'RingOfSum4.png';
    document.getElementById('Ring9').src = 'CriticalDamageRing4.png';

    // 툴팁 초기화
    document.getElementById('ToolTip1').src = 'Ring1.png';
    document.getElementById('ToolTip2').src = 'Ring2.png';
    document.getElementById('ToolTip3').src = 'Ring3.png';
    document.getElementById('ToolTip4').src = 'Ring4.png';
    document.getElementById('ToolTip5').src = 'Ring5.png';
    document.getElementById('ToolTip6').src = 'Ring6.png';
    document.getElementById('ToolTip7').src = 'Ring7.png';
    document.getElementById('ToolTip8').src = 'Ring8.png';
    document.getElementById('ToolTip9').src = 'Ring9.png';

    let RingMsg = document.createElement('p'); // 알림창 다음 문장
    RingMsg.textContent = '<알림> 모든 값을 초기화합니다.';
    RingMsg.style.color = 'red';
    Msg.appendChild(RingMsg);
    Msg.scrollTop = Msg.scrollHeight; // 자동 커서
}