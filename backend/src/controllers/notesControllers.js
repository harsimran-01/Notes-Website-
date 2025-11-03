// export const getAllNote=(req,res)=>{
//     res.status(200).send("You just fetched the notes")
// }

import Note from "../models/Note.js"
export async function getAllNote(req, res) {
    // res.status(200).send("You just fetched the notes")
    try {
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function createNote(req, res) {
    // res.status(200).json({message:"Note created successfully !"})
    try {
        const { title, content } = req.body
        // console.log(title,content)
        const note = new Note({ title: title, content: content })

        const saveNote = await note.save()
        res.status(201).json(saveNote)
    } catch (error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function updateNote(req, res) {
    // res.status(200).json({ message: "Note Updated successfully !" })
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },{
            new:true,
        })

        if(!updatedNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json(updatedNote)


    } catch (error) {

        console.error("Error in updateNote controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function deleteNote(req, res) {
    // res.status(200).json({ message: "Note Deleted successfully !" })
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"Note not found"})
        res.json({message:"Note deleted successfully !"})


    } catch (error) {
         console.error("Error in deleteNote controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
    
}
export async function getNoteById(req, res) {
    // res.status(200).json({ message: "Note Deleted successfully !" })
    try {
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note not found"})
        res.json({message:"Note Found successfully !"})


    } catch (error) {
         console.error("Error in getNoteById controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
    
}
