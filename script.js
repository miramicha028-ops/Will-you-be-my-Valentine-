const messages = [
    "أيا بركات بلا بلعاط؟",
    "ثبت روحك مليح!",
    "تفكر مليح قبل ما تخير!",
    "يا خاه.. نزيدك فرصة أخرى!",
    "حشومة عليك والله!",
    "راك متأكد من قرارك؟",
    "قلبي الصغير لا يتحمل!",
    "أوكي.. خلاص مانزيدش نسقسيك 🥺"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
