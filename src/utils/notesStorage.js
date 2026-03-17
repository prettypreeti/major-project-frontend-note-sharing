const STORAGE_KEY = "notes_sharing_app_notes";

export function getStoredNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const notes = JSON.parse(raw);
    return Array.isArray(notes) ? notes : [];
  } catch {
    return [];
  }
}

export function saveNote(note) {
  const notes = getStoredNotes();
  notes.unshift(note);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function clearNotes() {
  localStorage.removeItem(STORAGE_KEY);
}
