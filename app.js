async function getUserId(username) {
  const response = await fetch("https://users.roblox.com/v1/usernames/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usernames: [username] })
  });
  const data = await response.json();
  if (data.data.length === 0) throw new Error("User not found");
  return data.data[0].id;
}

async function getUserValue(userId) {
  let totalValue = 0;
  let cursor = "";
  
  do {
    const res = await fetch(
      `https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?sortOrder=Asc&limit=100&cursor=${cursor}`
    );
    const data = await res.json();
    data.data.forEach(item => {
      if (item.recentAveragePrice) totalValue += item.recentAveragePrice;
    });
    cursor = data.nextPageCursor;
  } while (cursor);

  return totalValue;
}

document.getElementById("checkValue").addEventListener("click", async () => {
  const user = document.getElementById("username").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "Fetching value...";
  
  try {
    const userId = await getUserId(user);
    const value = await getUserValue(userId);
    resultDiv.innerText = `Estimated value for ${user}: ${value.toLocaleString()} Robux`;
  } catch (err) {
    resultDiv.innerText = "Error: " + err.message;
  }
});
