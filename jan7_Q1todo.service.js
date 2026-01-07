import { db } from "../firebase/firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

export const getTodos = async (uid) => {
  const snapshot = await getDocs(collection(db, "todos"));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    .filter(todo => todo.uid === uid);
};

export const addTodo = (data) =>
  addDoc(collection(db, "todos"), data);

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));
