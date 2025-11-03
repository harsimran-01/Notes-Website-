import express from "express"
import {createNote, deleteNote, getAllNote, updateNote,getNoteById} from "../controllers/notesControllers.js"

const router = express.Router()

router.get("/",getAllNote)
router.get("/:id",getNoteById)
router.post("/",createNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)



export default router;