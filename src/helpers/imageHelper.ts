export type EntityType = "stadium" | "player" | "club";

export const slugify = (text: string): string => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

export const getEntityImagePath = (
  entityName: string,
  entityType: EntityType,
): string => {
  const slug = slugify(entityName);
  return `/uploads/${entityType}/${slug}.png`;
};

export const getEntityImage = (
  entityName: string,
  entityType: EntityType,
): Promise<string> => {
  const imagePath = getEntityImagePath(entityName, entityType);

  if (typeof window !== "undefined") {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        resolve(imagePath);
      };

      img.onerror = () => {
        debugger;
        resolve(`/images/default-${entityType}.png`);
      };

      img.src = imagePath;
    });
  }

  return Promise.resolve(imagePath);
};

// Funções específicas para manter compatibilidade com código existente
export const getStadiumImagePath = (stadiumName: string): string => {
  return getEntityImagePath(stadiumName, "stadium");
};

export const getStadiumImage = (stadiumName: string): Promise<string> => {
  return getEntityImage(stadiumName, "stadium");
};

export const getPlayerImagePath = (playerName: string): string => {
  return getEntityImagePath(playerName, "player");
};

export const getPlayerImage = (playerName: string): Promise<string> => {
  return getEntityImage(playerName, "player");
};

export const getClubImagePath = (clubName: string): string => {
  return getEntityImagePath(clubName, "club");
};

export const getClubImage = (clubName: string): Promise<string> => {
  return getEntityImage(clubName, "club");
};
