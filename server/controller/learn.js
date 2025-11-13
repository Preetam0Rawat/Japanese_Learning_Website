import Kanji from '../models/kanji.js'
import Vocabulary from '../models/vocabulary.js'
import Progress from '../models/progress.js'

export const getAllKanji = async(req, res) =>{
    try {
           const kanjis = await Kanji.find({}, "_id kanji meanings")
           return res.status(200).json(kanjis)
           
       }
    catch(error){
      console.log("Error in Loading All Kanjis")

      return res.status(501).json({mssg : "getAllKanji  failed", error})

    }
}
export const getKanjiById = async(req, res) =>{
   try {
    const kanji = await Kanji.findById(req.params.id);

    if (!kanji) {
      return res.status(404).json({ message: "Kanji not found" });
    }

    res.json(kanji);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export const getKanjiByJlptLevel = async(req, res) =>{
   try {
    const jlptLevel = parseInt(req.query.level); // e.g. 1, 2, 3, 4, 5
    const page = parseInt(req.query.page) || 1; // default page 1
    const limit = parseInt(req.query.limit) || 25; // default 25 kanjis per
    // Validation check
    if (![1, 2, 3, 4, 5].includes(jlptLevel)) {
      return res.status(400).json({ message: "Invalid JLPT level" });
    }
    // Count total documents for that level
       const totalKanjis = await Kanji.countDocuments({ jlpt: jlptLevel });

    // Find all kanji with matching jlpt value
 // Find with pagination
    const kanjis = await Kanji.find({ jlpt: jlptLevel }, "_id kanji meanings")
      .skip((page - 1) * limit)
      .limit(limit);

    if (kanjis.length === 0) {
      return res.status(404).json({ message: "No kanji found for this JLPT level" });
    }

    res.json({total : totalKanjis, totalPages:Math.ceil(totalKanjis/limit), currentPage : page , kanjis});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}


export const getAllVocab = async(req, res) =>{
    try {
           const vocabs = await Vocabulary.find({}, "_id word")
           return res.status(200).json(vocabs)
           
       }
    catch(error){
      console.log("Error in Loading All Vocabulary Words")

      return res.status(501).json({mssg : "getAllVocab  failed", error})

    }
}


export const getVocabById = async (req, res) =>{
    try {
    const vocab = await Vocabulary.findById(req.params.id);

    if (!vocab) {
      return res.status(404).json({ message: "Vocabulay word not found" });
    }

    res.json(vocab);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}


export const getVocabByJlptLevel = async (req, res) => {
  // try {
  //   // Parse JLPT level from query
  //   const jlptLevel = parseInt(req.query.level);

  //   // Validate level
  //   if (![1, 2, 3, 4, 5].includes(jlptLevel)) {
  //     return res.status(400).json({ message: "Invalid JLPT level" });
  //   }

  //   // Find vocab for this JLPT level
  //   const vocabs = await Vocabulary.find({ jlpt: jlptLevel }, "_id word");

  //   // Handle case when no vocab found
  //   if (vocabs.length === 0) {
  //     return res.status(404).json({ message: `No vocab found for JLPT level ${jlptLevel}` });
  //   }

  //   // Return results
  //   res.json(vocabs);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Server error" });
  // }

   try {
    const jlptLevel = parseInt(req.query.level); // e.g. 1, 2, 3, 4, 5
    const page = parseInt(req.query.page) || 1; // default page 1
    const limit = parseInt(req.query.limit) || 25; // default 25 kanjis per
    // Validation check
    if (![1, 2, 3, 4, 5].includes(jlptLevel)) {
      return res.status(400).json({ message: "Invalid JLPT level" });
    }
    // Count total documents for that level
       const totalVocab = await Vocabulary.countDocuments({ jlpt: jlptLevel });

    // Find all kanji with matching jlpt value
 // Find with pagination
    const vocab = await Vocabulary.find({ jlpt: jlptLevel })
      .skip((page - 1) * limit)
      .limit(limit);

    if (vocab.length === 0) {
      return res.status(404).json({ message: "No Voacb found for this JLPT level" });
    }

    res.json({total : totalVocab, totalPages:Math.ceil(totalVocab/limit), currentPage : page , vocab});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateProgressStatus = async (req, res) => {
  try {
    const studentId = req.userId;
    const { kanjiId, vocabularyId, status } = req.body;

    // Validate required fields
    if (!studentId || !status) {
      return res.status(400).json({ message: "Missing required fields: studentId or status" });
    }

    // Ensure only one of kanjiId or vocabularyId is provided
    if ((kanjiId && vocabularyId) || (!kanjiId && !vocabularyId)) {
      return res.status(400).json({
        message: "You must provide either kanjiId OR vocabularyId (not both or none).",
      });
    }

    // Build the search filter dynamically
    const filter = { studentId };
    if (kanjiId) filter.kanjiId = kanjiId;
    if (vocabularyId) filter.vocabularyId = vocabularyId;

    // Find existing progress
    let progress = await Progress.findOne(filter);

    if (progress) {
      // Update existing record
      progress.status = status;
      await progress.save();
    } else {
      // Create new record
      progress = new Progress({ studentId, kanjiId, vocabularyId, status });
      await progress.save();
    }

    res.status(200).json({ message: "Progress updated successfully", progress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const getProgressOfStudent = async(req, res) =>{
     try {
    const { studentId } = req.params;
    const { type, status } = req.query;

    if (!studentId) {
      return res.json({ message: 'studentId is required' });
    }

    // Build query
    const query = { studentId };

    if (type === 'kanji') {
      query.kanjiId = { $exists: true };
    } else if (type === 'vocab') {
      query.vocabularyId = { $exists: true };
    }

    if (status === 'learning' || status === 'learned') {
      query.status = status;
    }

    // Fetch progress
    const progress = await Progress.find(query)
     // .populate('kanjiId')
      //.populate('vocabularyId');

    res.status(200).json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }  
}


//Progress stauts of each kanji/vocabulary
export const getProgressStatus = async (req, res) => {
  try {
    const studentId = req.userId;
    const { kanjiId, vocabularyId } = req.query;

    const filter = { studentId };
    if (kanjiId) filter.kanjiId = kanjiId;
    if (vocabularyId) filter.vocabularyId = vocabularyId;

    const progress = await Progress.findOne(filter);

    if (progress) {
      res.status(200).json({ status: progress.status });
    } else {
      res.status(200).json({ status: "Untracked" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};



export const removeFromProgress = async(req, res) =>{
   try {
    const studentId = req.userId;
    const { kanjiId, vocabularyId } = req.body;
  
     if (!kanjiId && !vocabularyId) {
      return res.status(400).json({ message: 'kanjiId or vocabularyId required' });
    }
    const filter = { studentId };
    if (kanjiId) filter.kanjiId = kanjiId;
    if (vocabularyId) filter.vocabularyId = vocabularyId;

    const deletedProgress = await Progress.findOneAndDelete(filter);

    if (!deletedProgress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    res.status(200).json({ message: 'Progress entry deleted successfully', deletedProgress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
}


export const getItemCount = async (req, res) => {
  try {
    const studentId = req.userId;
    const totalKanji = await Kanji.countDocuments();
    const totalVocab = await Vocabulary.countDocuments();
    const learnedKanji = await Progress.countDocuments({
      studentId,
      kanjiId: { $exists: true },
      status: 'Learned'
    });
    
    const learnedVocab = await Progress.countDocuments({
      studentId,
      vocabularyId: { $exists: true },
      status: 'Learned'
    });
    
    res.status(200).json({totalKanji, totalVocab, learnedKanji, learnedVocab})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const reportBug = async(req,res) =>{
  try {
       const {bug} = req.body;
       return res.status(200).json({mssg : "Bug reported Sucessfully", bug})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
}