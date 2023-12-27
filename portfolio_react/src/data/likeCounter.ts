// Lecture des données depuis le stockage local
export function readJsonFile() {
  try {
    const jsonData = localStorage.getItem("likeCounterData");
    const data = jsonData ? JSON.parse(jsonData) : { likeCounter: 0 };
    console.log("Contenu du fichier JSON :", data);
    return data;
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier JSON :", error);
    return null;
  }
}

// Écriture des données dans le stockage local
export function writeJsonFile(data: JSON) {
  try {
    const jsonStringify = JSON.stringify(data);
    localStorage.setItem("likeCounterData", jsonStringify);
    console.log("Données ajoutées au stockage local");
  } catch (error) {
    console.error("Erreur lors de l'écriture dans le stockage local :", error);
  }
}
