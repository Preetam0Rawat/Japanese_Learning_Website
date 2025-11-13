// models/Progress.js
import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  kanjiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kanji' },
  vocabularyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vocabulary' },
  status: { type: String, enum: ['Learning', 'Learned'], required:true}
});

progressSchema.index({ kanjiId: 1, status: 1 });       //For better searching operations
progressSchema.index({ vocabularyId: 1, status: 1 });


export default mongoose.model('Progress', progressSchema);


