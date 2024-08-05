async function fetchInvalidUrl() {
    try {
      const response = await fetch(invalidUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      console.log("Data received:", data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }
  fetchInvalidUrl();