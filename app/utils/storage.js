export const getNotes = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("notes");
  return data ? JSON.parse(data) : [];
};

export const saveNotes = (notes) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("notes", JSON.stringify(notes));
};
