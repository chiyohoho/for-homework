const callElement = (object) => {
    return document.querySelector(object)
}
//------DOM SHOW CONTENT
const showContent = callElement("#content")
//------Change BG Button-----------------------------------------
const changeBgButton = document.querySelectorAll(".menu_option")
let saveStatusChangeBG = {};
changeBgButton.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        } else {
            changeBgButton.forEach(function (s) {
                s.classList.remove("active");
            });
            button.classList.add("active");
        }
    })
})
//-----------------------------------------------------------

//------ Function Call Element
//--------- BÀI TẬP 1 ---------//
const showBaiTap1 = () => {
    const str = `
    <div class="title" style="margin-bottom: 5px;">
        <span><i class="fa-solid fa-school" style="margin-right: 15px; margin-bottom: 10px"></i>Tìm số chẵn và số lẻ</span>            
    </div>
            <span style="font-size: 16px; font-weight: bold; color: skyblue">Ta có các số từ 0 đến 100, tìm các số thuộc số chẵn và số lẻ</span>
            <div id="show_body_content" class="body_content">
                <div class="show_buttons">
                    <span id="btn_body_content_hightolow" class="btn_sort" onclick="timSoChanVaLe()">Hiển thị kết quả</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden; width: 700px; overflow: auto;">
                <i id="icon_sort" class="fa-regular fa-hand-peace" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result" style="width: 100%"></span>
                <i id="icon_sort1" class="fa-regular fa-hand-peace" style="visibility: hidden"></i>
                <span id="bai2_result" class="show_bai1_result" style="width: 100%"></span>
            </div>
    `
    showContent.innerHTML = str
}
const timSoChanVaLe = () => {
    let showBodyContent = callElement("#show_body_result")
    let showIcon1 = callElement("#icon_sort")
    let showIcon2 = callElement("#icon_sort1")
    let showTextContent1 = callElement("#bai1_result")
    let showTextContent2 = callElement("#bai2_result")

    let soChan = []
    let soLe = []
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            soChan.push(i)
        } else {
            soLe.push(i)
        }
    }
    showBodyContent.style.visibility = "visible"
    showIcon1.style.visibility = "visible"
    showIcon2.style.visibility = "visible"
    showTextContent1.textContent = `Các số thuộc số chẵn là : ${soChan}`
    showTextContent2.textContent = `Các số thuộc số lẻ là : ${soLe}`
}
//-----------------------------//

//--------- BÀI TẬP 2 ---------//
const showBaiTap2 = () => {
    const str = `
    <div class="title" style="margin-bottom: 5px;">
        <span><i class="fa-solid fa-school" style="margin-right: 15px; margin-bottom: 10px"></i>Tìm các số chia hết cho 3</span>            
    </div>
            <span style="font-size: 16px; font-weight: bold; color: skyblue">Ta có các số từ 0 đến 1000, tìm các số chia hết cho 3<br> và tổng cộng có bao nhiêu số chia hết cho 3</span>
            <div id="show_body_content" class="body_content">
                <div class="show_buttons">
                    <span id="btn_body_content_hightolow" class="btn_sort" onclick="timSoChiaHetCho3()">Hiển thị kết quả</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden; width: 700px; overflow: auto;">
                <i id="icon_sort" class="fa-regular fa-hand-peace" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result" style="width: 100%"></span>
                <i id="icon_sort1" class="fa-regular fa-hand-peace" style="visibility: hidden"></i>
                <span id="bai2_result" class="show_bai1_result" style="width: 100%"></span>
            </div>
    `
    showContent.innerHTML = str
}
const timSoChiaHetCho3 = () => {
    let showBodyContent = callElement("#show_body_result")
    let showIcon1 = callElement("#icon_sort")
    let showIcon2 = callElement("#icon_sort1")
    let showTextContent1 = callElement("#bai1_result")
    let showTextContent2 = callElement("#bai2_result")

    let soChiaHetCho3 = []
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 === 0) {
            soChiaHetCho3.push(i)
        }
    }
    showBodyContent.style.visibility = "visible"
    showIcon1.style.visibility = "visible"
    showIcon2.style.visibility = "visible"
    showTextContent1.textContent = `Các số chia hết cho 3 là : ${soChiaHetCho3}`
    showTextContent2.textContent = `Có tổng cộng ${soChiaHetCho3.length} chia hết cho 3`
}
//-----------------------------//

//--------- BÀI TẬP 3 ---------//
const showBaiTap3 = () => {
    const str = `
    <div class="title" style="margin-bottom: 5px;">
        <span><i class="fa-solid fa-school" style="margin-right: 15px; margin-bottom: 10px"></i>Tìm số nguyên dương nhỏ nhất</span>            
    </div>
            <span style="font-size: 16px; font-weight: bold; color: skyblue">Ta có sum sẽ là tổng của cộng các số trong biến vòng lặp <br> và tổng của sum sẽ < 10000</span>
            <div id="show_body_content" class="body_content">
                <div class="show_buttons">
                    <span id="btn_body_content_hightolow" class="btn_sort" onclick="timSoNguyenDuong()">Hiển thị kết quả</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden; width: 700px; overflow: auto;">
                <i id="icon_sort" class="fa-regular fa-hand-peace" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result" style="width: 100%"></span>
                <i id="icon_sort1" class="fa-regular fa-hand-peace" style="visibility: hidden"></i>
                <span id="bai2_result" class="show_bai1_result" style="width: 100%"></span>
            </div>
    `
    showContent.innerHTML = str
}
const timSoNguyenDuong = () => {
    let showBodyContent = callElement("#show_body_result")
    let showIcon1 = callElement("#icon_sort")
    let showIcon2 = callElement("#icon_sort1")
    let showTextContent1 = callElement("#bai1_result")
    let showTextContent2 = callElement("#bai2_result")

    let sum = 0
    let i
    for (i = 1; sum < 10000; i++) {
        sum += i;
    }
    i = i - 1

    showBodyContent.style.visibility = "visible"
    showIcon1.style.visibility = "visible"
    showIcon2.style.visibility = "visible"
    showTextContent1.textContent = `Số nguyên dương bé nhất có tổng cộng dồn < 10000 là: : ${i}`
}
//-----------------------------//

// //--------- BÀI TẬP 4 ---------//
const showBaiTap4 = () => {
    const str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-superscript" style="margin-right: 15px;"></i>Tìm số lũy thừa</span>
                <br>
                <span style="font-size: 16px; font-weight: bold; color: skyblue">Ta có số x và số n, tìm lũy thừa của chúng</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập số X" id="bai1_input_2" class="bai1_input" style="width:50%">
                <input type="number" placeholder="Nhập số N" id="bai1_input_1" class="bai1_input" style="width:50%">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="tinhSoLuyThua()">Tìm số lũy thừa</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-superscript" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
                <br>
                <span id="bai2_result" class="show_bai1_result" style=""></span>
            </div>
    `
    showContent.innerHTML = str
}
const tinhSoLuyThua = () => {
    const soX = Number(callElement("#bai1_input_2").value)
    const soN = Number(callElement("#bai1_input_1").value)
    const soLuyThua = Math.pow(soX, soN)

    const showResult = callElement("#bai1_result")
    const showIconSort = callElement("#icon_sort")
    const showResultSort = callElement("#show_body_result")

    if (soX && soN) {
        showResult.textContent = `Số lũy thừa của ${soX} và ${soN} là : ${soLuyThua}`
        showIconSort.style.visibility = "visible"
        showResultSort.style.visibility = "visible"
    } else {
        alert("Nhập số vào còn làm tiếp")
    }


}
// //-----------------------------//

// //--------- BÀI TẬP 5 ---------//
const showBaiTap5 = () => {
    const str = `
    <div class="title" style="margin-bottom: 20px;">
                <span>n! Tính số giai thừa</span>
                <br>
                <span style="font-size: 16px; font-weight: bold; color: skyblue">Nhập vào 1 số bất kỳ và tìm số giai thừa của chúng</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập số bất kỳ" id="bai1_input_2" class="bai1_input" style="width:50%">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="tinhSoGiaiThua()">Tìm số giai thừa</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-superscript" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
                <br>
                <span id="bai2_result" class="show_bai1_result" style=""></span>
            </div>
    `
    showContent.innerHTML = str
}
const tinhSoGiaiThua = () => {
    const soBatKy = Number(callElement("#bai1_input_2").value)
    let soGiaiThua = 1

    const showResult = callElement("#bai1_result")
    const showIconSort = callElement("#icon_sort")
    const showResultSort = callElement("#show_body_result")

    if (soBatKy) {
        for (i = 1; i <= soBatKy; i++) {
            soGiaiThua *= i
        }
        showResult.textContent = `Số giai thừa của ${soBatKy} là : ${soGiaiThua.toLocaleString("en-US")}`
        showIconSort.style.visibility = "visible"
        showResultSort.style.visibility = "visible"
    } else {
        alert("Nhập số dô còn tìm giai thừa")
    }
}
// //-----------------------------//

// //--------- BÀI TẬP 5 ---------//

const showBaiTap6 = () => {
    const str = `
    <div class="title" style="margin-bottom: 5px;">
        <span><i class="fa-solid fa-school" style="margin-right: 15px; margin-bottom: 10px"></i>Tạo thẻ DIV</span>            
    </div>
            <span style="font-size: 16px; font-weight: bold; color: skyblue"></span>
            <div id="show_body_content" class="body_content">
                <div class="show_buttons">
                    <span id="btn_body_content_hightolow" class="btn_sort" onclick="taoTheDiv()">Hiển thị kết quả</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden; width: 700px; overflow: auto;">

            </div>
    `
    showContent.innerHTML = str
}
const taoTheDiv = () => {
    let showBodyContent = callElement("#show_body_result")
    const newDiv = callElement("#newdiv")
    let str = ``
    for (let i = 1; i <= 10; i++) {
        str += `
        <div id="newdiv" style="background: ${i % 2 == 0 ? "#dc92a0" : "#8c8bb3"}">Div ${i % 2 == 0 ? "chẵn" : "lẻ"}</div>
        `
    }
    showBodyContent.innerHTML = str
    showBodyContent.style.visibility = "visible"
}
// //-----------------------------//

// //--------- BÀI TẬP 5 ---------//
const showBaiTap7 = () => {
    const str = `
    <div class="title" style="margin-bottom: 20px;">
                <span>Tìm số nguyên tố</span>
                <br>
                <span style="font-size: 16px; font-weight: bold; color: skyblue">Nhập vào 1 số bất kỳ và tìm số giai thừa của chúng</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập số bất kỳ" id="bai1_input_2" class="bai1_input" style="width:50%">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="timSoNguyenTo()">Tìm số giai thừa</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-superscript" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
                <br>
                <span id="bai2_result" class="show_bai1_result" style=""></span>
            </div>
    `
    showContent.innerHTML = str
}
const timSoNguyenTo = () => {
    const soBatKy = Number(callElement("#bai1_input_2").value);
    const soNguyenTo = [];

    const showResult = callElement("#bai1_result");
    const showResultSort = callElement("#show_body_result");

    if (soBatKy) {
        if (soBatKy > 1) {

            showResult.textContent = `Các số nguyên tố bé hơn hoặc bằng ${soBatKy} là : ${soNguyenTo.join(', ')}`;
            showResultSort.style.visibility = "visible";
        } else {
            alert("Số nguyên dương phải lớn hơn 1");
        }
    } else {
        alert("Nhập một số nguyên dương để kiểm tra");
    }
}

// //-----------------------------//
