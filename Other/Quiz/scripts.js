var question1 = {
    pic: "images/daisy.png",
    vg: ["Super Mario Bros Series", "Sonic the Hedgehog", "Donkey Kong Contry", "Megaman X", "Beyond Good and Evil"],
    cn: ["Princess Peach", "Princess Rosalina", "Princess Daisy", "Princess Zelda", "Princess Ashe"] ,
    correctvg: "Super Mario Bros Series",
    correctcn: "Princess Daisy",
    desc: "Princess Daisy is a fictional character in the Mario series of video games, where she is the princess of the fictional region of Sarasaland. She first appeared in Super Mario Land as the game's damsel in distress, a role usually played by Princess Peach. Since her appearance in Mario Tennis, she has become a staple playable character in the Mario spin-off games, in which she is often paired up with Peach. It is often speculated that she is Luigi's love interest. Her official description for Mario Party 4 states that Luigi has a crush on her, but Waluigi does too, which may cause trouble."
  };
  
  var question2 = {
    pic : "images/tingle.png",
    vg : ["Crash Bandicoot: The Wrath of Cortex", "Legend fo Zelda: Majora's Mask", "Banjo-Kazooie: Nuts & Bolts", "Arc the Lad", "Ehrgeiz: God Bless the Ring"],
    cn : ["Doctor Neo Cortex", "Jamjars", "Ankle", "Tingle", "Takaya"],
    correctvg : "Legend fo Zelda: Majora's Mask",
    correctcn : "Tingle",
    desc : "Tingle is a middle-aged man obsessed with fairies. He wears a green bodysuit, reminiscent of Link's tunic. He made his first appearance in Majora's Mask, where he was found floating around on a balloon selling maps. He subsequently appeared in Wind Waker, first in a jail room in located on Windfall Island, and in tall wooden towers located randomly around the ocean, where again he acted as a map maker. He has also appeared in Oracle of Ages, Four Swords Adventures and The Minish Cap. He cameos in Phantom Hourglass as a poster, in Spirit Tracks, an almost shop figurine, and in Skyward Sword as a doll in Zelda's room at the Knight Academy. Tingle has gained some notoriety, being ranked first in IGN's list of weird Zelda characters and seventh, one place ahead of Navi, in Cracked's list of annoying video game characters."
  };

	var question3 = {
    pic : "images/raiden.png",
    vg : ["Halo Series", "Resident Evil Series", "Mortal Kombat", "Imfamous", "Metal Gear Solid Series"],
    cn : ["Kessler", "Sword Guy", "Raiden", "Chris Redfield", "Otacon"],
    correctvg : "Metal Gear Solid Series",
    correctcn : "Raiden",
    desc : "Raiden, real name Jack, is a child soldier in the Liberian Civil War, and Solidus Snake's adoptive son. He is the main character of Metal Gear Solid 2 that substitutes Solid Snake as the player's character in the main portion of the game fighting against the titular terrorists to save the hostages from Big Shell. He reappears in Metal Gear Solid 4 as the new Cyborg Ninja who supports Solid Snake. He returns as the protagonist of Metal Gear Rising: Revengeance. Raiden is voiced by Kenyu Horiuchi in Japanese and Quinton Flynn in English."
  };
  
  var question4 = {
    pic : "images/big-al.png",
    vg : ["Psychonauts", "Beyond Good and Evil", "Little Big Planet", "Ratchet and Clank", "Jak and Dexter"],
    cn : ["Sackboy", "Captain Quark", "Pey'j", "Big Al", "Dr. Knarf"],
    correctvg : "Ratchet and Clank",
    correctcn :  "Big Al",
    desc : "A recurring character. He originally supplied Clank with the Heli-Pack in Ratchet & Clank. Big Al is chosen for the Q-Force in Ratchet & Clank: Up Your Arsenal for his mastery of electronics. He often baffles Ratchet with his techno-speak and has to get Clank to \"translate\" for him since Clank also speaks \"Nerd\". He is the stereotypical computer geek with interests in electronics and all things Qwark. He has two siblings, Bob and Ed(wina), who, like him, own \"RoboShacks\". "
  };

  var question5 = {
    pic : "images/xemnes.png",
    vg : ["Jade Cocoon","The Legend of Dragoon","Kingdom Hearts","Final Fantasy VII","Final Fantasy X"],
    cn : ["Ash Ketchum","Lavitz Slambert","Golbez","Cloud Strife","Xemnas"],
    correctvg : "Kingdom Hearts",
    correctcn : "Xemnas",
    desc : "Xemnas is the main antagonist in Kingdom Hearts II. He plans to increase the power of Kingdom Hearts by having Sora destroy Heartless, releasing the hearts inside them for his Kingdom Hearts at the World That Never Was. After the defeats of several Organization members (Demyx, Xaldin, Xigbar, Luxord and Saïx), Xemnas waits for the completion of Kingdom Hearts to become one with Kingdom Hearts to transcend into a higher state of being. However, Ansem the Wise attempts to digitally contain its power but his machine explodes and damages Kingdom Hearts. After Sora and his friends refuses to aid him in restoring Kingdom Hearts, Xemnas uses what is left of Kingdom Hearts' power to take on a new form to fight Sora's party. Though Xemnas is thought to be defeated, he separates Sora and Riku from the others to attack them."
  };

function loadQuestions(count){
    var list = [question1, question2, question3, question4, question5] ; 
    count || list.length;
    return list.slice(0,count);
  };