import mongoose from 'mongoose'

const vocabularySchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true
  },
  meaning: {
    type: String,
    required: true
  },
  furigana: {
    type: String,
    required: true
  },
  romaji: {
    type: String,
    required: true
  },
  jlpt: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Vocabulary', vocabularySchema);
