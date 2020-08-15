import mongoose, { Schema } from 'mongoose';


mongoose.set('useFindAndModify', false);


const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
  isEditing: Boolean,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});


const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
