import express from 'express';

/** Keep API clean!
 * Routes only, here.
 * Move all handling and logic to '/controllers/..."
*/

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);

export default router;