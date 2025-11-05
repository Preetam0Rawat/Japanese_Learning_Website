import mongoose from 'mongoose'

const kanjiSchema = new mongoose.Schema({
  freq_mainichi_shinbun: {
    type: Number,
    required: true
  },
  grade: {
    type: Number,
    required: true
  },
  heisig_en: {
    type: String,
    required: true
  },
  jlpt: {
    type: Number,
    required: true
  },
  kanji: {
    type: String,
    required: true,
    unique: true
  },
  kun_readings: {
    type: [String],
    default: []
  },
  meanings: {
    type: [String],
    required: true
  },
  name_readings: {
    type: [String],
    default: []
  },
  notes: {
    type: [String],
    default: []
  },
  on_readings: {
    type: [String],
    default: []
  },
  stroke_count: {
    type: Number,
    required: true
  },
  unicode: {
    type: String,
    required: true
  }
});

export default mongoose.model('Kanji', kanjiSchema);
 