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
        { word: "Warm", description: "Your warm hug, presence, touch, lips hehe :) . Bastaaaaa. I feel so warm pag kasama kita yung heart ha kasi nakakabusog kasi sa feeling pag kasama kita hehehe I love youuuuuuuuuuuuuu!!" },
        { word: "Chaotic", description: "yung taong mas pipiliin pa ipakita yung badside bago ang lahat, chaotic, warfreak, maldita at kung ano pa yan. But in times of  medyo magulo na yung paligid. Please know that I am trying my best na maging peace mo. There will be times na parehas tayong magulo sa isang araw pero once na nakita kitang gulong gulo. I`ll set aside everything just to calm you down. Please know that your techy Clay is here. We may have  problems na maliit o malaki, I`ll be your peace. I`ll be your shield, shoulder to cry on, your rant partner. Thank you love for  giving me the opportunity to take care of you. I love you Ajih! I really do love you" },
        { word: "Compassionate", description: "Again you value your friends and lalo na ang family mo. Umiiksi na ba mga messages ko? ganon talaga kasi sa word palang it speaks yung image mo mismo. I love you so much Ajihhhhhh!" },
        { word: "Determined", description: "Stays committed despite difficulties and I admire yung ganyang ugali mo lalo na career and business mo given na yung family pero syempre.... bat kasi lagi nalang ako nahuhulog sayo." },
        { word: "Creative", description: "Generates original ideas and solutions. Like sabi mo nga yung ugali niyo. Solution muna bagooooooooo. Sermon hehe " },
        { word: "Honest", description: "Maintains truthfulness and integrity. lalo na sa mga bagay na alam mong makaka epekto sa mga tao what I love about you is nagiging habit na natin yung pagiging transparent nating dalawa sa isat isa. And thank you Doc Mayo mwaaaaaa" },
        { word: "Genuine", description: "Authentic in her actions and words. Ayan na mismo jusko mag lalagay ako ng mga words dito na walang descriptions. Tas try nating ifigure out bakit. Kahit alam ko na yung sagot dun sa word na yun okaaaaaay?" },
        { word: "Persistent", description: "Continues efforts despite obstacles. We may experience yung mga challenges / walls ng buhay pero I am confident na malalagpasan natin to dahil mag kasama tayong dalawa. Hindi na one way relationship to. Ang one way lang naman na matatawag ko din is magkasama tayong dalawa sa path na yun." },
        { word: "Empathetic", description: "Understands and shares the feelings of others. Pero minsan inaasar mo muna jusko ka" },
        { word: "Loyal", description: "Loyalty ang isa pillar ng isang relationship as We progress dito sa relationship na to, We know na there will be times na our loyalty will be tested and alam ko na malalagpasan natin to.  Thank youuuuuuuuuuuuuuuuu! mwaaaaa" },
        { word: "Behavior", description: "Your behavior can also be a trait.  And nagustuhan ko siya dahil nagiging totoo ka sa nararamdaman mo pero may medyo masakit lang talaga mag salita pero wala namang problem dun kasi alam ko naman yung mga sinasabi mo is from the heart and mind na siya. I am trying my best to be consistent and let me know pag dumating tong message na to sayo message moko and tell me if consistent ba ako til this day or hindi ako naging consistent .I understand every words na nabibitaw mo sakin thank you so much Ajih for giving me the chance na makita yung ganyang trait mo. Nakukuha mo ako araw araw." },
        { word: "This will be a message para sayo", description: "Hi Love! etong araw na to medyo off ako sorry sa mga pag kukulang ko sorry if may mga nasabi ako sayo. Sorry kung makulit ako pag may problem sorry! Bakit ako nag sosorry? Nakaramdam ako ng bigat ng pakiramdam natatakot lang ako na mawala ka sakin. Sorry! pag dumating ka dito sa message na to please remind me na andyan ka lang para sakin I really really need it. I love you Ajih!!" },
        { word: "disciplined", description: "Sobrang disciplined na tao etong Doctora ko yung pinaka na amaze talaga ako sayo is yung pinaramdam mo sakin na discipline talaga ang dapat pinapairal sa aspects ng life and sobrang na encourage moko na ipush lahat ng mga kailangan kong gawin sa life. I love you Ajiiiiiiiih! I love youuuuuu mwaaaaaaaaaaaaaaa " },
        { word: "Patient", description: "Remains calm and composed. Sana maging patient ka din sa ugali koooooooooooooooooooo makulit ako eh lalo na pag may problem eh hehe I love youuuuuuuuu" },
        { word: "Reliable", description: "Consistently dependable in actions and promises. Pinang hahawakan ko yung sinabi mo sakin na worth it lahat to. Ayan ang pinaka assurance na hinahawakan ko galing sayo. It will be worth it Love! I love youuuuuuuu! Worth lahat ng mga memories natin lahat ng mga ginawa natin together" },
        { word: "Insightful", description: "Provides deep understanding of situations." },
        { word: "Wild", description: "Pagiging wild mo isa din sa nagbibigay ng spice sa relationship na to and thank you din for being yourself Mahal! I love youuuuuuuuuuuuuuuu! Basta tandaan mo yung time na dinidilaan kita sa legs pa baba habang gigil yung kamay ko sa boobs mo hihi I love youuuuuuuuuuuuuuuuuuuu" },
        { word: "Assertive", description: "Confidently expresses her needs and opinions." },
        { word: "Driven", description: "Highly motivated to achieve your personal goals." },
        { word: "Understanding", description: "Comprehends and respects different viewpoints." },
        { word: "Adaptable", description: "Adjusts easily to new conditions." },
        { word: "Supportive", description: "Grabe yung support na pinaparamdam mo at pinapakita mo sakin. hindi lang sakin pati sa mga kaibigan at lalo na sa family mo. I love youuuuuuuu!" },
        { word: "Energetic", description: "inerji inerji gaaaaaaaaaaaaaaaaaap! I love you ajiiiiiiiiih! Worth it yung puyat kong to. May iloolook forward ka araw araw tas blanko yung iba no? HHAHAHAHAHAHAHA" },
        { word: "Positive", description: "" },
        { word: "Resourceful", description: "Finds quick and clever solutions." },
        { word: "Intuitive", description: "Relies on instinctive understanding." },
        { word: "Humorous", description: "mapa dark, hidden meaning, dirty pa yan jusko ka" },
        { word: "Generous", description: "Willing to give and share." },
        { word: "Considerate", description: "Thoughtfully attentive to others." },
        { word: "Principled", description: "" },
        { word: "Passionate", description: "Pag dating sa career. nakikita ko lagi na sobrang excited ka sa mga medical related na topics. And sobrang natutuwa ako pag minsan nag kkwento ka about sa mga pinag aralan niyo tas minsan hindi ko na siya naiintindihan pero natutuwa ako sa reaction mo. I love youuuu!!" },
        { word: "Reflective", description: "Thoughtfully considers her experiences and actions." },
        { word: "Trustworthy", description: "" },
        { word: "Kind-hearted", description: "Naturally caring and gentle. A caring partner that has a gentle heart when it comes sa life lalo na pag seryosong part na ng buhay and sobrang thankful ako sa Partner ko ngayon. I love you so much Ajiih!" },
        { word: "Self-aware", description: "Recognizes her own emotions and traits. Some of Your traits a visible na sakin and yung iba hindi mo napapansin. One thing na nagustuhan ko sayo is aware ka sa mga traits mo and nireremind mo sakin kung ano dapat gawin pag time na ganyan pag inaantok ka or kung ano man yan. Thank you for reminding me Love" },
        { word: "Idealistic", description: "Holds high ideals and aspirations." },
        { word: "Focused", description: "Concentrates attention on specific goals." },
        { word: "Caring", description: "Dito talaga sobrang caring na partner. isa sa to sa mga nakukuha moko araw araw na sobrang caring mo hindi lang sakin. pero mas lalo na sa family mo. I love youuuuuuuuuuuuuuuuuuuuuu" },
        { word: "Brave", description: "Dito naman love eto yung mga times na nasasabi mo yung mga nararamdaman mo at sa mga taong deserve naman nila yung dapat marinig nila I love youuuuuuuuuuuuuuuuuuu" },
        { word: "Optimistic", description: "" },
        { word: "I love you", description: "" },
        { word: "I love you", description: "" },
        { word: "I love you", description: "" },
        { word: "I love you", description: "." },
        { word: "Emotional", description: "Dito ko nakita yung fragile side mo and ayan yung gustong gusto ko iprotect sayo love. Dahil lahat tayo may time na emotional tayo kahit itago mo sakin yan nakikita ko sa mga mata mo yung nararamdaman mo at ramdam na ramdam ko sayo yan" },
        { word: "Perfectionist", description: "Perfectionist in a good way. Natutuwa ako sa ganitong ugali mo lalo na pag dating sa work and school mo love. I really really really admire you on how you handle yung work mo at the same time nag aaral ka i love youuuuuuu" },
        { word: "Impulsive", description: "Yung pabigla bigla mong change of mood sa tingin mo mababadtrip ako sayo? HAHAHAHAHAHA mas lalo mo lang akong nakukuha pag ganon HAHAHAHAHA I love youuuuuuuuuuuuuuuuuu" },
        { word: "Stubborn", description: "Yung pagiging makulit mo medyo natatawa ako pag matigas yung ulo mo AHHAHAHAHAHA yung mapilit ka HAHHAHAHAHA pero in a good way naman love and I understand naman yung mga decisions mo and I respect it all. I will support you sa lahat okii? I love you so much bebeeeee!" },
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
        { word: "Trustworthy", description: "Deserving of trust. A level of trust na life or death situation na ganyan na yung trust ko sayo. And thank you din dahil til this day I know na palaki ng palaki yung trust ko sayo and sobrang thankful ako sayo I love you Ajiiiih!" },
        { word: "Resourceful", description: "" },
        { word: "Empathetic", description: "" },
        { word: "Adaptable", description: "Adjusts to changes easily." },
        { word: "Soft", description: "Soft ang bebe ko eh :(((( sa mata lang ng ibang tao lang siya nag mumukhng hard eh. Ako hard po sakanya hehe labyuuuuuuuuuu" },
        { word: "Quick", description: "Quick sa ano basta HAHAHAHAHAHAHAHAA I love youuuuuuuuuuuuu pang 99 na to so bali pag nov 18 na. I`ll be in Bayambang sa 19 so bali pag binabasa mo na yung 100th message papunta nako sa bayambang non! I love youuuuuuuuu" },


    ];
    

const specialMessages = [
    "You've reached 25 days! Keep going! Alalahanin mo lahat ng message ko every 25 days ha!!! Eto message ko sayo lovee! I dont want to find you in another universe. I dont want to meet you in a parallel world, in the afterlife, or at another time. Thank you for being there for me love. Thank you for making me feel na minamahal moko araw araw. Thank you for giving me peace and showing me Your loyalty sakin and yung trust. I love you Doctora Mayo hihi I love youuuuuuuuu ",
    "Congratulations on 50 days! You're halfway there! You know the drill!! Message time! I don't want you to be my what-if, my greatest love that got away, or my right-person-wrong time. Pag umabot tayo dito please know that I love you so much Ajih. I am very very very proud sa mga achievements mo wala man ako diyan sa tabi mo, pero please know that I am here to support you. I can still be your last resort in times of problems.  Please remember that lahat ng problems natin maayos natin wag tayong bibitaw kaya natin tong mga problems na dadating",
    "75 days completed! Great job! I don't want to spend my days searching for a love like yours. I do not want to give my heart to anyone else. I do not want to begin again, get to know a soul again, and pour out my all again. please know that sobrang importante ka sakin Thank you Ajih! I love youuuuuuuuu!! And I am so so so so so so so so so soooooooooooooooooo proud of you Mahal sa lahat ng na aachieve mo kahit di pa kita kilala nung time na yun sobrang proud na proud ako sayoooooo! ngayon at kasama mo na akoooooo. hehe who can stop us now? Maging center lang natin si Lord dito sa relationship na to. And focus sa careers natin. Time will tell nalang talaga alam na natin kung saan papunta to. I love youuuuuuu will and will always love you Mahal! mwaaaaaaaaaa",
    "You've made it to 100 days! So bali sobrang thankful ako sayo love sa mga nagawa mo sakin umabot tayo ng 100 days dito. And I am very very very thankful sayo I love you so much! eto na yung message ko. THANK YOU SA OVERWHELMING LOVE NA PINAPARAMDAM MO SAKIN THANK YOU PAG NANDITO NA TAYO SA 100TH DAY. PANIGURADO PINUPUSH KO NA NA MAKILALA KO FAMILY MO AND YUNG MGA FRIENDS MO. I HOPE NA MAGUSTUHAN NILA AKO OR MAGING CLOSE KO MAN LANG SILA. I JUST CANT REMEMBER THE LAST TIME I FELT THIS COMFORTABLE EXPRESSING MY FEELINGS TO SOMEONE IMPORTANT SAKIN. I LOVE YOUUUUUUUUUUUUU SO MUCH AJIH"
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
    const dayCountElement = document.getElementById('day-count');
    
    wordElement.textContent = "";
    descriptionElement.textContent = "";
    dayCountElement.textContent = dayCount; // Update the day counter

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

document.getElementById('badFeelingsButton').addEventListener('click', function() {
    window.open("feelbad.html");
});

