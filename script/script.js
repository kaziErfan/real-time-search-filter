const users = [
  {
    name: "ayesha rahman",
    pic: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "fatima khan",
    pic: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "soft heart, strong mind ✨ | living quietly",
  },
  {
    name: "omar faruq",
    pic: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "lost in thoughts, found in silence 🌙 | lowkey soul",
  },
  {
    name: "mariam siddiqui",
    pic: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "dreaming louder than I speak ☁️ | calm but not simple",
  },
  {
    name: "Yusuf Ahmed",
    pic: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "building myself quietly ⚡ | no noise, just growth",
  },
  {
    name: "zainab malik",
    pic: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "a little mystery, a little madness 🖤 | stay rare",
  },
  {
    name: "younus sheikh",
    pic: "https://randomuser.me/api/portraits/men/18.jpg",
    bio: "peace over attention 🌊 | private but present",
  },
  {
    name: "safiya begum",
    pic: "https://randomuser.me/api/portraits/women/50.jpg",
    bio: "romanticizing the little things 🌸 | softly becoming",
  },
  {
    name: "ayaan hossain",
    pic: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "quiet moves, loud results 🚀 | trust the process",
  },
  {
    name: "noor jahan",
    pic: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "sunshine mixed with midnight ☀️🌙 | beautifully different",
  },
];

function showUsers(arr){
    arr.forEach(function(user){
        // Create outer card div
        const card = document.createElement("div");
        card.classList.add("card");

        // Create Image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // Create blurred layer div
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // Create content div
        const content = document.createElement("div");
        content.classList.add("content");

        // Create h3 & paragraph
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        // Append heading and paragraph to content
        content.appendChild(heading);
        content.appendChild(paragraph);

        // Append all to card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Append the card to div
        document.querySelector(".cards").appendChild(card);
    });
};

function debounce(fnc, delay){
    let timer;

    return function(){
        clearTimeout(timer);

        timer = setTimeout(function(){
            fnc();
        }, delay);
    }
}

showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", debounce(function(){
    let newUsers = users.filter((user => {
    return user.name.toLowerCase().includes(inp.value.trim().toLowerCase());
    }));
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
}, 300));