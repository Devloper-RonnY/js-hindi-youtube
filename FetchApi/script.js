async function showcards() {
    try {
        let response = await fetch("https://randomuser.me/api/?results=3");
        let data = await response.json();
        
    data.results.forEach(user => {
        console.log(user);
        

    const card = document.createElement("div");
    card.className =
    "bg-gray-900 w-80 rounded-xl shadow-xl p-6 text-center border border-gray-800";

    card.innerHTML = `
    <img
    src= ${user.picture.large}
    alt="User"
    class="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
     >

    <h2 class="text-2xl font-bold mt-4 text-white">
    ${user.name.first}
    </h2>

    <p class="text-gray-400">
    ${user.email}
    </p>

    <div class="flex justify-around mt-6 text-white">
    <div>
      <h3 class="font-bold text-lg">${user.location.country}</h3>
      <p class="text-gray-400 text-sm">Country</p>
    </div>

    <div>
      <h3 class="font-bold text-lg">${user.location.city}</h3>
      <p class="text-gray-400 text-sm">City</p>
    </div>

    <div>
      <h3 class="font-bold text-lg">${user.location.postcode}</h3>
      <p class="text-gray-400 text-sm">Postcode</p>
    </div>
    </div>

    <button class="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
    message
    </button>
`;
            
    document.querySelector(".cards").appendChild(card);
});
        
    } catch (error) {
        console.log(error);
        
    }
}
showcards()