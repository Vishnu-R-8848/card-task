const profilesData = [{
        id: 1,
        name: "Oliver Bennet",
        username: "@oliver_bennet",
        bio: "Designers focused on creating impactful, user-centered digital experiences and branding.",
        stats: [
            { label: "Followers", value: "521" },
            { label: "Following", value: "345" },
            { label: "Creations", value: "566" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 2,
        name: "Maya Rostova",
        username: "@maya_creates",
        bio: "Visual artist exploring the intersection of modern minimalism and vibrant street art.",
        stats: [
            { label: "Followers", value: "12.4k" },
            { label: "Following", value: "892" },
            { label: "Creations", value: "142" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 3,
        name: "Elias Thorne",
        username: "@elias_t",
        bio: "Architectural photographer. Chasing light and shadows in urban environments.",
        stats: [
            { label: "Followers", value: "8,302" },
            { label: "Following", value: "150" },
            { label: "Creations", value: "430" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 4,
        name: "Sarah Jenkins",
        username: "@sarah.ux",
        bio: "Product designer making complex systems feel simple, human, and intuitive.",
        stats: [
            { label: "Followers", value: "3,105" },
            { label: "Following", value: "420" },
            { label: "Creations", value: "89" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 5,
        name: "David Chen",
        username: "@chen_designs",
        bio: "3D generalist and motion graphics artist. Building worlds one frame at a time.",
        stats: [
            { label: "Followers", value: "45.2k" },
            { label: "Following", value: "1,200" },
            { label: "Creations", value: "874" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 6,
        name: "Aisha Patel",
        username: "@aisha_type",
        bio: "Typography nerd. Crafting custom letterforms and expressive brand identities.",
        stats: [
            { label: "Followers", value: "9,420" },
            { label: "Following", value: "612" },
            { label: "Creations", value: "315" },
        ],
        // Brand new working image ID for Aisha
        imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 7,
        name: "Julian Cruz",
        username: "@cruz_control",
        bio: "Creative director. Helping startups find their visual voice through bold aesthetics.",
        stats: [
            { label: "Followers", value: "15.8k" },
            { label: "Following", value: "340" },
            { label: "Creations", value: "211" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 8,
        name: "Nora Hayes",
        username: "@nora.illustrates",
        bio: "Freelance illustrator. Drawing heavily inspired by vintage comics and sci-fi.",
        stats: [
            { label: "Followers", value: "22.1k" },
            { label: "Following", value: "845" },
            { label: "Creations", value: "603" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
    {
        id: 9,
        name: "Elena Rostova",
        username: "@elena_captures",
        bio: "Portrait photographer documenting human emotion and authentic moments.",
        stats: [
            { label: "Followers", value: "89.3k" },
            { label: "Following", value: "410" },
            { label: "Creations", value: "1,204" },
        ],
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=1000&q=80&sat=-100",
    },
];

let card_bluePrint = ``;

profilesData.forEach((profile) => {
    card_bluePrint += `<div class="card" id="card-1">
     <div class="card-tools-container">
                    <div class="cord-back-btn">
                        >
                    </div>
                    <div class="edit-btn">
                        Edit 
                    </div>
                </div>
                <figure class="card-img-container">
                    <img src="${profile.imageUrl}" " alt=" " class="imgs " id="img-1 " />
                    <div class="profile-details-container ">
                      <span class="side-text ">
                            See profile
                        </span>
                        <h2 class="user-name ">
                            ${profile.name.split(" ")[0]}
                            <br />
                            ${profile.name.split(" ")[1]}
                        </h2>
                        <p class="user-id-text ">
                            ${profile.username}
                        </p>
                        <p class="bio-text ">
                            ${profile.bio}
                        </p>
                        <div class="social-media-count-container ">
                            <p class="count-followers ">
                                ${profile.stats[0].value}<span class="follower ">${profile.stats[0].label}</span>
                            </p>
                            <p class="count-following ">
                                ${profile.stats[1].value} <span class="following ">${profile.stats[1].label}</span>
                            </p>
                            <p class="count-posts ">
                                ${profile.stats[2].value} <span class="creations ">${profile.stats[2].label}</span>
                            </p>
                        </div>
                        <button class="btn primary-btn ">
                            Follow
                        </button>
                    </div>
                </figure>
            </div>`;
});

let card_container = document.querySelector(".card-container");
card_container.innerHTML = card_bluePrint;

console.log(profilesData);
