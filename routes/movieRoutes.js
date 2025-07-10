import express from 'express';
import multer from 'multer';
import {
  createMovie,
  bulkUpload,
  listMovies
} from '../controllers/movieController.js';

import { authenticate } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/roleMiddleware.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', authenticate, authorize(['admin']), createMovie);
router.post('/bulk-upload', authenticate, authorize(['admin']), upload.single('file'), bulkUpload);
router.get('/', authenticate, listMovies);

export default router;
