document.getElementById('closeButton').addEventListener('click', function() {
    window.close();
});document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "Hi Love! Just wanted to let you know na sobrang proud ako sayo! Love na love kita Ajih! If andyan lang ako yayakapin lang kita and kung hindi pa kaya yan matulog tayong dalawa at kung kulang pa yun sabihin mo sakin yung mga need kong gawin para mapasaya ka lang I love you Ajih!!",
        "Every storm runs out of rain. Better days are coming. There will be storms sa life natin love. Hayaan mo sasayaw nalang natin yan sa ilalim ng ulan I love youuuuuuu!",
        "Sa Babaeng mahal na mahal kooo! I know na kayang kaya mo yung nangyayare sa life mo ngayon. I can be Your first and last resort. I love you so much bebeeeee!",
        "Inhaleeeeeeeeeee! Exhaleeeeeeeeeeee! Okay we chill tell me anong problem lovee? Sino aawayin nating dalawa ngayon? I love you so much bebeeeee! Pag may masamang nangyare love isipin mo nalang mga whisper mo sakin dati. hihi I love youuuuuuuuuuuuuu",
        "Hi loveee! Just wanna say that youre doing great! Sa life and sa career andito lang ako para isupport ka dont look back kung sino yung mga taong nasa likod mo. Just keep moving forward loveeeee! Kasama moko loveeeeeee!",
        "You matter. You are important. Never forget that. Your feelings are valid. Your smile, touch, your skin where do I begin. Naging sam smith na HAHAHAHAHAHA I love youuuuuuuuuu"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('.container p').textContent = randomMessage;
});

document.getElementById('closeButton').addEventListener('click', function() {
    window.close();
});
