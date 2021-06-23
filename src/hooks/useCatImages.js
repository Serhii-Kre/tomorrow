/*
export function useCatImages(deps = []) {
  let images = [];

  try {
    const images = fetch(
      "https://api.thecatapi.com/v1/images/search?limit=30"
    ).then((res) => res.json());
  } catch (e) {
    console.error("fetch failed!");
    console.error(e);
  }

  return images;
}
*/



export async function useCatImages() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=30');
    const cats = await response.json();
    return cats;
  } catch (e) {
    console.error("fetch failed!");
    console.error(e);
  }
  
}

