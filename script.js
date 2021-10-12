(()=>{
const btn = document.querySelector('.submit-qr');
btn.addEventListener('click', qrcodeGen);
function qrcodeGen() {
    const qr_data = document.querySelector('.qr-input').value;
    
    const url = `https://chart.apis.google.com/chart?cht=qr&chl=${qr_data}&chs=300x300`;
    document.getElementById('qr_img').src = url;
}

})();




