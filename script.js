(()=>{
const btn = document.querySelector('.submit-qr');
btn.addEventListener('click', qrcodeGen);
function qrcodeGen() {
    const qr_data = document.querySelector('.qr-input').value;
    
    const url = `https://chart.apis.google.com/chart?cht=qr&chl=${qr_data}&chs=300x300`;
    document.getElementById('qr_img').src = url;
}

})();






// (()=>{
//     const btn = document.querySelector('.submit');
//     btn.addEventListener('click', qrcodeGen);
//     function qrcodeGen() {
//         const qr_text = document.getElementById('qr_text').value;
//         const qr_width = document.getElementById('qr_width').value;
//         const qr_height = document.getElementById('qr_height').value;
//         const url = `https://chart.apis.google.com/chart?cht=qr&chl=${qr_text}&chs=${qr_width}x${qr_height}`;
//         document.getElementById('qr_img').src = url;
//     }
    
//     })();