/*bài 1*/
        function giaiPhuongTrinh() {
            var a = parseFloat(document.getElementById('input-a').value);
            var b = parseFloat(document.getElementById('input-b').value);
            var resultEl = document.getElementById('result');

            if (a === 0) {
                if (b === 0) {
                    resultEl.innerHTML = "Phương trình vô số nghiệm";
                } else {
                    resultEl.innerHTML = "Phương trình vô nghiệm";
                }
            } else {
                var x = -b / a;
                resultEl.innerHTML = "Nghiệm của phương trình là x = " + x;
            }
        }
  /* bài 3*/

function bai3(){
const hoten = document.getElementById("fname").value;
const email = document.getElementById("mail").value;
const title = document.getElementById("tieude").value;
const textarea = document.getElementById("chiase").value;

const confirmBox = confirm(
    "Họ và tên" +hoten +"Email:" +email  +"\n Nội dung góp ý "+ textarea
);
}
/* baif5 */
function bai5(){
    const tentk = document.getElementById("tk");
    var passWord = document.getElementById("pass");
    const conFirm = confirm("Hiện mật khẩu");
    if(conFirm){
        passWord.type = 'text';
    }
}
