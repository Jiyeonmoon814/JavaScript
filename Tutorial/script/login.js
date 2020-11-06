const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function findAddress() {
	new daum.Postcode({
		oncomplete: function(data) {
		
			let addr = ''; // 주소
			let extraAddr = ''; // 상세주소

			if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
				addr = data.roadAddress;
			} else { // 사용자가 지번 주소를 선택했을 경우(J)
				addr = data.jibunAddress;
			}

			if(data.userSelectedType === 'R'){
				if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
					extraAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가
				if(data.buildingName !== '' && data.apartment === 'Y'){
					extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열 생성
				if(extraAddr !== ''){
					extraAddr = ' (' + extraAddr + ')';
				}
				document.getElementById("detailAddr").value = extraAddr;
			
			} else {
				document.getElementById("detailAddr").value = '';
			}

			document.getElementById('postcode').value = data.zonecode;
			document.getElementById("address").value = addr;
			document.getElementById("detailAddr").focus();
		}
	}).open();
}