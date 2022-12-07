import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
  loading: null,
  erro: null,
};

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection) => {
  //docCollection = dados enviados pelo formulário
  console.log(docCollection);
  //state    setState             Função do setState - state inicial
  const [response, dispatch] = useReducer(deleteReducer, initialState);
  //deal with memoroy leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const deleteDocument = async (id) => {
    checkCancelBeforDispatch({
      type: "LOADING",
    });
    try {
      const deletedDocument = await deleteDoc(doc(db, docCollection, id));

      checkCancelBeforDispatch({
        type: "DELETED_DOC",
        payload: deletedDocument,
      });
    } catch (error) {
      checkCancelBeforDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { deleteDocument, response };
};
