// Words and descriptions
const wordDescriptionPairs = [
    { word: "independent", description: "Unang unang trait na nakita ko sayo na sobrang nagandahan ako. Kasi sabi ko sa sarili ko Kaya niyang mag stood up para sa sarili niya Pero syempre lahat ng independent ay may soft spot or breaking point. And sobrang natuwa ako nung nag sama tayo sa binangonan nakita ko na sobrang kampante ka or yung comfortable ka talaga nakita kita mismo yung sinasabi mong ikaw talaga. kahit part lang yun. yun lang hehe labyuu" },
    { word: "maldita", description: "Bakit negative? Para sakin hindi siya negative pagiging maldita mo kasi part yan ng personality mo and hindi ko pwedeng tanggalin yan. Kaya nagustuhan ko yan kasi andun na sa part na kahit sino pa yan kaya mong irapan HAHAHAHA mwaaaa" },
    { word: "Moody", description: "mood swings, toyo or what pero alam ko sa  sarili ko na wala pa yan. Nireready ko lang sarili ko. djk. Dito konting personalities palang nakikita ko sa mga mood swings mo. Pero sobrang natuwa ako kasi ikaw mismo yung nag lalabas ng kung sino ka talaga" },
    {word: "masungit", description:"Same goes sa maldita, pero eto naman yung part na gusto ko pag nasa labas ka and kahit hindi kita bantayan alam ko sa sarili ko na pag may lumapit sayo susungitan mo lang. key point diyan is peace na binibigay mo sakin araw araw."},
    {word: "smile ", description:"when a person smiles. Dun mo makikita yung totoong nararamdaman niya. Tas nung nakita kita na ngumiti  sa harap ko at nakita ko na nag connect yung mga mata mo pati yung smile mo. hehe mas lalo mokong nakuha hehe ang saya lang sa feeling na mapangiti ka araw araw. lalo na pag magkasama tayo sobrang nakakatunaw ng puso I love youuuu HAHAHAHAHAHA"},
    {word: "presence", description:"presence is a big part sa isang relationship, kung ano meron satin ngayon sobrang na appreciate ko yung presence mo sa pag kinig sa mga rants ko or yung mga pag haharot ko sayo hehe. Nag loolookforward ako araw araw na mafeel ko lagi presence mo. And sobrang thankful ako sayo Ajih"},
    {word: "confident", description:"Confident to the point na, etong babaeng to kayang kaya gawin lahat. Na pag nag sabi ka ng timeline kung kelan or kung anong mangyayare. Sobrang natutuwa ako kasi nasasabi mo siya ng walang halong kaba or duda. "},
    {word: "transparent", description:"Transparent as a  clear water (yung malinis ahh) hindi yung nawasa. Dito nakita ko yung intentions mo, yung goal mo, yung pag open mo sakin sa mga bagay na dapat kong marinig. Kahit masakit or masaya yan nasasabi mo siya. And sobrang natuwa lang ako dahil ginagawa mo din yang pagiging transparent mo saatin. Thank you Ajih really really appreciate it. Araw araw talaga nakukuha mo ako."},
    {word: "Optimistic", description:"I wanted to share how much I admire you. You have such a graceful and confident presence, and your warmth and kindness are evident in everything you do. Your smile has the ability to brighten up everyones mood,I’m thankful to know you and to experience the incredible person you are each day."},
        { word: "Strong", description: "Mapa physical and mental man yan, I see you as a woman na emotionally strong may times na nanghihina ka, gusto kong sabihin sayo na pag dumating yung time na mahina ka sisiguraduhin ko na ayan yung time na malakas ako. I love you Ajih!!!!" },
        { word: "Resilient", description: "Recovers quickly from setbacks. Diba yung vocabulary ko  pa deep na ng pa deep. Labyuuu. from the description itself. People see you na sobrang bilis mag recover sa mga problems pero I see you as a woman na dinadamdam muna yung problem. its okay to be fragile Love. There will be setbacks na hindi natin kaya mag isa kaya andito ako at andyan ka para isupport natin ang isat isa! I love youuuuu!" },
        { word: "Courageous", description: "Yung pag harap palang sa mga problema or kahit sa mga tao sobrang nakakainlove HAHAHAHAHA shet. Pero ayun nga Nasasayo yung courage na need ng isang tao, And I am very very very proud sayoooooo!" },
        { word: "Intelligent", description: "You consume knowledge na hindi normal sa isang tao and you store memories na sobrang tagal ng span ng time. An intelligent Woman ang sarap pakinggan tas ang sarap iflex sa mga kaibigan yung bebe ko is legit na intelligent Woman. sheeeesh I love youuuuuuu" },
        { word: "Sharp", description: "you got this trait na sharp, sharp sa lahat words, decision, intuition, instinct. Pero what I really really love about you is yung pagiging sharp mo na to the point na it wont hit any vitals unless gugustuhin mo but sharp sa words na makakapag pa realize ng isang tao sa mga mali nila." },
        { word: "Warm", description: "Your warm hug, presence, touch, lips hehe. Bastaaaaa. I feel so warm pag kasama kita yung heart ha kasi nakakabusog kasi sa feelings pag kasama kita hehehe I love youuuuuuuuuuuuuu!!" },
        { word: "Kind", description: "Acts with compassion towards others. Nakita kita na tumulong sa mga taong hindi mo naman kilala pero in need of help sabi sayo araw araw nakukuha moko. anong day palang pero diba? Yung urge na pag tulong mo sa mga family mo tas friends mo ay sobrang big deal sakin yun. Kasi alam mo yung roots mo." },
        { word: "Ambitious", description: "A Woman na goal / career driven. I love you Doc. Ajih!" },
        { word: "Compassionate", description: "Again you value your friends and lalo na ang family mo. Umiiksi na ba mga messages ko? ganon talaga kasi sa word palang it speaks yung image mo mismo. I love you so much Ajihhhhhh!" },
        { word: "Determined", description: "Stays committed despite difficulties and I admire yung ganyang ugali mo lalo na career and business mo given na yung family pero syempre.... bat kasi lagi nalang ako nahuhulog sayo." },
        { word: "Creative", description: "Generates original ideas and solutions. Like sabi mo nga yung ugali niyo. Solution muna bagooooooooo. Sermon hehe " },
        { word: "Honest", description: "Maintains truthfulness and integrity. lalo na sa mga bagay na alam mong makaka epekto sa mga tao what I love about you is nagiging habit na natin yung pagiging transparent nating dalawa sa isat isa. And thank you Doc Mayo mwaaaaaa" },
        { word: "Genuine", description: "Authentic in her actions and words. Ayan na mismo jusko mag lalagay ako ng mga words dito na walang descriptions. Tas try nating ifigure out bakit. Kahit alam ko na yung sagot dun sa word na yun okaaaaaay?" },
        { word: "Persistent", description: "Continues efforts despite obstacles." },
        { word: "Empathetic", description: "Understands and shares the feelings of others. Pero minsan inaasar mo muna jusko ka" },
        { word: "Loyal", description: "" },
        { word: "Charismatic", description: "Attracts and influences others with charm." },
        { word: "Thoughtful", description: "Considers others’ needs and feelings." },
        { word: "Motivated", description: "" },
        { word: "Patient", description: "Remains calm and composed. Sana maging patient ka din sa ugali koooooooooooooooooooo makulit ako eh lalo na pag may problem eh hehe I love youuuuuuuuu" },
        { word: "Reliable", description: "Consistently dependable in actions and promises." },
        { word: "Insightful", description: "Provides deep understanding of situations." },
        { word: "Diligent", description: "" },
        { word: "Assertive", description: "Confidently expresses her needs and opinions." },
        { word: "Driven", description: "Highly motivated to achieve your personal goals." },
        { word: "Understanding", description: "Comprehends and respects different viewpoints." },
        { word: "Adaptable", description: "Adjusts easily to new conditions." },
        { word: "Supportive", description: "" },
        { word: "Energetic", description: "inerji inerji gaaaaaaaaaaaaaaaaaap! I love you ajiiiiiiiiih! Worth it yung puyat kong to. May iloolook forward ka araw araw tas blanko yung iba no? HHAHAHAHAHAHAHA" },
        { word: "Positive", description: "" },
        { word: "Resourceful", description: "Finds quick and clever solutions." },
        { word: "Intuitive", description: "Relies on instinctive understanding." },
        { word: "Humorous", description: "mapa dark, hidden meaning, dirty pa yan jusko ka" },
        { word: "Generous", description: "Willing to give and share." },
        { word: "Considerate", description: "Thoughtfully attentive to others." },
        { word: "Principled", description: "" },
        { word: "Passionate", description: "Exhibits strong emotions for her interests." },
        { word: "Reflective", description: "Thoughtfully considers her experiences and actions." },
        { word: "Trustworthy", description: "" },
        { word: "Kind-hearted", description: "Naturally caring and gentle." },
        { word: "Self-aware", description: "Recognizes her own emotions and traits." },
        { word: "Idealistic", description: "Holds high ideals and aspirations." },
        { word: "Focused", description: "Concentrates attention on specific goals." },
        { word: "Caring", description: "Shows concern and affection for others." },
        { word: "Brave", description: "Displays courage in the face of adversity." },
        { word: "Optimistic", description: "" },
        { word: "Dedicated", description: "Committed to her goals and responsibilities." },
        { word: "Outgoing", description: "Enjoys interacting with others." },
        { word: "Realistic", description: "Practical in her approach." },
        { word: "Tenacious", description: "Persistent in her efforts." },
        { word: "Emotional", description: "" },
        { word: "Perfectionist", description: "Strives for flawlessness." },
        { word: "Impulsive", description: "Acts on immediate feelings." },
        { word: "Stubborn", description: "Holds firm beliefs despite opposition." },
        { word: "Sensitive", description: "Reacts strongly to emotional stimuli." },
        { word: "Reserved", description: "This girl is reserved na po kay Mark Joseph Malicdem hehe" },
        { word: "Critical", description: "Analyzes and judges carefully." },
        { word: "Anxious", description: "Experiences frequent worry." },
        { word: "Overthinker", description: "Deliberates excessively." },
        { word: "Introverted", description: "May times na ganito ka jusko pero hindi mo na papansin HAHAHAHAHAHA" },
        { word: "Cautious", description: "Takes careful measures to avoid risks." },
        { word: "Distractible", description: "Easily diverted from focus. Pag nag cchikahan tayo sa tas mawawala na yung topic talaga natin HAHAHAHAHAHAHAHAHAHAHAHAHA" },
        { word: "Overachiever", description: "Sets and reaches high goals. Skys the limit Mahaaaaaaaaaaal!!!" },
        { word: "Self-critical", description: "Frequently evaluates her own actions." },
        { word: "Skeptical", description: "Doubts and questions others." },
        { word: "Impatient", description: "Pag nadulas ako sa dapat ipapakita ko nalang sa susunod na araw HAHHAHAHAHAHAHA" },
        { word: "Procrastinator", description: "Delays tasks until the last moment. Ayan yung thesis mo naalala ko dito jusko ka" },
        { word: "Blunt", description: "Communicates directly and sometimes harshly. Again transparency loveeeee" },
        { word: "Enthusiastic", description: "Displays eagerness and excitement. excited sayo hihi" },
        { word: "Detail-oriented", description: "Pays attention to small aspects. small details has the biggest impact sa buhay natin mwaaaaaaaaaaa" },
        { word: "Pragmatic", description: "Practical and realistic." },
        { word: "Thought-provoking", description: "Stimulates deep thinking. Deeeeeeeeeeeeeeeeep? hmmmmmmmmmmmmmmmmmmmmmm. hehe" },
        { word: "Idealistic", description: "Aspires to high standards." },
        { word: "Driven", description: "Highly motivated." },
        { word: "Ambitious", description: "Eager to achieve goals." },
        { word: "Resilient", description: "Recovers quickly from challenges." },
        { word: "Persistent", description: "Continues efforts despite obstacles." },
        { word: "Self-aware", description: "Understands her own emotions and traits." },
        { word: "Charismatic", description: "Attractive and influential personality." },
        { word: "Genuine", description: "Authentic and true." },
        { word: "Loyal", description: "" },
        { word: "Trustworthy", description: "Deserving of trust." },
        { word: "Resourceful", description: "" },
        { word: "Empathetic", description: "" },
        { word: "Adaptable", description: "Adjusts to changes easily." },
        { word: "Soft", description: "Soft ang bebe ko eh :(((( sa mata lang ng ibang tao lang siya nag mumukhng hard eh. Ako hard po sakanya hehe labyuuuuuuuuuu" },
        { word: "Quick", description: "Quick sa ano basta HAHAHAHAHAHAHAHAA I love youuuuuuuuuuuuu" },


    ];
    

const specialMessages = [
    "You've reached 25 days! Keep going! Alalahanin mo lahat ng message ko every 25 days ha!!! Eto message ko sayo lovee! I want to work this out with you I dont want to find you in another universe. I dont want to meet you in a parallel galaxy, in the afterlife, or at another time. ",
    "Congratulations on 50 days! You're halfway there! You know the drill!! Message time! I don't want you to be my what-if, my greatest love that got away, or my right-person-wrong time. ",
    "75 days completed! Great job! I don't want to spend my days searching for a love like yours. I do not want to give my heart to anyone else. I do not want to begin again, get to know a soul again, and pour out my all again. ",
    "You've made it to 100 days! So bali sobrang thankful ako sayo love sa mga nagawa mo sakin umabot tayo ng 100 days dito. And I am very very very thankful sayo I love you so much! eto na yung message ko. I want to work this out with you. I want my poetries to be about your entirety. I want my future to be filled with ours. I want my years to be yours. I want to argue, make up, and be close to you. I want to share silence, buy groceries, and build a home with you. I want to trace stars, reach dreams, and share victories with you. Heaven and parallel universes are not promised. I only have this one chance. And my love, I want us to end up in this Lifetime"
];

function getDayCount() {
    const startDate = new Date('2024-08-11'); // Adjust to your start date
    const today = new Date();
    const diffTime = today - startDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
}

// Typing effect function
function typeText(element, text, speed = 50) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
        }
    }, speed);
}

// Function to update the word and description
function updateContent() {
    const dayCount = getDayCount();
    const index = (dayCount - 1) % wordDescriptionPairs.length;
    const { word, description } = wordDescriptionPairs[index];

    const wordElement = document.getElementById('word');
    const descriptionElement = document.getElementById('description');
    const specialMessageElement = document.getElementById('special-message');
    
    wordElement.textContent = "";
    descriptionElement.textContent = "";
    
    typeText(wordElement, word);
    setTimeout(() => typeText(descriptionElement, description), word.length * 50);

    specialMessageElement.classList.add('hidden');

    if (dayCount % 25 === 0) {
        const messageIndex = (dayCount / 25) - 1;
        specialMessageElement.textContent = specialMessages[messageIndex];
        setTimeout(() => typeText(specialMessageElement, specialMessages[messageIndex]), (word.length + description.length) * 50);
        specialMessageElement.classList.remove('hidden');
    }
}

// Function to update the countdown timer
function updateTimer() {
    const now = new Date();
    const nextDay = new Date();
    nextDay.setHours(24, 0, 0, 0); // Set to midnight of the next day

    const timeDiff = nextDay - now;
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = `Time until next update: ${hours}h ${minutes}m ${seconds}s`;
}

// Run on page load and set up interval for the timer
window.onload = function() {
    updateContent();
    updateTimer();
    setInterval(updateTimer, 1000); // Update timer every second
};
